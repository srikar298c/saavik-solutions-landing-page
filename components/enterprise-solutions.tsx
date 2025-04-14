"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const solutions = [
  {
    id: 1,
    title: "Custom Web Applications",
    image: "/images/web-application.jpg",
    description: "Tailored web solutions crafted to match your business needs, ensuring performance and scalability.",
  },
  {
    id: 2,
    title: "Enterprise Software",
    image: "/images/enterprise-software.jpg",
    description: "Robust and scalable systems for large organizations to streamline workflows and enhance productivity.",
  },
  {
    id: 3,
    title: "Digital Transformation",
    image: "/images/digital-transformation.jpg",
    description: "Empowering businesses with modern tech to transform traditional operations into digital excellence.",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    image: "/images/cloud-solutions.jpg",
    description: "Secure and scalable cloud services to boost agility, collaboration, and cost-efficiency.",
  },
  {
    id: 5,
    title: "Data Analytics",
    image: "/images/data-analytics.jpg",
    description: "Unlock insights from your data using powerful analytics tools to drive smarter decisions.",
  },
]

export default function EnterpriseSolutions() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(4)
  const containerRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleItems(1)
      else if (window.innerWidth < 1024) setVisibleItems(2)
      else if (window.innerWidth < 1280) setVisibleItems(3)
      else setVisibleItems(4)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, solutions.length - visibleItems)

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1))
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50 && currentIndex < maxIndex) handleNext()
    if (distance < -50 && currentIndex > 0) handlePrev()
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
            Our Unique, Trendy & <span className="text-[#FF0000]">Profitable</span> Enterprise
            <br className="hidden md:block" />
            <span className="text-[#FF0000]">Solutions</span>
          </h2>
          <p className="max-w-3xl text-base text-gray-700 md:text-lg">
            We empower businesses with cutting-edge IT solutions, revolutionizing the way they operate, innovate, and grow.
          </p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  className="px-2 flex-shrink-0"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="group flex h-full flex-col overflow-hidden rounded-xl shadow-md bg-white border"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="relative bg-gray-100 p-4 flex-1 flex flex-col justify-between">
                      <h3 className="text-lg font-semibold text-black mb-2">{solution.title}</h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", type: "spring", bounce: 0.4 }}
                        className="text-sm text-gray-700"
                      >
                        {solution.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-2">
            <Button
              onClick={handlePrev}
              size="icon"
              className="h-12 w-12 rounded-full bg-[#FF0000] hover:bg-[#ff0000dc] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              onClick={handleNext}
              size="icon"
              className="h-12 w-12 rounded-full bg-[#FF0000] hover:bg-[#ff0000dc] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight className="h-6 w-6 text-white" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
