'use client'
import React from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const WhatsAppFloatingButton = () => {
    const pathname = usePathname()
    
    // Hide on admin and dashboard routes
    if (pathname.startsWith('/admin') || pathname.startsWith('/my-account') || pathname.startsWith('/profile') || pathname.startsWith('/orders')) {
        return null
    }

    return (
        <Link
            href="https://wa.me/8801903771984"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            title="Chat with us on WhatsApp"
        >
            <FaWhatsapp size={28} />
        </Link>
    )
}

export default WhatsAppFloatingButton
