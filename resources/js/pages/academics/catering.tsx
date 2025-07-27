import HomeLayout from "@/layouts/home-layout"
import { Head, Link } from "@inertiajs/react"
import { Clock, Calendar, Award, Utensils, Users } from "lucide-react"

export const metadata = {
  title: "Catering Program | Trendy Vocational Training Centre",
  description:
    "Our Catering program prepares students for the hospitality industry with practical skills in food preparation, presentation, and kitchen management.",
}

export default function CateringPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-4">Catering Program</h1>
              <p className=" text-lg">
                Master the art of culinary excellence through our hands-on Catering program, designed to prepare you for a rewarding career in the hospitality industry.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/trendy-catering.jpeg"
                alt="Catering Training"
                width={600}
                height={200}
                className="rounded-xl shadow-lg max-h-80"
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
              <p>Industry-Recognized Certificate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Utensils size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Study Mode</h3>
              </div>
              <p>Full-time or Weekend Classes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
              <p className="mb-4">
                Our Catering program equips students with the practical skills and knowledge needed to excel in the culinary and hospitality industry. The program emphasizes hands-on learning, creativity, and professionalism.
              </p>
              <p className="mb-4">
                Students will learn food preparation, menu planning, presentation, kitchen management, and safety standards. With a focus on both local and international cuisines, the program prepares students for diverse roles in the industry.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6">Learning Outcomes</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Master food preparation techniques for various cuisines.</li>
                <li>Plan and execute menus for events and restaurants.</li>
                <li>Apply food safety and hygiene standards in the kitchen.</li>
                <li>Develop skills in food presentation and plating.</li>
                <li>Understand kitchen organization and management principles.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-6">Facilities and Resources</h2>
              <p className="mb-4">
                Students have access to modern kitchen facilities, experienced instructors, and opportunities to participate in live catering events and internships for real-world experience.
              </p>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Program Details</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Department</h4>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary mr-2" />
                    <p>Food and Beverages</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Career Opportunities</h4>
                  <ul className="space-y-1">
                    <li>Chef</li>
                    <li>Catering Manager</li>
                    <li>Event Coordinator</li>
                    <li>Food Stylist</li>
                    <li>Restaurant Manager</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Entry Requirements</h4>
                  <ul className="space-y-1">
                    <li>KCSE Certificate or equivalent</li>
                    <li>Passion for cooking and hospitality</li>
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
