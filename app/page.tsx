import { FacilityHero } from "@/components/home/hero-carosel"
import { OurCompanies } from "@/components/home/our-companies"
import { AboutUs } from "@/components/home/about-us"
import OurBrands from "@/components/home/our-brand"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <FacilityHero />
        <OurCompanies />
        <AboutUs />
        <OurBrands />
      </main>
      <Footer />
    </div>
  )
}