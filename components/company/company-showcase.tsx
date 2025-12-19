"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

export default function CompanyShowcase() {
  const { t, isRTL } = useLanguage()

  const companyImages = [
    "https://static.wixstatic.com/media/fdd745_6090cb454587470990ef3bbd6cead383~mv2.jpg/v1/fill/w_1470,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-35%202.jpg",
    "https://static.wixstatic.com/media/fdd745_f13400d554604d7e8358a1a92aab2f41~mv2.jpg/v1/fill/w_1470,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-39%202.jpg",
    "https://static.wixstatic.com/media/fdd745_84ca085c8f63441588bdd5b70f93a656~mv2.jpg/v1/fill/w_1440,h_892,al_c,q_85,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-39%203.jpg",
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center rtl:text-right">
          <h2 className="mb-4 text-4xl font-bold text-[#B8860B] md:text-5xl">{t.companiesPage.title}</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            {t.companiesPage.subtitle}
          </p>
        </div>

        <div className="space-y-24">
          {t.companiesPage.companies.map((company, index) => (
            <div
              key={company.name}
              className={`flex flex-col gap-8 ${index % 2 === 0 ? (isRTL ? "lg:flex-row-reverse" : "lg:flex-row") : (isRTL ? "lg:flex-row" : "lg:flex-row-reverse")} lg:items-start`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
                  <div className="relative aspect-3/4 w-full md:aspect-4/5 lg:aspect-4/4">
                    <Image
                      src={companyImages[index] || "/placeholder.svg"}
                      alt={company.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 lg:pt-0 rtl:text-right">
                <div className="space-y-6">
                  {/* Company Name with decorative line */}
                  <div className="space-y-3">
                    <div className={`h-1 w-16 rounded-full bg-[#B8860B] ${isRTL ? 'mr-0 ml-auto' : ''}`} />
                    <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">{company.name}</h3>
                  </div>

                  {/* Description */}
                  <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
                    {company.description.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-pretty">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
