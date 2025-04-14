import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"

export default function Navbar() {
  return (
    // 1) Make the navbar sticky with a top offset, higher z-index
    <header className="sticky top-0 z-50 px-4 py-3">
      {/* 
        2) Rounded, shadowed navbar container.
           - "bg-black": Dark background
           - "rounded-full": Pill-shape corners
           - "shadow-xl": Deeper shadow
           - "flex items-center justify-between": Basic horizontal layout
           - "container mx-auto": Center alignment + max width
      */}
      <div className="container mx-auto flex items-center justify-between rounded-full bg-black px-5 py-3 shadow-xl">
        {/* LOGO or brand name */}
        <div className="text-xl font-bold uppercase text-white">LOGO</div>
        
        {/* Desktop Menu */}
        <nav className="hidden items-center space-x-10 md:flex">
          <Link href="/" className="text-sm font-medium uppercase text-white hover:text-gray-300">
            HOME
          </Link>
          <Link href="/about" className="text-sm font-medium uppercase text-white hover:text-gray-300">
            ABOUT US
          </Link>
          <Link href="/services" className="text-sm font-medium uppercase text-white hover:text-gray-300">
            SERVICES
          </Link>
          <Link href="/careers" className="text-sm font-medium uppercase text-white hover:text-gray-300">
            CAREERS
          </Link>
          <Link href="/blogs" className="text-sm font-medium uppercase text-white hover:text-gray-300">
            BLOG
          </Link>
          
          {/* CTA button */}
          <Link href="/contact-us">
            <Button className="rounded-full bg-[#FF0000] px-8 py-2 text-sm font-medium uppercase text-white hover:bg-[#ff0000dc]">
              GET A QUOTE
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Smaller CTA button on mobile */}
          <Link href="/contact-us">
            <Button className="rounded-full bg-[#FF0000] px-4 py-2 text-xs font-medium uppercase text-white  hover:bg-[#ff0000dc]">
              GET A QUOTE
            </Button>
          </Link>
          
          {/* Hamburger / MobileMenu component */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
