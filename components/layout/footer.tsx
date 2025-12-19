"use client"

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      id="professional-footer"
      className="relative text-white overflow-hidden"
    >
      {/* Base Gradient Background - Dark to Light to Dark */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #031A31 0%, #0a2a42 20%, #1a4a6a 35%, #3a6a8a 50%, #1a4a6a 65%, #0a2a42 80%, #031A31 100%)',
        }}
      />
      
      {/* Fluid Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(58, 106, 138, 0.6) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(3, 26, 49, 0.8) 0%, transparent 50%)',
        }}
      />
      
      {/* Subtle Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(58,106,138,0.15) 0%, transparent 60%)',
        }}
      />

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Content Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-4 mb-6 rtl:space-x-reverse">
              <div className="relative w-24 h-16 p-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/etihad-logo-main%202-KuGw7ZECLMQD28sUoleriXPX3Hz8Tv.png"
                  alt="Etihad Group"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{t.footer.brand}</h3>
                <p className="text-gray-300 text-sm">{t.footer.tagline}</p>
              </div>
            </Link>

            <p className="text-white leading-relaxed text-base">
              {t.footer.description}
            </p>
          </div>

          {/* Middle Column - Navigation */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-3">
              {[
                { name: t.nav.about, href: "/about" },
                { name: t.nav.products, href: "/products" },
                { name: t.nav.companies, href: "/companies" },
                { name: t.nav.contact, href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-4">{t.footer.contactInfo}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-white mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-white mb-1">{t.footer.headOffice}</div>
                  <span className="text-gray-300 text-sm">{t.footer.address}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <div>
                  <div className="font-semibold text-white mb-1">{t.footer.phone}</div>
                  <span className="text-gray-300 text-sm" dir="ltr">+964 (0) 123 456 789</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <div>
                  <div className="font-semibold text-white mb-1">{t.footer.email}</div>
                  <span className="text-gray-300 text-sm">info@etihadgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rtl:left-8 rtl:right-auto w-12 h-12 bg-[#B8860B] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </footer>
  )
}
