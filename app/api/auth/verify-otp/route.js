import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";

export async function POST(request) {
    try {
        await connectDB()
        
        // OTP verification has been disabled. 
        // Use /api/auth/login endpoint directly - it now issues JWT token immediately after password verification.
        return response(false, 410, 'OTP verification is no longer used. Please use the login endpoint directly.')

    } catch (error) {
        return catchError(error)
    }
}
