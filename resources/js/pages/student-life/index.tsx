import HomeLayout from "@/layouts/home-layout"
import { Link } from "@inertiajs/react"
import { Camera, Users, Award } from "lucide-react"

export const metadata = {
  title: "Student Life | Trendy Vocational Training Centre",
  description:
    "Experience a vibrant student life at Trendy Vocational Training Centre with various activities, clubs, and events.",
}

export default function StudentLifePage() {
  return (
    <HomeLayout>
      <section className="pt-32 pb-16 ">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 text-center">Student Life</h1>
          <p className="text-center mt-4 max-w-3xl mx-auto text-lg">
            At Trendy Vocational Training Centre, we believe in providing a well-rounded educational experience that
            extends beyond the classroom.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Campus Experience</h2>
              <p className="mb-4">
                Our campus provides a conducive environment for learning and personal growth. With modern facilities,
                dedicated study areas, and recreational spaces, students have everything they need to succeed.
              </p>

              <p className="mb-4">
                We foster a supportive community where students from diverse backgrounds come together to learn,
                collaborate, and grow. Our instructors are not just teachers but mentors who guide students through
                their educational journey.
              </p>
              <Link href="/student-life/campus-tour" className="btn-primary inline-block">
                Take a Virtual Campus Tour
              </Link>
            </div>
            <div>
              <img
                src="/images/student-life.jpeg"
                alt="Campus Life"
                width={600}
                
                className="rounded-xl shadow-lg max-w-80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-6 font-semibold">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Student 1"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">David Kamau</h3>
                  <p className="text-primary">ICT Graduate, 2024</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Studying at Trendy Vocational was the best decision I made for my career. The hands-on training and
                supportive environment prepared me for the real world. I secured a job at a leading tech company within
                two months of graduation.&quot;
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Student 2"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">Sarah Njeri</h3>
                  <p className="text-primary">Beauty Therapy Graduate, 2023</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;The beauty therapy program at Trendy Vocational gave me all the skills I needed to start my own salon.
                The instructors were experienced professionals who shared practical knowledge that I use every day in my
                business.&quot;
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Student 3"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">James Omondi</h3>
                  <p className="text-primary">Building & Construction Graduate, 2024</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;I came to Trendy Vocational with little knowledge about construction, but the program transformed me
                into a skilled professional. The practical training sessions and industry visits were invaluable. I now
                work with a major construction company in Nairobi.&quot;
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/student-life/#" className="text-white bg-emerald-500 px-4 py-2 rounded-full inline-block">
              Read More Success Stories
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-semibold mb-6">Clubs & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Users size={30} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Entrepreneurship Club</h3>
              <p className="text-gray-600 text-center">
                Develop business skills, network with successful entrepreneurs, and learn how to turn your vocational
                skills into a successful business.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Camera size={30} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Creative Arts Club</h3>
              <p className="text-gray-600 text-center">
                Express yourself through photography, design, and digital arts. Showcase your work and collaborate with
                fellow creative minds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Award size={30} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Skills Competition Team</h3>
              <p className="text-gray-600 text-center">
                Represent Trendy Vocational in local and national skills competitions. Sharpen your technical abilities
                and gain recognition.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Upcoming Student Activities</h3>
            <div className="space-y-4">
              <div className="bg-light p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-emerald-700 text-white p-2 rounded-lg mr-4 text-center min-w-[60px]">
                    <span className="block text-sm">JUN</span>
                    <span className="block text-xl font-bold">15</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Career Fair</h4>
                    <p className="text-gray-600">
                      Connect with potential employers and explore career opportunities in your field.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-emerald-700 text-white p-2 rounded-lg mr-4 text-center min-w-[60px]">
                    <span className="block text-sm">JUL</span>
                    <span className="block text-xl font-bold">22</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Skills Showcase</h4>
                    <p className="text-gray-600">
                      An exhibition where students demonstrate their vocational skills to the community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-emerald-700 text-white p-2 rounded-lg mr-4 text-center min-w-[60px]">
                    <span className="block text-sm">AUG</span>
                    <span className="block text-xl font-bold">10</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Entrepreneurship Workshop</h4>
                    <p className="text-gray-600">
                      Learn how to start and grow your own business with guidance from successful entrepreneurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-500 to-blue-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-dark font-bold mb-6">Experience Campus Life</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Join our vibrant community and make the most of your educational journey at Trendy Vocational Training
            Centre.
          </p>
          <Link
            href="https://portal.trendyvocationaltrainingcentre.com/admissions/apply"
            className="bg-accent text-dark px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition text-center inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </HomeLayout>
  )
}
