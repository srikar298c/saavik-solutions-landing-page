"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Linkedin, Twitter, Facebook, Instagram, ChevronDown } from "lucide-react"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { AnimatedDiv } from "@/components/ui/animated-div";
import { AnimatePresence, motion } from "framer-motion"
import { AnimatedMobileSidebar } from "./ui/animated-mobile-sidebar"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  const [isLandscapeMobile, setIsLandscapeMobile] = useState(false)

  // Handle scroll effect and landscape mobile detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleResize = () => {
      // Define what constitutes a "mobile" width in landscape
      // For example, screen width between 480px and 800px and in landscape orientation
      // Note: `window.innerWidth < 800` is now the upper bound for what's considered "mobile" for styling purposes here
      const mobileLandscapeWidth = window.innerWidth >= 480 && window.innerWidth < 800;
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      setIsLandscapeMobile(mobileLandscapeWidth && isLandscape);
    };

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Set active link based on current path
    setActiveLink(window.location.pathname)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  const navLinks = [
    { href: "/", text: "HOME" },
    {
      href: "/about", text: "ABOUT US", hasDropdown: true, dropdownItems: [
        { href: "/about/team", text: "Our Team" },
        { href: "/about/mission", text: "Mission & Vision" },
      ]
    },
    { href: "/services", text: "SERVICES" },
    { href: "/careers", text: "CAREERS", hideOnLandscapeMobile: true }, // Added flag to hide
    { href: "/blogs", text: "BLOG", hideOnLandscapeMobile: true }, // Added flag to hide
  ]

  return (
    <header className={`sticky top-0 z-50 px-4 py-6 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-black/80' : 'backdrop-blur-sm bg-black/50'}`}>
      <div className={`container mx-auto flex items-center justify-between rounded-full ${scrolled ? 'bg-black/90 py-2' : 'bg-black/80 py-3'} px-6 shadow-2xl border border-white/10 transition-all duration-300`}>
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <AnimatedDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            {/* Mobile and Tablet (sm and md) */}
            <div className="block lg:hidden relative overflow-hidden rounded-full"> {/* Changed md:hidden to lg:hidden */}
              <Image
                src="/saavik-logo-sm.png"
                alt="Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#6A43E7]/0 to-[#E879F9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Desktop (lg and up) */}
            <div className="hidden lg:block relative overflow-hidden"> {/* Changed md:block to lg:block */}
              <Image
                src="/saavik-logo-lg.png"
                alt="Logo"
                width={160}
                height={50}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#6A43E7]/0 to-[#E879F9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimatedDiv>
        </Link>

        {/* Desktop Nav - This will now kick in at 'lg' breakpoint */}
        <nav className="hidden items-center space-x-8 lg:flex"> {/* Changed md:flex to lg:flex */}
          {navLinks.map((link, i) => (
            <AnimatedDiv
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <Link
                href={link.href}
                className={`flex items-center text-sm font-medium uppercase transition-colors duration-300 ${activeLink === link.href ? 'text-[#7F38E8]' : 'text-white group-hover:text-purple-300'}`}
              >
                {link.text}
                {link.hasDropdown && (
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </Link>

              {/* Highlight underline animation */}
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#6A43E7] to-[#E879F9] transition-all duration-300 group-hover:w-full" />

              {/* Dropdown menu */}
              {link.hasDropdown && (
                <div className="absolute left-0 top-full mt-2 hidden w-48 rounded-md bg-black/95 py-2 shadow-xl border border-white/10 group-hover:block">
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#6A43E7]/20 hover:text-white transition-colors duration-200"
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              )}
            </AnimatedDiv>
          ))}
          <AnimatedDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact-us">
              <Button className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#6A43E7] to-[#E879F9] px-8 py-2 text-sm font-medium uppercase text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#7F38E8]/30">
                <span className="relative z-10">GET A QUOTE</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#6A43E7] to-[#7F38E8] opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </Button>
            </Link>
          </AnimatedDiv>
        </nav>

        {/* Mobile (and Tablet) CTA + Hamburger */}
        <div className="flex items-center gap-4 px-4 lg:hidden"> {/* Changed md:hidden to lg:hidden */}
          <AnimatedDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link href="/contact-us">
              <Button className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#6A43E7] to-[#E879F9] px-4 py-2 text-xs font-medium uppercase text-white transition-all duration-300">
                <span className="relative z-10">GET A QUOTE</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#6A43E7] to-[#7F38E8] opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </Button>
            </Link>
          </AnimatedDiv>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </span>
                <span className="absolute inset-0 bg-[#7F38E8]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            {/* Using AnimatedMobileSidebar as discussed */}
            <AnimatedMobileSidebar isOpen={open} onClose={() => setOpen(false)}>
              {/* Mobile Logo */}
              <div className="mt-4 flex justify-center">
                <Image
                  src="/saavik-logo-lg.png"
                  alt="Logo"
                  width={120}
                  height={40}
                />
              </div>

              {/* Nav Links */}
              <nav className="mt-10 flex flex-col space-y-1">
                {navLinks.map((link, i) => (
                  // Conditionally render links for landscape mobile (still applies to narrower views)
                  (!isLandscapeMobile || !link.hideOnLandscapeMobile) && (
                    <div key={link.href} className="relative">
                      <Link
                        href={link.href}
                        onClick={() => !link.hasDropdown && setOpen(false)}
                        className={`flex items-center justify-between p-3 rounded-lg text-base font-medium uppercase transition-all duration-200 ${
                          activeLink === link.href
                            ? 'bg-[#7F38E8]/20 text-purple-300'
                            : 'hover:bg-white/5 text-gray-100'
                          }`}
                      >
                        <span>{link.text}</span>
                        {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                      </Link>

                      {link.hasDropdown && (
                        <div className="pl-4 mt-1 border-l-2 border-[#7F38E8]/30 ml-4 space-y-1">
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="block p-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
                            >
                              {item.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                ))}
                <div className="pt-4">
                  <Link
                    href="/contact-us"
                    onClick={() => setOpen(false)}
                    className="flex w-full justify-center rounded-lg bg-gradient-to-r from-[#6A43E7] to-[#E879F9] p-3 text-sm font-medium uppercase text-white hover:from-[#6A43E7] hover:to-[#7F38E8] transition-all duration-300"
                  >
                    GET A QUOTE
                  </Link>
                </div>
              </nav>

              {/* Social Icons Footer */}
              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-sm text-center text-gray-400 mb-4">Connect With Us</p>
                <div className="flex justify-around">
                  <a href="#" className="p-2 rounded-full bg-white/5 text-white hover:bg-[#7F38E8]/20 hover:text-purple-300 transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-white/5 text-white hover:bg-[#7F38E8]/20 hover:text-purple-300 transition-colors duration-300">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-white/5 text-white hover:bg-[#7F38E8]/20 hover:text-purple-300 transition-colors duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-white/5 text-white hover:bg-[#7F38E8]/20 hover:text-purple-300 transition-colors duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-xs text-center text-gray-500 mt-6">© 2025 Your Company</p>
              </div>
            </AnimatedMobileSidebar>
          </Sheet>
        </div>
      </div>
    </header>
  )
}