import HomeLayout from "@/layouts/home-layout"
import { Head, Link } from "@inertiajs/react"
import { Clock, Calendar, Award, Ruler, Users } from "lucide-react"

export const metadata = {
  title: "Building and Construction Program | Trendy Vocational Training Centre",
  description:
    "Our Building and Construction certificate program equips learners with practical skills to excel in the construction industry.",
}

export default function ConstructionPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-4">Building and Construction</h1>
              <p className="text-lg">
                A hands-on Building and Construction certificate program that prepares learners for careers in the
                construction industry.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/trendy-building-and-construction.jpeg"
                alt="Construction Training"
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
              <p>18 Months</p>
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
              <p>National Construction Authority (NCA) Certificate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Ruler size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Study Mode</h3>
              </div>
              <p>Full-time or Apprenticeship</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
              <p className="mb-4">
                Our Building and Construction program is tailored to equip students with the skills and knowledge needed
                to thrive in the construction sector. The curriculum includes practical training in construction
                techniques, safety measures, and project management.
              </p>
              <p className="mb-4">
                Students will participate in hands-on projects and fieldwork, ensuring they graduate with both academic
                knowledge and practical experience.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6">Learning Outcomes</h2>
              <p className="mb-4">
                By the end of this program, students will be able to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Understand construction materials and their applications.</li>
                <li>Interpret blueprints and architectural drawings.</li>
                <li>Apply safety standards and practices on-site.</li>
                <li>Work collaboratively on construction projects.</li>
                <li>Manage small to medium-scale construction tasks.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-6">Facilities and Resources</h2>
              <p className="mb-4">
                Our state-of-the-art workshop facilities include modern tools and equipment to support hands-on
                training. Additionally, students benefit from site visits and mentorship from experienced professionals
                in the construction field.
              </p>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Program Details</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Faculty</h4>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary mr-2" />
                    <p>Qualified construction professionals with years of experience</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Career Opportunities</h4>
                  <ul className="space-y-1">
                    <li>Mason</li>
                    <li>Site Supervisor</li>
                    <li>Carpenter</li>
                    <li>Plumber</li>
                    <li>Construction Foreman</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Entry Requirements</h4>
                  <ul className="space-y-1">
                    <li>KCSE Certificate or equivalent</li>
                    <li>Physical fitness and readiness to work on-site</li>
                    <li>Basic math and technical skills</li>
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
