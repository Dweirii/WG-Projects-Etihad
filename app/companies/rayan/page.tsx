"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { ArrowLeft, Factory, Droplets, Wheat, ShieldCheck, Gauge, Package, Zap } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

export default function RayanCompanyPage() {
  const { t, locale, isRTL } = useLanguage()

  const rayanInfo = {
    name: t.home.companies.rayan.name,
    logo: "https://static.wixstatic.com/media/fdd745_2e27215bc21f424f934ffb40ea02345a~mv2.png/v1/crop/x_63,y_0,w_4906,h_2104/fill/w_332,h_142,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png",
    description: t.home.aboutUs.description1,
    image: "https://static.wixstatic.com/media/fdd745_f13400d554604d7e8358a1a92aab2f41~mv2.jpg/v1/fill/w_1470,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-39%202.jpg",
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] text-slate-900 selection:bg-[#B8860B]/20">
      <Header />
      <main className="grow">
        {/* Modern Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10 ${isRTL ? 'rotate-180' : ''}`}></div>
            <Image
              src={rayanInfo.image}
              alt="Background"
              fill
              className="object-cover object-right opacity-30 scale-105 animate-pulse-slow"
              priority
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-3xl rtl:text-right">
              {/* Navigation and Logo */}
              <div className="flex flex-col gap-8 mb-12 rtl:items-end">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 hover:text-[#B8860B] transition-colors"
                >
                  <ArrowLeft className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
                  {t.rayanPage.backToHome}
                </Link>

                <div className="inline-block p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 w-fit">
                  <Image
                    src={rayanInfo.logo}
                    alt={`${rayanInfo.name} logo`}
                    width={200}
                    height={86}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 rtl:flex-row-reverse rtl:justify-start">
                  <div className="h-[2px] w-12 bg-[#B8860B]"></div>
                  <span className="text-sm font-bold tracking-[0.2em] text-[#B8860B] uppercase">{t.rayanPage.subsidiary}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#031A31] tracking-tight leading-tight">
                  {rayanInfo.name} <span className="text-[#B8860B]">{t.rayanPage.companyTitle}</span>
                </h1>
                <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">
                  {t.rayanPage.tagline}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 rtl:text-right">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#031A31]">{t.rayanPage.overviewTitle}</h2>
                  <div className={`h-1.5 w-20 bg-[#B8860B] rounded-full ${isRTL ? 'mr-0 ml-auto' : ''}`}></div>
                </div>
                <p className="text-lg leading-relaxed text-gray-600 font-medium">
                  {t.home.aboutUs.description1}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start gap-4 rtl:flex-row-reverse">
                    <div className="p-3 rounded-xl bg-[#B8860B]/10 text-[#B8860B]">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="rtl:text-right">
                      <h4 className="font-bold text-[#031A31]">{t.rayanPage.highStandards}</h4>
                      <p className="text-sm text-gray-500">{t.rayanPage.opMain}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rtl:flex-row-reverse">
                    <div className="p-3 rounded-xl bg-[#B8860B]/10 text-[#B8860B]">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div className="rtl:text-right">
                      <h4 className="font-bold text-[#031A31]">{t.rayanPage.globalTalent}</h4>
                      <p className="text-sm text-gray-500">{t.rayanPage.attractingBest}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#B8860B]/20 to-transparent rounded-3xl blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-700"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={rayanInfo.image}
                    alt={rayanInfo.name}
                    width={1470}
                    height={800}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Facilities Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <span className="text-sm font-bold tracking-widest text-[#B8860B] uppercase">{t.rayanPage.infrastructure}</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#031A31] leading-tight">{t.rayanPage.facilitiesTitle}</h2>
              <p className="text-lg text-gray-500">{t.rayanPage.facilitiesDesc}</p>
            </div>

            <div className="grid gap-12 max-w-6xl mx-auto">
              {/* 1. Vegetable Oil Extraction Plant */}
              <div className="group relative bg-[#fafafa] rounded-[2.5rem] p-8 md:p-12 overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className={`absolute top-0 p-12 text-[#B8860B]/5 group-hover:text-[#B8860B]/10 transition-colors ${isRTL ? 'left-0' : 'right-0'}`}>
                  <Droplets className="w-64 h-64" />
                </div>
                
                <div className="relative z-10">
                  <div className={`flex flex-col md:flex-row md:items-center gap-6 mb-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                    <div className="p-5 rounded-2xl bg-white shadow-sm text-[#B8860B]">
                      <Droplets className="w-8 h-8" />
                    </div>
                    <div className="rtl:text-right">
                      <h3 className="text-3xl font-bold text-[#031A31]">{t.rayanPage.oilPlant.title}</h3>
                      <p className="text-[#B8860B] font-semibold mt-1">{t.rayanPage.oilPlant.subtitle}</p>
                    </div>
                  </div>

                  <div className={`grid lg:grid-cols-3 gap-8 ${isRTL ? 'rtl:text-right' : ''}`}>
                    <div className="lg:col-span-2 space-y-8">
                      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#B8860B]/20 transition-colors">
                        <h4 className={`text-xl font-bold text-[#031A31] mb-4 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Gauge className="w-5 h-5 text-[#B8860B]" />
                          {t.rayanPage.oilPlant.dailyOutput}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {t.rayanPage.oilPlant.dailyOutputDesc}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                          <h4 className="text-xl font-bold text-[#031A31] mb-4">{t.rayanPage.oilPlant.soybeanMeal}</h4>
                          <p className="text-gray-600 leading-relaxed">
                            {t.rayanPage.oilPlant.soybeanMealDesc}
                          </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                          <h4 className="text-xl font-bold text-[#031A31] mb-4">{t.rayanPage.oilPlant.packagingHub}</h4>
                          <p className="text-gray-600 leading-relaxed">
                            {t.rayanPage.oilPlant.packagingHubDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#B8860B] rounded-2xl p-8 text-white flex flex-col justify-center text-center shadow-xl relative overflow-hidden group/card">
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                      <div className="text-6xl font-black mb-2 tracking-tighter">4,700</div>
                      <div className="text-lg font-bold uppercase tracking-wider opacity-80">{t.rayanPage.oilPlant.stats}</div>
                      <div className="mt-8 pt-8 border-t border-white/20">
                        <p className="text-sm font-medium italic opacity-90">{t.rayanPage.oilPlant.extractionTech}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Feed Mill Plant */}
              <div className="group relative bg-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className={`absolute top-0 p-12 text-[#B8860B]/5 group-hover:text-[#B8860B]/10 transition-colors ${isRTL ? 'left-0' : 'right-0'}`}>
                  <Wheat className="w-64 h-64" />
                </div>
                
                <div className="relative z-10">
                  <div className={`flex flex-col md:flex-row md:items-center gap-6 mb-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                    <div className="p-5 rounded-2xl bg-[#fafafa] shadow-sm text-[#B8860B]">
                      <Wheat className="w-8 h-8" />
                    </div>
                    <div className="rtl:text-right">
                      <h3 className="text-3xl font-bold text-[#031A31]">{t.rayanPage.feedMill.title}</h3>
                      <p className="text-[#B8860B] font-semibold mt-1">{t.rayanPage.feedMill.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xl text-gray-600 mb-12 max-w-4xl leading-relaxed rtl:text-right">
                    {t.rayanPage.feedMill.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#fafafa] p-10 rounded-3xl border border-gray-100 group/stat hover:bg-white hover:border-[#B8860B]/20 transition-all rtl:text-right">
                      <div className="text-5xl font-black text-[#B8860B] mb-2 group-hover/stat:scale-110 transition-transform">4,400</div>
                      <div className="font-bold text-[#031A31] uppercase tracking-widest text-xs opacity-70">{t.rayanPage.feedMill.production}</div>
                    </div>
                    <div className="bg-[#fafafa] p-10 rounded-3xl border border-gray-100 group/stat hover:bg-white hover:border-[#B8860B]/20 transition-all rtl:text-right">
                      <div className="text-5xl font-black text-[#B8860B] mb-2 group-hover/stat:scale-110 transition-transform">200k</div>
                      <div className="font-bold text-[#031A31] uppercase tracking-widest text-xs opacity-70">{t.rayanPage.feedMill.storage}</div>
                    </div>
                    <div className="bg-[#fafafa] p-10 rounded-3xl border border-gray-100 group/stat hover:bg-white hover:border-[#B8860B]/20 transition-all rtl:text-right">
                      <div className="text-5xl font-black text-[#B8860B] mb-2 group-hover/stat:scale-110 transition-transform">4,320</div>
                      <div className="font-bold text-[#031A31] uppercase tracking-widest text-xs opacity-70">{t.rayanPage.feedMill.bagging}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Premix Production & 4. Grain Shelling */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* 3. Premix Plant */}
                <div className="bg-[#fafafa] rounded-[2.5rem] p-10 border border-gray-100 hover:shadow-xl transition-all rtl:text-right">
                  <div className={`p-4 rounded-2xl bg-white shadow-sm text-[#B8860B] w-fit mb-8 ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                    <Package className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#031A31] mb-6">{t.rayanPage.premix.title}</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-[#031A31] mb-2">{t.rayanPage.premix.balancedFeed}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{t.rayanPage.premix.balancedFeedDesc}</p>
                    </div>
                    <div className="bg-[#B8860B] p-6 rounded-2xl text-white">
                      <div className="text-4xl font-black mb-1">240 {locale === "en" ? "Tons" : "طن"}</div>
                      <div className="text-xs font-bold uppercase tracking-widest opacity-80">{t.rayanPage.premix.capacity}</div>
                    </div>
                  </div>
                </div>

                {/* 4. Grain Shelling */}
                <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all rtl:text-right">
                  <div className={`p-4 rounded-2xl bg-[#fafafa] shadow-sm text-[#B8860B] w-fit mb-8 ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                    <Factory className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#031A31] mb-6">{t.rayanPage.grain.title}</h3>
                  <div className="space-y-6">
                    <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-[#031A31] mb-2">{t.rayanPage.grain.tech}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{t.rayanPage.grain.techDesc}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-6 rounded-2xl border-2 border-[#B8860B]/10 text-center">
                        <div className="text-3xl font-black text-[#B8860B]">7,200</div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">{t.rayanPage.grain.shellingCap}</div>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border-2 border-[#B8860B]/10 text-center">
                        <div className="text-3xl font-black text-[#B8860B]">4,500</div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">{t.rayanPage.grain.driedOutput}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action or footer-top */}
        <section className="py-24 bg-[#031A31] text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#B8860B_1px,transparent_0)] bg-size-[40px_40px]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.rayanPage.successTitle}</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                {t.rayanPage.successDesc}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#B8860B] hover:bg-[#9A7209] text-white rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105"
              >
                {t.rayanPage.connectBtn}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
