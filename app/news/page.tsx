import NewsHero from "@/components/news/hero"
import NewsSection from "@/components/company/news-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <NewsHero />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}

