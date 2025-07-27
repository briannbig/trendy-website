import { Link } from "@inertiajs/react"

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-green-100/20 z-10 opacity-70"></div>
        {/* Background Image */}
        <img
          src="/images/grad-pic-1.jpeg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full container mx-auto px-4">
        <div className="flex flex-col justify-center h-full pt-24">
          <div className="max-w-2xl">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Shape Your Future with Practical Skills
            </h1>
            {/* Subtitle */}
            <p className="text-xl mb-8 text-white ">
              Trendy Vocational Training Centre offers industry-ready programs
              designed to transform your career path with hands-on experience and expert guidance.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row text-white space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="https://portal.trendyvocationaltrainingcentre.com/admissions/apply" className="rounded-full bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 px-4 py-3 ">
                Start Your Journey
              </Link>
              <Link href="/academics" className="rounded-full bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 px-4 py-3 ">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
