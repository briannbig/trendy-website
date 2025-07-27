import HomeLayout from "@/layouts/home-layout"
import { Head, Link } from "@inertiajs/react"
import { Clock, Calendar, Award, Brush, Users } from "lucide-react"

export const metadata = {
  title: "Graphic Design Program | Trendy Vocational Training Centre",
  description:
    "Master the art of visual communication with our Graphic Design program, covering design principles, software tools, and creative techniques.",
}

export default function GraphicDesignPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-4">Graphic Design Program</h1>
              <p className="text-lg">
                Transform your creativity into impactful visuals with our Graphic Design program. Learn essential skills
                for a career in visual communication.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/graphic-design-training.jpeg"
                alt="Graphic Design Training"
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
              <p>6 Months</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Calendar size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Start Dates</h3>
              </div>
              <p>January, April, August</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Award size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Certification</h3>
              </div>
              <p>Professional Graphic Design Certification</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Brush size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Study Mode</h3>
              </div>
              <p>Full-time or Part-time</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
              <p className="mb-4">
                The Graphic Design program is tailored to develop your creative talents and technical skills. Learn the
                fundamentals of design, branding, and visual storytelling using industry-standard tools like Adobe
                Photoshop, Illustrator, and InDesign.
              </p>
              <p className="mb-4">
                This program focuses on practical, hands-on learning to ensure students build a professional portfolio
                showcasing their design capabilities.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6">Learning Outcomes</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Master graphic design software and tools.</li>
                <li>Understand principles of typography, layout, and color theory.</li>
                <li>Develop skills in branding and visual identity creation.</li>
                <li>Create engaging digital and print materials.</li>
                <li>Build a strong portfolio for career opportunities.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-6">Facilities and Resources</h2>
              <p className="mb-4">
                Students will have access to fully equipped computer labs, the latest design software, and guidance from
                experienced graphic design professionals. You will also work on real-world projects to enhance your
                practical skills.
              </p>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Program Details</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Faculty</h4>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary mr-2" />
                    <p>Experienced designers with industry expertise</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Career Opportunities</h4>
                  <ul className="space-y-1">
                    <li>Graphic Designer</li>
                    <li>Brand Designer</li>
                    <li>Illustrator</li>
                    <li>Visual Content Creator</li>
                    <li>Marketing Materials Designer</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Entry Requirements</h4>
                  <ul className="space-y-1">
                    <li>Basic computer literacy</li>
                    <li>Creativity and passion for design</li>
                    <li>High school certificate or equivalent</li>
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
