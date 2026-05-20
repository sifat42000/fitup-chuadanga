import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import { zSchema } from "@/lib/zodSchema";
import UserModel from "@/models/User.model";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { z } from "zod";
import bcryptjs from "bcryptjs";

export async function POST(request) {
    try {
        await connectDB()
        const payload = await request.json()

        const validationSchema = zSchema.pick({
            email: true
        }).extend({
            password: z.string()
        })

        const validatedData = validationSchema.safeParse(payload)
        if (!validatedData.success) {
            return response(false, 401, 'Invalid or missing input field.', validatedData.error)
        }

        const { email, password } = validatedData.data

        // get user data 
        const getUser = await UserModel.findOne({ deletedAt: null, email }).select("+password")
        if (!getUser) {
            return response(false, 400, 'Invalid login credentials.')
        }

        // password verification 
        const isPasswordVerified = await bcryptjs.compare(password, getUser.password)

        if (!isPasswordVerified) {
            return response(false, 400, 'Invalid login credentials.')
        }

        // Prepare JWT payload with required fields
        const loggedInUserData = {
            _id: getUser._id.toString(),
            email: getUser.email,
            name: getUser.name,
            role: getUser.role,
            avatar: getUser.avatar,
        }

        // Create JWT token
        const secret = new TextEncoder().encode(process.env.SECRET_KEY)
        const token = await new SignJWT(loggedInUserData)
            .setIssuedAt()
            .setExpirationTime('24h')
            .setProtectedHeader({ alg: 'HS256' })
            .sign(secret)

        const cookieStore = await cookies()
        cookieStore.set({
            name: 'access_token',
            value: token,
            httpOnly: process.env.NODE_ENV === 'production',
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
        })

        return response(true, 200, 'Login successful.', loggedInUserData)
    } catch (error) {
        return catchError(error)
    }
}