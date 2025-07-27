import { Link } from "@inertiajs/react"
import {
  Laptop,
  Monitor,
  HardHat,
  Utensils,
  Flower,
  Calculator,
  Table,
  Compass,
  Code,
  PaintbrushIcon as PaintBrush,
} from "lucide-react"

const programs = [
  {
    title: "Information Communication Technology",
    description:
      "A comprehensive ICT certificate program offering essential skills in information and communication technology",
    icon: <Laptop className="text-2xl text-emerald-700" />,
    image: "/images/students-learning.jpeg",
    link: "/academics/ict",
  },
  {
    title: "Computer Packages",
    description: "A foundational artisan-level course focused on mastering computer packages and software.",
    icon: <Monitor className="text-2xl text-emerald-700" />,
    image: "/images/packages.jpeg",
    link: "/academics/computer-packages",
  },
  {
    title: "Building & Construction",
    description:
      "Comprehensive training in construction techniques, site management, and building technologies for aspiring construction professionals.",
    icon: <HardHat className="text-2xl text-emerald-700" />,
    image: "/images/trendy-building-and-construction.jpeg",
    link: "/academics/building-construction",
  },
  {
    title: "Catering",
    description:
      "Learn culinary arts, food safety, menu planning, and kitchen management for a successful career in the hospitality industry.",
    icon: <Utensils className="text-2xl text-emerald-700" />,
    image: "/images/trendy-catering.jpeg",
    link: "/academics/catering",
  },
  {
    title: "Beauty Therapy",
    description: "A specialized certificate in beauty therapy, providing hands-on skills for the beauty industry.",
    icon: <Flower className="text-2xl text-emerald-700" />,
    image: "/images/trendy-training-team.jpeg",
    link: "/academics/beauty-therapy",
  },
  {
    title: "Computerized Accounting",
    description:
      "A certificate in computerized accounting that equips students with knowledge of modern accounting systems.",
    icon: <Calculator className="text-2xl text-emerald-700" />,
    image: "/images/quickbooks.avif",
    link: "/academics/computerized-accounting",
  },
  {
    title: "Advanced Excel",
    description:
      "An advanced Excel course, designed to deepen students' expertise in spreadsheet functions and data analysis.",
    icon: <Table className="text-2xl text-emerald-700" />,
    image: "/images/excel.avif",
    link: "/academics/advanced-excel",
  },
  {
    title: "Archicad",
    description: "Focuses on architectural design and CAD tools for planning and drafting",
    icon: <Compass className="text-2xl text-emerald-700" />,
    image: "/images/Archicad-logo-1.png",
    link: "/academics/archicad",
  },
  {
    title: "Web Design",
    description: "A certificate program in web design, focusing on the creation and design of professional websites",
    icon: <Code className="text-2xl text-emerald-700" />,
    image: "/images/html-css.png",
    link: "/academics/web-design",
  },
  {
    title: "Graphic Design",
    description: "A certificate in graphic design, teaching creative design techniques for visual communication",
    icon: <PaintBrush className="text-2xl text-emerald-700" />,
    image: "/images/trendy-team.jpeg",
    link: "/academics/graphic-design",
  },
]

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-6 font-semibold">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Link
              href={program.link}
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={`${program.title} Training`}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                  width={400}
                  height={200}
                />
              </div>
              <div className="p-6">
                <div className="program-icon">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-700 group-hover:text-emerald-900 transition duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/academics" className="btn-primary inline-block">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection
