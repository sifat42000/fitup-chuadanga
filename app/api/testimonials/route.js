import { connectDB } from "@/lib/databaseConnection"
import { catchError, response } from "@/lib/helperFunction"
import ReviewModel from "@/models/Review.model"

export async function GET(request) {
    try {
        await connectDB()
        
        const searchParams = request.nextUrl.searchParams
        const limit = parseInt(searchParams.get('limit')) || 10
        
        // Aggregation to get reviews with user details, sorted by newest first
        const aggregation = [
            {
                $match: {
                    deletedAt: null
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: 'user',
                    foreignField: '_id',
                    as: 'userData'
                }
            },
            {
                $unwind: { 
                    path: '$userData', 
                    preserveNullAndEmptyArrays: true 
                }
            },
            { 
                $sort: { createdAt: -1 } 
            },
            { 
                $limit: limit 
            },
            {
                $project: {
                    _id: 1,
                    name: '$userData.name',
                    avatar: "$userData.avatar",
                    rating: 1,
                    review: '$review',
                    createdAt: 1
                }
            }
        ]

        const reviews = await ReviewModel.aggregate(aggregation)

        return response(true, 200, 'Testimonials fetched successfully.', { 
            reviews,
            total: reviews.length
        })

    } catch (error) {
        return catchError(error)
    }
}
