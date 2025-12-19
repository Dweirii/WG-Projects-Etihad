"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { ArrowLeft, ShieldCheck, Zap, Factory, Award, Ship, Wind, Warehouse, Truck, Droplets, Anchor } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

export default function EtihadCompanyPage() {
  const { t, isRTL } = useLanguage()

  const etihadInfo = {
    name: t.home.companies.etihad.name,
    logo: "https://static.wixstatic.com/media/fdd745_0c767fe4393e4ccf9487b3cdc378d6c5~mv2.png/v1/crop/x_178,y_51,w_4822,h_4509/fill/w_216,h_202,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png",
    description: t.home.aboutUs.description1,
    image: "https://static.wixstatic.com/media/fdd745_6090cb454587470990ef3bbd6cead383~mv2.jpg/v1/fill/w_1470,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-35%202.jpg",
    facilities: [
      { id: 1, icon: Factory },
      { id: 2, icon: Droplets },
      { id: 3, icon: Wind },
      { id: 4, icon: Truck },
      { id: 5, icon: Zap },
      { id: 6, icon: Anchor },
      { id: 7, icon: Ship },
    ]
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
              src={etihadInfo.image}
              alt="Background"
              fill
              className="object-cover object-right opacity-30 scale-105 animate-pulse-slow"
              priority
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-3xl rtl:text-right">
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
                    src={etihadInfo.logo}
                    alt={`${etihadInfo.name} logo`}
                    width={200}
                    height={187}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 rtl:flex-row-reverse rtl:justify-start">
                  <div className="h-[2px] w-12 bg-[#B8860B]"></div>
                  <span className="text-sm font-bold tracking-[0.2em] text-[#B8860B] uppercase">{t.etihadPage.subsidiary}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#031A31] tracking-tight leading-tight">
                  Etihad <span className="text-[#B8860B]">{t.etihadPage.companyTitle}</span>
                </h1>
                <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">
                  {t.etihadPage.tagline}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us & Ambition Section */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8 rtl:text-right">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#031A31]">{t.etihadPage.aboutTitle}</h2>
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
                      <h4 className="font-bold text-[#031A31]">{t.etihadPage.excellence}</h4>
                      <p className="text-sm text-gray-500">{t.etihadPage.indStandards}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rtl:flex-row-reverse">
                    <div className="p-3 rounded-xl bg-[#B8860B]/10 text-[#B8860B]">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div className="rtl:text-right">
                      <h4 className="font-bold text-[#031A31]">{t.etihadPage.innovation}</h4>
                      <p className="text-sm text-gray-500">{t.etihadPage.latestTech}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#031A31] p-10 md:p-12 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl rtl:text-right">
                <div className={`absolute top-0 p-12 text-white/5 ${isRTL ? 'left-0' : 'right-0'}`}>
                  <Award className="w-48 h-48" />
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4 rtl:flex-row-reverse">
                    <div className="h-[2px] w-10 bg-[#B8860B]"></div>
                    <h3 className="text-2xl font-bold uppercase tracking-widest text-[#B8860B]">{t.etihadPage.ambitionTitle}</h3>
                  </div>
                  <p className="text-xl leading-relaxed text-gray-200 font-light">
                    {t.home.aboutUs.description2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Grid Section */}
        <section className="py-24 bg-[#fafafa] border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <span className="text-sm font-bold tracking-widest text-[#B8860B] uppercase">{t.home.ourCompanies.title}</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#031A31] leading-tight">{t.etihadPage.facilitiesTitle}</h2>
              <p className="text-lg text-gray-500">{t.etihadPage.facilitiesDesc}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {etihadInfo.facilities.map((facility, index) => {
                const trans = t.etihadPage.facilities[index];
                return (
                  <div 
                    key={facility.id} 
                    className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#B8860B]/20 transition-all duration-500 flex flex-col h-full rtl:text-right"
                  >
                    <div className={`p-5 rounded-2xl bg-[#fafafa] shadow-sm text-[#B8860B] w-fit mb-8 group-hover:bg-[#B8860B] group-hover:text-white transition-colors duration-500 ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                      <facility.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="flex-grow space-y-4">
                      <div className="flex items-center gap-2 rtl:flex-row-reverse">
                        <span className="text-xs font-bold text-[#B8860B] tracking-widest">{isRTL ? 'مرفق' : 'FACILITY'} {facility.id}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#031A31] leading-tight group-hover:text-[#B8860B] transition-colors">
                        {trans.name}
                      </h3>
                      <div className={`bg-[#fafafa] p-4 rounded-xl border-[#B8860B] ${isRTL ? 'border-r-4' : 'border-l-4'}`}>
                        <div className="text-lg font-black text-[#031A31]">{trans.cap}</div>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600">
                        {trans.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-24 bg-[#031A31] text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#B8860B_1px,transparent_0)] bg-size-[40px_40px]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.etihadPage.successTitle}</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                {t.etihadPage.successDesc}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#B8860B] hover:bg-[#9A7209] text-white rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105"
              >
                {t.etihadPage.connectBtn}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
