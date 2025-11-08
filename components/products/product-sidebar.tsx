"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface SidebarItem {
  id: string
  icon: string
  label: string
}

const sidebarItems: SidebarItem[] = [
  {
    id: "etihad-sugar",
    icon: "https://static.wixstatic.com/media/fdd745_e358d87a9a7040429287ddbb38115837~mv2.png/v1/crop/x_0,y_60,w_486,h_418/fill/w_112,h_96,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_2025-09-21_at_1_41_21_PM-removebg-preview.png",
    label: "Etihad Sugar",
  },
  {
    id: "al-dar",
    icon: "https://static.wixstatic.com/media/fdd745_cb0d19a8313b458b962f7174802cc92f~mv2.png/v1/crop/x_0,y_85,w_473,h_407/fill/w_109,h_93,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_2025-09-21_at_1_41_31_PM-removebg-preview.png",
    label: "Al-Dar",
  },
  {
    id: "fayroz",
    icon: "https://static.wixstatic.com/media/fdd745_0b526e3918c24fcda4523cd82fa21d30~mv2.png/v1/crop/x_0,y_21,w_467,h_477/fill/w_117,h_120,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_2025-09-21_at_1_41_26_PM-removebg-preview.png",
    label: "Fayroz",
  },
  {
    id: "lazord",
    icon: "https://static.wixstatic.com/media/fdd745_123dff32f7d94be28068bed9e0e60c54~mv2.png/v1/crop/x_0,y_54,w_485,h_392/fill/w_125,h_101,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_2025-09-21_at_1_41_40_PM-removebg-preview.png",
    label: "Lazord",
  },
  {
    id: "sawsan",
    icon: "https://static.wixstatic.com/media/fdd745_507a3302dad84d489ff6b64f0a8c4f41~mv2.png/v1/crop/x_0,y_86,w_479,h_418/fill/w_115,h_101,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_2025-09-21_at_1_41_35_PM-removebg-preview.png",
    label: "Sawsan",
  },
]

export function ProductSidebar() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = sidebarItems.map((item) => item.id)
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Offset for header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-4 bg-transparent  rounded-2xl p-4">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative w-16 h-16 rounded-fulltransition-all duration-300 hover:scale-110 hover:shadow-lg ${
              activeSection === item.id
            }`}
            aria-label={item.label}
          >
            <div className="absolute inset-0 flex items-center justify-center p-2">
              <Image
                src={item.icon}
                alt={item.label}
                fill
                className="object-contain"
                sizes="64px"
              />
            </div>
          </button>
        ))}
      </div>
    </aside>
  )
}

