import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutUs() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading - Centered */}
        <h2 className="mb-8 text-center text-4xl font-bold text-[#B8860B] sm:text-5xl lg:text-6xl">
          About Us
        </h2>

        {/* Description - Centered with Better Spacing */}
        <div className="mx-auto mb-10 max-w-4xl">
          <p className="text-center text-base leading-relaxed text-gray-800 sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
            Welcome to Etihad Group, a leading name in the food and agricultural industries. Since its establishment in
            2012, the Group has successfully positioned itself as one of the most prominent companies in the Middle East
            and the world, thanks to its commitment to innovation, high quality, and adaptability to modern demands.
          </p>
          <p className="mt-6 text-center text-base leading-relaxed text-gray-800 sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
            We manage major companies such as Etihad Food Industries and Rayan for Oil Extraction & Feed Mill, which form the
            cornerstones of our continued success. At Etihad Group, we are dedicated to delivering the finest products,
            with a strong focus on sustainable development and industrial excellence.
          </p>
        </div>

        {/* Learn More Button - Centered */}
        <div className="mb-12 flex justify-center">
          <Button className="rounded-full bg-[#B8860B] px-8 py-6 text-base font-medium text-white transition-colors hover:bg-[#9A7209]">
            Learn more
          </Button>
        </div>

        {/* Image Gallery - 4 Column Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Image 1 */}
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src="https://WG-Global.b-cdn.net/Etihad/ALTEHAD17.jpeg"
              alt="Etihad Group facility"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 2 */}
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src="https://WG-Global.b-cdn.net/Etihad/ALTEHAD25.jpeg"
              alt="Etihad Group facility"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src="https://WG-Global.b-cdn.net/Etihad/ALTEHAD32.jpeg"
              alt="Etihad Group facility"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 4 */}
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src="https://WG-Global.b-cdn.net/Etihad/ALTEHAD4.jpeg"
              alt="Etihad Group facility"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
