import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
              We are <span className="text-[#FF0000]">Saavik Solutions</span>
            </h2>
            <p className="mb-10 text-base leading-relaxed text-gray-700 md:text-lg">
              Saavik Solutions is a premier IT services company, delivering cutting-edge technology solutions across the
              globe. With expertise in website and software development, staffing, CRM, ERP, and digital marketing, we
              help businesses scale and innovate. Our commitment to excellence and customer success drives us to
              transform ideas into powerful digital solutions.
            </p>
            <div>
              <Button className="rounded-full bg-[#FF0000] px-10 py-6 text-sm font-medium uppercase tracking-wide transition-all duration-300 hover:bg-[#ff0000dc] hover:shadow-lg">
                KNOW MORE ABOUT US
              </Button>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-2xl shadow-xl md:h-[400px]">
              <Image
                src="/images/tech-meeting.jpg"
                alt="IT Professional in a video meeting"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-red-600/30 p-3 backdrop-blur-sm transition-transform duration-300 hover:scale-110 cursor-pointer">
                  <PlayCircle className="h-16 w-16 text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

