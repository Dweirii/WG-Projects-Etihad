import { FacilityHero } from "@/components/home/hero-carosel"
import { OurCompanies } from "@/components/home/our-companies"
import { AboutUs } from "@/components/home/about-us"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        <FacilityHero />
        <OurCompanies />
        <AboutUs />
      </main>
    </div>
  )
}