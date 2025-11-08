import Image from "next/image"
import { Target, Eye } from "lucide-react"

export default function VisionMission() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-balance">
              Our Vision & <span className="text-[#B8860B]">Mission</span>
            </h2>
          </div>

          {/* Image Section */}
          <div className="mb-12 md:mb-16">
            <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://static.wixstatic.com/media/fdd745_b485bda1c6ee43c48a538a02fc9dbec7~mv2.jpg/v1/fill/w_1470,h_850,fp_0.54_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-40.jpg"
                alt="Etihad Group Facilities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Vision & Mission Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-[#B8860B]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our <span className="text-[#B8860B]">Vision</span>
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Etihad Group aspires to be a global leader in the food and agricultural industries by delivering high-quality products that meet international standards. The Group is dedicated to achieving sustainability and continuous growth, while remaining committed to innovation and development to ensure leadership in both local and global markets.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#B8860B]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our <span className="text-[#B8860B]">Mission</span>
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Etihad Group is committed to delivering high-quality food and industrial products that meet the needs and expectations of consumers. We implement the latest global production technologies to ensure efficiency and sustainability. Our mission centers on sustainable growth and strengthening our role as a key contributor to the development of the food and agricultural sector both locally and internationally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

