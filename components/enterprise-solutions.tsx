"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    id: 1,
    title: "Custom Web Applications",
    image: "/images/web-application.jpg",
  },
  {
    id: 2,
    title: "Enterprise Software",
    image: "/images/enterprise-software.jpg",
  },
  {
    id: 3,
    title: "Digital Transformation",
    image: "/images/digital-transformation.jpg",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    image: "/images/cloud-solutions.jpg",
  },
  {
    id: 5,
    title: "Data Analytics",
    image: "/images/data-analytics.jpg",
  },
]

export default function EnterpriseSolutions() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(4)
  const containerRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else if (window.innerWidth < 1280) {
        setVisibleItems(3)
      } else {
        setVisibleItems(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, solutions.length - visibleItems)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < maxIndex) {
      handleNext()
    }

    if (isRightSwipe && currentIndex > 0) {
      handlePrev()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
            Our Unique, Trendy & <span className="text-red-600">Profitable</span> Enterprise
            <br className="hidden md:block" />
            <span className="text-red-600">Solutions</span>
          </h2>
          <p className="max-w-3xl text-base text-gray-700 md:text-lg">
            We empower businesses with cutting-edge IT solutions, revolutionizing the way they operate, innovate, and
            grow. Our expertise spans across website and software development, enterprise solutions, CRM, ERP, digital
            marketing, and IT staffing—delivering tailored strategies that align with your business goals.
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
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              }}
            >
              {solutions.map((solution) => (
                <div key={solution.id} className="px-2 flex-shrink-0" style={{ width: `${100 / visibleItems}%` }}>
                  <div className="flex h-full flex-col overflow-hidden rounded-lg">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="bg-gray-200 p-4">
                      <h3 className="text-lg font-semibold text-black">{solution.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-2">
            <Button
              onClick={handlePrev}
              size="icon"
              className="h-10 w-10 rounded-none bg-red-600 hover:bg-red-700"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              onClick={handleNext}
              size="icon"
              className="h-10 w-10 rounded-none bg-red-600 hover:bg-red-700"
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

