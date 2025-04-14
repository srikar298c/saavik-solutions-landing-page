"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    rating: 5.0,
    review: "The Review",
    feedback: "Feedback Summary",
    name: "Founder, Saavik Pvt. Ltd.",
    position: "Raj",
    image: "https:dummyjson.com/image/300x400",
  },
  {
    id: 2,
    rating: 5.0,
    review: "Exceptional Service",
    feedback: "Their team delivered beyond our expectations",
    name: "CTO, TechVision Inc.",
    position: "Sarah",
    image: "https:dummyjson.com/image/300x400",
  },
  {
    id: 3,
    rating: 4.9,
    review: "Outstanding Results",
    feedback: "The solutions provided transformed our business",
    name: "Director, Global Innovations",
    position: "Michael",
    image: "https:dummyjson.com/image/300x400",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const maxIndex = testimonials.length - 1

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1))
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

    if (isLeftSwipe) {
      handleNext()
    }

    if (isRightSwipe) {
      handlePrev()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <motion.h2 
            className="text-4xl font-bold text-black md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empowered by Our
            <br className="sm:hidden" /> Client's <span className="bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] bg-clip-text text-transparent">Stories</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button className="rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] px-8 py-3 text-sm font-medium uppercase text-white shadow-lg hover:shadow-xl transition-all duration-300">
              VIEW ALL REVIEWS
            </Button>
          </motion.div>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none md:-left-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-1/2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none md:-right-6"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial Slider */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:flex-row">
                    <div className="relative h-96 w-full sm:h-auto sm:w-2/5">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`Testimonial by ${testimonial.name}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-8">
                      <div className="mb-4 flex items-center">
                        <span className="mr-2 text-2xl font-bold text-black">{testimonial.rating}</span>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 fill-current" />
                          ))}
                        </div>
                      </div>
                      <h3 className="mb-6 text-2xl font-bold bg-gradient-to-r from-[#FF0000] to-[#FF0000dc] bg-clip-text text-transparent">
                        {testimonial.review}
                      </h3>
                      <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                        {testimonial.feedback}
                      </p>
                      <div>
                        <p className="text-xl font-semibold text-black">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

