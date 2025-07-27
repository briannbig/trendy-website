import HomeLayout from "@/layouts/home-layout"
import {Head, Link} from "@inertiajs/react"
import { Clock, Calendar, Award, Monitor, Users } from "lucide-react"

export const metadata = {
  title: "Computer Packages Program | Trendy Vocational Training Centre",
  description:
    "Our Computer Packages program provides foundational computer skills for personal, academic, and professional success.",
}

export default function ComputerPackagesPage() {
  return (
    <HomeLayout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
      </Head>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-4">Computer Packages</h1>
              <p className="text-lg">
                Master essential computer skills through our comprehensive Computer Packages program, ideal for all skill levels.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/students-learning.jpeg"
                alt="Computer Packages Training"
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Clock size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Duration</h3>
              </div>
              <p>3 Months</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Calendar size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Start Dates</h3>
              </div>
              <p>Monthly Intakes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Award size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Certification</h3>
              </div>
              <p>Certificate of Completion</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Monitor size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Study Mode</h3>
              </div>
              <p>Full-time or Evening Classes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
              <p className="mb-4">
                Our Computer Packages program is tailored to equip students with essential computer skills that are vital in the digital age. Whether you are a beginner or looking to enhance your skills, this program covers it all.
              </p>
              <p className="mb-4">
                The curriculum includes training in Microsoft Office Suite (Word, Excel, PowerPoint), email usage, internet navigation, and more. The program emphasizes practical, hands-on learning to ensure students are confident in applying their skills.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6">Learning Outcomes</h2>
              <p className="mb-4">
                By the end of this program, students will be able to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Create and edit professional documents using Microsoft Word.</li>
                <li>Analyze and visualize data with Microsoft Excel.</li>
                <li>Design engaging presentations with Microsoft PowerPoint.</li>
                <li>Effectively browse the internet and use email for communication.</li>
                <li>Understand basic computer maintenance and troubleshooting.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-6">Facilities and Resources</h2>
              <p className="mb-4">
                The program provides access to fully equipped computer labs with the latest software. Additionally, students can benefit from online resources and one-on-one mentorship to enhance their learning experience.
              </p>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Program Details</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Faculty</h4>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary mr-2" />
                    <p>Experienced trainers skilled in computer applications and teaching methodologies</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Career Opportunities</h4>
                  <ul className="space-y-1">
                    <li>Administrative Assistant</li>
                    <li>Data Entry Clerk</li>
                    <li>Office Secretary</li>
                    <li>Personal Assistant</li>
                    <li>Customer Service Representative</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Entry Requirements</h4>
                  <ul className="space-y-1">
                    <li>Open to all; no prior experience required</li>
                    <li>Basic English literacy</li>
                  </ul>
                </div>

                <Link
                  href="https://portal.trendyvocationaltrainingcentre.com/admissions/apply"
                  className="block w-full bg-accent text-dark text-center py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
                >
                  Apply Now
                </Link>

                <Link
                  href="/contact"
                  className="block w-full border border-primary text-primary text-center py-3 rounded-full font-semibold mt-3 hover:bg-primary hover:text-white transition"
                >
                  Request Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  )
}
