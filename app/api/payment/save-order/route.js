import { orderNotification } from "@/email/orderNotification";
import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import { sendMail } from "@/lib/sendMail";
import { zSchema } from "@/lib/zodSchema";
import OrderModel from "@/models/Order.model";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { z } from "zod";

export async function POST(request) {
    try {
        await connectDB()
        const payload = await request.json()

        const productSchema = z.object({
            productId: z.string().length(24, 'Invalid product id format'),
            variantId: z.string().length(24, 'Invalid variant id format'),
            name: z.string().min(1),
            qty: z.number().min(1),
            mrp: z.number().nonnegative(),
            sellingPrice: z.number().nonnegative()
        })

        const baseOrderSchema = zSchema.pick({
            name: true, email: true, phone: true, country: true, state: true, city: true, pincode: true, landmark: true, ordernote: true
        }).extend({
            userId: z.string().optional(),
            paymentMethod: z.enum(['razorpay', 'cod']).default('razorpay'),
            subtotal: z.number().nonnegative(),
            discount: z.number().nonnegative(),
            couponDiscountAmount: z.number().nonnegative(),
            totalAmount: z.number().nonnegative(),
            products: z.array(productSchema),
            razorpay_payment_id: z.string().min(3).optional(),
            razorpay_order_id: z.string().min(3).optional(),
            razorpay_signature: z.string().min(3).optional(),
        })

        const validate = baseOrderSchema.safeParse(payload)
        if (!validate.success) {
            return response(false, 400, 'Invalid or missing fields.', { error: validate.error })
        }

        const validatedData = validate.data
        let paymentVerification = false
        let payment_id = null
        let order_id = null

        // Handle Razorpay payment verification
        if (validatedData.paymentMethod === 'razorpay') {
            if (!validatedData.razorpay_payment_id || !validatedData.razorpay_order_id || !validatedData.razorpay_signature) {
                return response(false, 400, 'Missing Razorpay payment details.')
            }

            const verification = validatePaymentVerification({
                order_id: validatedData.razorpay_order_id,
                payment_id: validatedData.razorpay_payment_id
            }, validatedData.razorpay_signature, process.env.RAZORPAY_KEY_SECRET)

            paymentVerification = !!verification
            payment_id = validatedData.razorpay_payment_id
            order_id = validatedData.razorpay_order_id
        }

        // For COD, create order with status 'pending' awaiting payment
        if (validatedData.paymentMethod === 'cod') {
            payment_id = `COD-${Date.now()}`
            order_id = `ORD-${Date.now()}`
            paymentVerification = false // COD order awaits manual verification
        }

        const newOrder = await OrderModel.create({
            user: validatedData.userId,
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone,
            country: validatedData.country,
            state: validatedData.state,
            city: validatedData.city,
            pincode: validatedData.pincode,
            landmark: validatedData.landmark,
            ordernote: validatedData.ordernote,
            products: validatedData.products,
            discount: validatedData.discount,
            couponDiscountAmount: validatedData.couponDiscountAmount,
            totalAmount: validatedData.totalAmount,
            subtotal: validatedData.subtotal,
            payment_id: payment_id,
            order_id: order_id,
            paymentMethod: validatedData.paymentMethod,
            status: validatedData.paymentMethod === 'cod' ? 'pending' : (paymentVerification ? 'pending' : 'unverified')
        })

        try {
            const mailData = {
                order_id: order_id,
                orderDetailsUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/order-details/${order_id}`
            }

            await sendMail('Order placed successfully.', validatedData.email, orderNotification(mailData))

        } catch (error) {
            console.log(error)
        }

        return response(true, 200, 'Order placed successfully.', { orderId: order_id })

    } catch (error) {
        return catchError(error)
    }
}
