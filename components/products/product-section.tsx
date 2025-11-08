import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
}: ProductSectionProps) {
  return (
    <section id={id} className={`relative ${backgroundColor} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${imagePosition === "left" ? "md:flex-row-reverse" : ""}`}
        >
          {/* Content */}
          <div className={`${imagePosition === "right" ? "md:order-1" : "md:order-2"} space-y-6`}>
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
                <div className="text-lg">Etihad Group</div>
              </div>
            </div>

            <div>
              {id === "al-dar" ? (
                <Link href="/products/aldar">
                  <Button
                    size="lg"
                    className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Explore more
                  </Button>
                </Link>
              ) : id === "fayroz" ? (
                <Link href="/products/fayroz">
                  <Button
                    size="lg"
                    className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Explore more
                  </Button>
                </Link>
              ) : id === "lazord" ? (
                <Link href="/products/lazord">
                  <Button
                    size="lg"
                    className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Explore more
                  </Button>
                </Link>
              ) : id === "rayan-sama-karbala" ? (
                <Link href="/products/rayan-sama-karbala">
                  <Button
                    size="lg"
                    className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Explore more
                  </Button>
                </Link>
              ) : id === "sawsan" ? (
                <Link href="/products/sawsan">
                  <Button
                    size="lg"
                    className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Explore more
                  </Button>
                </Link>
              ) : id === "etihad-sugar" ? (
                <Link href="/products/etihad-sugar">
                  <Button
                    size="lg"
                    className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Explore more
                  </Button>
                </Link>
              ) : (
                <Button
                  size="lg"
                  className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore more
                </Button>
              )}
            </div>
          </div>

          {/* Image */}
          <div className={`${imagePosition === "right" ? "md:order-2" : "md:order-1"}`}>
            <div className="relative">
              {/* Product Image */}
              <div className="relative w-full max-w-md mx-auto" style={{ aspectRatio: imageWidth && imageHeight ? `${imageWidth}/${imageHeight}` : '1/1' }}>
                <div className="absolute inset-0 bg-transparent  rounded-2xl transform scale-95"></div>
                <div className="relative w-full h-full flex items-center justify-center p-8 bg-transparent  rounded-2xl">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
