'use client'
import { motion } from "framer-motion"

const timelineEvents = [
  {
    id: 1,
    date: "Mar 2, 2025",
    title: "Our Launch",
    description: "Launched our site",
    image: "https://placehold.co/600x400"
  },
  {
    id: 2,
    date: "Mar 2, 2025",
    title: "Our Launch",
    description: "Launched our site",
    image: "https://placehold.co/600x400"
  },
]

export default function JourneyTimeline() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-black md:text-5xl">
            Our <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">Journey</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-[157px] top-0 h-full w-1 bg-gradient-to-b from-red-600 to-red-600 sm:left-[157px]"></div>

          {/* Timeline Items */}
          <div className="space-y-20">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col sm:flex-row"
              >
                {/* Date (Left Side) */}
                <div className="z-10 mb-4 flex sm:mb-0 sm:w-[157px] sm:items-center sm:pr-4">
                  <div className="text-sm font-medium text-gray-700">{event.date}</div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-[157px] top-0 z-20 hidden sm:flex sm:-translate-x-1/2 sm:transform sm:items-center sm:justify-center">
                  <div className="h-5 w-5 rounded-full bg-red-600 ring-4 ring-red-100"></div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="absolute left-0 top-0 z-20 flex h-5 w-5 items-center justify-center sm:hidden">
                  <div className="h-5 w-5 rounded-full bg-red-600 ring-4 ring-red-100"></div>
                </div>

                {/* Content (Right Side) */}
                <div className="z-10 pl-6 sm:flex-1 sm:pl-8">
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <p className="mb-4 text-gray-600">{event.description}</p>
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-48 w-full object-cover md:h-56 lg:h-64"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

