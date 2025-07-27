import { Users, Award, BookOpen, Briefcase } from "lucide-react"

const StatsSection = () => {
  return (
    <section className="py-12 bg-gray-50 text-green-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-lg bg-light">
            <div className="flex justify-center mb-4">
              <Users size={40} className="text-primary" />
            </div>
            <h3 className="text-4xl font-bold mb-2">500+</h3>
            <p className="text-gray-600">Students Enrolled</p>
          </div>

          <div className="p-6 rounded-lg bg-light">
            <div className="flex justify-center mb-4">
              <Award size={40} className="text-primary" />
            </div>
            <h3 className="text-4xl font-bold mb-2">95%</h3>
            <p className="text-gray-600">Completion Rate</p>
          </div>

          <div className="p-6 rounded-lg bg-light">
            <div className="flex justify-center mb-4">
              <BookOpen size={40} className="text-primary" />
            </div>
            <h3 className="text-4xl font-bold mb-2">10+</h3>
            <p className="text-gray-600">Programs Offered</p>
          </div>

          <div className="p-6 rounded-lg bg-light">
            <div className="flex justify-center mb-4">
              <Briefcase size={40} className="text-primary" />
            </div>
            <h3 className="text-4xl font-bold mb-2">85%</h3>
            <p className="text-gray-600">Employment Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
