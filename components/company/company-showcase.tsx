import Image from "next/image"

interface Company {
  name: string
  description: string
  image: string
}

const companies: Company[] = [
  {
    name: "Etihad Food Industries Co. Ltd.",
    description:
      "Etihad Group – Premium Food Industries is one of Iraq's leading food industry conglomerates, established in 1998 with a vision to deliver high-quality, reliable, and sustainable food products to the region. Bringing together multiple companies under one umbrella, Etihad specializes in sugar refining, flour milling, edible oils, ghee, dairy, and poultry production, supported by a strong distribution network.\n\nOur facilities include some of the largest and most advanced plants in the Middle East, producing over 100,000 tons of refined sugar annually, alongside premium flour, cooking oils, and halal-certified poultry and dairy products. With modern technologies, international certifications, and a commitment to excellence, we ensure that every product meets the highest standards of purity, safety, and taste.\n\nAt Etihad, we believe that \"Excellence Nourishes Trust.\" Guided by this principle, we continue to innovate, invest in sustainable practices, and strengthen Iraq's role in the regional food economy.",
    image:
      "https://static.wixstatic.com/media/fdd745_6090cb454587470990ef3bbd6cead383~mv2.jpg/v1/fill/w_1470,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-35%202.jpg",
  },
  {
    name: "Al Rayyan Oil Extraction and Feed Mill",
    description:
      "Rayan for Oil Extraction & Feed Mill, part of the Etihad Group, is one of Iraq's leading producers of vegetable oils and animal feed. Established with a vision to support food security and agricultural sustainability, Rayan operates state-of-the-art facilities for oil extraction, feed milling, premix production, grain shelling, drying, and storage.\n\nOur Feed Mill Plant, built in 2021, is among the largest in the MENA region, with a daily production capacity of 4,400 tons of high-quality animal feed. We also manage extensive storage infrastructure, including 48 concrete silos with a total capacity of 720,000 tons, flat stores for soybean meal, and crude oil tanks located both at our main site and Umm Qasr Port.\n\nAt Rayan, we believe that \"Quality Builds Trust.\" Guided by this principle, we are committed to delivering safe, nutritious, and reliable products that meet international standards, while promoting sustainability and supporting Iraq's agricultural economy.",
    image:
      "https://static.wixstatic.com/media/fdd745_f13400d554604d7e8358a1a92aab2f41~mv2.jpg/v1/fill/w_1470,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-39%202.jpg",
  },
  {
    name: "Karbala Agricultural City",
    description:
      "Karbala Agricultural City is one of Etihad Group's largest and most ambitious agro-industrial projects, designed to transform Iraq's food production sector. Located near Karbala, the city integrates advanced facilities across dairy, meat, poultry, and aquaculture to meet both local and regional demand.\n\nThe project includes:\n• A modern dairy facility with a production capacity of around 3,000 tons per day.\n• A dairy cattle farm hosting nearly 195,000 cows, producing up to 4 million liters of milk daily.\n• Five state-of-the-art slaughterhouses capable of processing 1,500 cattle per day.\n• A beef cattle operation raising over 100,000 calves annually.\n• A large-scale fish farming operation producing approximately 300 tons of fresh fish daily.\n\nBuilt with international technology and vertical integration, Karbala Agricultural City is equipped with hatcheries, feed mills, and modern processing lines to ensure efficiency, safety, and premium quality across all operations.\n\nThis project reflects Etihad Group's vision to support Iraq's food security, strengthen its agricultural economy, and set new benchmarks for excellence in the region.",
    image:
      "https://static.wixstatic.com/media/fdd745_84ca085c8f63441588bdd5b70f93a656~mv2.jpg/v1/fill/w_1440,h_892,al_c,q_85,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-39%203.jpg",
  },
]

export default function CompanyShowcase() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#B8860B] md:text-5xl">Our Companies</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Discover the diverse portfolio of companies that make up the Etihad Group, each committed to excellence and
            innovation in their respective fields.
          </p>
        </div>

        <div className="space-y-24">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`flex flex-col gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
                  <div className="relative aspect-video w-full h-full object-cover">
                    <Image
                      src={company.image || "/placeholder.svg"}
                      alt={company.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  {/* Company Name with decorative line */}
                  <div className="space-y-3">
                    <div className="h-1 w-16 rounded-full bg-[#B8860B]" />
                    <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">{company.name}</h3>
                  </div>

                  {/* Description */}
                  <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
                    {company.description.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-pretty">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <div className="pt-4">
                    <button className="group inline-flex items-center gap-2 rounded-full bg-[#B8860B] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#9A7209] hover:shadow-lg">
                      Learn More
                      <svg
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
