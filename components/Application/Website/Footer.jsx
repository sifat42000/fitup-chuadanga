import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/images/logo.png'
import Link from 'next/link'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { AiFillTikTok, AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FiTwitter } from "react-icons/fi";

import { USER_DASHBOARD, WEBSITE_HOME, WEBSITE_LOGIN, WEBSITE_REGISTER, WEBSITE_SHOP } from '@/routes/WebsiteRoute'
const Footer = () => {
    return (
        <footer className='bg-gray-50 border-t'>
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10 py-10 lg:px-32 px-4'>

                <div className='lg:col-span-1 md:col-span-2 col-span-1'>
                    <Link className='flex gap-3 mb-4 items-center' href={WEBSITE_HOME}>
                        <Image
                            src={logo}
                            width={200}
                            height={146}
                            alt='logo'
                            className='lg:w-14 w-12 rounded-full'
                        />
                        <h1 className="lg:text-3xl text-2xl font-bold bg-gradient-to-r from-violet-600 via-cyan-500 to-green-500 bg-clip-text text-transparent">
                            Fit Up
                        </h1>
                    </Link>
                    <p className='text-gray-500 text-sm'>
                        E-store is your trusted destination for quality and convenience. From fashion to essentials, we bring everything you need right to your doorstep. Shop smart, live better — only at FitUp.
                    </p>
                </div>


                <div>
                    {/* <h4 className='text-xl font-bold uppercase mb-5'>Categories</h4> */}
                    {/* <ul> */}
                        {/* <li className='mb-2 text-gray-500'>
                            <Link href={`${WEBSITE_SHOP}?category=t-shirts`}>T-shirt</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={`${WEBSITE_SHOP}?category=hoodies`}>Hoodies</Link>
                        </li> */}
                        {/* <li className='mb-2 text-gray-500'>
                            <Link href={`${WEBSITE_SHOP}?category=oversized`}>Oversized</Link>
                        </li> */}
                        {/* <li className='mb-2 text-gray-500'>
                            <Link href={`${WEBSITE_SHOP}?category=full-sleeves`}>Full Sleeves</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={`${WEBSITE_SHOP}?category=polo`}>Polo</Link>
                        </li> */}
                    {/* </ul> */}
                </div>
                <div>
                    <h4 className='text-xl font-bold uppercase mb-5'>Userfull Links</h4>
                    <ul>
                        <li className='mb-2 text-gray-500'>
                            <Link href={WEBSITE_HOME}>Home</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={WEBSITE_SHOP}>Shop</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href="/about-us">About</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={WEBSITE_REGISTER}>Register</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={WEBSITE_LOGIN}>Login</Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold uppercase mb-5'>Help Center</h4>
                    <ul>
                        <li className='mb-2 text-gray-500'>
                            <Link href={WEBSITE_REGISTER}>Register</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={WEBSITE_LOGIN}>Login</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={USER_DASHBOARD}>My Account</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href="/terms-and-conditions">Terms & Conditions</Link>
                        </li>


                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold uppercase mb-5'>Contact Us </h4>
                    <ul>
                        <li className='mb-2 text-gray-500 flex gap-2'>
                            <IoLocationOutline size={20} />
                            <span className='text-sm'>বড় বাজার, ট্রাফিক মোড়, মুন সুপার মার্কেট নিচ তলায়,এবং ২ তালায়,চুয়াডাঙ্গা।
                                চুয়াডাঙ্গা সদর</span>
                        </li>
                        <li className='mb-2 text-gray-500 flex gap-2'>
                            <MdOutlinePhone size={20} />
                            <Link href="tel:+91-8569874589" className='hover:text-primary text-sm'>01903-771984</Link>
                        </li>
                        <li className='mb-2 text-gray-500 flex gap-2'>
                            <MdOutlineMail size={20} />
                            <Link href="mailto:fitup024@gmail.com" className='hover:text-primary text-sm'>fitup024@gmail.com</Link>
                        </li>

                    </ul>


                    <div className='flex gap-5 mt-5'>


                        <Link
                            href="https://www.instagram.com/fit_up_chuadanga?utm_source=qr&igsh=d280YjNranFncXdp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="text-primary" size={25} />
                        </Link>

                        <Link
                            href="https://www.facebook.com/fit.up.chuadanga"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TiSocialFacebookCircular className="text-primary" size={25} />
                        </Link>

                        <Link
                            href="https://www.tiktok.com/@fitup83?_r=1&_t=ZS-9663Z1tBXkn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillTikTok className="text-primary" size={25} />
                        </Link>

                    </div>

                </div>

            </div>


            <div className='py-5 bg-gray-100' >
                <p className='text-center'>© 2026 FitUp. All Rights Reserved.</p>
            </div>

        </footer>
    )
}

export default Footer