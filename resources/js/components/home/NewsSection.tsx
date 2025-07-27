import { Link } from "@inertiajs/react"

const news = [
  {
    title: "New Computer Lab Opened",
    date: "May 10, 2025",
    excerpt: "Trendy Vocational Training Centre has opened a state-of-the-art computer lab with the latest technology.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/new-computer-lab",
  },
  {
    title: "Partnership with Local Businesses",
    date: "April 25, 2025",
    excerpt:
      "We've established new partnerships with local businesses to provide internship opportunities for our students.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/business-partnerships",
  },
  {
    title: "Student Wins National Competition",
    date: "March 15, 2025",
    excerpt: "One of our graphic design students has won first place in a national design competition.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/news/student-wins-competition",
  },
]

const NewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-6 font-semibold">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link href={item.link} className="text-primary font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection
