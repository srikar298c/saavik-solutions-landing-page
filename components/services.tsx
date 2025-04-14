import { Button } from "@/components/ui/button"
import { Globe, Code, Users, Database, UserCheck, BarChart3 } from "lucide-react"

export default function Services() {
  return (
    <section className="relative w-full bg-black">
      {/* Background overlay with bokeh effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bokeh-background.jpg')",
            opacity: 0.3,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Our IT Solutions Drive Your
              <br />
              Business <span className="text-red-600">Forward</span>
            </h2>
            <p className="mt-6 max-w-md text-sm text-gray-300 md:text-base lg:text-lg">
              Our expert-driven, technology-focused services help businesses streamline operations, enhance digital
              presence, and achieve long-term success.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <Button className="rounded-full bg-red-600 px-10 py-2.5 text-sm font-medium uppercase hover:bg-red-700">
              EXPLORE MORE
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-3">
          {/* Web Development */}
          <div className="rounded-lg bg-white p-8 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-indigo-100">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-black">
                Web
                <br />
                Development
              </h3>
            </div>
          </div>

          {/* Software Development */}
          <div className="rounded-lg bg-white p-8 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-indigo-100">
                <Code className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-black">
                Software
                <br />
                Development
              </h3>
            </div>
          </div>

          {/* Staffing Solutions */}
          <div className="rounded-lg bg-white p-8 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-purple-100">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-black">
                Staffing
                <br />
                Solutions
              </h3>
            </div>
          </div>

          {/* ERP Solutions */}
          <div className="rounded-lg bg-white p-8 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-blue-100">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-black">ERP Solutions</h3>
            </div>
          </div>

          {/* CRM Solutions */}
          <div className="rounded-lg bg-white p-8 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-pink-100">
                <UserCheck className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-black">CRM Solutions</h3>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="rounded-lg bg-white p-8 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-green-100">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-black">
                Digital
                <br />
                Marketing
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

