import Image from 'next/image'
import React from 'react'
import imgPlaceholder from '@/public/assets/images/img-placeholder.webp'
import Link from 'next/link'
import { WEBSITE_PRODUCT_DETAILS } from '@/routes/WebsiteRoute'
const ProductBox = ({ product }) => {

    return (
        <div className='rounded-lg hover:shadow-lg border overflow-hidden'>
            <Link href={WEBSITE_PRODUCT_DETAILS(product.slug)}>
                <Image
                    src={product?.media[0]?.secure_url || imgPlaceholder.src}
                    width={400}
                    height={400}
                    alt={product?.media[0]?.alt || product?.name}
                    title={product?.media[0]?.title || product?.name}
                    className='w-full lg:h-[300px] sm:h-[250px] h-[150px] object-cover object-top'
                />
                <div className="p-3 border-t">
                    <h4>{product?.name}</h4>
                    <p className='flex flex-wrap items-center gap-2 text-sm mt-2 min-w-0'>
                        <span className='line-through text-gray-400 min-w-0'>{product?.mrp.toLocaleString('en-US', { style: 'currency', currency: 'BDT' })}</span>
                        <span className='font-semibold min-w-0'>{product?.sellingPrice.toLocaleString('en-US', { style: 'currency', currency: 'BDT' })}</span>
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default ProductBox