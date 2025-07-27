import { Head, Link } from "@inertiajs/react"
import HomeLayout from "@/layouts/home-layout"
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import AnimatedHero from "@/components/animated-hero-section"

export const metadata = {
  title: 'Careers | Trendy Vocational Training Centre',
  description: 'Explore career opportunities at Trendy Vocational Training Centre and join our team of dedicated professionals.',
}

const jobOpenings = [
  {
    title: "ICT Instructor",
    department: "ICT Department",
    type: "Full-time",
    location: "Naivasha Campus",
    posted: "May 10, 2025",
    description: "We are seeking an experienced ICT instructor to teach courses in our Information Communication Technology program. The ideal candidate will have industry experience and a passion for teaching.",
    id: "ict-instructor-2025"
  },
  {
    title: "Beauty Therapy Instructor",
    department: "Beauty Therapy Department",
    type: "Part-time",
    location: "Naivasha Campus",
    posted: "May 5, 2025",
    description: "Join our Beauty Therapy department as a part-time instructor. Candidates should have professional experience in beauty therapy and excellent communication skills.",
    id: "beauty-instructor-2025"
  },
  {
    title: "Administrative Assistant",
    department: "Administration",
    type: "Full-time",
    location: "Naivasha Campus",
    posted: "April 28, 2025",
    description: "We are looking for an organized and efficient Administrative Assistant to support our administrative team. Responsibilities include managing correspondence, scheduling, and maintaining records.",
    id: "admin-assistant-2025"
  },
  {
    title: "Student Affairs Coordinator",
    department: "Student Services",
    type: "Full-time",
    location: "Naivasha Campus",
    posted: "April 20, 2025",
    description: "The Student Affairs Coordinator will oversee student activities, provide guidance and support to students, and help create a positive learning environment.",
    id: "student-affairs-2025"
  }
]

export default function CareersPage() {
  return (
    <HomeLayout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
      </Head>
      <AnimatedHero
        title="Careers"
        subtitle="Join our team of dedicated professionals and make a difference in vocational education."
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
            <p className="text-gray-600">
              At Trendy Vocational Training Centre, we&apos;re committed to providing quality education and training to our students. We value our staff and provide a supportive, collaborative work environment where you can grow professionally while making a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Meaningful Work</h3>
              <p className="text-gray-600">
                Make a direct impact on students&apos; lives and contribute to workforce development in Kenya.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Growth</h3>
              <p className="text-gray-600">
                Opportunities for continuous learning, skill development, and career advancement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
              <p className="text-gray-600">
                Join a collaborative team that values innovation, diversity, and excellence in education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" p-16 bg-slate-50">
        <h2 className="text-3xl mb-6 font-semibold">Current Openings</h2>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-primary">{job.department}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <Link
                      href={`/careers/${job.id}`}
                      className="bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Briefcase size={16} className="mr-1" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>Posted: {job.posted}</span>
                  </div>
                </div>

                <p className="text-gray-600">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-6 ">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-1 bg-emerald-400"></div>

              <div className="relative z-10 mb-12">
                <div className="flex">
                  <div className="flex-shrink-0 bg-emerald-700 text-white w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
                    <p className="text-gray-600">
                      Browse our current openings and submit your application online with your CV, cover letter, and any required documents.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mb-12">
                <div className="flex">
                  <div className="flex-shrink-0 bg-emerald-700 text-white w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Initial Screening</h3>
                    <p className="text-gray-600">
                      Our HR team will review your application and contact qualified candidates for an initial phone or video interview.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mb-12">
                <div className="flex">
                  <div className="flex-shrink-0 bg-emerald-700 text-white w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md flex-grow">
                    <h3 className="text-xl font-semibold mb-2">In-Person Interview</h3>
                    <p className="text-gray-600">
                      Selected candidates will be invited for an in-person interview with the department head and relevant team members.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex">
                  <div className="flex-shrink-0 bg-emerald-700 text-white w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Offer & Onboarding</h3>
                    <p className="text-gray-600">
                      Successful candidates will receive a job offer, and upon acceptance, will go through our comprehensive onboarding process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-emerald-400 to-blue-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl  font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Explore our current openings and take the first step toward a rewarding career at Trendy Vocational Training Centre.
          </p>
          <Link
            href="/careers/apply"
            className="bg-accent text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition text-center inline-block"
          >
            View All Openings
          </Link>
        </div>
      </section>
    </HomeLayout>
  )
}
