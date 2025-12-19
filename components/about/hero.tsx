"use client"

import { Button } from "@/components/ui/button"
import { Building2, Award, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

export default function AboutHero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-size-[50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-[#B8860B]"></div>
                  <span className="text-sm font-bold tracking-[0.2em] text-[#B8860B] uppercase">{t.aboutPage.hero.historyTitle}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-[#031A31] tracking-tight leading-tight">
                  {t.aboutPage.hero.title.split(" ")[0]} <span className="text-[#B8860B]">{t.aboutPage.hero.title.split(" ")[1]}</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                {t.aboutPage.hero.historyDesc}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#B8860B] hover:bg-[#9A7209] text-white px-8 py-6 rounded-full shadow-lg">
                  <Link href="/companies">{t.aboutPage.hero.exploreBtn}</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: t.aboutPage.hero.stats.majorCompanies, value: "3+", icon: Building2 },
                { title: t.aboutPage.hero.stats.yearsExcellence, value: "25+", icon: Award },
                { title: t.aboutPage.hero.stats.marketLeader, value: "MENA", icon: Globe },
                { title: t.aboutPage.hero.stats.iraqiStaff, value: "4,100+", icon: Award },
              ].map((stat, i) => (
                <div key={i} className="bg-[#fafafa] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 rounded-xl bg-[#B8860B]/10 text-[#B8860B] w-fit mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-black text-[#031A31] mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Description */}
          <div className="bg-[#031A31] rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
              <div className="absolute inset-0 bg-[radial-gradient(#B8860B_1px,transparent_0)] bg-size-[30px_30px]"></div>
            </div>
            <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-3xl font-bold text-white leading-tight">{t.aboutPage.hero.powerhouseTitle}</h2>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  {t.aboutPage.hero.powerhouseDesc}
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-sm font-bold text-[#B8860B] uppercase tracking-widest border-b border-white/10 pb-4 mb-4">{t.aboutPage.hero.keySubsidiaries}</div>
                <ul className="space-y-3">
                  {[t.home.companies.etihad.name, t.home.companies.rayan.name, t.home.companies.kqc.name].map((name, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#B8860B]"></div>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
