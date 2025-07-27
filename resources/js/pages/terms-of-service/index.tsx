export const metadata = {
  title: "Terms of Service | Trendy Vocational Training Centre",
  description: "Terms of Service for Trendy Vocational Training Centre.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

          <div className="prose max-w-none">
            <p className="mb-4">
              These Terms of Service govern your use of the Trendy Vocational Training Centre website and services. By
              accessing our website or using our services, you agree to these terms.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Use of Our Website</h2>
            <p className="mb-4">
              You may use our website for lawful purposes only. You must not use our website in any way that causes, or
              may cause, damage to the website or impairment of the availability or accessibility of the website.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Application and Enrollment</h2>
            <p className="mb-4">
              When you apply for our programs, you agree to provide accurate and complete information. Admission to our
              programs is subject to meeting the eligibility requirements and availability of spaces.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Fees and Payments</h2>
            <p className="mb-4">
              All fees must be paid according to the payment schedule provided upon enrollment. Failure to pay fees may
              result in suspension or termination of your enrollment.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Intellectual Property</h2>
            <p className="mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of
              Trendy Vocational Training Centre and is protected by copyright and other intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Limitation of Liability</h2>
            <p className="mb-4">
              Trendy Vocational Training Centre will not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising out of your use of our website or services.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless Trendy Vocational Training Centre from any claims, damages,
              liabilities, costs, or expenses arising from your use of our website or services.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Governing Law</h2>
            <p className="mb-4">
              These Terms of Service are governed by the laws of Kenya. Any disputes arising from these terms will be
              subject to the exclusive jurisdiction of the courts of Kenya.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Changes to These Terms</h2>
            <p className="mb-4">
              We may update these Terms of Service from time to time. We will notify you of any changes by posting the
              new Terms of Service on this page.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
            <p>
              Email:{" "}
              <a href="mailto:trendyvocational@gmail.com" className="text-primary hover:underline">
                trendyvocational@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+254793632888" className="text-primary hover:underline">
                +254 793 632 888
              </a>
              <br />
              Address: Moi South Lake Road, Naivasha, Kenya
            </p>

            <p className="mt-8 text-sm text-gray-500">Last updated: May 17, 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
