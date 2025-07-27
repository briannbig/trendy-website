import { Head, Link } from "@inertiajs/react"
import HomeLayout from "@/layouts/home-layout"
import { Award, Car, Truck, Users, Bike, Signpost } from "lucide-react"

export const metadata = {
  title: "Driving School | Trendy Vocational Training Centre",
  description:
    "Trendy Driving School is a comprehensive department offering training in various vehicle categories, road safety education, and professional driving certifications in Kenya.",
}

export default function DrivingSchoolPage() {
  return (
    <HomeLayout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
      </Head>
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Trendy Driving School</h1>
              <p className="text-gray-700 text-lg">
                Welcome to the Trendy Driving School Department! Our mission is to produce skilled, confident, and
                responsible drivers for all types of vehicles. Whether you&apos;re a first-time learner or seeking
                professional certifications, we have the training you need.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/grad-pic-1.jpeg"
                alt="Driving School Training"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl text-emerald-600 font-bold mb-6">About the Driving School</h2>
              <p className="mb-4">
                The Trendy Driving School Department is a leader in driver education, offering tailored programs for
                motorcycles, private cars, commercial vehicles, and heavy trucks. Our curriculum emphasizes road safety,
                defensive driving, and real-world application, ensuring that our graduates are ready for any driving
                scenario.
              </p>
              <p className="mb-4">
                With state-of-the-art training facilities, certified instructors, and a modern fleet of vehicles, we
                pride ourselves on delivering top-tier driver education to individuals, organizations, and professional
                drivers.
              </p>
            </div>
            <div>
              <img
                src="/images/director-1.jpeg"
                alt="Driving School Instructor"
                
                className="rounded-full h-72 w-72"
              />
            </div>
          </div>

          {/* Programs Section */}
          <h2 className="text-2xl text-emerald-600 font-bold mb-6">Programs We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 bg-gradient-to-br from-emerald-300 to-blue-300 p-8">
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex items-center mb-2 border-b border-emerald-400">
                <Car size={24} className="text-emerald-600 mr-2" />
                <h3 className="font-semibold">Private Vehicle Driving</h3>
              </div>
              <p>Learn to drive personal cars with both manual and automatic transmission training.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex items-center mb-2 border-b border-emerald-400">
                <Bike size={24} className="text-emerald-600 mr-2" />
                <h3 className="font-semibold">Motorcycle Riding</h3>
              </div>
              <p>Comprehensive training for two-wheelers, focusing on safety and maneuvering skills.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex items-center mb-2 border-b border-emerald-400">
                <Truck size={24} className="text-emerald-600 mr-2" />
                <h3 className="font-semibold">Heavy Commercial Vehicle Training</h3>
              </div>
              <p>Specialized training for trucks, trailers, and other heavy commercial vehicles.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex items-center mb-2 border-b border-emerald-400">
                <Signpost size={24} className="text-emerald-600 mr-2" />
                <h3 className="font-semibold">Defensive Driving</h3>
              </div>
              <p>Advanced driving techniques to anticipate and respond to road hazards.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex items-center mb-2 border-b border-emerald-400">
                <Award size={24} className="text-emerald-600 mr-2" />
                <h3 className="font-semibold">Corporate Driver Training</h3>
              </div>
              <p>Custom programs for organizations seeking professional drivers.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex items-center mb-2 border-b border-emerald-400">
                <Users size={24} className="text-emerald-600 mr-2" />
                <h3 className="font-semibold">Refresher Courses</h3>
              </div>
              <p>Short courses for licensed drivers to improve confidence and skills.</p>
            </div>
          </div>

          {/* Facilities Section */}
          <h2 className="text-2xl text-emerald-600 font-bold mb-6">Our Facilities</h2>
          <ul className="list-disc pl-6 space-y-2 mb-12">
            <li>Modern fleet of manual and automatic vehicles.</li>
            <li>Dedicated training tracks for motorcycles and heavy vehicles.</li>
            <li>Interactive classrooms equipped with digital learning aids.</li>
            <li>Simulated driving environments for advanced training.</li>
            <li>Online support for theory lessons and practice tests.</li>
          </ul>

          {/* Entry Requirements */}
          <h2 className="text-2xl text-emerald-600 font-bold mb-6">Entry Requirements</h2>
          <ul className="list-disc pl-6 space-y-2 mb-12">
            <li>Minimum age: 18 years.</li>
            <li>National ID or Passport.</li>
            <li>Basic literacy and communication skills.</li>
            <li>Medical clearance for specific categories (e.g., heavy vehicles).</li>
          </ul>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-emerald-400 to-blue-400 p-6 rounded-xl shadow-lg text-dark">
            <h3 className="text-2xl font-bold mb-4">Enroll Today!</h3>
            <p className="mb-4">
              Start your driving journey with the Trendy Driving School. We’re committed to your success on the road and
              beyond.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://portal.trendyvocationaltrainingcentre.com/admissions/apply"
                className="bg-dark text-white py-3 px-6 rounded-full font-semibold hover:bg-opacity-90 transition"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="border border-primary text-primary py-3 px-6 rounded-full font-semibold hover:bg-primary hover:text-white transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  )
}
