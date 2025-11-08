import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface SawsanProduct {
  id: number
  name: string
  image: string
  description: string
  category: "ghee" | "bulk"
}

const sawsanProducts: SawsanProduct[] = [
  {
    id: 1,
    name: "Sawsan Ghee – Carton Pack (2L Units)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/sawasan/CARTION-ALSASAWN-2-LI%20Background%20Removed.png",
    description: "Wholesale carton box containing multiple Sawsan Ghee tins (2-liter size). Designed for export and distribution, featuring clean white and gold branding that reflects quality and freshness.",
    category: "bulk",
  },
  {
    id: 2,
    name: "Sawsan Ghee – Classic Tin (Design 1)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/sawasan/Sawsan.png",
    description: "A traditional Sawsan Ghee tin featuring soft cream tones with golden typography. The design communicates purity and a rich, buttery texture ideal for everyday cooking.",
    category: "ghee",
  },
  {
    id: 3,
    name: "Sawsan Ghee – Classic Tin (Design 2)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/sawasan/Sawsan2.png",
    description: "An alternate version of Sawsan Ghee packaging, slightly darker tone with refined detailing. Reflects a premium, authentic Arabic aesthetic — crafted for both home and professional use.",
    category: "ghee",
  },
]

export default function SawsanProductsPage() {
  const gheeProducts = sawsanProducts.filter((p) => p.category === "ghee")
  const bulkProducts = sawsanProducts.filter((p) => p.category === "bulk")

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
              <span className="text-gray-900">Sawsan</span>
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
                Sawsan <span className="text-[#B8860B]">Products</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Premium Products - Quality You Can Trust
              </p>
            </div>
          </div>
        </section>

        {/* Products Sections */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Ghee Products */}
            {gheeProducts.length > 0 && (
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
            )}

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

