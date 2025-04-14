"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Globe, Code, Users, Database, UserCheck, BarChart3 } from "lucide-react"

const services = [
  {
    icon: <Globe className="h-6 w-6 text-indigo-600" />,
    title: "Web Development",
    description:
      "Craft responsive, SEO-friendly websites and SPAs tailored for performance, scalability, and business conversion.",
    bg: "bg-indigo-100",
  },
  {
    icon: <Code className="h-6 w-6 text-indigo-600" />,
    title: "Software Development",
    description:
      "From ideation to deployment, build powerful desktop and cloud-native apps that automate your workflow.",
    bg: "bg-indigo-100",
  },
  {
    icon: <Users className="h-6 w-6 text-purple-600" />,
    title: "Staffing Solutions",
    description:
      "Bridge talent gaps with our expert staffing solutions—contractual, permanent, and project-based hiring.",
    bg: "bg-purple-100",
  },
  {
    icon: <Database className="h-6 w-6 text-blue-600" />,
    title: "ERP Solutions",
    description:
      "Optimize core business processes with custom ERP systems built to scale with your enterprise operations.",
    bg: "bg-blue-100",
  },
  {
    icon: <UserCheck className="h-6 w-6 text-pink-600" />,
    title: "CRM Solutions",
    description:
      "Enhance customer relationships and sales pipelines with smart, intuitive CRM platforms tailored to your team.",
    bg: "bg-pink-100",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-green-600" />,
    title: "Digital Marketing",
    description:
      "Drive ROI through data-driven SEO, PPC, content, and social strategies backed by real-time analytics.",
    bg: "bg-green-100",
  },
]

export default function Services() {
  return (
    <section className="relative w-full bg-black">
      {/* Background */}
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
        {/* Header */}
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

        {/* Cards */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-3 group-hover:visible">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group rounded-lg bg-white p-8 shadow-md hover:shadow-xl"
            >
              <div className="mb-4 flex items-start">
                <div className={`flex h-12 w-12 items-center justify-center rounded ${service.bg}`}>
                  {service.icon}
                </div>
                <h3 className="ml-4 text-lg font-semibold text-black group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-sm text-gray-600"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
