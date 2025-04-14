import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CareersHero() {
  return (
    <section className="w-full bg-black py-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Join the Future of <br />
              <span className="text-red-600">Innovation</span>
            </h1>
            <p className="mb-8 text-sm leading-relaxed text-gray-300 md:text-base">
              At Saavik Solutions, we don't just build solutions—we create success. As a team of passionate innovators,
              problem-solvers, and tech enthusiasts, we push the boundaries of cutting-edge IT support and software
              development to help businesses thrive.
            </p>
            <Button className="rounded-md bg-red-600 px-6 py-2 text-sm font-medium hover:bg-red-700">
              View Job Openings
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Abstract red fluid design"
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

