"use client"

import { Package, Wheat, Droplets, Egg, ShieldCheck, Zap } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const icons = [Package, Wheat, Droplets, Egg]

export default function WhatWeDo() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 rtl:text-right">
            <span className="text-sm font-bold tracking-widest text-[#B8860B] uppercase">{t.whatWeDo.capabilities}</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#031A31] mt-4 mb-6 leading-tight">{t.whatWeDo.title}</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
              {t.whatWeDo.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.whatWeDo.services.map((service, index) => {
              const Icon = icons[index]
              return (
                <div
                  key={index}
                  className="group p-10 rounded-[2.5rem] bg-[#fafafa] border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-[#B8860B]/20 transition-all duration-500 flex flex-col h-full text-center items-center"
                >
                  {/* Icon */}
                  <div className="mb-8 flex items-center justify-center w-20 h-20 rounded-[2rem] bg-white shadow-sm text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition-colors duration-500">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#031A31] mb-4 group-hover:text-[#B8860B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  <div className="mt-8 pt-8 border-t border-gray-100 w-full flex items-center justify-center gap-2 rtl:flex-row-reverse">
                    <ShieldCheck className="w-4 h-4 text-[#B8860B]" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.whatWeDo.certifiedStandards}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
