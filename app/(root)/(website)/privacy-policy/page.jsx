import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
    title: 'Privacy Policy',
    links: [
        { label: 'Privacy Policy' },
    ]
}

const PrivacyPolicy = () => {
    return (
       <div>
  <WebsiteBreadcrumb props={breadcrumb} />

  <div className="lg:px-40 px-5 py-20">
    <h1 className="text-xl font-semibold mb-3">Privacy Policy</h1>

    <p>
      At Fit Up, we value your privacy and are committed to protecting your personal information.
      When you visit our website, create an account, or place an order, we make sure your information
      is handled safely, responsibly, and respectfully.
    </p>

    <p className="mt-3">
      This Privacy Policy explains what information we collect, how we use it, and how we keep it secure
      while providing you with a smooth and trusted shopping experience.
    </p>

    <p className="mt-5">Information We Collect:</p>

    <ul className="list-disc ps-10 mt-3">
      <li>
        <b>Personal Information:</b> We may collect your name, phone number, email address,
        delivery address, and other details needed to process your order.
      </li>

      <li>
        <b>Order Information:</b> We collect product details, order history, delivery information,
        and payment status to manage your purchase properly.
      </li>

      <li>
        <b>Account Information:</b> If you create an account, we may store your login details,
        profile information, and saved preferences.
      </li>

      <li>
        <b>Usage Data:</b> We may collect basic website usage information such as visited pages,
        browser type, device information, and activity on our website to improve user experience.
      </li>
    </ul>

    <p className="mt-5">How We Use Your Information:</p>

    <ul className="list-disc ps-10 mt-3">
      <li>To confirm, process, and deliver your orders.</li>
      <li>To contact you about your order status, delivery updates, or customer support issues.</li>
      <li>To improve our website, products, services, and overall shopping experience.</li>
      <li>To provide better product recommendations and personalized offers.</li>
      <li>To prevent fraud, protect our website, and keep customer data secure.</li>
      <li>To send promotional updates or offers, only when appropriate.</li>
    </ul>

    <p className="mt-5">
      Fit Up does not sell, rent, or trade your personal information to any third party.
      Your information may only be shared with trusted service providers when necessary,
      such as delivery partners, payment services, or legal authorities if required by law.
    </p>

    <p className="mt-3">
      We take reasonable steps to protect your personal data from unauthorized access,
      misuse, loss, or disclosure. However, no online platform can guarantee 100% security,
      so we always encourage customers to keep their account information safe.
    </p>

    <p className="mt-3">
      By using the Fit Up website, you agree to the collection and use of information as described
      in this Privacy Policy. We may update this policy from time to time, and any changes will be
      posted on this page.
    </p>

    <p className="mt-3">
      If you have any questions or concerns about our Privacy Policy, please contact our support team.
    </p>

    <p className="mt-3">
      Thank you for trusting Fit Up. Your privacy, security, and satisfaction are important to us.
    </p>
  </div>
</div>
    )
}

export default PrivacyPolicy
