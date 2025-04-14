import Link from "next/link"

export default function ServicesGrid() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-black md:text-3xl">
            We Provide Prominent <br />
            <span className="text-red-500">IT Solutions</span>
          </h2>
        </div>

        {/* Desktop Layout - Exact match to the image with staggered middle column */}
        <div className="mx-auto hidden max-w-4xl md:block">
          <div className="relative grid grid-cols-3 gap-6">
            {/* First Column */}
            <div className="space-y-6">
              {/* Web Development */}
              <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-red-500 p-8 shadow-md">
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-medium text-white">
                    Web
                    <br />
                    Development
                  </h3>
                </div>
                <Link href="#" className="text-xs text-white">
                  Learn More
                </Link>
              </div>

              {/* Software Solutions */}
              <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-red-100 p-8 shadow-md">
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-medium text-red-500">
                    Software
                    <br />
                    Solutions
                  </h3>
                </div>
                <Link href="#" className="text-xs text-red-500">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Second Column - Staggered down */}
            <div className="mt-12 space-y-6">
              {/* Staffing */}
              <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-medium text-red-500">Staffing</h3>
                </div>
                <Link href="#" className="text-xs text-red-500">
                  Learn More
                </Link>
              </div>

              {/* CRM Solutions */}
              <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-medium text-red-500">
                    CRM
                    <br />
                    Solutions
                  </h3>
                </div>
                <Link href="#" className="text-xs text-red-500">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Third Column */}
            <div className="space-y-6">
              {/* HR Solutions */}
              <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-medium text-red-500">
                    H R<br />
                    Solutions
                  </h3>
                </div>
                <Link href="#" className="text-xs text-red-500">
                  Learn More
                </Link>
              </div>

              {/* Digital Marketing */}
              <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-red-100 p-8 shadow-md">
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-medium text-red-500">
                    Digital
                    <br />
                    Marketing
                  </h3>
                </div>
                <Link href="#" className="text-xs text-red-500">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="mx-auto hidden max-w-2xl grid-cols-2 gap-6 sm:grid md:hidden">
          {/* First Row */}
          <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-red-500 p-6 shadow-md">
            <div className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center text-lg font-medium text-white">
                Web
                <br />
                Development
              </h3>
            </div>
            <Link href="#" className="text-xs text-white">
              Learn More
            </Link>
          </div>

          <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center text-lg font-medium text-red-500">
                H R<br />
                Solutions
              </h3>
            </div>
            <Link href="#" className="text-xs text-red-500">
              Learn More
            </Link>
          </div>

          {/* Second Row */}
          <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-red-100 p-6 shadow-md">
            <div className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center text-lg font-medium text-red-500">
                Software
                <br />
                Solutions
              </h3>
            </div>
            <Link href="#" className="text-xs text-red-500">
              Learn More
            </Link>
          </div>

          <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center text-lg font-medium text-red-500">Staffing</h3>
            </div>
            <Link href="#" className="text-xs text-red-500">
              Learn More
            </Link>
          </div>

          {/* Third Row */}
          <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center text-lg font-medium text-red-500">
                CRM
                <br />
                Solutions
              </h3>
            </div>
            <Link href="#" className="text-xs text-red-500">
              Learn More
            </Link>
          </div>

          <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-red-100 p-6 shadow-md">
            <div className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center text-lg font-medium text-red-500">
                Digital
                <br />
                Marketing
              </h3>
            </div>
            <Link href="#" className="text-xs text-red-500">
              Learn More
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mx-auto grid max-w-xs grid-cols-1 gap-6 sm:hidden">
          <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-red-500 p-6 shadow-md">
            <div className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center text-lg font-medium text-white">
                Web
                <br />
                Development
              </h3>
            </div>
            <Link href="#" className="text-xs text-white">
              Learn More
            </Link>
          </div>

          <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center text-lg font-medium text-red-500">Staffing</h3>
            </div>
            <Link href="#" className="text-xs text-red-500">
              Learn More
            </Link>
          </div>

          <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center text-lg font-medium text-red-500">
                H R<br />
                Solutions
              </h3>
            </div>
            <Link href="#" className="text-xs text-red-500">
              Learn More
            </Link>
          </div>

          <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-red-100 p-6 shadow-md">
            <div className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center text-lg font-medium text-red-500">
                Software
                <br />
                Solutions
              </h3>
            </div>
            <Link href="#" className="text-xs text-red-500">
              Learn More
            </Link>
          </div>

          <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center text-lg font-medium text-red-500">
                CRM
                <br />
                Solutions
              </h3>
            </div>
            <Link href="#" className="text-xs text-red-500">
              Learn More
            </Link>
          </div>

          <div className="flex aspect-square flex-col items-center justify-between rounded-2xl bg-red-100 p-6 shadow-md">
            <div className="flex h-full flex-col items-center justify-center">
              <h3 className="text-center text-lg font-medium text-red-500">
                Digital
                <br />
                Marketing
              </h3>
            </div>
            <Link href="#" className="text-xs text-red-500">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

