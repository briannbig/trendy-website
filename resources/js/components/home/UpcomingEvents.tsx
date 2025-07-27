import { Link } from "@inertiajs/react"
import { Calendar, Clock, MapPin } from "lucide-react"

const events = [
  {
    title: "Open Day",
    date: "June 15, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Main Campus",
    description: "Explore our facilities, meet instructors, and learn about our programs.",
    link: "/events/open-day",
  },
  {
    title: "Career Fair",
    date: "July 10, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Exhibition Hall",
    description: "Connect with potential employers and explore career opportunities.",
    link: "/events/career-fair",
  },
  {
    title: "Skills Workshop",
    date: "August 5, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Training Center",
    description: "Free workshop on essential workplace skills for all students and alumni.",
    link: "/events/skills-workshop",
  },
]

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-6 font-semibold">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="border-2 border-emerald-700 rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="bg-gray-50 text-emerald-700 border-b-2 border-emerald-700 p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-primary mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Clock size={18} className="text-primary mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin size={18} className="text-primary mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="text-gray-600 mb-4 border-t-2 border-emerald-800  pt-1">
                  {event.description}
                </div>
                
                <Link href={event.link} className="text-primary font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
