import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import { zSchema } from "@/lib/zodSchema";
import UserModel from "@/models/User.model";

export async function POST(request) {
    try {
        await connectDB()
        // validation schema  
        const validationSchema = zSchema.pick({
            name: true, email: true, password: true
        })

        const payload = await request.json()

        const validatedData = validationSchema.safeParse(payload)

        if (!validatedData.success) {
            return response(false, 401, 'Invalid or missing input field.', validatedData.error)
        }

        const { name, email, password } = validatedData.data

        // check already registered user 
        const checkUser = await UserModel.exists({ email })
        if (checkUser) {
            return response(true, 409, 'User already registered.')
        }

        // new registration - auto-verify email
        const NewRegistration = new UserModel({
            name, email, password, isEmailVerified: true
        })

        await NewRegistration.save()

        return response(true, 200, 'Registration successful! You can now log in.')

    } catch (error) {
        catchError(error)
    }
}
