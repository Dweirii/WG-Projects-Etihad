"use client"

import AboutHero from "@/components/about/hero"
import WhatWeDo from "@/components/about/what-we-do"
import VisionMission from "@/components/about/vision-mission"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ShieldCheck, Users, Zap, Globe, Heart, Award } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

export default function AboutPage() {
    const { t, isRTL } = useLanguage()

    return (
        <div className="flex flex-col min-h-screen bg-[#fafafa]">
            <Header />
            <main className="grow">
                <AboutHero />
                
                {/* Core Values Section */}
                <section className="py-24 bg-white border-y border-gray-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                            <span className="text-sm font-bold tracking-widest text-[#B8860B] uppercase">{t.aboutPage.values.title}</span>
                            <h2 className="text-4xl md:text-5xl font-black text-[#031A31] leading-tight">{t.aboutPage.values.title}</h2>
                            <p className="text-lg text-gray-500">{t.aboutPage.values.subtitle}</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {t.aboutPage.values.items.map((value, i) => {
                                const icons = [ShieldCheck, Zap, Globe, Users, Heart, Award];
                                const Icon = icons[i];
                                return (
                                    <div key={i} className="group p-10 rounded-[2.5rem] bg-[#fafafa] border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-[#B8860B]/20 transition-all duration-500">
                                        <div className="p-4 rounded-2xl bg-white shadow-sm text-[#B8860B] w-fit mb-6 group-hover:bg-[#B8860B] group-hover:text-white transition-colors">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#031A31] mb-4">{value.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{value.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <WhatWeDo />
                
                {/* Industrial Excellence Section */}
                <section className="py-24 relative overflow-hidden bg-[#031A31] text-white">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(#B8860B_1px,transparent_0)] bg-size-[40px_40px]"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <div className="space-y-8 rtl:text-right">
                                <div className="space-y-4">
                                    <span className="text-sm font-bold tracking-widest text-[#B8860B] uppercase">{t.aboutPage.impact}</span>
                                    <h2 className="text-4xl md:text-5xl font-black leading-tight">{t.aboutPage.impactTitle}</h2>
                                    <div className={`h-1.5 w-20 bg-[#B8860B] rounded-full ${isRTL ? 'mr-0 ml-auto' : ''}`}></div>
                                </div>
                                <p className="text-xl text-gray-300 leading-relaxed font-light">
                                    {t.aboutPage.impactDesc}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 pt-4 rtl:flex-row-reverse">
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex-1 rtl:text-right">
                                        <div className="text-3xl font-black text-[#B8860B] mb-1">25+</div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.aboutPage.yearsTrust}</div>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex-1 rtl:text-right">
                                        <div className="text-3xl font-black text-[#B8860B] mb-1">4,100+</div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.aboutPage.employees}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-gradient-to-tr from-[#B8860B] to-transparent rounded-full opacity-20 absolute -inset-10 blur-3xl"></div>
                                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                                    <img 
                                        src="https://static.wixstatic.com/media/fdd745_6090cb454587470990ef3bbd6cead383~mv2.jpg/v1/fill/w_1470,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-35%202.jpg" 
                                        alt="Industrial Facility" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <VisionMission />

                {/* Closing Call to Action */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto space-y-8 rtl:text-right">
                            <h2 className="text-4xl md:text-5xl font-black text-[#031A31]">{t.aboutPage.closingTitle}</h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {t.aboutPage.closingDesc}
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-10 py-5 bg-[#B8860B] hover:bg-[#9A7209] text-white rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105"
                            >
                                {t.aboutPage.connectBtn}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
