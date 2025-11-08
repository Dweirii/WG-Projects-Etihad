import AboutHero from "@/components/about/hero"
import NewsSection from "@/components/company/news-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <AboutHero />
                <NewsSection />
            </main>
            <Footer />
        </div>
    )
}