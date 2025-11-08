import AboutHero from "@/components/about/hero"
import WhatWeDo from "@/components/about/what-we-do"
import VisionMission from "@/components/about/vision-mission"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <AboutHero />
                <WhatWeDo />
                <VisionMission />
            </main>
            <Footer />
        </div>
    )
}