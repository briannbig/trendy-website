import { Users, Award, DollarSign } from "lucide-react"

const FeaturesSection = () => {
  return (
    <section className="bg-emerald-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Student-Focused */}
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Users size={40} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Student-Focused</h3>
            <p>Empowering Every Learner&apos;s Potential with personalized guidance and hands-on experiences.</p>
          </div>

          {/* Ministry Approved */}
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Award size={40} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ministry of Education Approved</h3>
            <p>Certified Excellence, Trusted Standards ensuring recognized qualifications.</p>
          </div>

          {/* Affordable */}
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <DollarSign size={40} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Affordable</h3>
            <p>Quality Education Within Your Reach without compromising on excellence.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
