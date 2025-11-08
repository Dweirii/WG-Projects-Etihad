export default function ContactHero() {
  return (
    <section className="relative bg-gray-50 py-8 md:py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-size-[50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block mb-3">
              <div className="h-1 w-20 bg-[#B8860B] mx-auto"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 text-balance">
              Contact <span className="text-[#B8860B]">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with us. We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

