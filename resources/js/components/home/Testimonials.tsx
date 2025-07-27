const testimonials = [
  {
    name: "Jane Doe",
    program: "ICT Certificate",
    quote:
      "The hands-on training at Trendy Vocational transformed my career prospects. I secured a job within a month of graduation!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "John Smith",
    program: "Building & Construction",
    quote:
      "The instructors are industry professionals who provided practical knowledge that I use daily in my construction business.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Mary Johnson",
    program: "Beauty Therapy",
    quote:
      "Thanks to Trendy Vocational, I now run my own successful beauty salon. The skills I learned were exactly what I needed.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-6 font-semibold">Student Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-primary">{testimonial.program}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
