import { Button } from "@/components/ui/button"

export default function Products() {
  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Our <span className="text-red-600">Products</span> :
            <br />
            Innovating Across Industries
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-300 md:text-base">
            We push the boundaries of technology and creativity through our specialized solutions
          </p>
        </div>

        {/* Product Cards */}
        <div className="mb-16 grid grid-cols-2 gap-6 lg:grid-cols-3">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center rounded-lg bg-pink-500 p-6 font-bold text-white"
            >
              DIGIZINC
            </div>
          ))}
        </div>

        {/* Creative Wing Section */}
        <div className="mb-10">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Visit Our Creative Wing- <span className="text-red-600">DigiZinc</span>
          </h2>
          <p className="mb-4 max-w-3xl text-sm text-gray-300 md:text-base">
            Saavik Solutions drives technology, but creativity fuels innovation! DigiZinc, our creative powerhouse,
            specializes in branding, design, and digital storytelling that captivate and convert.
          </p>
          <p className="mb-8 max-w-3xl text-sm text-gray-300 md:text-base">
            From stunning visuals to engaging campaigns, we craft experiences that leave a lasting impact. Whether it's
            logo design, UI/UX, ad creatives, or content production, DigiZinc transforms ideas into visually striking
            and strategically powerful assets.
          </p>
        </div>

        {/* DigiZinc Logo */}
        <div className="mb-10 overflow-hidden rounded-lg">
          <div className="relative flex h-[150px] w-full items-center justify-center bg-black p-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-white">digizinc</div>
              <div className="text-sm font-medium tracking-widest text-white">
                THE <span className="text-pink-500">LAST</span> WAY
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button className="w-full max-w-md rounded-md bg-red-600 py-6 text-base font-medium hover:bg-red-700 sm:py-4">
            Explore Creativity at DigiZinc
          </Button>
        </div>
      </div>
    </section>
  )
}

