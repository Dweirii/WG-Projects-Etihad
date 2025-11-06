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
        <p className="mx-auto mb-10 max-w-5xl text-center text-base leading-relaxed text-gray-800 sm:text-lg sm:leading-relaxed">
          Welcome to Etihad Group, a leading name in the food and agricultural industries. Since its establishment in
          2012, the Group has successfully positioned itself as one of the most prominent companies in the Middle East
          and the world, thanks to its commitment to innovation, high quality, and adaptability to modern demands. We
          manage major companies such as Etihad Food Industries and Rayan for Oil Extraction & Feed Mill, which form the
          cornerstones of our continued success. At Etihad Group, we are dedicated to delivering the finest products,
          with a strong focus on sustainable development and industrial excellence.
        </p>

        {/* Learn More Button - Centered */}
        <div className="mb-12 flex justify-center">
          <Button className="rounded-full bg-[#B8860B] px-8 py-6 text-base font-medium text-white transition-colors hover:bg-[#9A7209]">
            Learn more
          </Button>
        </div>

        {/* Image Gallery - Staggered Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Left Image */}
          <div className="flex items-end lg:pb-12">
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/fdd745_84ca085c8f63441588bdd5b70f93a656~mv2.jpg/v1/fill/w_746,h_976,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2025-09-16-12-41-39%203.jpg"
                alt="Aerial view of agricultural facility"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center Image */}
          <div className="flex items-center lg:pt-12">
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/fdd745_e1bbd2635aa84b2d888a9dd3960461f3~mv2.jpg/v1/fill/w_746,h_976,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img1357%20(1).jpg"
                alt="Industrial processing equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-end lg:pb-12">
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/fdd745_6e707603347e44bca5789060f861d10d~mv2.jpg/v1/crop/x_1286,y_0,w_2265,h_2962/fill/w_746,h_976,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11.jpg"
                alt="Industrial facility entrance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
