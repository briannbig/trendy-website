"use client"

import type React from "react"

import { useState } from "react"
import { Head, Link } from "@inertiajs/react"
import HomeLayout from "@/layouts/home-layout"
// import { useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle, Upload } from "lucide-react"

export const metadata = {
  title: "Apply for Job | Trendy Vocational Training Centre",
  description: "Submit your job application to Trendy Vocational Training Centre.",
}

export default function JobApplicationPage() {
  // const router = useRouter()
  const jobId = ""

  // In a real application, you would fetch the job details based on the ID
  const jobDetails = {
    title: "ICT Instructor",
    id: jobId,
    department: "ICT Department",
    type: "Full-time",
    location: "Naivasha Campus",
    posted: "May 10, 2025",
    description:
      "We are seeking an experienced ICT instructor to teach courses in our Information Communication Technology program. The ideal candidate will have industry experience and a passion for teaching.",
    requirements: [
      "Bachelor's degree in Computer Science, Information Technology, or related field",
      "Minimum 2 years of industry experience",
      "Previous teaching experience preferred",
      "Excellent communication and presentation skills",
      "Knowledge of current industry trends and technologies",
    ],
    responsibilities: [
      "Develop and deliver course content for ICT programs",
      "Assess student performance and provide constructive feedback",
      "Participate in curriculum development and improvement",
      "Maintain accurate records of student attendance and progress",
      "Collaborate with other instructors and staff members",
    ],
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coverLetter: "",
    agreeToTerms: false,
  })

  const [cvFile, setCvFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0])
    }
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
        // router.push("/careers/thank-you")
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <HomeLayout>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description}></meta>
        </Head>
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
                  review it shortly.
                </p>
                <p className="text-gray-600">Redirecting you to the confirmation page...</p>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    )
  }

  return (
    <HomeLayout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
      </Head>
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/careers" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Careers
            </Link>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h1 className="text-3xl font-bold mb-2">{jobDetails.title}</h1>
              <p className="text-primary mb-4">{jobDetails.department}</p>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                <span className="bg-light px-3 py-1 rounded-full">{jobDetails.type}</span>
                <span className="bg-light px-3 py-1 rounded-full">{jobDetails.location}</span>
                <span className="bg-light px-3 py-1 rounded-full">Posted: {jobDetails.posted}</span>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Job Description</h2>
                <p className="text-gray-600 mb-4">{jobDetails.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Requirements</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {jobDetails.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {jobDetails.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Apply for this Position</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                    Upload CV/Resume (PDF) *
                  </label>
                  <div className="border border-gray-300 rounded-md p-4">
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload size={24} className="text-gray-400 mb-2" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PDF (MAX. 5MB)</p>
                        </div>
                        <input
                          id="cv"
                          type="file"
                          accept=".pdf"
                          className="hidden"
                          onChange={handleFileChange}
                          required
                        />
                      </label>
                    </div>
                    {cvFile && <div className="mt-2 text-sm text-gray-600">Selected file: {cvFile.name}</div>}
                  </div>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Tell us why you're interested in this position and what makes you a good fit."
                  ></textarea>
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
                  <p className="text-gray-500">cannot contact reCAPTCHA</p>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeToTerms || !cvFile}
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

