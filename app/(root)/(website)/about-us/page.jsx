import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
 title: 'About',
 links: [
   { label: 'About' },
 ]
}
const AboutUs = () => {
 return (
   <div>
  <WebsiteBreadcrumb props={breadcrumb} />

  <div className="lg:px-40 px-5 py-20">
    <h1 className="text-xl font-semibold mb-3">About Fit Up</h1>

    <p>
      Welcome to Fit Up — your trusted online destination for stylish, comfortable, and quality clothing.
    </p>

    <p className="mt-3">
      Fit Up is created with a simple vision: to make fashion more accessible, modern, and reliable for everyone.
      We believe clothing is not just something you wear — it is a part of your personality, confidence, and daily lifestyle.
    </p>

    <p className="mt-3">
      From trendy everyday outfits to elegant collections, we carefully select products that match comfort, style,
      and affordability. Whether you are looking for casual wear, fashionable dresses, hijab collections, sarees,
      or seasonal clothing, Fit Up is here to bring you a smooth and enjoyable shopping experience.
    </p>

    <p className="mt-5">What makes Fit Up special:</p>

    <ul className="list-disc ps-10 mt-3">
      <li>
        <b>Quality Products:</b> We focus on comfortable fabrics, clean finishing, and stylish designs.
      </li>

      <li>
        <b>Affordable Fashion:</b> Our goal is to offer fashionable clothing at reasonable prices.
      </li>

      <li>
        <b>Customer Satisfaction:</b> Your trust and happiness are our top priorities.
      </li>

      <li>
        <b>Easy Shopping Experience:</b> We try to make browsing, ordering, and delivery simple and convenient.
      </li>

      <li>
        <b>Modern Style:</b> We regularly update our collections to match current fashion trends.
      </li>
    </ul>

    <p className="mt-3">
      As a growing clothing brand, Fit Up is always working to improve its collections, service quality,
      and customer experience. We want every customer to feel confident, comfortable, and satisfied with every purchase.
    </p>

    <p className="mt-3">
      Thank you for choosing Fit Up. Let&apos;s make fashion more stylish, simple, and meaningful — together.
    </p>
  </div>
</div>
 )
}

export default AboutUs
