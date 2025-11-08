import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface AlDarProduct {
  id: number
  name: string
  image: string
  description: string
  category: "oil" | "ghee" | "bulk"
}

const aldarProducts: AlDarProduct[] = [
  {
    id: 1,
    name: "Olein Oil – 20L",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/aldar/_Olein-Oil-20L.png",
    description: "A large 20-liter tin container of Al Dar Olein Oil featuring metallic gold branding. Ideal for restaurants and catering, highlighting purity and premium cooking performance.",
    category: "oil",
  },
  {
    id: 2,
    name: "Al Dar Cooking Oil – Standard Bottle",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/aldar/1.png",
    description: "Clear plastic bottle with bright yellow label and green accents. Everyday household oil for frying and cooking.",
    category: "oil",
  },
  {
    id: 3,
    name: "Al Dar Ghee – 5L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/aldar/Al%20Dar%205L%20Ghee.png",
    description: "A rectangular 5-liter tin of Al Dar Ghee with gold design and Arabic branding. Premium clarified butter for families or restaurants.",
    category: "ghee",
  },
  {
    id: 4,
    name: "Al Dar Ghee – 6L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/aldar/Al%20Dar%206L%20%20Ghee.png",
    description: "Large 6-liter tin of Al Dar Ghee in golden metallic packaging. Perfect for bulk cooking or catering services.",
    category: "ghee",
  },
  {
    id: 5,
    name: "Al Dar Ghee – 1.8L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/aldar/Al-Dar%201.8.png",
    description: "Medium 1.8-liter ghee tin with green and gold visuals. Rich, authentic taste for everyday cooking.",
    category: "ghee",
  },
  {
    id: 6,
    name: "Al Dar Ghee – 1L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/aldar/Al-Dar-1.png",
    description: "Compact 1-liter ghee tin featuring Al Dar's signature golden look. Perfect for small families and single use.",
    category: "ghee",
  },
  {
    id: 7,
    name: "Al Dar Ghee – 3L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/aldar/Al-Dar-3.png",
    description: "Mid-size 3-liter tin balancing convenience and value. Ideal for medium households, maintaining the same rich taste and aroma.",
    category: "ghee",
  },
  {
    id: 8,
    name: "Al Dar Ghee (Original Tin)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/aldar/Al-Dar.png",
    description: "The flagship Al Dar Ghee packaging — golden metallic tin with Arabic calligraphy and the classic Al Dar branding.",
    category: "ghee",
  },
  {
    id: 9,
    name: "Al Dar Ghee Carton – Bulk Pack",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/aldar/ALDAR-CARTIN-GHEE%20Background%20Removed.png",
    description: "A cardboard carton holding multiple Al Dar Ghee tins. Designed for wholesale, retail, or export packaging.",
    category: "bulk",
  },
  {
    id: 10,
    name: "Al Dar Ghee – 1.5kg Tub",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/aldar/Ghee%201.5g.png",
    description: "Round plastic tub (1.5kg) of Al Dar Ghee with tight lid and golden branding. Lightweight and convenient for household use.",
    category: "ghee",
  },
  {
    id: 11,
    name: "Olein Oil – 18L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/aldar/Olein-Oil-18L.png",
    description: "Large 18-liter metallic tin of Al Dar Olein Oil for heavy kitchen or catering use. Durable design with handle for easy pouring.",
    category: "oil",
  },
]

export default function AlDarProductsPage() {
  const oilProducts = aldarProducts.filter((p) => p.category === "oil")
  const gheeProducts = aldarProducts.filter((p) => p.category === "ghee")
  const bulkProducts = aldarProducts.filter((p) => p.category === "bulk")

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        {/* Hero Section */}
        <section className="relative bg-gray-50 py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-size-[50px_50px]"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
              <Link href="/" className="hover:text-[#B8860B] transition-colors">
                Home
              </Link>
              <span>{">"}</span>
              <Link href="/products" className="hover:text-[#B8860B] transition-colors">
                Products
              </Link>
              <span>{">"}</span>
              <span className="text-gray-900">Al-Dar</span>
            </div>

            {/* Back Button */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#B8860B] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>

            {/* Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-balance">
                Al-Dar <span className="text-[#B8860B]">Products</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Premium Cooking Oil & Ghee - Quality You Can Trust
              </p>
            </div>
          </div>
        </section>

        {/* Products Sections */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Cooking Oil Products */}
            <div className="mb-16">
              <div className="mb-8 text-center">
                <div className="inline-block mb-4">
                  <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Cooking Oil</h2>
                <p className="text-gray-600">Premium quality olein oil for all your cooking needs</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {oilProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Product Image */}
                    <div className="relative aspect-square w-full mb-6 bg-gray-50 rounded-xl overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ghee Products */}
            <div className="mb-16">
              <div className="mb-8 text-center">
                <div className="inline-block mb-4">
                  <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Ghee Products</h2>
                <p className="text-gray-600">Premium clarified butter with rich, authentic taste</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gheeProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Product Image */}
                    <div className="relative aspect-square w-full mb-6 bg-gray-50 rounded-xl overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bulk Products */}
            {bulkProducts.length > 0 && (
              <div>
                <div className="mb-8 text-center">
                  <div className="inline-block mb-4">
                    <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Bulk Packaging</h2>
                  <p className="text-gray-600">Designed for wholesale and retail distribution</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {bulkProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Product Image */}
                      <div className="relative aspect-square w-full mb-6 bg-gray-50 rounded-xl overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

