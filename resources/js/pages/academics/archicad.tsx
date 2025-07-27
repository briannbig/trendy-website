import HomeLayout from "@/layouts/home-layout"
import {Head, Link} from "@inertiajs/react"
import { Clock, Calendar, Award, Building, Users } from "lucide-react"

export const metadata = {
  title: "ArchiCAD Program | Trendy Vocational Training Centre",
  description:
    "Our ArchiCAD training program equips students with the skills to create stunning architectural designs and 3D models using industry-leading software.",
}

export default function ArchiCADPage() {
  return (
    <HomeLayout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
      </Head>
      <section className="pt-32 pb-16 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl text-emerald-500 font-bold mb-4">ArchiCAD Training Program</h1>
              <p className="text-lg">
                Master architectural design and modeling with our comprehensive ArchiCAD program, tailored for aspiring architects and designers.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/archicad-training.jpeg"
                alt="ArchiCAD Training"
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
              <p>January, May, September</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Award size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Certification</h3>
              </div>
              <p>Certified Architectural Software Training</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Building size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Study Mode</h3>
              </div>
              <p>Full-time or Part-time</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
              <p className="mb-4">
                The ArchiCAD training program is designed to equip students with the knowledge and skills to create detailed architectural designs, 3D models, and visualizations using ArchiCAD. This program is perfect for students pursuing careers in architecture, interior design, and construction.
              </p>
              <p className="mb-4">
                Through hands-on projects and expert instruction, participants will master tools for drafting, rendering, and producing professional-grade architectural presentations.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6">Learning Outcomes</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Develop detailed 2D architectural plans and 3D models.</li>
                <li>Learn to create realistic renderings and visualizations.</li>
                <li>Understand project workflows and collaboration using ArchiCAD.</li>
                <li>Produce professional-quality presentations for clients and stakeholders.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-6">Facilities and Resources</h2>
              <p className="mb-4">
                Our facilities are equipped with high-performance computers and the latest ArchiCAD software. Students will also have access to a library of architectural resources and receive guidance from experienced instructors.
              </p>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Program Details</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Faculty</h4>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary mr-2" />
                    <p>Experienced architects and design professionals</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Career Opportunities</h4>
                  <ul className="space-y-1">
                    <li>Architectural Draftsman</li>
                    <li>Interior Designer</li>
                    <li>3D Visualization Specialist</li>
                    <li>Project Designer</li>
                    <li>Construction Manager</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Entry Requirements</h4>
                  <ul className="space-y-1">
                    <li>KCSE Certificate or equivalent</li>
                    <li>Basic computer literacy</li>
                    <li>Interest in design and architecture</li>
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
