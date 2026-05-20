import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";

export async function POST(request) {
    try {
        await connectDB()
        
        // Email verification has been disabled.
        // All users are now automatically email-verified on registration.
        return response(false, 410, 'Email verification is no longer used. All users are automatically verified on registration.')

    } catch (error) {
        return catchError(error)
    }
}