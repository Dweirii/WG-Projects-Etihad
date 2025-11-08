import ContactHero from "@/components/contact/hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <ContactHero />
        
        {/* Contact Section */}
        <section className="bg-gray-50 py-8 md:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                  <ContactForm />
                </div>

                {/* Contact Information */}
                <div>
                  <ContactInfo />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

