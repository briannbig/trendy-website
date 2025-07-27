export const metadata = {
  title: "Privacy Policy | Trendy Vocational Training Centre",
  description: "Privacy Policy for Trendy Vocational Training Centre.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <div className="prose max-w-none">
            <p className="mb-4">
              This Privacy Policy describes how Trendy Vocational Training Centre collects, uses, and shares your
              personal information when you visit our website, apply for our programs, or interact with us in any way.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
            <p className="mb-4">
              We collect personal information that you provide to us, such as your name, email address, phone number,
              educational background, and other information you provide when applying for our programs or contacting us.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Process your application and enrollment</li>
              <li>Communicate with you about our programs and services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">Information Sharing</h2>
            <p className="mb-4">
              We do not sell or rent your personal information to third parties. We may share your information with
              service providers who help us operate our website and services, or as required by law.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Your Rights</h2>
            <p className="mb-4">
              You have the right to access, correct, or delete your personal information. You can contact us at any time
              to exercise these rights.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
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
