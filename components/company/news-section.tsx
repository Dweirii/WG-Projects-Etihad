import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  date: string
  excerpt: string
  image: string
  category: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Etihad Group Expands Production Capacity with New Sugar Refinery",
    date: "March 15, 2025",
    excerpt:
      "Etihad Group announces the expansion of its sugar refining operations, increasing annual production capacity to meet growing regional demand.",
    image: "https://WG-Global.b-cdn.net/Etihad/ALTEHAD5.jpeg",
    category: "Company News",
  },
  {
    id: 2,
    title: "Karbala Agricultural City Achieves Record Milk Production",
    date: "March 10, 2025",
    excerpt:
      "Our state-of-the-art dairy facility reaches milestone of 4 million liters daily, strengthening Iraq's food security and self-sufficiency.",
    image: "https://WG-Global.b-cdn.net/Etihad/ALTEHAD30.jpeg",
    category: "Production",
  },
  {
    id: 3,
    title: "Rayan Feed Mill Receives International Quality Certification",
    date: "March 5, 2025",
    excerpt:
      "Al Rayan Oil Extraction and Feed Mill achieves ISO 22000 certification, reinforcing our commitment to international quality standards.",
    image: "https://WG-Global.b-cdn.net/Etihad/ALTEHAD23.jpeg",
    category: "Achievements",
  },
  {
    id: 4,
    title: "Etihad Group Launches Sustainability Initiative",
    date: "February 28, 2025",
    excerpt:
      "New environmental program focuses on reducing carbon footprint and implementing renewable energy solutions across all facilities.",
    image: "https://WG-Global.b-cdn.net/Etihad/ALTEHAD22.jpeg",
    category: "Sustainability",
  },

]

export default function NewsSection() {
  const [featuredNews, ...regularNews] = newsItems

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">

        {/* Featured News */}
        <article className="group mb-8 overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl md:mb-12">
          <div className="flex flex-col md:flex-row">
            {/* Featured Image */}
            <div className="relative h-64 w-full overflow-hidden md:h-[400px] md:w-1/2">
              <Image
                src={featuredNews.image || "/placeholder.svg"}
                alt={featuredNews.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent md:bg-linear-to-r" />
              <div className="absolute left-6 top-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#B8860B] px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  ⭐ Featured
                </span>
              </div>
            </div>

            {/* Featured Content */}
            <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-[#B8860B]">
                <span className="rounded-full bg-[#B8860B]/10 px-3 py-1">{featuredNews.category}</span>
              </div>

              <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <time dateTime={featuredNews.date}>{featuredNews.date}</time>
              </div>

              <h3 className="mb-4 text-balance text-2xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#B8860B] md:text-3xl">
                {featuredNews.title}
              </h3>

              <p className="mb-6 text-pretty leading-relaxed text-gray-600">{featuredNews.excerpt}</p>
            </div>
          </div>
        </article>

        {/* Regular News Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {regularNews.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* News Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#B8860B] shadow-md backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* News Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Date */}
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={item.date}>{item.date}</time>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-balance text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#B8860B]">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="mb-4 flex-1 text-pretty leading-relaxed text-gray-600 line-clamp-3">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
