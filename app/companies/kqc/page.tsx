"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { ArrowLeft, Users, Bird, Home, Egg, Target, Globe, ShieldCheck, Heart, Award } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

export default function KQCCompanyPage() {
  const { t, isRTL } = useLanguage()

  const kqcInfo = {
    name: t.home.companies.kqc.name,
    logo: "https://static.wixstatic.com/media/fdd745_df36575ce7644f63910c258d965c5476~mv2.png/v1/crop/x_296,y_0,w_4682,h_2408/fill/w_410,h_210,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png",
    image: "https://static.wixstatic.com/media/fdd745_84ca085c8f63441588bdd5b70f93a656~mv2.jpg/v1/fill/w_1440,h_892,al_c,q_85,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-39%203.jpg",
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-[#B8860B]/20">
      <Header />
      <main className="grow">
        {/* Modern Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10 ${isRTL ? 'rotate-180' : ''}`}></div>
            <Image
              src={kqcInfo.image}
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
                    src={kqcInfo.logo}
                    alt={`${kqcInfo.name} logo`}
                    width={200}
                    height={103}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 rtl:flex-row-reverse rtl:justify-start">
                  <div className="h-[2px] w-12 bg-[#B8860B]"></div>
                  <span className="text-sm font-bold tracking-[0.2em] text-[#B8860B] uppercase">{t.rayanPage.subsidiary}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#031A31] tracking-tight leading-tight">
                  Karbala <span className="text-[#B8860B]">{t.kqcPage.companyTitle}</span>
                </h1>
                <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">
                  {t.kqcPage.tagline}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sama Karbala Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-gray-100 pb-8 rtl:flex-row-reverse">
                <div className="rtl:text-right">
                  <h2 className="text-4xl md:text-5xl font-black text-[#031A31]">{t.kqcPage.sama.title}</h2>
                  <p className="text-[#B8860B] font-bold mt-2 uppercase tracking-widest text-sm">{t.kqcPage.sama.subtitle}</p>
                </div>
                <div className="flex items-center gap-4 bg-[#fafafa] px-6 py-3 rounded-2xl border border-gray-100 rtl:flex-row-reverse">
                  <Target className="text-[#B8860B] w-6 h-6" />
                  <span className="font-bold text-gray-700">{t.kqcPage.sama.marketShare}</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 mb-20">
                <div className="space-y-8 rtl:text-right">
                  <div className="bg-[#B8860B]/5 p-10 rounded-[2.5rem] border border-[#B8860B]/10 relative overflow-hidden group">
                    <div className={`absolute top-0 p-8 text-[#B8860B]/5 group-hover:text-[#B8860B]/10 transition-colors ${isRTL ? 'left-0' : 'right-0'}`}>
                      <ShieldCheck className="w-32 h-32" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#031A31] mb-4">{t.kqcPage.sama.vision}</h3>
                    <p className="text-xl font-semibold text-[#B8860B] mb-6 leading-tight">
                      {t.kqcPage.sama.visionTitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {t.kqcPage.sama.visionDesc}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#031A31]">{t.kqcPage.sama.glance}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {t.kqcPage.sama.glanceDesc}
                    </p>
                    <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 rtl:flex-row-reverse">
                      <Users className="w-10 h-10 text-[#B8860B]" />
                      <div className="rtl:text-right">
                        <div className="text-2xl font-black text-[#031A31]">4,100+</div>
                        <div className="text-sm font-bold text-gray-500 uppercase">{t.kqcPage.sama.staff}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all rtl:text-right">
                      <div className="text-4xl font-black text-[#B8860B] mb-1">960</div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.kqcPage.sama.stats.houses}</div>
                      <p className="text-[10px] text-gray-500 mt-2 font-medium">{t.kqcPage.sama.stats.housesDesc}</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all rtl:text-right">
                      <div className="text-4xl font-black text-[#B8860B] mb-1">325k</div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.kqcPage.sama.stats.tons}</div>
                      <p className="text-[10px] text-gray-500 mt-2 font-medium">{t.kqcPage.sama.stats.tonsDesc}</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all rtl:text-right">
                      <div className="text-4xl font-black text-[#B8860B] mb-1">322M</div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.kqcPage.sama.stats.eggs}</div>
                      <p className="text-[10px] text-gray-500 mt-2 font-medium">{t.kqcPage.sama.stats.eggsDesc}</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all rtl:text-right">
                      <div className="text-4xl font-black text-[#B8860B] mb-1">5</div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.kqcPage.sama.stats.slaughter}</div>
                      <p className="text-[10px] text-gray-500 mt-2 font-medium">{t.kqcPage.sama.stats.slaughterDesc}</p>
                    </div>
                  </div>

                  <div className="bg-[#031A31] rounded-[2.5rem] p-10 text-white relative overflow-hidden group rtl:text-right">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(#B8860B_1px,transparent_0)] bg-size-[20px_20px]"></div>
                    </div>
                    <h4 className="text-xl font-bold mb-8 relative z-10 flex items-center gap-3 rtl:flex-row-reverse">
                      <Award className="text-[#B8860B]" />
                      {t.kqcPage.sama.breakdown}
                    </h4>
                    <div className="space-y-6 relative z-10">
                      {t.kqcPage.sama.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4 rtl:flex-row-reverse">
                          <span className="text-gray-400 font-medium">{item.label}</span>
                          <span className="font-bold text-[#B8860B]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#fafafa] rounded-[2.5rem] p-10 md:p-16 border border-gray-100 rtl:text-right">
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-bold text-[#031A31] mb-6">{t.kqcPage.sama.communityTitle}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {t.kqcPage.sama.communityDesc}
                  </p>
                  <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 rtl:flex-row-reverse">
                    <div className="h-2 w-2 rounded-full bg-[#B8860B] animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-700">{t.kqcPage.sama.qualitySystem}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sahara Karbala Section */}
        <section className="py-24 bg-[#fafafa]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-gray-200 pb-8 rtl:flex-row-reverse">
                <div className="rtl:text-right">
                  <h2 className="text-4xl md:text-5xl font-black text-[#031A31]">{t.kqcPage.sahara.title}</h2>
                  <p className="text-[#B8860B] font-bold mt-2 uppercase tracking-widest text-sm">{t.kqcPage.sahara.subtitle}</p>
                </div>
                <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm rtl:flex-row-reverse">
                  <Egg className="text-[#B8860B] w-6 h-6" />
                  <span className="font-bold text-gray-700">{t.kqcPage.sahara.dailyOutput}</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <Image
                    src="https://static.wixstatic.com/media/fdd745_84ca085c8f63441588bdd5b70f93a656~mv2.jpg/v1/fill/w_1440,h_892,al_c,q_85,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-39%203.jpg"
                    alt="Sahara Karbala Facility"
                    width={1440}
                    height={892}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute bottom-0 p-10 z-20 ${isRTL ? 'right-0 text-right' : 'left-0 text-left'}`}>
                    <h3 className="text-white text-3xl font-black mb-2">{t.kqcPage.sahara.since}</h3>
                    <p className="text-white/80 font-medium">{t.kqcPage.sahara.largest}</p>
                  </div>
                </div>

                <div className="space-y-10 rtl:text-right">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-[#031A31]">{t.kqcPage.sahara.overview}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {t.kqcPage.sahara.overviewDesc}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4 rtl:text-right">
                      <div className={`p-3 rounded-xl bg-[#B8860B]/10 text-[#B8860B] w-fit ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                        <Globe className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-[#031A31]">{t.kqcPage.sahara.vision}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed italic">
                        "{t.kqcPage.sahara.visionDesc}"
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4 rtl:text-right">
                      <div className={`p-3 rounded-xl bg-[#B8860B]/10 text-[#B8860B] w-fit ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                        <Heart className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-[#031A31]">{t.kqcPage.sahara.mission}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed italic">
                        "{t.kqcPage.sahara.missionDesc}"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 pt-6 rtl:flex-row-reverse rtl:justify-start">
                    <div className="flex flex-col rtl:text-right">
                      <span className="text-4xl font-black text-[#B8860B]">1,500</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.kqcPage.sahara.staff}</span>
                    </div>
                    <div className="h-12 w-px bg-gray-200"></div>
                    <div className="flex flex-col rtl:text-right">
                      <span className="text-4xl font-black text-[#B8860B]">{isRTL ? 'أحدث' : 'Latest'}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.kqcPage.sahara.tech}</span>
                    </div>
                  </div>
                </div>
              </div>
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
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.kqcPage.successTitle}</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                {t.kqcPage.successDesc}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#B8860B] hover:bg-[#9A7209] text-white rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105"
              >
                {t.kqcPage.connectBtn}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
