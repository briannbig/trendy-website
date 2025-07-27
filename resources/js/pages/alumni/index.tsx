import { Head, Link } from "@inertiajs/react"
import HomeLayout from "@/layouts/home-layout"
import { Briefcase, Award, GraduationCap, Users } from "lucide-react"
import AnimatedHero from "@/components/animated-hero-section"

export const metadata = {
  title: "Alumni | Trendy Vocational Training Centre",
  description:
    "Discover success stories from our alumni and learn about the impact of Trendy Vocational Training Centre on their careers.",
}

const successStories = [
  {
    name: "James Mwangi",
    program: "ICT Certificate",
    year: "2022",
    currentRole: "IT Support Specialist at Safaricom",
    story:
      "After completing my ICT certificate at Trendy Vocational, I secured an internship at Safaricom which later turned into a full-time position. The practical skills I gained during my training were exactly what employers were looking for.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Faith Wambui",
    program: "Beauty Therapy",
    year: "2021",
    currentRole: "Owner, Radiance Beauty Salon",
    story:
      "Within a year of graduating, I was able to open my own beauty salon in Naivasha. The business management skills combined with technical beauty therapy training gave me the confidence to become an entrepreneur.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Peter Odhiambo",
    program: "Building & Construction",
    year: "2020",
    currentRole: "Site Supervisor at Kings Construction Ltd",
    story:
      "The hands-on training at Trendy Vocational prepared me for real-world construction challenges. I started as a junior technician and quickly rose to a supervisory role due to my practical knowledge and problem-solving abilities.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Mary Njoki",
    program: "Catering Certificate",
    year: "2019",
    currentRole: "Head Chef at Lake Naivasha Resort",
    story:
      "My training at Trendy Vocational opened doors to the hospitality industry. The culinary skills and food safety knowledge I gained have been essential in my career progression to becoming a head chef at a prestigious resort.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function AlumniPage() {
  return (
    <HomeLayout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
      </Head>
      <AnimatedHero
        title="Alumni Success Stories"
        subtitle="Discover how our graduates have transformed their skills into successful careers and businesses."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl text-emerald-500 font-bold mb-6">Our Alumni Network</h2>
              <p className="mb-4">
                At Trendy Vocational Training Centre, we take pride in our growing network of successful alumni who are
                making significant contributions in various industries across Kenya and beyond.
              </p>
              <p className="mb-4">
                Our graduates leave with more than just technical skills – they develop problem-solving abilities,
                professional ethics, and entrepreneurial mindsets that help them thrive in their careers.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <GraduationCap size={30} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">500+</h3>
                  <p className="text-gray-600">Graduates</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Briefcase size={30} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">85%</h3>
                  <p className="text-gray-600">Employment Rate</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award size={30} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">50+</h3>
                  <p className="text-gray-600">Business Owners</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Alumni gathering"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-3xl text-emerald-500 font-bold mb-6">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-semibold">{story.name}</h3>
                  <p className="text-primary font-medium">{story.currentRole}</p>
                  <div className="flex space-x-4 text-sm text-gray-500 my-2">
                    <span>{story.program}</span>
                    <span>•</span>
                    <span>Class of {story.year}</span>
                  </div>
                  <p className="text-gray-600 mt-3">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-emerald-500 font-bold mb-6">Alumni Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center mb-4">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuing Education</h3>
              <p className="text-gray-600">
                Access to discounted advanced courses and workshops to further enhance your skills and stay updated with
                industry trends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center mb-4">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Support</h3>
              <p className="text-gray-600">
                Lifetime access to our career services, including job placement assistance, resume reviews, and
                interview preparation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Networking Opportunities</h3>
              <p className="text-gray-600">
                Regular alumni events, industry meetups, and an online community to connect with fellow graduates and
                industry professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Are you a Trendy Vocational alumnus? Update your information to stay connected with our community and access
            exclusive alumni benefits.
          </p>
          <Link href="/alumni/register" className="btn-primary inline-block mr-4">
            Update Your Information
          </Link>
          <Link href="/alumni/events" className="btn-secondary inline-block bg-primary text-white border-primary">
            Upcoming Alumni Events
          </Link>
        </div>
      </section>
    </HomeLayout>
  )
}
