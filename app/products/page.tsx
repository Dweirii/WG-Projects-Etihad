import { ProductHero } from "@/components/products/product-hero"
import { ProductSection } from "@/components/products/product-section"
import { ProductSidebar } from "@/components/products/product-sidebar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow relative">
        {/* Sticky Sidebar */}
        <ProductSidebar />

        {/* Hero Section */}
        <ProductHero />

        {/* Product Sections */}
        <div className="relative">
        {/* Etihad Sugar Section - Deep Indigo */}
        <ProductSection
          id="etihad-sugar"
          title="Etihad Sugar"
          subtitle="Pure Sweetness"
          description="Etihad Sugar brings you the purest, finest quality sugar for all your culinary needs. Perfect for baking, cooking, and sweetening your favorite beverages."
          image="https://static.wixstatic.com/media/fdd745_f864c4261bf74eb6a6cbf3b869130cf6~mv2.png/v1/fill/w_312,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6.png"
          backgroundColor="bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900"
          textColor="text-white"
          imagePosition="left"
          imageWidth={312}
          imageHeight={208}
          sectionIndex={0}
          totalSections={5}
        />

        {/* Al-Dar Section - Deep Blue */}
        <ProductSection
          id="al-dar"
          title="Al-Dar"
          subtitle="Premium Cooking Oil"
          description="Al-Dar brings you premium quality olein oil, perfect for all your cooking needs. Our 18L containers ensure you always have enough for your kitchen."
          image="https://static.wixstatic.com/media/fdd745_9e1f14dcb0b543b896830d98c811246c~mv2.png/v1/crop/x_291,y_0,w_4630,h_2945/fill/w_352,h_224,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.png"
          backgroundColor="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900"
          textColor="text-white"
          imagePosition="right"
          imageWidth={352}
          imageHeight={224}
          sectionIndex={1}
          totalSections={5}
        />

        {/* Fayroz Section - Deep Green */}
        <ProductSection
          id="fayroz"
          title="Fayroz"
          subtitle="Pure Ghee Excellence"
          description="Experience the rich, authentic taste of Fayroz Ghee. Made with the finest ingredients, our 14L containers deliver exceptional quality for traditional cooking."
          image="https://static.wixstatic.com/media/fdd745_f532045a8c7b477383b975027e267c6f~mv2.png/v1/fill/w_349,h_234,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8.png"
          backgroundColor="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900"
          textColor="text-white"
          imagePosition="left"
          imageWidth={349}
          imageHeight={234}
          sectionIndex={2}
          totalSections={5}
        />

        {/* Lazord Section - Deep Teal */}
        <ProductSection
          id="lazord"
          title="Lazord"
          subtitle="Quality You Can Trust"
          description="Lazord represents excellence in every product. Our commitment to quality ensures that you receive only the best for your family."
          image="https://static.wixstatic.com/media/fdd745_d5f9bb081bde4e77bc1293ff25c0eb0a~mv2.png/v1/crop/x_0,y_0,w_4862,h_1927/fill/w_360,h_142,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10.png"
          backgroundColor="bg-gradient-to-br from-cyan-700 via-cyan-800 to-cyan-900"
          textColor="text-white"
          imagePosition="right"
          imageWidth={360}
          imageHeight={142}
          sectionIndex={3}
          totalSections={5}
        />

        {/* Sawsan Section - Deep Rose */}
        <ProductSection
          id="sawsan"
          title="Sawsan"
          subtitle="Premium Products"
          description="Sawsan delivers exceptional quality products for your daily needs. Trust in our commitment to excellence and purity in every package."
          image="https://static.wixstatic.com/media/fdd745_ba49c8524cfb4239a648ec2230319743~mv2.png/v1/fill/w_395,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7.png"
          backgroundColor="bg-gradient-to-br from-rose-700 via-rose-800 to-rose-900"
          textColor="text-white"
          imagePosition="left"
          imageWidth={395}
          imageHeight={264}
          sectionIndex={4}
          totalSections={5}
        />
        </div>
      </main>
      <Footer />
    </div>
  )
}
