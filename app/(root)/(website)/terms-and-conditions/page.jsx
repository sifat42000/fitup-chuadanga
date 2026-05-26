import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
    title: 'Terms & Conditions',
    links: [
        { label: 'Terms & Conditions' },
    ]
}

const TermsAndConditions = () => {
    return (
       <div>
  <WebsiteBreadcrumb props={breadcrumb} />

  <div className="lg:px-40 px-5 py-20">
    <h1 className="text-xl font-semibold mb-3">Terms & Conditions</h1>

    <p>
      Welcome to Fit Up. By visiting our website, creating an account, or placing an order,
      you agree to follow the terms and conditions mentioned below. Please read them carefully
      before using our website.
    </p>

    <p className="mt-3">
      If you do not agree with any part of these terms, please avoid using our website or services.
    </p>

    <p className="mt-5"><b>1. Use of Our Website:</b></p>

    <ul className="list-disc ps-10 mt-3">
      <li>
        You agree to use the Fit Up website only for lawful and genuine shopping purposes.
      </li>

      <li>
        You must not use our website for any fraudulent, harmful, or unauthorized activity.
      </li>

      <li>
        You are responsible for keeping your account information, login details, and password secure.
      </li>
    </ul>

    <p className="mt-5"><b>2. Product Information:</b></p>

    <ul className="list-disc ps-10 mt-3">
      <li>
        We try our best to display accurate product names, images, colors, sizes, prices,
        and availability.
      </li>

      <li>
        Product colors may slightly vary due to lighting, photography, screen brightness,
        or device display settings.
      </li>

      <li>
        Fit Up reserves the right to update product details, prices, stock, or offers at any time
        without prior notice.
      </li>
    </ul>

    <p className="mt-5"><b>3. Orders & Confirmation:</b></p>

    <ul className="list-disc ps-10 mt-3">
      <li>
        After placing an order, you may receive a confirmation through phone, message, email,
        or website notification.
      </li>

      <li>
        Placing an order does not always guarantee product availability. If a product is out of stock,
        we may contact you for replacement, adjustment, or cancellation.
      </li>

      <li>
        Fit Up reserves the right to cancel any order if the provided information is incorrect,
        incomplete, or suspicious.
      </li>
    </ul>

    <p className="mt-5"><b>4. Pricing & Payment:</b></p>

    <ul className="list-disc ps-10 mt-3">
      <li>
        All prices shown on the website are listed in Bangladeshi Taka unless mentioned otherwise.
      </li>

      <li>
        Payment methods may include Cash on Delivery, online payment, or other available options.
      </li>

      <li>
        We do not store sensitive card or payment information on our website.
      </li>
    </ul>

    <p className="mt-5"><b>5. Delivery:</b></p>

    <ul className="list-disc ps-10 mt-3">
      <li>
        Delivery time may vary depending on location, courier service, product availability,
        and other external factors.
      </li>

      <li>
        Customers must provide correct delivery information, including name, phone number,
        and full address.
      </li>

      <li>
        Fit Up is not responsible for delivery delays caused by courier issues, natural events,
        incorrect address, or customer unavailability.
      </li>
    </ul>

    <p className="mt-5"><b>6. Exchange, Return & Refund:</b></p>

    <ul className="list-disc ps-10 mt-3">
      <li>
        Exchange, return, or refund requests will be handled according to our return and exchange policy.
      </li>

      <li>
        Products must be unused, undamaged, and in original condition to be eligible for exchange
        or return, where applicable.
      </li>

      <li>
        Certain products may not be eligible for return or exchange due to hygiene, offer,
        or product-specific conditions.
      </li>
    </ul>

    <p className="mt-5"><b>7. Intellectual Property:</b></p>

    <ul className="list-disc ps-10 mt-3">
      <li>
        All content on the Fit Up website, including logo, images, product photos, text,
        design, and branding materials, belongs to Fit Up.
      </li>

      <li>
        You may not copy, reuse, modify, or reproduce our content without written permission.
      </li>
    </ul>

    <p className="mt-5"><b>8. Limitation of Liability:</b></p>

    <ul className="list-disc ps-10 mt-3">
      <li>
        Fit Up will not be responsible for any loss or damage caused by misuse of our website,
        incorrect information provided by customers, or issues outside our control.
      </li>

      <li>
        We always try to provide a smooth and secure shopping experience, but we cannot guarantee
        that the website will always be error-free or uninterrupted.
      </li>
    </ul>

    <p className="mt-5"><b>9. Changes to Terms:</b></p>

    <ul className="list-disc ps-10 mt-3">
      <li>
        Fit Up may update these Terms & Conditions at any time to improve our services,
        policies, or customer experience.
      </li>

      <li>
        Continued use of our website means you accept the updated terms.
      </li>
    </ul>

    <p className="mt-5">
      If you have any questions about these Terms & Conditions, please contact our customer support team.
    </p>

    <p className="mt-3">
      Thank you for choosing Fit Up. We are committed to providing you with a trusted,
      comfortable, and reliable fashion shopping experience.
    </p>
  </div>
</div>
    )
}

export default TermsAndConditions
