import HomeLayout from "@/layouts/home-layout"
import { Head, Link } from "@inertiajs/react"
import { Clock, Calendar, Award, Code, Users } from "lucide-react"

export const metadata = {
  title: "Web Design Program | Trendy Vocational Training Centre",
  description:
    "Learn to create professional websites with our comprehensive Web Design program, covering HTML, CSS, JavaScript, and design principles.",
}

export default function WebDesignPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-4">Web Design Program</h1>
              <p className="text-lg">
                Build modern and responsive websites with our Web Design program. Master the skills needed to excel in
                the digital world.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/web-design-training.jpeg"
                alt="Web Design Training"
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
              <p>Professional Web Design Certification</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-2">
                <Code size={24} className="text-primary mr-2" />
                <h3 className="font-semibold">Study Mode</h3>
              </div>
              <p>Full-time or Part-time</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
              <p className="mb-4">
                The Web Design program equips students with the skills to create visually appealing, user-friendly, and
                functional websites. Learn to use tools like HTML, CSS, JavaScript, and design software to build
                websites that stand out.
              </p>
              <p className="mb-4">
                This program combines theoretical knowledge with practical applications, ensuring you gain the
                confidence to start a career in web design or enhance your current skill set.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6">Learning Outcomes</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Design responsive and mobile-friendly websites.</li>
                <li>Master HTML, CSS, and JavaScript for front-end development.</li>
                <li>Understand user experience (UX) and user interface (UI) design principles.</li>
                <li>Build interactive features and animations.</li>
                <li>Optimize websites for performance and accessibility.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-6">Facilities and Resources</h2>
              <p className="mb-4">
                The program provides access to modern computer labs, industry-leading software, and mentorship from
                experienced web designers. Students will work on real-world projects to build a portfolio.
              </p>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Program Details</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Faculty</h4>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary mr-2" />
                    <p>Experienced web designers and developers</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Career Opportunities</h4>
                  <ul className="space-y-1">
                    <li>Web Designer</li>
                    <li>Front-End Developer</li>
                    <li>UI/UX Designer</li>
                    <li>Freelance Web Developer</li>
                    <li>Digital Content Creator</li>
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
