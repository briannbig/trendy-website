import { Head, Link } from "@inertiajs/react"
import HomeLayout from "@/layouts/home-layout"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Application Submitted | Trendy Vocational Training Centre",
  description: "Thank you for submitting your job application to Trendy Vocational Training Centre.",
}

export default function ThankYouPage() {
  return (
    <HomeLayout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
      </Head>
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Job Application Submitted Successfully!</h1>
              <p className="mb-6">
                Thank you for applying to Trendy Vocational Training Centre. We have received your application and will
                review it shortly.
              </p>
              <p className="text-gray-600 mb-8">
                If your qualifications match our requirements, our HR team will contact you to discuss the next steps in
                the hiring process. If you have any questions, please contact us at{" "}
                <a href="mailto:careers@trendyvocational.com" className="text-primary hover:underline">
                  careers@trendyvocational.com
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/"
                  className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition text-center"
                >
                  Return to Home
                </Link>
                <Link
                  href="/careers"
                  className="border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition text-center"
                >
                  View More Openings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

