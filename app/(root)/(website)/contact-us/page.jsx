'use client'
import React from 'react'
import Link from 'next/link'
import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlinePhone } from 'react-icons/md'
import { MdOutlineMail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { TiSocialFacebookCircular } from 'react-icons/ti'

const breadcrumb = {
    title: 'Contact Us',
    links: [
        { label: 'Contact Us' }
    ]
}

const ContactUs = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            
            <div className='lg:px-32 px-4 py-20'>
                {/* Page Title */}
                <div className='mb-16 text-center'>
                    <h1 className='text-3xl lg:text-4xl font-bold mb-3'>Get in Touch</h1>
                    <p className='text-gray-600 text-lg'>We'd love to hear from you. Contact us through any of these channels.</p>
                </div>

                {/* Contact Cards Grid */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-16'>
                    
                    {/* Phone Card */}
                    <div className='bg-white border rounded-lg p-8 hover:shadow-lg transition-all duration-300'>
                        <div className='flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4'>
                            <MdOutlinePhone size={28} className='text-blue-600' />
                        </div>
                        <h3 className='text-xl font-bold mb-2'>Phone</h3>
                        <p className='text-gray-600 mb-4'>Call us for immediate assistance</p>
                        <Link 
                            href="tel:+8801903771984"
                            className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold'
                        >
                            01903-771984
                        </Link>
                    </div>

                    {/* WhatsApp Card */}
                    <div className='bg-white border rounded-lg p-8 hover:shadow-lg transition-all duration-300'>
                        <div className='flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4'>
                            <FaWhatsapp size={28} className='text-green-600' />
                        </div>
                        <h3 className='text-xl font-bold mb-2'>WhatsApp</h3>
                        <p className='text-gray-600 mb-4'>Chat with us on WhatsApp</p>
                        <Link 
                            href="https://wa.me/8801903771984"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold'
                        >
                            01903-771984
                        </Link>
                    </div>

                    {/* Email Card */}
                    <div className='bg-white border rounded-lg p-8 hover:shadow-lg transition-all duration-300'>
                        <div className='flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mb-4'>
                            <MdOutlineMail size={28} className='text-red-600' />
                        </div>
                        <h3 className='text-xl font-bold mb-2'>Email</h3>
                        <p className='text-gray-600 mb-4'>Send us your inquiries anytime</p>
                        <Link 
                            href="mailto:fitup024@gmail.com"
                            className='inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold break-all'
                        >
                            fitup024@gmail.com
                        </Link>
                    </div>

                    {/* Location Card */}
                    <div className='bg-white border rounded-lg p-8 hover:shadow-lg transition-all duration-300'>
                        <div className='flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-4'>
                            <IoLocationOutline size={28} className='text-purple-600' />
                        </div>
                        <h3 className='text-xl font-bold mb-2'>Location</h3>
                        <p className='text-gray-600 mb-4'>Visit us at our store</p>
                        <p className='text-sm text-gray-700 leading-relaxed'>
                            বড় বাজার, ট্রাফিক মোড়, মুন সুপার মার্কেট নিচ তলায়, এবং ২ তালায়, চুয়াডাঙ্গা। চুয়াডাঙ্গা সদর
                        </p>
                    </div>

                    {/* Facebook Card */}
                    <div className='bg-white border rounded-lg p-8 hover:shadow-lg transition-all duration-300'>
                        <div className='flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4'>
                            <TiSocialFacebookCircular size={28} className='text-blue-700' />
                        </div>
                        <h3 className='text-xl font-bold mb-2'>Facebook</h3>
                        <p className='text-gray-600 mb-4'>Follow us for updates and promotions</p>
                        <Link 
                            href="https://www.facebook.com/fit.up.chuadanga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold'
                        >
                            @fit.up.chuadanga
                        </Link>
                    </div>

                    {/* Additional Info Card */}
                    <div className='bg-white border rounded-lg p-8 hover:shadow-lg transition-all duration-300'>
                        <div className='flex items-center justify-center w-14 h-14 bg-amber-100 rounded-full mb-4'>
                            <span className='text-2xl font-bold text-amber-600'>?</span>
                        </div>
                        <h3 className='text-xl font-bold mb-2'>Questions?</h3>
                        <p className='text-gray-600 mb-4'>We're here to help!</p>
                        <p className='text-sm text-gray-700'>
                            Our team responds to inquiries within 24 hours.
                        </p>
                    </div>
                </div>

                {/* Google Map Section */}
                <div className='bg-white border rounded-lg overflow-hidden shadow-sm'>
                    <div className='relative w-full h-96'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8837850916437!2d89.46227931587573!3d24.052627677914093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc8c2e1d1d1d1d%3A0x1d1d1d1d1d1d1d1d!2sChowadhunga!5e0!3m2!1sen!2sbd!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="FitUp Store Location"
                            className='w-full h-full'
                        />
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className='mt-16 bg-gray-50 border rounded-lg p-8'>
                    <h2 className='text-2xl font-bold mb-4'>Why Choose Us?</h2>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div>
                            <h3 className='font-semibold text-lg mb-2'>Fast Response</h3>
                            <p className='text-gray-600'>We respond to customer inquiries within 24 hours to ensure you get the help you need.</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-lg mb-2'>Multiple Channels</h3>
                            <p className='text-gray-600'>Reach us through phone, email, WhatsApp, or visit us in person at our store.</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-lg mb-2'>Expert Support</h3>
                            <p className='text-gray-600'>Our team is trained to assist you with product inquiries, orders, and technical support.</p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-lg mb-2'>Always Available</h3>
                            <p className='text-gray-600'>Contact us anytime through WhatsApp or email, and we'll get back to you shortly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
