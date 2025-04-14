"use client"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Import the map component with no SSR
const GoogleMapWithNoSSR = dynamic(() => import("@/components/google-map"), {
  ssr: false,
})

export default function LetsDiscuss() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="mb-8 text-3xl font-bold text-black md:text-4xl lg:text-5xl">
              Let's Discuss <br />
              Your <span className="text-red-600">Project!</span>
            </h2>
            <p className="mb-10 max-w-md text-base text-gray-700 lg:text-lg">
              Share your project idea and we'll provide a free consultation on how we will turn it into an amazing
              digital product.
            </p>
            <Button className="w-full rounded-full bg-red-600 py-6 text-base font-medium hover:bg-red-700 md:max-w-xs">
              GET A QUOTE
            </Button>
          </div>

          {/* Right Column - Map */}
          <div className="w-full overflow-hidden rounded-lg shadow-lg lg:w-1/2">
            <div className="relative h-[350px] w-full">
              <GoogleMapWithNoSSR />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

