import { Head, Link } from "@inertiajs/react"
import HomeLayout from "@/layouts/home-layout"
import AnimatedHero from "@/components/animated-hero-section"

export const metadata = {
  title: "Our Team | Trendy Vocational Training Centre",
  description: "Meet our dedicated team of administrators, faculty, and staff at Trendy Vocational Training Centre.",
}

const administrators = [
  {
    name: "Cavin Boss",
    title: "Director",
    bio: "Cavin Boss has over 15 years of experience in vocational education leadership. His extensive experience includes Educational Administration and is passionate about providing quality, accessible vocational training.",
    image: "/images/director.jpeg",
  },
  {
    name: "Mr. David Ochieng",
    title: "Deputy Principal, Academics",
    bio: "With a Master's in Technical Education and 12 years of teaching experience, Mr. Ochieng oversees all academic programs and curriculum development at the centre.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Ms. Sarah Kimani",
    title: "Deputy Principal, Administration",
    bio: "Ms. Kimani brings her extensive background in business management to oversee the administrative functions of the centre, ensuring smooth operations and resource management.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const faculty = [
  {
    name: "Mr. John Kamau",
    department: "ICT Department",
    title: "Head of ICT",
    bio: "A certified IT professional with industry experience at leading tech companies. Specializes in networking and database management.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Ms. Grace Wanjiku",
    department: "Beauty Therapy Department",
    title: "Senior Instructor",
    bio: "A renowned beauty therapist with over 10 years of salon experience and 5 years in teaching. Certified in international beauty therapy standards.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Mr. Peter Maina",
    department: "Building & Construction Department",
    title: "Department Head",
    bio: "A civil engineer with extensive experience in construction projects across East Africa. Brings practical industry knowledge to the classroom.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Chef Mary Njeri",
    department: "Catering Department",
    title: "Lead Instructor",
    bio: "A professional chef with experience in 5-star hotels and restaurants. Specializes in both local and international cuisine.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Mr. Samuel Otieno",
    department: "Graphic Design Department",
    title: "Instructor",
    bio: "A creative professional with a background in advertising and digital media. Holds certifications in Adobe Creative Suite and UI/UX design.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Ms. Elizabeth Wangari",
    department: "Computerized Accounting Department",
    title: "Senior Instructor",
    bio: "A certified accountant with experience in both corporate and educational settings. Expert in QuickBooks and other accounting software.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function TeamPage() {
  return (
    <HomeLayout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
      </Head>

      <AnimatedHero
        title="Our Team"
        subtitle="Meet the dedicated professionals who make Trendy Vocational Training Centre a center of excellence in vocational education."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-6 font-semibold ">Administration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {administrators.map((admin, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={admin.image || "/placeholder.svg"}
                    alt={admin.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{admin.name}</h3>
                  <p className="text-primary font-medium mb-4">{admin.title}</p>
                  <p className="text-gray-600">{admin.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-6 font-semibold">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">{member.department}</span>
                  <h3 className="text-xl font-semibold mt-1">{member.name}</h3>
                  <p className="text-gray-700 font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto py-4 text-center rounded-lg border-2 border-emerald-400">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-emerald-500">Join Our Team</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            We&apos;re always looking for talented and passionate individuals to join our team of educators and staff. If
            you&apos;re interested in making a difference in vocational education, check out our current openings.
          </p>
          <Link href="/careers" className="rounded-lg px-4 py-2 border-2 border-emerald-600 text-emerald-600 inline-block">
            View Career Opportunities
          </Link>
        </div>
      </section>
    </HomeLayout>
  )
}
