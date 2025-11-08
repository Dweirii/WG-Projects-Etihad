import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
      
      <div className="space-y-4">
        {/* Address */}
        <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-gray-200 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-[#B8860B]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Head Office</h3>
            <p className="text-gray-600 leading-relaxed">
              Meshahya, Babylon Province, Iraq
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-gray-200 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6 text-[#B8860B]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 leading-relaxed">
              <a href="tel:+964123456789" className="hover:text-[#B8860B] transition-colors">
                +964 (0) 123 456 789
              </a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-gray-200 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6 text-[#B8860B]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 leading-relaxed">
              <a href="mailto:info@etihadgroup.com" className="hover:text-[#B8860B] transition-colors">
                info@etihadgroup.com
              </a>
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-gray-200 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6 text-[#B8860B]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
            <div className="text-gray-600 leading-relaxed space-y-1">
              <p>Sunday - Thursday: 8:00 AM - 5:00 PM</p>
              <p>Friday - Saturday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

