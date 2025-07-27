import HomeLayout from "@/layouts/home-layout"
import {Head, Link} from "@inertiajs/react"
import { Clock, Calendar, Award, BookOpen, Users } from "lucide-react"

export const metadata = {
  title: "ICT Program | Trendy Vocational Training Centre",
  description:
    "Our comprehensive ICT certificate program offers essential skills in information and communication technology for today's digital world.",
}

export default function ICTPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-4">Information Communication Technology</h1>
              <p className=" text-lg">
                A comprehensive ICT certificate program offering essential skills in information and communication
                technology for today&apos;s digital world.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/students-learning.jpeg"
                alt="ICT Training"
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
              <p>12 Months</p>
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
              <p>Ministry Approved Certificate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <BookOpen size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Study Mode</h3>
              </div>
              <p>Full-time or Part-time</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
              <p className="mb-4">
                Our ICT program is designed to provide students with a solid foundation in information and communication
                technology. The curriculum covers essential computer skills, networking fundamentals, programming
                basics, and more.
              </p>
              <p className="mb-4">
                Students will gain hands-on experience with industry-standard software and hardware, preparing them for
                a variety of roles in the technology sector.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6">Learning Outcomes</h2>
              <p className="mb-4">
                By the end of this program, students will have the ability to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Effectively use essential computer applications for various tasks.</li>
                <li>Understand and implement networking concepts and protocols.</li>
                <li>Write basic programs using industry-relevant programming languages.</li>
                <li>Analyze and troubleshoot hardware and software issues.</li>
                <li>Collaborate effectively in tech-driven environments.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-6">Facilities and Resources</h2>
              <p className="mb-4">
                Our ICT program is supported by state-of-the-art computer labs, industry-grade software tools, and access to a
                digital library for research and learning. Additionally, students can attend workshops and seminars conducted by
                leading IT professionals.
              </p>

            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Program Details</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Faculty</h4>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary mr-2" />
                    <p>Experienced IT professionals with industry expertise</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Career Opportunities</h4>
                  <ul className="space-y-1">
                    <li>IT Support Specialist</li>
                    <li>Computer Operator</li>
                    <li>Data Entry Specialist</li>
                    <li>Office Administrator</li>
                    <li>Junior Network Technician</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Entry Requirements</h4>
                  <ul className="space-y-1">
                    <li>KCSE Certificate or equivalent</li>
                    <li>Basic computer literacy</li>
                    <li>Passion for technology</li>
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
