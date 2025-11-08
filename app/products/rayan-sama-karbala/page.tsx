import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface RayanSamaKarbalaProduct {
  id: number
  name: string
  image: string
  description: string
  category: "cooking-oil" | "corn-oil" | "sunflower-oil"
}

const rayanSamaKarbalaProducts: RayanSamaKarbalaProduct[] = [
  {
    id: 1,
    name: "Rayan Sama Karbala – Cooking Oil (Design 1)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Rayan%20sama%20karblaa/Untitled-2_0000_SHADING-copy-3.png",
    description: "Premium-quality cooking oil bottle with golden hues and red cap. The design conveys freshness and purity, ideal for household cooking and frying.",
    category: "cooking-oil",
  },
  {
    id: 2,
    name: "Rayan Sama Karbala – Cooking Oil (Design 2)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Rayan%20sama%20karblaa/Untitled-2_0001_SHADING-copy-3.png",
    description: "A sleek variant of Rayan Sama Karbala cooking oil bottle, featuring softer shading and balanced proportions — positioned for supermarket shelves.",
    category: "cooking-oil",
  },
  {
    id: 3,
    name: "Rayan Sama Karbala – 1L Bottle (Render 1)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Rayan%20sama%20karblaa/Untitled-2_0002_SHADING-copy-1.png",
    description: "Refined 1-liter bottle render showing enhanced light reflections. Ideal for branding visuals and advertising layouts highlighting premium oil quality.",
    category: "cooking-oil",
  },
  {
    id: 4,
    name: "Rayan Sama Karbala – 1L Bottle (Brightness Variant)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Rayan%20sama%20karblaa/Untitled-2_0003_Brightness_Contrast-2-copy-2.png",
    description: "Brightened render emphasizing bottle transparency and the golden tone of the oil. Clean visual style suited for marketing materials.",
    category: "cooking-oil",
  },
  {
    id: 5,
    name: "Rayan Sama Karbala – Sunflower Oil (Design 3)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Rayan%20sama%20karblaa/Untitled-2_0004_SHADING-copy.png",
    description: "Sunflower oil packaging with soft gold and amber tones, representing purity and lightness for healthy cooking.",
    category: "sunflower-oil",
  },
  {
    id: 6,
    name: "Rayan Sama Karbala – Corn Oil (Design 1)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Rayan%20sama%20karblaa/Untitled-2_0005_SHADING-copy-2.png",
    description: "Corn oil variant emphasizing a warm yellow palette and clear bottle design. Perfect for households seeking light, digestible cooking oil.",
    category: "corn-oil",
  },
  {
    id: 7,
    name: "Rayan Sama Karbala – Corn Oil (Design 2)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Rayan%20sama%20karblaa/Untitled-2_0006_SHADING-copy.png",
    description: "Alternate corn oil packaging concept with realistic reflections and enhanced highlights for commercial photography or branding use.",
    category: "corn-oil",
  },
  {
    id: 8,
    name: "Rayan Sama Karbala – Cooking Oil (Render Series)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Rayan%20sama%20karblaa/Untitled-2_0007_SHADING-copy.png",
    description: "Part of the 3D visual lineup showcasing different lighting conditions for Rayan Sama Karbala bottle design consistency across campaigns.",
    category: "cooking-oil",
  },
  {
    id: 9,
    name: "Rayan Sama Karbala – Toon Render (Concept)",
    image: "https://WG-Global.b-cdn.net/Etihad/Brand/Rayan%20sama%20karblaa/Untitled-2_0009_TOON-copy-2.png",
    description: "Stylized, toon-shaded render of the Rayan Sama Karbala bottle. Used for mockups, digital ads, or illustrative packaging proposals.",
    category: "cooking-oil",
  },
]

export default function RayanSamaKarbalaProductsPage() {
  const cookingOilProducts = rayanSamaKarbalaProducts.filter((p) => p.category === "cooking-oil")
  const cornOilProducts = rayanSamaKarbalaProducts.filter((p) => p.category === "corn-oil")
  const sunflowerOilProducts = rayanSamaKarbalaProducts.filter((p) => p.category === "sunflower-oil")

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
              <span className="text-gray-900">Rayan Sama Karbala</span>
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
                Rayan Sama Karbala <span className="text-[#B8860B]">Products</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Premium Cooking Oils - Quality You Can Trust
              </p>
            </div>
          </div>
        </section>

        {/* Products Sections */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Cooking Oil Products */}
            {cookingOilProducts.length > 0 && (
              <div className="mb-16">
                <div className="mb-8 text-center">
                  <div className="inline-block mb-4">
                    <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Cooking Oil</h2>
                  <p className="text-gray-600">Premium-quality cooking oil for household cooking and frying</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cookingOilProducts.map((product) => (
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

            {/* Corn Oil Products */}
            {cornOilProducts.length > 0 && (
              <div className="mb-16">
                <div className="mb-8 text-center">
                  <div className="inline-block mb-4">
                    <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Corn Oil</h2>
                  <p className="text-gray-600">Light, digestible cooking oil perfect for households</p>
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

