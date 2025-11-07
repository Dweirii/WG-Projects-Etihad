import { Button } from "@/components/ui/button"
import { Building2, Award, Globe, TrendingUp } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-size-[50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-balance">
              About <span className="text-[#B8860B]">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Excellence in Food Industry Since 2012
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Stats Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-white/16 bg-white/80 backdrop-blur-[10px] p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#B8860B]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">3+</div>
                    <div className="text-sm text-gray-600">Major Companies</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/16 bg-white/80 backdrop-blur-[10px] p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#B8860B]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">25+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/16 bg-white/80 backdrop-blur-[10px] p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[#B8860B]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">MENA</div>
                    <div className="text-sm text-gray-600">Regional Leader</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Description */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-lg mb-8">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="text-pretty text-xl font-medium text-gray-900">
                Etihad Group was founded in 2012 and encompasses leading companies in the food and agricultural
                industries, most notably:
              </p>

              {/* Companies List */}
              <ul className="space-y-4 pl-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-2 shrink-0 text-[#B8860B] font-bold">•</span>
                  <span className="text-pretty">Etihad Food Industries Company</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 shrink-0 text-[#B8860B] font-bold">•</span>
                  <span className="text-pretty">Rayan Company for Oil Extraction and Vegetable Feed</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 shrink-0 text-[#B8860B] font-bold">•</span>
                  <span className="text-pretty">
                    Karbala Agricultural City, which includes specialized poultry production companies such as: Sama
                    Karbala, Sahara Karbala, Bawadi Karbala, and Sama Al-Reef.
                  </span>
                </li>
              </ul>

              <p className="text-pretty pt-4 border-t border-gray-200">
                Since its establishment, Etihad Group has emerged as one of the most prominent players in the food
                industry across the Middle East and globally.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button size="lg" className="bg-[#B8860B] hover:bg-[#9A7209] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Our Companies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
