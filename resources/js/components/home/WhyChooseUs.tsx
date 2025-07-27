const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 bg-white rounded-t-[40px]">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-10 text-4xl font-semibold">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <h3 className="text-xl text-emerald-700 font-semibold mb-2">Practical, Industry-Relevant Skills</h3>
              <p className="text-gray-600">
                Our hands-on vocational training equips you with the technical skills and expertise needed to thrive in
                today&apos;s competitive job market.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">2</span>
            </div>
            <div>
              <h3 className="text-xl text-emerald-700 font-semibold mb-2">Diverse, Tailored Programs</h3>
              <p className="text-gray-600">
                Whether you&apos;re passionate about technology, design, accounting, or beauty therapy, we offer a wide range
                of certificate courses to suit your interests.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">3</span>
            </div>
            <div>
              <h3 className="text-xl text-emerald-700 font-semibold mb-2">Affordable, Accessible Learning</h3>
              <p className="text-gray-600">
                We believe in providing quality education at a cost that makes it accessible to everyone, ensuring that
                you can pursue your dreams.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">4</span>
            </div>
            <div>
              <h3 className="text-xl text-emerald-700 font-semibold mb-2">Experienced Instructors & Modern Facilities</h3>
              <p className="text-gray-600">
                Learn from qualified instructors with real-world experience, using state-of-the-art facilities and
                up-to-date resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
