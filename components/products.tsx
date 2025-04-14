'use client'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

// Create a product data array with detailed information
export const products = [
  {
    title: "DigiZinc",
    description: "Expert marketing and branding company transforming businesses through innovative digital strategies.",
    image: "https://dummyjson.com/image/300x400", // Using placeholder image
    details: "Specializing in brand identity, digital marketing, and creative campaigns that drive engagement and conversions."
  },
  {
    title: "BookMySports",
    description: "Comprehensive sports platform for venue booking, player connections, and score tracking.",
    image:"https://dummyjson.com/image/300x400", // Using placeholder image
    details: "Revolutionizing sports experiences with seamless booking, community building, and performance analytics."
  },
  {
    title: "EAOverseas",
    description: "Consultancy and CRM platform for study abroad students across the globe.",
    image: "https://dummyjson.com/image/300x400", // Using placeholder image
    details: "Empowering students with personalized guidance, university matching, and visa assistance services."
  }
]

export default function Products() {
  // This state array tracks which cards are flipped
  const [flipped, setFlipped] = useState(Array(products.length).fill(false))

  // Function to toggle the flip state of a specific card
  const toggleFlip = (index:number) => {
    const newFlipped = [...flipped]
    newFlipped[index] = !newFlipped[index]
    setFlipped(newFlipped)
  }

  return (
    <section className="w-full bg-[#1A1A1A] py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Our <span className="text-red-600">Products</span> :
            <br />
            Innovating Across Industries
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-300 md:text-base">
            We push the boundaries of technology and creativity through our specialized solutions
          </p>
        </div>

        {/* Product Cards with Framer Motion */}
        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="perspective-1000 relative mx-auto h-[400px] w-full max-w-xs cursor-pointer"
              onClick={() => toggleFlip(index)

              }
            >
              {/* The entire card container */}
              <motion.div
                className="relative h-full w-full"
                initial={false}
                animate={{ rotateY: flipped[index] ? 180 : 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card */}
                <motion.div
                  className="absolute inset-0 h-full w-full rounded-lg shadow-lg overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                    <p className="text-sm text-gray-300 truncate">{product.description}</p>
                  </div>
                </motion.div>

                {/* Back of card */}
                <motion.div
                  className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-black bg-opacity-90 p-6 text-center"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)" 
                  }}
                >
                  <h3 className="mb-4 text-2xl font-bold text-white">{product.title}</h3>
                  <p className="mb-4 text-gray-300">{product.description}</p>
                  <p className="text-sm text-gray-400">{product.details}</p>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Creative Wing Section */}
        <div className="mb-10">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl text-center">
            Visit Our Creative Wing- <span className="text-red-600">DigiZinc</span>
          </h2>
          <p className="mb-4 mx-auto w-[80%] text-sm text-gray-300 md:text-base">
            Saavik Solutions drives technology, but creativity fuels innovation! DigiZinc, our creative powerhouse,
            specializes in branding, design, and digital storytelling that captivate and convert.
          </p>
          <p className="mb-8 mx-auto w-[80%] text-sm text-gray-300 md:text-base">
            From stunning visuals to engaging campaigns, we craft experiences that leave a lasting impact. Whether it's
            logo design, UI/UX, ad creatives, or content production, DigiZinc transforms ideas into visually striking
            and strategically powerful assets.
          </p>
        </div>

        {/* DigiZinc Logo with Framer Motion */}
        <motion.div 
          className="mb-10 overflow-hidden rounded-lg border border-white w-[70%] mx-auto bg-black"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div className="relative flex h-[150px] w-[200px] mx-auto items-center justify-center  p-6">
            <div className="text-center">
              <motion.div 
                className="text-6xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                digizinc
              </motion.div>
              <motion.div 
                className="text-sm font-medium tracking-widest text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                THE <span className="text-pink-500">LAST</span> WAY
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button with Framer Motion */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="w-full max-w-2xl rounded-md bg-red-600 py-4 text-base font-medium hover:bg-red-700">
              Explore Creativity at DigiZinc
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}