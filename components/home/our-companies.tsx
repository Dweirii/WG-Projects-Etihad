import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Company {
  name: string
  logo: string
  items: string[]
}

const companies: Company[] = [
  {
    name: "Rayan",
    logo: "https://static.wixstatic.com/media/fdd745_2e27215bc21f424f934ffb40ea02345a~mv2.png/v1/crop/x_63,y_0,w_4906,h_2104/fill/w_332,h_142,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png",
    items: [
      "Oil Extraction Plant & Company Headquarters.",
      "Soybean Meal Storage.",
      "Animal Feed Mill.",
      "Premix Plant.",
      "Grain Silos, Drying & Storage Facilities.",
      "Crude Oil Storage Tanks.",
    ],
  },
  {
    name: "Etihad",
    logo: "https://static.wixstatic.com/media/fdd745_0c767fe4393e4ccf9487b3cdc378d6c5~mv2.png/v1/crop/x_178,y_51,w_4822,h_4509/fill/w_216,h_202,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png",
    items: [
      "Sugar Refinery.",
      "Edible Oil Refinery.",
      "Etihad River Transport Co.",
      "Etihad Electric Power Generation Plant.",
      "Private Dairy Farm Karbala.",
      "Etihad Warehouses & Cold Storage (various sites).",
    ],
  },
  {
    name: "KQC",
    logo: "https://static.wixstatic.com/media/fdd745_df36575ce7644f63910c258d965c5476~mv2.png/v1/crop/x_296,y_0,w_4682,h_2408/fill/w_410,h_210,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png",
    items: [
      "Sama Karbala → Dairy Products.",
      "Sahari Karbala → Table Eggs.",
      "Wadi Karbala → Broiler Chicken.",
      "Sama Reef → Poultry (Broiler & Layer).",
    ],
  },
]

export function OurCompanies() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-5xl font-bold text-[#B8860B] lg:text-6xl">Our Companies</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <div key={company.name} className="flex h-full flex-col rounded-3xl bg-gray-200 p-8 shadow-sm">
              {/* Logo Section - Centered with Fixed Height */}
              <div className="mb-8 flex min-h-[80px] w-full items-center justify-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={200}
                  height={80}
                  className="max-h-20 w-auto object-contain"
                />
              </div>

              {/* Items List - Perfectly Left Aligned */}
              <ul className="mb-8 flex-1 space-y-2.5">
                {company.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-0.5 shrink-0 text-[#B8860B] font-bold">•</span>
                    <span className="flex-1 text-base leading-relaxed text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button - Centered at Bottom */}
              <div className="mt-auto flex justify-center pt-2">
                <Button className="w-full rounded-full bg-[#B8860B] px-8 py-6 text-base font-medium text-white transition-colors hover:bg-[#9A7209]">
                  Learn more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
