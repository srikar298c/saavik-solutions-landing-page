import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 py-3 backdrop-blur-sm bg-black/50">
      <div className="container mx-auto flex items-center justify-between rounded-full bg-black/80 px-6 py-3 shadow-2xl border border-white/10">
        {/* LOGO or brand name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold uppercase text-white"
        >
          LOGO
        </motion.div>
        
        {/* Desktop Menu */}
        <nav className="hidden items-center space-x-10 md:flex">
          {[
            { href: "/", text: "HOME" },
            { href: "/about", text: "ABOUT US" },
            { href: "/services", text: "SERVICES" },
            { href: "/careers", text: "CAREERS" },
            { href: "/blogs", text: "BLOG" },
          ].map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium uppercase text-white hover:text-red-500 transition-colors duration-300"
              >
                {link.text}
              </Link>
            </motion.div>
          ))}
          
          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact-us">
              <Button className="rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000] px-8 py-2 text-sm font-medium uppercase text-white hover:shadow-xl transition-all duration-300 hover:scale-105">
                GET A QUOTE
              </Button>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-4 md:hidden">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact-us">
              <Button className="rounded-full bg-gradient-to-r from-[#FF0000] to-[#FF0000] px-4 py-2 text-xs font-medium uppercase text-white hover:shadow-xl transition-all duration-300 hover:scale-105">
                GET A QUOTE
              </Button>
            </Link>
          </motion.div>
          
          {/* Hamburger / MobileMenu component */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
