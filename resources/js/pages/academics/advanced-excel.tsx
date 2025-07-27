
import HomeLayout from "@/layouts/home-layout"
import {Head, Link} from "@inertiajs/react"
import { Clock, Calendar, Award, FileSpreadsheet, Users } from "lucide-react"

export const metadata = {
  title: "Advanced Excel Program | Trendy Vocational Training Centre",
  description:
    "Master advanced Excel skills, including data analysis, automation with macros, and visualization, with our expert-led training program.",
}

export default function AdvancedExcelPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-4">Advanced Excel Program</h1>
              <p className="text-lg">
                Become an Excel expert with our advanced training program, designed for professionals and students
                looking to enhance their data management and analysis skills.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/advanced-excel.jpeg"
                alt="Advanced Excel Training"
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
              <p>1 Month</p>
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
              <p>Industry-Recognized Certification</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <FileSpreadsheet size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Study Mode</h3>
              </div>
              <p>Evening, Weekend, or Online Classes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
              <p className="mb-4">
                The Advanced Excel program is tailored for individuals who want to take their Excel skills to the next level. 
                This course covers advanced topics such as pivot tables, data visualization, macros, and VBA for automation.
              </p>
              <p className="mb-4">
                Participants will learn practical, real-world applications of Excel to manage and analyze data efficiently 
                and enhance their decision-making capabilities.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6">Learning Outcomes</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Build and manage complex Excel spreadsheets with advanced formulas.</li>
                <li>Create dynamic dashboards for data visualization.</li>
                <li>Automate tasks using macros and VBA scripting.</li>
                <li>Master pivot tables for in-depth data analysis.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-6">Facilities and Resources</h2>
              <p className="mb-4">
                The program provides access to fully equipped computer labs, expert trainers with extensive Excel knowledge, 
                and practical projects to solidify your learning.
              </p>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Program Details</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Faculty</h4>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary mr-2" />
                    <p>Certified Excel professionals with extensive teaching experience</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Career Opportunities</h4>
                  <ul className="space-y-1">
                    <li>Data Analyst</li>
                    <li>Business Analyst</li>
                    <li>Administrative Assistant</li>
                    <li>Operations Manager</li>
                    <li>Financial Analyst</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Entry Requirements</h4>
                  <ul className="space-y-1">
                    <li>Basic knowledge of Excel</li>
                    <li>Proficiency in using computers</li>
                    <li>Interest in data management and analysis</li>
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
