'use client'
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoStar } from "react-icons/io5";
import { BsChatQuote } from "react-icons/bs";
import axios from 'axios'
import Image from 'next/image'


const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchTestimonials()
    }, [])

    const fetchTestimonials = async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await axios.get('/api/testimonials?limit=10')
            
            if (response.data.success) {
                setTestimonials(response.data.data.reviews || [])
            } else {
                setError(response.data.message || 'Failed to fetch testimonials')
            }
        } catch (err) {
            setError(err.message || 'Error fetching testimonials')
            console.error('Testimonials fetch error:', err)
        } finally {
            setLoading(false)
        }
    }

    const settings = {
        dots: true,
        infinite: testimonials.length > 1,
        speed: 500,
        autoplay: testimonials.length > 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: testimonials.length > 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },

        ]
    }

    // Loading State
    if (loading) {
        return (
            <div className='lg:px-32 px-4 sm:pt-20 pt-5 pb-10'>
                <h2 className='text-center sm:text-4xl text-2xl mb-5 font-semibold'>Customer Review</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {[1, 2, 3].map((item) => (
                        <div key={item} className='border rounded-lg p-5 animate-pulse'>
                            <div className='h-6 w-6 bg-gray-300 rounded mb-3'></div>
                            <div className='space-y-2 mb-5'>
                                <div className='h-4 bg-gray-300 rounded w-full'></div>
                                <div className='h-4 bg-gray-300 rounded w-5/6'></div>
                                <div className='h-4 bg-gray-300 rounded w-4/6'></div>
                            </div>
                            <div className='h-4 bg-gray-300 rounded w-32 mb-2'></div>
                            <div className='flex gap-1'>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <div key={star} className='h-5 w-5 bg-gray-300 rounded'></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // Error State
    if (error) {
        return (
            <div className='lg:px-32 px-4 sm:pt-20 pt-5 pb-10'>
                <h2 className='text-center sm:text-4xl text-2xl mb-5 font-semibold'>Customer Review</h2>
                <div className='border border-red-200 bg-red-50 rounded-lg p-8 text-center'>
                    <p className='text-red-700 mb-4'>Unable to load customer reviews</p>
                    <p className='text-red-600 text-sm mb-4'>{error}</p>
                    <button
                        onClick={fetchTestimonials}
                        className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded'
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    // Empty State
    if (!testimonials || testimonials.length === 0) {
        return (
            <div className='lg:px-32 px-4 sm:pt-20 pt-5 pb-10'>
                <h2 className='text-center sm:text-4xl text-2xl mb-5 font-semibold'>Customer Review</h2>
                <div className='border border-gray-200 rounded-lg p-12 text-center'>
                    <BsChatQuote size={48} className='mx-auto mb-4 text-gray-400' />
                    <p className='text-gray-600 text-lg'>No customer reviews available yet.</p>
                    <p className='text-gray-500 text-sm mt-2'>Be the first to share your experience!</p>
                </div>
            </div>
        )
    }

    return (
        <div className='lg:px-32 px-4 sm:pt-20 pt-5 pb-10'>
            <h2 className='text-center sm:text-4xl text-2xl mb-5 font-semibold'>Customer Review</h2>
            <Slider {...settings}>
                {testimonials.map((item, index) => (
                    <div key={item._id || index} className="p-5">
                        <div className='border rounded-lg p-5 h-full flex flex-col'>
                            <BsChatQuote size={30} className='mb-3 text-gray-600' />

                            <p className='mb-5 flex-grow text-gray-700'>{item.review}</p>
                            
                            <div className='flex items-center gap-3 mb-3'>
                                {item.avatar?.url && (
                                    <Image
                                        src={item.avatar.url}
                                        alt={item.name || 'Customer'}
                                        width={40}
                                        height={40}
                                        className='w-10 h-10 rounded-full object-cover'
                                    />
                                )}
                                <div className='flex-grow'>
                                    <h4 className='font-semibold text-sm'>{item.name || 'Anonymous'}</h4>
                                    {item.createdAt && (
                                        <p className='text-xs text-gray-500'>
                                            {new Date(item.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className='flex gap-1 mt-auto'>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <IoStar 
                                        key={`star${i}`} 
                                        className={i < item.rating ? 'text-yellow-400' : 'text-gray-300'} 
                                        size={18} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Testimonial
