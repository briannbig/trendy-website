import { Link } from "@inertiajs/react"

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Start Your Journey?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Join Trendy Vocational Training Centre and gain the skills you need for a successful career. Applications are
          now open for our upcoming intake.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="https://portal.trendyvocationaltrainingcentre.com/admissions/apply"
            className="bg-accent text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition text-center"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
