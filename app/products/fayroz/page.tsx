import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface FayrozProduct {
  id: number
  name: string
  image: string
  description: string
  category: "sunflower-oil" | "corn-oil" | "ghee" | "bulk"
}

const fayrozProducts: FayrozProduct[] = [
  {
    id: 1,
    name: "Fayroz Sunflower Oil – Carton Pack",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/CART.-SUN-1%20Background%20Removed.8-FRZ.png",
    description: "Wholesale carton box of Fayroz Sunflower Oil bottles, designed for retail and export. Clean yellow branding with a bright and natural look emphasizing healthy cooking.",
    category: "bulk",
  },
  {
    id: 2,
    name: "Fayroz Corn Oil – Carton Pack",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/CARTON.-CORN-FAROZ%20Background%20Removed.18.png",
    description: "A bulk carton containing multiple Fayroz Corn Oil bottles. Branded for wholesale or store shelves, promoting natural corn-based oil with quality assurance.",
    category: "bulk",
  },
  {
    id: 3,
    name: "Fayroz Corn Oil – 750ml Bottle",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/CIRN-750_1%20Background%20Removed.png",
    description: "Medium-sized 750ml bottle of Fayroz Corn Oil, perfect for home cooking. Sleek transparent bottle with golden-yellow oil and elegant green label.",
    category: "corn-oil",
  },
  {
    id: 4,
    name: "Fayroz Corn Oil – 1L Bottle",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/CORN-1%20Background%20Removed.8.png",
    description: "Standard 1-liter plastic bottle of Fayroz Corn Oil, featuring a practical grip and bright corn-themed branding. Ideal for everyday kitchen use.",
    category: "corn-oil",
  },
  {
    id: 5,
    name: "Fayroz Corn Oil – 900ml Bottle",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/CORN-900%20Background%20Removed.png",
    description: "Compact 900ml version of Fayroz Corn Oil, great for small families. Clear design emphasizing purity and freshness.",
    category: "corn-oil",
  },
  {
    id: 6,
    name: "Fayroz Corn Oil – 1L Premium Bottle",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/CORON-1-LIT%20Background%20Removed.png",
    description: "Premium 1-liter bottle of Fayroz Corn Oil with a modern yellow-and-green label. Designed to highlight nutritional benefits and purity.",
    category: "corn-oil",
  },
  {
    id: 7,
    name: "Fayroz Ghee – Classic Tin (3L)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/Fayroz--3.png",
    description: "A medium-sized 3-liter tin of Fayroz Ghee with signature yellow branding. Symbolizes rich flavor and high quality for daily use.",
    category: "ghee",
  },
  {
    id: 8,
    name: "Fayroz Ghee – 1L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/Fayroz-1.png",
    description: "Compact 1-liter version of Fayroz Ghee. Convenient and elegant design for households that prefer rich, aromatic ghee for cooking.",
    category: "ghee",
  },
  {
    id: 9,
    name: "Fayroz Ghee – 2L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/Fayroz-2.png",
    description: "A 2-liter tin of Fayroz Ghee with classic branding in yellow and red tones. Balances quality, taste, and practicality for daily cooking.",
    category: "ghee",
  },
  {
    id: 10,
    name: "Fayroz Ghee – 14L Tin (Bulk)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/Fayroz-Ghee------14L--_Easy-Resize%20Background%20Removed.com.png",
    description: "Large 14-liter metal tin of Fayroz Ghee, ideal for catering and restaurants. Premium packaging with golden details representing luxury and purity.",
    category: "ghee",
  },
  {
    id: 11,
    name: "Fayroz Ghee – 12L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/Fayroz-Ghee-12L--_Easy-Resize%20Background%20Removed.com.png",
    description: "Heavy-duty 12-liter tin of Fayroz Ghee, crafted for bulk buyers and culinary professionals seeking authentic ghee flavor in quantity.",
    category: "ghee",
  },
  {
    id: 12,
    name: "Fayroz Ghee – 6L Tin",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/Fayroz-Ghee-6L--235kb%20Background%20Removed.png",
    description: "Mid-size 6-liter tin packaging of Fayroz Ghee. Ideal for family use or small restaurants, maintaining the signature rich and creamy texture.",
    category: "ghee",
  },
  {
    id: 13,
    name: "Fayroz Sunflower Oil – 900ml Bottle",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/FAYROZ/SUN-900%20Background%20Removed.png",
    description: "Bright 900ml bottle of Fayroz Sunflower Oil with transparent packaging. Promotes a healthy lifestyle, light cooking, and everyday freshness.",
    category: "sunflower-oil",
  },
]

export default function FayrozProductsPage() {
  const sunflowerOilProducts = fayrozProducts.filter((p) => p.category === "sunflower-oil")
  const cornOilProducts = fayrozProducts.filter((p) => p.category === "corn-oil")
  const gheeProducts = fayrozProducts.filter((p) => p.category === "ghee")
  const bulkProducts = fayrozProducts.filter((p) => p.category === "bulk")

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
              <span className="text-gray-900">Fayroz</span>
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
                Fayroz <span className="text-[#B8860B]">Products</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Pure Ghee Excellence & Premium Cooking Oils - Quality You Can Trust
              </p>
            </div>
          </div>
        </section>

        {/* Products Sections */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Corn Oil Products */}
            {cornOilProducts.length > 0 && (
              <div className="mb-16">
                <div className="mb-8 text-center">
                  <div className="inline-block mb-4">
                    <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Corn Oil</h2>
                  <p className="text-gray-600">Natural corn-based oil with quality assurance</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cornOilProducts.map((product) => (
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

