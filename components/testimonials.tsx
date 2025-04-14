"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    rating: 5.0,
    review: "The Review",
    feedback: "Feedback Summary",
    name: "Founder, Saavik Pvt. Ltd.",
    position: "Raj",
    image: "/images/businessman-suit.jpg",
  },
  {
    id: 2,
    rating: 5.0,
    review: "Exceptional Service",
    feedback: "Their team delivered beyond our expectations",
    name: "CTO, TechVision Inc.",
    position: "Sarah",
    image: "/images/businesswoman.jpg",
  },
  {
    id: 3,
    rating: 4.9,
    review: "Outstanding Results",
    feedback: "The solutions provided transformed our business",
    name: "Director, Global Innovations",
    position: "Michael",
    image: "/images/executive.jpg",
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
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            Empowered by Our
            <br className="sm:hidden" /> Client's <span className="text-red-600">stories</span>
          </h2>
          <Button className="self-start rounded-full bg-red-600 px-6 py-2 text-sm font-medium uppercase text-white hover:bg-red-700 sm:self-center">
            VIEW ALL REVIEWS
          </Button>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition-all hover:bg-red-700 focus:outline-none md:-left-5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition-all hover:bg-red-700 focus:outline-none md:-right-5"
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
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-lg bg-gray-100 shadow-md sm:flex-row">
                    <div className="flex flex-1 flex-col justify-center p-8">
                      <div className="mb-2 flex items-center">
                        <span className="mr-2 text-xl font-bold text-black">{testimonial.rating}</span>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" />
                          ))}
                        </div>
                      </div>
                      <h3 className="mb-4 text-lg font-semibold text-orange-500">{testimonial.review}</h3>
                      <p className="mb-6 text-gray-600">{testimonial.feedback}</p>
                      <div>
                        <p className="font-semibold text-black">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="relative h-64 w-full sm:h-auto sm:w-2/5">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`Testimonial by ${testimonial.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

