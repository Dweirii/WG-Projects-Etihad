"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    }, 1000)
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
              placeholder="+964 (0) 123 456 789"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="products">Product Information</option>
              <option value="partnership">Partnership Opportunities</option>
              <option value="support">Customer Support</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-5 h-5 mr-2 inline-block" />
                Send Message
              </>
            )}
          </Button>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            Something went wrong. Please try again later.
          </div>
        )}
      </form>
    </div>
  )
}

