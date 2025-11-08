import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface EtihadSugarProduct {
  id: number
  name: string
  image: string
  description: string
  category: "bulk" | "retail"
}

const etihadSugarProducts: EtihadSugarProduct[] = [
  {
    id: 1,
    name: "Etihad Sugar – 1 Ton Jumbo Bag",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/sugar/1-TON.png",
    description: "Industrial-sized 1-ton sugar bag packaged for factories, bakeries, and wholesale buyers. Heavy-duty woven material designed for bulk storage and export logistics.",
    category: "bulk",
  },
  {
    id: 2,
    name: "Etihad Sugar – 25 kg Bag",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/sugar/25-kg%20Background%20Removed.png",
    description: "Standard 25-kilogram sugar sack made from durable woven fabric. Ideal for supermarkets, bakeries, and catering supply chains, featuring clean white packaging with bold labeling.",
    category: "bulk",
  },
  {
    id: 3,
    name: "Etihad Sugar – 50 kg Bag",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/sugar/50-kg.png",
    description: "Large 50-kilogram packaging of refined white sugar. Suited for industrial use, large bakeries, and export markets. Simple, sturdy design ensures safe long-term storage.",
    category: "bulk",
  },
  {
    id: 4,
    name: "Etihad Sugar – Retail Pack (Design 1)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/sugar/IIIlll%20Background%20Removed.png",
    description: "Smaller retail sugar pack with clean minimal branding. Perfect for supermarket shelves and consumer markets emphasizing purity and local quality.",
    category: "retail",
  },
  {
    id: 5,
    name: "Etihad Sugar – Retail Pack (Design 2)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/sugar/lIIll%20Background%20Removed.png",
    description: "Compact consumer sugar bag variant with white and blue packaging. Designed for household kitchens and daily use.",
    category: "retail",
  },
  {
    id: 6,
    name: "Etihad Sugar – Retail Pack (Design 3)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/sugar/lIll%20Background%20Removed.png",
    description: "Mid-size retail sugar bag with a clean and refined layout. Balances aesthetic appeal and clarity for everyday retail visibility.",
    category: "retail",
  },
  {
    id: 7,
    name: "Etihad Sugar – Retail Pack (Design 4)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/sugar/lll%20Background%20Removed.png",
    description: "A variant retail sugar bag emphasizing simplicity and purity, suitable for modern branding and promotional display.",
    category: "retail",
  },
]

export default function EtihadSugarProductsPage() {
  const bulkProducts = etihadSugarProducts.filter((p) => p.category === "bulk")
  const retailProducts = etihadSugarProducts.filter((p) => p.category === "retail")

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
              <span className="text-gray-900">Etihad Sugar</span>
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
                Etihad Sugar <span className="text-[#B8860B]">Products</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Pure Sweetness - Quality You Can Trust
              </p>
            </div>
          </div>
        </section>

        {/* Products Sections */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Bulk Products */}
            {bulkProducts.length > 0 && (
              <div className="mb-16">
                <div className="mb-8 text-center">
                  <div className="inline-block mb-4">
                    <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Bulk & Industrial</h2>
                  <p className="text-gray-600">Designed for factories, bakeries, and wholesale buyers</p>
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

            {/* Retail Products */}
            {retailProducts.length > 0 && (
              <div>
                <div className="mb-8 text-center">
                  <div className="inline-block mb-4">
                    <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Retail Packs</h2>
                  <p className="text-gray-600">Perfect for supermarket shelves and consumer markets</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {retailProducts.map((product) => (
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

