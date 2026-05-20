import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";

export async function POST(request) {
    try {
        await connectDB()
        
        // OTP resend has been disabled.
        // OTP login flow is no longer used. Please login directly with email and password.
        return response(false, 410, 'OTP login is no longer used. Please login directly with email and password.')

    } catch (error) {
        return catchError(error)
    }
}