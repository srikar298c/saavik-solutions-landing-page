'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column - Text content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">
              We are <span className="bg-gradient-to-r from-[#FF0000] to-[#FF0000] bg-clip-text text-transparent">Saavik Solutions</span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-lg leading-relaxed text-gray-700"
            >
              Saavik Solutions is a premier IT services company, delivering cutting-edge technology solutions across the
              globe. With expertise in website and software development, staffing, CRM, ERP, and digital marketing, we
              help businesses scale and innovate. Our commitment to excellence and customer success drives us to
              transform ideas into powerful digital solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button className="rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000] px-10 py-6 text-sm font-medium uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                KNOW MORE ABOUT US
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/tech-meeting.jpg"
                alt="IT Professional in a video meeting"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-full bg-red-600/30 p-3 backdrop-blur-sm cursor-pointer"
                >
                  <PlayCircle className="h-16 w-16 text-white drop-shadow-lg" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

