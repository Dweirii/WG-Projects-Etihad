"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useLanguage } from "@/lib/i18n/language-context"

const brands = [
  // ... brands array ...
]

export default function OurBrands() {
  const { t } = useLanguage()
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#B8860B] sm:text-5xl lg:text-6xl">{t.home.ourProducts.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t.home.ourProducts.subtitle}
          </p>
        </div>

        <div className="relative mb-16 px-12">
          <Carousel
            // ... opts ...
          >
            {/* ... content ... */}
          </Carousel>
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#B8860B] px-10 py-6 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#9A7209] hover:shadow-lg"
          >
            <Link href="/products">{t.home.ourCompanies.learnMore}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
