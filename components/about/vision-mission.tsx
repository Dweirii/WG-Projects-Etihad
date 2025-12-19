"use client"

import Image from "next/image"
import { Target, Eye, Compass, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function VisionMission() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#fafafa] py-24 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-sm font-bold tracking-widest text-[#B8860B] uppercase">{t.footer.navigation}</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#031A31] mt-4 leading-tight">{t.nav.about}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Vision Card */}
            <div className="group bg-white rounded-[2.5rem] border border-gray-100 p-10 md:p-12 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 p-12 text-[#B8860B]/5 group-hover:text-[#B8860B]/10 transition-colors">
                <Eye className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 rounded-[2rem] bg-[#B8860B]/10 flex items-center justify-center text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition-colors duration-500">
                    <Eye className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#031A31]">
                    {t.nav.about} <span className="text-[#B8860B]">{t.aboutPage.hero.powerhouseTitle.split(" ")[0]}</span>
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium mb-8">
                  {t.home.aboutUs.description1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
