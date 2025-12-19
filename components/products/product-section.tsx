"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

interface ProductSectionProps {
  title: string
  subtitle: string
  description: string
  image: string
  backgroundColor: string
  textColor: string
  imagePosition: "left" | "right"
  id?: string
  imageWidth?: number
  imageHeight?: number
  sectionIndex?: number
  totalSections?: number
}

export function ProductSection({
  title,
  subtitle,
  description,
  image,
  backgroundColor,
  textColor,
  imagePosition,
  id,
  imageWidth,
  imageHeight,
  sectionIndex = 0,
  totalSections = 5,
}: ProductSectionProps) {
  const { t, isRTL } = useLanguage()
  const isFirst = sectionIndex === 0
  const isLast = sectionIndex === totalSections - 1
  const diagonalHeight = 100 // Height of diagonal edge in pixels

  // Create clip-path for diagonal edges
  const getClipPath = () => {
    if (isFirst) {
      // First section - only bottom diagonal (sloping from left to right)
      return `polygon(0 0, 100% 0, 100% calc(100% - ${diagonalHeight}px), 0 100%)`
    } else if (isLast) {
      // Last section - only top diagonal (sloping from left to right)
      return `polygon(0 ${diagonalHeight}px, 100% 0, 100% 100%, 0 100%)`
    } else {
      // Middle sections - both top and bottom diagonals
      return `polygon(0 ${diagonalHeight}px, 100% 0, 100% calc(100% - ${diagonalHeight}px), 0 100%)`
    }
  }

  // Get margin top to overlap sections
  const getMarginTop = () => {
    if (isFirst) return '0'
    return `-${diagonalHeight}px` // Overlap by diagonal height
  }

  return (
    <section 
      id={id} 
      className={`relative overflow-hidden`}
      style={{ 
        marginTop: getMarginTop(),
        paddingTop: !isFirst ? `${diagonalHeight}px` : '0',
        paddingBottom: !isLast ? `${diagonalHeight}px` : '0',
        zIndex: totalSections - sectionIndex, // Ensure proper layering
      }}
    >
      {/* Background with diagonal edges */}
      <div 
        className={`absolute inset-0 ${backgroundColor}`}
        style={{
          clipPath: getClipPath(),
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${imagePosition === "left" ? (isRTL ? "" : "md:flex-row-reverse") : ""} ${isRTL && imagePosition === "right" ? "md:flex-row-reverse" : ""}`}
        >
          {/* Content */}
          <div className={`${imagePosition === "right" ? (isRTL ? "md:order-2" : "md:order-1") : (isRTL ? "md:order-1" : "md:order-2")} space-y-6 rtl:text-right`}>
            <div className="space-y-4">
              <h3 className={`text-xl font-semibold ${textColor} opacity-90`}>{subtitle}</h3>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-6 text-balance leading-tight`}>
              {title}
            </h2>
            <p className={`${textColor} text-lg mb-8 leading-relaxed opacity-90`}>{description}</p>

            {/* Brand Badge */}
            <div className="mb-8 inline-block px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30">
              <div className="text-white font-bold text-center">
                <div className="text-lg">{t.productsPage.brandBadge}</div>
              </div>
            </div>

            <div>
              {id === "al-dar" ? (
                <Link href="/products/aldar">
                  <Button
                    size="lg"
                    className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t.productsPage.exploreMore}
                  </Button>
                </Link>
              ) : id === "fayroz" ? (
                <Link href="/products/fayroz">
                  <Button
                    size="lg"
                    className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t.productsPage.exploreMore}
                  </Button>
                </Link>
              ) : id === "lazord" ? (
                <Link href="/products/lazord">
                  <Button
                    size="lg"
                    className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t.productsPage.exploreMore}
                  </Button>
                </Link>
              ) : id === "rayan-sama-karbala" ? (
                <Link href="/products/rayan-sama-karbala">
                  <Button
                    size="lg"
                    className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t.productsPage.exploreMore}
                  </Button>
                </Link>
              ) : id === "sawsan" ? (
                <Link href="/products/sawsan">
                  <Button
                    size="lg"
                    className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t.productsPage.exploreMore}
                  </Button>
                </Link>
              ) : id === "etihad-sugar" ? (
                <Link href="/products/etihad-sugar">
                  <Button
                    size="lg"
                    className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t.productsPage.exploreMore}
                  </Button>
                </Link>
              ) : (
                <Button
                  size="lg"
                  className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t.productsPage.exploreMore}
                </Button>
              )}
            </div>
          </div>

          {/* Image */}
          <div className={`${imagePosition === "right" ? (isRTL ? "md:order-1" : "md:order-2") : (isRTL ? "md:order-2" : "md:order-1")}`}>
            <div className="relative flex items-center justify-center">
              {/* Circular Product Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-2xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden p-6">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
