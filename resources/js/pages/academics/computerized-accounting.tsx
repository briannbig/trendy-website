import HomeLayout from "@/layouts/home-layout"
import {Head, Link} from "@inertiajs/react"
import { Clock, Calendar, Award, Calculator, Users } from "lucide-react"

export const metadata = {
  title: "Computerized Accounting Program | Trendy Vocational Training Centre",
  description:
    "Our Computerized Accounting program equips students with practical skills in financial management, bookkeeping, and accounting software for today's business needs.",
}

export default function ComputerizedAccountingPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-4">Computerized Accounting Program</h1>
              <p className="text-lg">
                Gain the skills and expertise needed to succeed in the field of accounting with our hands-on Computerized Accounting program.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/computerized-accounting.jpeg"
                alt="Computerized Accounting Training"
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
              <p>6 Months</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Calendar size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Start Dates</h3>
              </div>
              <p>February, June, October</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Award size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Certification</h3>
              </div>
              <p>Industry Recognized Certificate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Calculator size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Study Mode</h3>
              </div>
              <p>Full-time or Part-time</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
              <p className="mb-4">
                The Computerized Accounting program is tailored to provide students with practical skills in financial management, bookkeeping, and the use of accounting software. This program is ideal for individuals aspiring to build a career in accounting or finance.
              </p>
              <p className="mb-4">
                Students will learn to use industry-standard software such as QuickBooks, Sage, and Excel, enabling them to handle various accounting tasks with confidence.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6">Learning Outcomes</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Master bookkeeping principles and financial record management.</li>
                <li>Understand payroll processing and tax compliance.</li>
                <li>Gain expertise in using accounting software like QuickBooks and Sage.</li>
                <li>Develop analytical skills for preparing financial statements and reports.</li>
                <li>Learn to manage budgets and perform bank reconciliations.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-6">Facilities and Resources</h2>
              <p className="mb-4">
                Our facilities are equipped with state-of-the-art computer labs and accounting software to provide students with hands-on learning experiences. Guidance from experienced faculty ensures a deep understanding of modern accounting practices.
              </p>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Program Details</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Department</h4>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary mr-2" />
                    <p>Accounting</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Career Opportunities</h4>
                  <ul className="space-y-1">
                    <li>Accounts Clerk</li>
                    <li>Bookkeeper</li>
                    <li>Payroll Specialist</li>
                    <li>Assistant Accountant</li>
                    <li>Finance Officer</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Entry Requirements</h4>
                  <ul className="space-y-1">
                    <li>KCSE Certificate or equivalent</li>
                    <li>Basic computer skills</li>
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
