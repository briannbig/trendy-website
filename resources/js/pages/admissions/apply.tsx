import type React from "react"

import { useState } from "react"
import { Head, Link } from "@inertiajs/react"

export const metadata = {
  title: "Apply for Admission | Trendy Vocational Training Centre",
  description: "Start your application to Trendy Vocational Training Centre.",
}

import { CheckCircle } from "lucide-react"
import HomeLayout from "@/layouts/home-layout"

export default function ApplicationPage() {

  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    education: "",
    startDate: "",
    howHeard: "",
    message: "",
    agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const nextStep = () => {
    setFormStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setFormStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call to external service
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Success
      setSubmitSuccess(true)
      window.scrollTo(0, 0)

      // Redirect after 3 seconds
      setTimeout(() => {
        // todo
        // route
        // router.push("/admissions/thank-you")
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Application Submitted Successfully!</h1>
              <p className="mb-6">
                Thank you for applying to Trendy Vocational Training Centre. We have received your application and will
                contact you soon.
              </p>
              <p className="text-gray-600">Redirecting you to the confirmation page...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <HomeLayout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
      </Head>
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Application Form</h1>

            {/* Progress Steps */}
            <div className="flex justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
              <div className="flex justify-between w-full relative z-10">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 1 ? "bg-emerald-700 text-white" : "bg-gray-200 text-gray-500"}`}
                  >
                    1
                  </div>
                  <span className="text-sm mt-2">Personal Info</span>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 2 ? "bg-emerald-700 text-white" : "bg-gray-200 text-gray-500"}`}
                  >
                    2
                  </div>
                  <span className="text-sm mt-2">Program Selection</span>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 3 ? "bg-emerald-700 text-white" : "bg-gray-200 text-gray-500"}`}
                  >
                    3
                  </div>
                  <span className="text-sm mt-2">Review & Submit</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit}>
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                        Highest Level of Education *
                      </label>
                      <select
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select your education level</option>
                        <option value="primary">Primary School</option>
                        <option value="secondary">Secondary School (KCSE)</option>
                        <option value="certificate">Certificate</option>
                        <option value="diploma">Diploma</option>
                        <option value="degree">Bachelor&apos;s Degree</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6">Program Selection</h2>

                    <div>
                      <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                        Program of Interest *
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select a program</option>
                        <option value="ict">Information Communication Technology</option>
                        <option value="computer-packages">Computer Packages</option>
                        <option value="building-construction">Building & Construction</option>
                        <option value="catering">Catering</option>
                        <option value="beauty-therapy">Beauty Therapy</option>
                        <option value="computerized-accounting">Computerized Accounting</option>
                        <option value="advanced-excel">Advanced Excel</option>
                        <option value="archicad">Archicad</option>
                        <option value="web-design">Web Design</option>
                        <option value="graphic-design">Graphic Design</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Start Date *
                      </label>
                      <select
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select a start date</option>
                        <option value="january">January Intake</option>
                        <option value="may">May Intake</option>
                        <option value="september">September Intake</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="howHeard" className="block text-sm font-medium text-gray-700 mb-1">
                        How did you hear about us?
                      </label>
                      <select
                        id="howHeard"
                        name="howHeard"
                        value={formData.howHeard}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select an option</option>
                        <option value="friend">Friend or Family</option>
                        <option value="social-media">Social Media</option>
                        <option value="search">Search Engine</option>
                        <option value="newspaper">Newspaper</option>
                        <option value="event">Event or Fair</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Tell us anything else you'd like us to know about your application"
                      ></textarea>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition"
                      >
                        Previous Step
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6">Review & Submit</h2>

                    <div className="bg-light p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-4">Application Summary</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Full Name</p>
                          <p>
                            {formData.firstName} {formData.lastName}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Email Address</p>
                          <p>{formData.email}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Phone Number</p>
                          <p>{formData.phone}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Education Level</p>
                          <p>{formData.education}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Program of Interest</p>
                          <p>{formData.program}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Preferred Start Date</p>
                          <p>{formData.startDate}</p>
                        </div>
                      </div>

                      {formData.message && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-500">Additional Information</p>
                          <p>{formData.message}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="agreeToTerms" className="text-sm">
                        I confirm that the information provided is accurate and complete. I agree to the{" "}
                        <Link href="/terms-of-service" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </label>
                    </div>

                    {/* reCAPTCHA placeholder - would be implemented with actual reCAPTCHA in production */}
                    <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center h-[78px] bg-gray-50">
                      <p className="text-gray-500">Cannot contact reCAPTCHA</p>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition"
                      >
                        Previous Step
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.agreeToTerms}
                        className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
