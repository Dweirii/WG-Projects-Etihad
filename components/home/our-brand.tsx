"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const brands = [
  {
    name: "Etihad Sugar",
    image:
      "https://static.wixstatic.com/media/fdd745_f864c4261bf74eb6a6cbf3b869130cf6~mv2.png/v1/fill/w_312,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6.png",
    width: 312,
    height: 208,
  },
  {
    name: "Aqeeq",
    image:
      "https://static.wixstatic.com/media/fdd745_d7f01987d9f842a7974b63d7a9834d8b~mv2.png/v1/fill/w_346,h_230,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png",
    width: 346,
    height: 230,
  },
  {
    name: "Aldar Ghee",
    image:
      "https://static.wixstatic.com/media/fdd745_9e1f14dcb0b543b896830d98c811246c~mv2.png/v1/crop/x_291,y_0,w_4630,h_2945/fill/w_352,h_224,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.png",
    width: 352,
    height: 224,
  },
  {
    name: "Al Sows",
    image:
      "https://static.wixstatic.com/media/fdd745_ba49c8524cfb4239a648ec2230319743~mv2.png/v1/fill/w_395,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7.png",
    width: 395,
    height: 264,
  },
  {
    name: "Fayrouz",
    image:
      "https://static.wixstatic.com/media/fdd745_f532045a8c7b477383b975027e267c6f~mv2.png/v1/fill/w_349,h_234,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8.png",
    width: 349,
    height: 234,
  },
  {
    name: "Lazord",
    image:
      "https://static.wixstatic.com/media/fdd745_d5f9bb081bde4e77bc1293ff25c0eb0a~mv2.png/v1/crop/x_0,y_0,w_4862,h_1927/fill/w_360,h_142,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10.png",
    width: 360,
    height: 142,
  },
  {
    name: "Al Rayan",
    image:
      "https://static.wixstatic.com/media/fdd745_895ded74462848a99c04e2dc12d46475~mv2.png/v1/fill/w_373,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9.png",
    width: 373,
    height: 248,
  },
  {
    name: "Bawadi",
    image:
      "https://static.wixstatic.com/media/fdd745_c8147bc4c03642f7a2ddcffdb57d8910~mv2.png/v1/fill/w_379,h_253,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11.png",
    width: 379,
    height: 253,
  },
]

export default function OurBrands() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#B8860B] sm:text-5xl lg:text-6xl">Our Products</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover our premium range of food products, trusted by families across the region
          </p>
        </div>

        <div className="relative mb-16 px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {brands.map((brand) => (
                <CarouselItem key={brand.name} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="group relative flex h-64 items-center justify-center rounded-2xl bg-transparent p-8  transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    <div className="flex items-center justify-center">
                      <Image
                        src={brand.image || "/placeholder.svg"}
                        alt={brand.name}
                        width={brand.width}
                        height={brand.height}
                        className="h-auto w-full max-w-[180px] object-contain transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white" />
            <CarouselNext className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white" />
          </Carousel>
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="rounded-full bg-[#B8860B] px-10 py-6 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#9A7209] hover:shadow-lg"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  )
}
