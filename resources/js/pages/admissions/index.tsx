import AnimatedHero from "@/components/animated-hero-section"
import HomeLayout from "@/layouts/home-layout"
import { Head, Link } from "@inertiajs/react"
import { CheckCircle, DollarSign } from "lucide-react"

export const metadata = {
  title: "Admissions | Trendy Vocational Training Centre",
  description:
    "Learn about the admissions process, requirements, and financial aid options at Trendy Vocational Training Centre.",
}

export default function AdmissionsPage() {
  return (
    <HomeLayout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
      </Head>
      <AnimatedHero
        title="Admissions"
        subtitle="Take the first step toward your future career by applying to Trendy Vocational Training Centre."
      />


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Admission Process</h2>
              <p className="mb-6">
                Our admission process is designed to be straightforward and accessible. We welcome students from diverse
                backgrounds who are passionate about developing practical skills for their future careers.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Submit Application</h3>
                    <p className="text-gray-600">
                      Complete the online application form with your personal information and program of interest.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Document Submission</h3>
                    <p className="text-gray-600">
                      Upload required documents including academic certificates and identification.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Application Review</h3>
                    <p className="text-gray-600">Our admissions team will review your application and documents.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Acceptance & Enrollment</h3>
                    <p className="text-gray-600">
                      Upon acceptance, complete enrollment by paying the registration fee and confirming your place.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="https://portal.trendyvocationaltrainingcentre.com/admissions/apply"
                  className="bg-emerald-700 text-white rounded-full px-4 py-2 inline-block">
                  Start Your Application
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Admissions"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-4xl">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">General Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>KCSE Certificate or equivalent qualification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>National ID or Passport</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>Passport-sized photographs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>Completed application form</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>Application fee payment receipt</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Program-Specific Requirements</h3>
              <p className="mb-4">Some programs may have additional requirements:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>ICT Programs: Basic computer literacy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>Building & Construction: Physical fitness assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>Catering: Food handling certificate (can be obtained after admission)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-2 flex-shrink-0 mt-1" />
                  <span>Advanced Courses: Completion of basic level courses or equivalent experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-4xl">Scholarships & Financial Aid</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center">
                  <DollarSign size={30} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Merit Scholarships</h3>
              <p className="text-gray-600 text-center">
                Awarded to students with outstanding academic achievements. Covers up to 50% of tuition fees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center">
                  <DollarSign size={30} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Need-Based Financial Aid</h3>
              <p className="text-gray-600 text-center">
                Available for students demonstrating financial need. Application required with supporting documentation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center">
                  <DollarSign size={30} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Payment Plans</h3>
              <p className="text-gray-600 text-center">
                Flexible payment options available to help manage tuition costs over the duration of your program.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-4xl">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">When can I apply?</h3>
              <p>
                We accept applications throughout the year for our three main intake periods in January, May, and
                September. We recommend applying at least one month before your desired start date.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">What if I don&apos;t meet all the requirements?</h3>
              <p>
                We evaluate applications holistically. If you don&apos;t meet all requirements but show potential and
                passion, we encourage you to apply and explain your situation in your application.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Can I transfer from another institution?</h3>
              <p>
                Yes, we accept transfer students. You&apos;ll need to provide transcripts from your previous institution, and
                our academic team will evaluate which credits can be transferred.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Are there accommodation options?</h3>
              <p>
                While we don&apos;t provide on-campus housing, we can assist you in finding suitable accommodation near the
                campus. We have partnerships with local housing providers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does the application process take?</h3>
              <p>
                Typically, you&apos;ll receive a decision within 2-3 weeks after submitting a complete application with all
                required documents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Can I work while studying?</h3>
              <p>
                Yes, many of our students work part-time while completing their studies. We offer flexible scheduling
                options, including evening and weekend classes for some programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-emerald-400 to-blue-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-dark font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Take the first step toward a rewarding career by applying to Trendy Vocational Training Centre today.
          </p>
          <Link
            href="https://portal.trendyvocationaltrainingcentre.com/admissions/apply"
            className="bg-accent text-dark px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition text-center inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </HomeLayout>
  )
}
