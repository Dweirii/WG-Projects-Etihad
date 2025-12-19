"use client"

import CompanyShowcase from "@/components/company/company-showcase";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <CompanyShowcase />
      </main>
      <Footer />
    </div>
  )
}