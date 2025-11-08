import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface LazordProduct {
  id: number
  name: string
  image: string
  description: string
  category: "ghee" | "sunflower-oil" | "bulk"
}

const lazordProducts: LazordProduct[] = [
  {
    id: 1,
    name: "Lazord Ghee – Carton Pack",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/lazord/carton-lazord-ghee%20Background%20Removed.png",
    description: "Wholesale carton of Lazord Ghee tins, designed for retail and export. Distinctive blue-and-gold branding communicates richness and quality.",
    category: "bulk",
  },
  {
    id: 2,
    name: "Lazord Sunflower Oil – Carton Pack",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/lazord/carton-lazord-sun%20Background%20Removed.png",
    description: "Bulk carton containing Lazord Sunflower Oil bottles. Modern packaging for supermarkets or distributors, highlighting purity and lightness.",
    category: "bulk",
  },
  {
    id: 3,
    name: "Lazord Ghee – 12 L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/lazord/LAZOD-12-LIT.%20Background%20Removed.png",
    description: "Large 12-liter tin of Lazord Ghee with metallic gold body and blue branding. Intended for restaurants and catering operations that rely on premium clarified butter.",
    category: "ghee",
  },
  {
    id: 4,
    name: "Lazord Ghee – Classic Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/lazord/Lazord%20Background%20Removed.png",
    description: "The signature Lazord Ghee tin, golden in color with royal blue accents and Arabic typography. Represents the core of the Lazord brand.",
    category: "ghee",
  },
  {
    id: 5,
    name: "Lazord Ghee – 1 L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/lazord/LAZORD-1%20Background%20Removed.5.png",
    description: "Compact 1-liter tin ideal for small families. Blue-and-gold design emphasizing authentic taste and freshness.",
    category: "ghee",
  },
  {
    id: 6,
    name: "Lazord Ghee – 14 L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/lazord/LAZORD-14-LIT.%20Background%20Removed.png",
    description: "Bulk 14-liter packaging of Lazord Ghee. Heavy-duty container suited for industrial kitchens and catering, showcasing premium gold visuals.",
    category: "ghee",
  },
  {
    id: 7,
    name: "Lazord Sunflower Oil – 750 ml Bottle",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/lazord/LAZORD-750%20Background%20Removed.png",
    description: "A 750 ml bottle of Lazord Sunflower Oil with clear yellow tone and blue-label design, targeting household cooking with a focus on health and lightness.",
    category: "sunflower-oil",
  },
  {
    id: 8,
    name: "Lazord Ghee – 1 L Tin (Variant 1)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Lazord/1.png",
    description: "Classic one-liter tin variation of Lazord Ghee showing slightly different packaging layout. Elegant gold surface with bold blue logo.",
    category: "ghee",
  },
  {
    id: 9,
    name: "Lazord Ghee – 2 L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Lazord/2.png",
    description: "2-liter tin of Lazord Ghee with premium metallic design. Great for families and daily use while maintaining creamy texture and aroma.",
    category: "ghee",
  },
  {
    id: 10,
    name: "Lazord Ghee – 3 L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Lazord/3.png",
    description: "Mid-size 3-liter packaging with traditional blue-gold combination. Ideal balance between convenience and volume for home or small-business kitchens.",
    category: "ghee",
  },
  {
    id: 11,
    name: "Lazord Ghee – 5 L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Lazord/5.png",
    description: "5-liter tin version of Lazord Ghee, durable and easy to store. The gold finish reflects the brand's high-end appeal and premium quality.",
    category: "ghee",
  },
]

export default function LazordProductsPage() {
  const gheeProducts = lazordProducts.filter((p) => p.category === "ghee")
  const sunflowerOilProducts = lazordProducts.filter((p) => p.category === "sunflower-oil")
  const bulkProducts = lazordProducts.filter((p) => p.category === "bulk")

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
              <span className="text-gray-900">Lazord</span>
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
                Lazord <span className="text-[#B8860B]">Products</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Quality You Can Trust - Premium Ghee & Cooking Oils
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
              <div className="mb-16">
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

            {/* Sunflower Oil Products */}
            {sunflowerOilProducts.length > 0 && (
              <div>
                <div className="mb-8 text-center">
                  <div className="inline-block mb-4">
                    <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Sunflower Oil</h2>
                  <p className="text-gray-600">Premium sunflower oil for healthy cooking</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sunflowerOilProducts.map((product) => (
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

