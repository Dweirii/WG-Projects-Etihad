export function ProductHero() {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-size-[50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#B8860B] mb-4 text-balance">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Quality You Can Trust
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Discover our premium range of food products, each crafted with excellence and commitment to the highest quality standards.
          </p>
        </div>
      </div>
    </section>
  )
}
  