import { Package, Wheat, Droplets, Egg } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    id: 1,
    title: "Premium Sugar Refining",
    description: "Producing 100,000 tons of refined sugar annually to exacting purity standards.",
    icon: <Package className="w-8 h-8 text-[#B8860B]" />,
  },
  {
    id: 2,
    title: "Flour Milling",
    description: "Delivering high-quality flour from the finest wheat, with extensive capacity.",
    icon: <Wheat className="w-8 h-8 text-[#B8860B]" />,
  },
  {
    id: 3,
    title: "Cooking Oils & Ghee",
    description: "Manufacturing premium refined oils and ghee with strong commitment to purity and taste.",
    icon: <Droplets className="w-8 h-8 text-[#B8860B]" />,
  },
  {
    id: 4,
    title: "Fresh Poultry & Eggs",
    description: "Halal-certified production ensuring safe and reliable poultry supply.",
    icon: <Egg className="w-8 h-8 text-[#B8860B]" />,
  },
]

export default function WhatWeDo() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-balance">
              What We <span className="text-[#B8860B]">Do</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Excellence in food production across multiple industries
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-[#B8860B]/10 group-hover:bg-[#B8860B]/20 transition-colors">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#B8860B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

