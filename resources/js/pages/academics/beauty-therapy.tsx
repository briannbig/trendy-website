import HomeLayout from "@/layouts/home-layout"
import { Head, Link } from "@inertiajs/react"
import { Clock, Calendar, Award, Scissors, Users } from "lucide-react"

export const metadata = {
  title: "Beauty Therapy Program | Trendy Vocational Training Centre",
  description:
    "Our Beauty Therapy program offers hands-on training in skincare, makeup artistry, nail care, and salon management for a rewarding career in the beauty industry.",
}

export default function BeautyTherapyPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-4">Beauty Therapy Program</h1>
              <p className="text-lg">
                Transform your passion for beauty into a professional career with our Beauty Therapy program, designed to equip you with the skills and knowledge for the beauty industry.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/team-overview.jpeg"
                alt="Beauty Therapy Training"
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
              <p>9 Months</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Calendar size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Start Dates</h3>
              </div>
              <p>March, July, November</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Award size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Certification</h3>
              </div>
              <p>Internationally Recognized Certificate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Scissors size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Study Mode</h3>
              </div>
              <p>Full-time or Evening Classes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
              <p className="mb-4">
                Our Beauty Therapy program is designed to provide comprehensive training in skincare, makeup artistry, hair styling, nail care, and salon management. This program combines theoretical knowledge with hands-on practical sessions to ensure students are well-prepared for the beauty industry.
              </p>
              <p className="mb-4">
                With a focus on professionalism and client care, students will develop the skills needed to work in top salons, spas, or as independent beauty therapists.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6">Learning Outcomes</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Master various beauty treatments, including facials, waxing, and massage.</li>
                <li>Develop skills in professional makeup artistry and hairstyling.</li>
                <li>Understand nail care techniques, including manicures, pedicures, and nail art.</li>
                <li>Learn salon management and customer service principles.</li>
                <li>Adhere to health, safety, and hygiene standards in beauty therapy.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-6">Facilities and Resources</h2>
              <p className="mb-4">
                Students will train in fully equipped beauty therapy labs with the latest tools and products. Our experienced instructors provide personalized guidance, and students can participate in real-world training through internships and live projects.
              </p>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Program Details</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Department</h4>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary mr-2" />
                    <p>Beauty & Therapy</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Career Opportunities</h4>
                  <ul className="space-y-1">
                    <li>Beauty Therapist</li>
                    <li>Makeup Artist</li>
                    <li>Hair Stylist</li>
                    <li>Nail Technician</li>
                    <li>Spa Manager</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Entry Requirements</h4>
                  <ul className="space-y-1">
                    <li>KCSE Certificate or equivalent</li>
                    <li>Passion for beauty and customer care</li>
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
