"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, locale, setLocale } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.companies, href: "/companies" },
    { name: t.nav.news, href: "/news" },
    { name: t.nav.contact, href: "/contact" },
  ]

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/etihad-logo-main%202-KuGw7ZECLMQD28sUoleriXPX3Hz8Tv.png"
                alt="Etihad Group"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-blue-800">{t.footer.brand}</h1>
              <p className="text-xs text-brand-gold-600 hidden sm:block">{t.footer.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand-green-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 font-bold text-[#B8860B]"
            >
              <Globe className="w-4 h-4" />
              {locale === "en" ? "العربية" : "English"}
            </Button>
            <Button
              asChild
              className="bg-[#B8860B] text-white"
            >
              <Link href="/contact">
                <span className="flex items-center justify-center text-white">
                  {t.nav.contactUs}
                  <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
                </span>
              </Link>
            </Button>
          </div>

          {/* Updated Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 font-bold text-[#B8860B]"
            >
              <Globe className="w-4 h-4" />
              {locale === "en" ? "ع" : "EN"}
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Updated Mobile Menu Section */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100">
              <div className="container mx-auto px-4 py-6">
                {/* Mobile Navigation */}
                <nav className="space-y-1 mb-6">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between py-4 px-4 text-gray-800 hover:text-brand-green-600 hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 rtl:rotate-180" />
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#B8860B] text-white font-semibold py-4 rounded-xl shadow-lg"
                  >
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <span className="flex items-center justify-center text-white">
                        {t.nav.contactUs}
                        <ArrowRight className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
                      </span>
                    </Link>
                  </Button>
                </div>

                {/* Mobile Company Info */}
                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-600 mb-2">{t.footer.tagline}</p>
                  <p className="text-xs text-brand-gold-600 font-medium">25+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
