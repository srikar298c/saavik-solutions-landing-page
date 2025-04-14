// Timeline data
const timelineEvents = [
  {
    id: 1,
    date: "Mar 2, 2025",
    title: "Our Launch",
    description: "Launched our site",
  },
  {
    id: 2,
    date: "Mar 2, 2025",
    title: "Our Launch",
    description: "Launched our site",
  },
]

export default function JourneyTimeline() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-black">
            Our <span className="text-red-600">Journey</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-[157px] top-0 h-full w-0.5 bg-red-600 sm:left-[157px]"></div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {timelineEvents.map((event) => (
              <div key={event.id} className="relative flex flex-col sm:flex-row">
                {/* Date (Left Side) */}
                <div className="z-10 mb-4 flex sm:mb-0 sm:w-[157px] sm:items-center sm:pr-4">
                  <div className="text-sm font-medium">{event.date}</div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-[157px] top-0 z-20 hidden sm:flex sm:-translate-x-1/2 sm:transform sm:items-center sm:justify-center">
                  <div className="h-4 w-4 rounded-full bg-red-600"></div>
                </div>

                {/* Mobile Timeline Dot (only visible on small screens) */}
                <div className="absolute left-0 top-0 z-20 flex h-4 w-4 items-center justify-center sm:hidden">
                  <div className="h-4 w-4 rounded-full bg-red-600"></div>
                </div>

                {/* Content (Right Side) */}
                <div className="z-10 pl-6 sm:flex-1 sm:pl-8">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="mb-4 text-gray-700">{event.description}</p>
                  <div className="overflow-hidden rounded-lg bg-gray-200">
                    <div className="h-48 w-full bg-gray-300 md:h-56 lg:h-64"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

