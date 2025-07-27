import { Head, Link } from "@inertiajs/react"
import HomeLayout from "@/layouts/home-layout"

export const metadata = {
  title: "Campus Tour | Trendy Vocational Training Centre",
  description: "Take a virtual tour of Trendy Vocational Training Centre's campus and facilities.",
}

const facilities = [
  {
    name: "Computer Labs",
    description:
      "Our state-of-the-art computer labs are equipped with the latest hardware and software to provide students with hands-on experience in various ICT programs.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Beauty Therapy Studios",
    description:
      "Dedicated spaces for beauty therapy training, featuring professional-grade equipment and products used in the industry.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Construction Workshop",
    description:
      "A spacious workshop where students learn practical building and construction skills using industry-standard tools and materials.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Culinary Kitchen",
    description:
      "A fully-equipped kitchen where catering students learn food preparation, cooking techniques, and presentation skills.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Design Studio",
    description:
      "Creative space for graphic design and web design students, featuring design software and collaborative work areas.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Library & Resource Center",
    description:
      "A quiet space for study and research, with textbooks, reference materials, and computer stations for online research.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function CampusTourPage() {
  return (
    <HomeLayout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
      </Head>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Campus Tour</h1>
          <p className="text-white text-center mt-4 max-w-3xl mx-auto text-lg">
            Explore our facilities and learning environments designed to provide hands-on, practical training.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[500px] rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/bUe-3jXQuzM"
                title="Trendy Vocational Training Centre Campus Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Welcome to Our Campus</h2>
              <p className="text-gray-600">
                Take a virtual tour of Trendy Vocational Training Centre. Our campus is designed to provide a conducive
                learning environment with modern facilities and equipment that prepare students for the workplace.
              </p>
            </div>
          </div>

          <h2 className="section-title">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Our Campus</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            We invite you to visit our campus in person to experience our facilities firsthand and speak with our
            instructors and current students.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Campus Visit Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">Moi South Lake Road, Naivasha, Kenya</p>
              </div>
              <div>
                <h4 className="font-semibold">Visit Hours</h4>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
              </div>
              <div>
                <h4 className="font-semibold">Contact</h4>
                <p className="text-gray-600">+254 793 632 888</p>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">trendyvocational@gmail.com</p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition text-center inline-block"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  )
}
