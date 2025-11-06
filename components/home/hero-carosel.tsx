"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

interface InfoCard {
  label: string
  value: string
}

interface Stat {
  label: string
  value: string
}

interface CTA {
  label: string
  href: string
}

interface SlideData {
  title: string
  subtitle: string
  blurb: string
  image: string
  locationText: string
  locationUrl: string
  infoCards: InfoCard[]
  features: string[]
  stats: Stat[]
  cta1: CTA
  cta2: CTA
}

const SLIDES: SlideData[] = [
  {
    title: "Etihad Sugar Refinery",
    subtitle: "State-of-the-Art Sugar Processing",
    blurb: "Our advanced sugar refinery processes 100,000 tons annually with 99.9% purity standards.",
    image: "https://static.wixstatic.com/media/fdd745_3bfebde2b2944ef1a47ccbcb0259d429~mv2.jpg",
    locationText: "Baghdad Industrial Zone",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=Baghdad%20Industrial%20Zone",
    infoCards: [
      { label: "Location", value: "Baghdad Industrial\nZone" },
      { label: "Established", value: "2008" },
      { label: "Capacity", value: "100,000 tons/year" },
    ],
    features: ["Automated Processing", "Quality Control Labs", "Environmental Standards"],
    stats: [
      { label: "Employees", value: "200+" },
      { label: "Annual Capacity", value: "100,000 tons/year" },
      { label: "Established", value: "2008" },
      { label: "Location", value: "Baghdad Industrial Zone" },
    ],
    cta1: { label: "Explore Sugar Products →", href: "https://example.com" },
    cta2: { label: "All Facilities", href: "#all" },
  },
  {
    title: "Karbala Agricultural City",
    subtitle: "Elite Poultry & Agricultural Operations",
    blurb: "World-class poultry facilities producing 2 million birds monthly with premium quality standards.",
    image: "https://static.wixstatic.com/media/fdd745_8b0eaf16e9474834b4e7829b7a49a821~mv2.jpg",
    locationText: "Karbala Province",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=Karbala%20Province",
    infoCards: [
      { label: "Location", value: "Karbala Province" },
      { label: "Established", value: "2012" },
      { label: "Capacity", value: "2M birds/month" },
    ],
    features: ["Automated Feeding", "Climate Control", "Halal Certified"],
    stats: [
      { label: "Employees", value: "500+" },
      { label: "Annual Capacity", value: "2M birds/month" },
      { label: "Established", value: "2012" },
      { label: "Location", value: "Karbala Province" },
    ],
    cta1: { label: "View Poultry Products →", href: "https://example.com/poultry" },
    cta2: { label: "All Facilities", href: "#all" },
  },
  {
    title: "Lazord Oil Processing",
    subtitle: "Premium Oils & Ghee Production",
    blurb: "Advanced oil refining facility producing 50,000 tons/year of premium cooking oils and traditional ghee.",
    image: "https://static.wixstatic.com/media/fdd745_b27ca419c03946a2a3412facd9d6358e~mv2.jpg",
    locationText: "Basra Industrial Area",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=Basra%20Industrial%20Area",
    infoCards: [
      { label: "Location", value: "Basra Industrial Area" },
      { label: "Established", value: "2005" },
      { label: "Capacity", value: "50,000 tons/year" },
    ],
    features: ["Cold Press Technology", "Multi-Oil Processing", "Traditional Ghee"],
    stats: [
      { label: "Employees", value: "150+" },
      { label: "Annual Capacity", value: "50,000 tons/year" },
      { label: "Established", value: "2005" },
      { label: "Location", value: "Basra Industrial Area" },
    ],
    cta1: { label: "Discover Oil Products →", href: "https://example.com/oils" },
    cta2: { label: "All Facilities", href: "#all" },
  },
  {
    title: "Etihad Flour Mill",
    subtitle: "Modern Wheat Processing",
    blurb: "High-capacity flour mill processing finest wheat into premium flour products for commercial use.",
    image: "https://static.wixstatic.com/media/fdd745_5cf60a485e9e41aa8ebf07f935437054~mv2.jpeg",
    locationText: "Babylon Province",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=Babylon%20Province",
    infoCards: [
      { label: "Location", value: "Babylon Province" },
      { label: "Established", value: "2010" },
      { label: "Capacity", value: "200,000 tons/year" },
    ],
    features: ["Automated Milling", "Quality Testing", "Multiple Grades"],
    stats: [
      { label: "Employees", value: "120+" },
      { label: "Annual Capacity", value: "200,000 tons/year" },
      { label: "Established", value: "2010" },
      { label: "Location", value: "Babylon Province" },
    ],
    cta1: { label: "Browse Flour Products →", href: "https://example.com/flour" },
    cta2: { label: "All Facilities", href: "#all" },
  },
  {
    title: "Advanced Poultry Complex",
    subtitle: "Integrated Poultry Operations",
    blurb: "Comprehensive poultry complex with hatchery, growing facilities, and processing units.",
    image: "https://static.wixstatic.com/media/fdd745_4be52187c668413eb3031d4354cd52ab~mv2.jpg",
    locationText: "Karbala Agricultural Zone",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=Karbala%20Agricultural%20Zone",
    infoCards: [
      { label: "Location", value: "Karbala Agricultural Zone" },
      { label: "Established", value: "2012" },
      { label: "Capacity", value: "Integrated Operations" },
    ],
    features: ["Hatchery Operations", "Feed Production", "Processing Plant"],
    stats: [
      { label: "Employees", value: "300+" },
      { label: "Annual Capacity", value: "Integrated Operations" },
      { label: "Established", value: "2012" },
      { label: "Location", value: "Karbala Agricultural Zone" },
    ],
    cta1: { label: "Learn More →", href: "https://example.com/complex" },
    cta2: { label: "All Facilities", href: "#all" },
  },
]

const INTERVAL = 6000

export function FacilityHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const currentSlide = SLIDES[currentIndex]

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex((index + SLIDES.length) % SLIDES.length)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isHovered) return

    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length)
    }, INTERVAL)
    
    return () => clearTimeout(timer)
  }, [currentIndex, isPlaying, isHovered])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
      if (e.key === " ") {
        e.preventDefault()
        togglePlay()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, togglePlay])

  // Touch swipe support
  useEffect(() => {
    let touchStartX: number | null = null

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX === null) return
      const touchEndX = e.changedTouches[0].clientX
      const diff = touchStartX - touchEndX

      if (Math.abs(diff) > 40) {
        if (diff > 0) nextSlide()
        else prevSlide()
      }
      touchStartX = null
    }

    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchend", handleTouchEnd)
    return () => {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [nextSlide, prevSlide])

  return (
    <div
      className="relative w-full h-screen overflow-hidden rounded-none bg-black shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Facility slideshow"
    >
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ transform: "scale(1.03)", willChange: "transform" }}
          />
          {/* Overlays */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/72 via-black/32 to-black/12" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/66 via-black/20 to-black/0" />
        </div>
      ))}

      {/* Live Badge */}
      <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/18 px-2.5 py-1 text-xs md:left-[18px] md:top-[18px] md:gap-2 md:px-3 md:py-1.5 md:text-sm text-emerald-100 backdrop-blur-md">
        <span className="inline-block h-1.5 w-1.5 md:h-2 md:w-2 animate-pulse rounded-full bg-emerald-400" />
        <span className="hidden sm:inline">Live Facility Tour</span>
        <span className="sm:hidden">Live</span>
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1200px] items-end gap-4 px-4 pb-20 md:items-center md:gap-8 md:px-6 md:pb-0 lg:gap-8">
        {/* Left Content */}
        <div className="flex-1 w-full">
          <h1 className="mb-1.5 md:mb-2 text-balance text-[clamp(24px,6vw,64px)] font-bold leading-[1.1] md:leading-[1.05] text-white">
            {currentSlide.title}
          </h1>
          <div className="text-[clamp(14px,3vw,22px)] md:text-[clamp(16px,2.2vw,22px)] text-white/78">{currentSlide.subtitle}</div>
          <p className="mt-2 md:mt-2.5 max-w-[640px] text-sm md:text-base text-white/65 leading-relaxed">{currentSlide.blurb}</p>

          {/* Info Cards */}
          <div className="mt-3 md:mt-[18px] flex flex-wrap gap-2.5 md:gap-3.5">
            {currentSlide.infoCards.map((card, idx) => {
              const isLocation = card.label.toLowerCase() === "location"
              const content = (
                <div
                  key={idx}
                  className="w-full sm:w-[calc(50%-0.625rem)] md:w-[230px] rounded-xl md:rounded-2xl border border-white/16 bg-white/10 p-3 md:p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-[10px]"
                >
                  <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/65">{card.label}</div>
                  <div className="mt-0.5 md:mt-1 whitespace-pre-line text-sm md:text-base font-semibold text-white">{card.value}</div>
                </div>
              )

              return isLocation ? (
                <a
                  key={idx}
                  href={currentSlide.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  {content}
                </a>
              ) : (
                <div key={idx}>{content}</div>
              )
            })}
          </div>

          {/* Feature Chips */}
          <div className="mt-3 md:mt-4 flex flex-wrap gap-2 md:gap-2.5">
            {currentSlide.features.map((feature, idx) => (
              <span
                key={idx}
                className="rounded-full border border-white/16 bg-white/12 px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm text-white/78 backdrop-blur-md"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-3 md:mt-4 flex flex-col sm:flex-row flex-wrap gap-2 md:gap-2.5">
            <a
              href={currentSlide.cta1.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd15a] px-4 py-3 md:py-2.5 text-sm md:text-base font-semibold text-black transition-transform active:scale-95 md:hover:scale-105 touch-manipulation"
            >
              {currentSlide.cta1.label}
            </a>
            <a
              href={currentSlide.cta2.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-3 md:py-2.5 text-sm md:text-base font-semibold text-white backdrop-blur-md transition-transform active:scale-95 md:hover:scale-105 touch-manipulation"
            >
              {currentSlide.cta2.label}
            </a>
          </div>
        </div>

        {/* Right Panel - Desktop Only */}
        <aside className="hidden flex-[0_0_420px] lg:block">
          <div className="rounded-[22px] border border-white/16 bg-white/10 p-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-[14px]">
            <h3 className="text-center text-xl font-bold text-white">Facility Overview</h3>
            <small className="mt-1 block text-center text-white/65">Advanced Manufacturing Excellence</small>
            <div className="mt-4">
              {currentSlide.stats.map((stat, idx) => {
                const isLocation = stat.label.toLowerCase() === "location"
                return (
                  <div key={idx} className="flex justify-between gap-4 border-b border-white/12 py-3 last:border-b-0">
                    <div className="text-white/65">{stat.label}</div>
                    <div className="font-semibold text-white">
                      {isLocation ? (
                        <a
                          href={currentSlide.locationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {stat.value}
                        </a>
                      ) : (
                        stat.value
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-2.5 flex items-center gap-2 text-emerald-200">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Currently Operating
            </div>
          </div>
        </aside>
      </div>

      {/* Navigation Controls */}
      <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-between px-2 md:px-2.5">
        <button
          onClick={prevSlide}
          className="pointer-events-auto grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full border border-white/22 bg-black/45 backdrop-blur-md transition-transform active:scale-95 md:hover:scale-110 touch-manipulation"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full border border-white/22 bg-black/45 backdrop-blur-md transition-transform active:scale-95 md:hover:scale-110 touch-manipulation"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </button>
      </div>

      {/* Bottom HUD */}
      <div className="absolute bottom-2.5 md:bottom-3.5 left-0 right-0 z-40 mx-auto flex max-w-[960px] items-center gap-2 md:gap-2.5 px-3 md:px-4">
        <button
          onClick={togglePlay}
          className="grid h-8 w-8 md:h-9 md:w-9 place-items-center rounded-full border border-white/22 bg-black/45 backdrop-blur-md transition-transform active:scale-95 md:hover:scale-110 touch-manipulation"
          aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
        >
          {isPlaying ? (
            <Pause className="h-3.5 w-3.5 md:h-4 md:w-4 fill-white text-white" />
          ) : (
            <Play className="h-3.5 w-3.5 md:h-4 md:w-4 fill-white text-white" />
          )}
        </button>

        {/* Dots */}
        <div className="flex gap-1.5 md:gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 w-2 md:h-2.5 md:w-2.5 rounded-full border border-white/50 transition-all touch-manipulation ${
                idx === currentIndex ? "bg-white" : "bg-white/35"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="flex-1 overflow-hidden rounded-full bg-white/25">
          <div
            className="h-1 md:h-1.5 bg-white transition-all duration-500 ease-linear"
            style={{
              width: `${((currentIndex + 1) / SLIDES.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
