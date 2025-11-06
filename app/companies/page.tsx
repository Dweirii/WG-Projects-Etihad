import CompanyShowcase from "@/components/company/company-showcase";
import NewsSection from "@/components/company/news-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <CompanyShowcase />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}