import Image from "next/image"
import { Button } from "@/components/ui/button"

const brands = [
  {
    name: "Etihad Sugar",
    image:
      "https://static.wixstatic.com/media/fdd745_f864c4261bf74eb6a6cbf3b869130cf6~mv2.png/v1/fill/w_312,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6.png",
    width: 312,
    height: 208,
  },
  {
    name: "Aqeeq",
    image:
      "https://static.wixstatic.com/media/fdd745_d7f01987d9f842a7974b63d7a9834d8b~mv2.png/v1/fill/w_346,h_230,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png",
    width: 346,
    height: 230,
  },
  {
    name: "Aldar Ghee",
    image:
      "https://static.wixstatic.com/media/fdd745_9e1f14dcb0b543b896830d98c811246c~mv2.png/v1/crop/x_291,y_0,w_4630,h_2945/fill/w_352,h_224,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.png",
    width: 352,
    height: 224,
  },
  {
    name: "Al Sows",
    image:
      "https://static.wixstatic.com/media/fdd745_ba49c8524cfb4239a648ec2230319743~mv2.png/v1/fill/w_395,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7.png",
    width: 395,
    height: 264,
  },
  {
    name: "Fayrouz",
    image:
      "https://static.wixstatic.com/media/fdd745_f532045a8c7b477383b975027e267c6f~mv2.png/v1/fill/w_349,h_234,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8.png",
    width: 349,
    height: 234,
  },
  {
    name: "Lazord",
    image:
      "https://static.wixstatic.com/media/fdd745_d5f9bb081bde4e77bc1293ff25c0eb0a~mv2.png/v1/crop/x_0,y_0,w_4862,h_1927/fill/w_360,h_142,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10.png",
    width: 360,
    height: 142,
  },
  {
    name: "Al Rayan",
    image:
      "https://static.wixstatic.com/media/fdd745_895ded74462848a99c04e2dc12d46475~mv2.png/v1/fill/w_373,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9.png",
    width: 373,
    height: 248,
  },
  {
    name: "Bawadi",
    image:
      "https://static.wixstatic.com/media/fdd745_c8147bc4c03642f7a2ddcffdb57d8910~mv2.png/v1/fill/w_379,h_253,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11.png",
    width: 379,
    height: 253,
  },
  {
    name: "Lazord Oil Processing",
    image:
      "https://static.wixstatic.com/media/fdd745_0ce21280d9604cb4af0430a70254d0dd~mv2.png/v1/crop/x_0,y_37,w_5000,h_4090/fill/w_357,h_291,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/12.png",
    width: 379,
    height: 253,
  }
]

export default function OurBrands() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-12 text-center text-4xl font-bold text-[#B8860B] sm:text-5xl lg:text-6xl">
          Our Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center p-4">
              <Image
                src={brand.image || "/placeholder.svg"}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className="w-full h-auto object-contain max-w-[200px] md:max-w-[220px] lg:max-w-[200px]"
              />
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center">
          <Button size="lg" className="bg-[#B8860B] hover:bg-[#9A7209] text-white px-8 py-6 text-lg rounded-full">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  )
}
