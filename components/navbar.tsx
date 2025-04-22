"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Linkedin, Twitter, Facebook, Instagram, ChevronDown } from "lucide-react"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState<string>("/")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    setActiveLink(window.location.pathname)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", text: "HOME" },
    {
      href: "/about", text: "ABOUT US", hasDropdown: true, dropdownItems: [
        { href: "/about/team", text: "Our Team" },
        { href: "/about/history", text: "Our History" },
        { href: "/about/mission", text: "Mission & Vision" },
      ]
    },
    { href: "/services", text: "SERVICES" },
    { href: "/careers", text: "CAREERS" },
    { href: "/blogs", text: "BLOG" },
  ]

  const handleLinkClick = useCallback((href: string) => {
    setActiveLink(href)
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setOpen(false)
    }
  }, [])

  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = useCallback((href: string) => {
    setOpenDropdown(prev => prev === href ? null : href)
  }, [])

  return (
    <header className={`sticky top-0 z-50 px-4 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-black/80' : 'backdrop-blur-sm bg-black/50'}`}>
      <div className={`container mx-auto flex items-center justify-between ${scrolled ? 'py-2 bg-black/90' : 'py-3 bg-black/80'} px-6 rounded-full shadow-2xl border border-white/10 transition-all duration-300`}>
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center">
            <div className="block md:hidden relative rounded-full overflow-hidden">
              <Image src="/saavik-logo-sm.png" alt="Logo" width={40} height={40} className="transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/0 to-[#FF0000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="hidden md:block relative overflow-hidden">
              <Image src="/saavik-logo-lg.png" alt="Logo" width={120} height={40} className="transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/0 to-[#FF0000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <div key={link.href} className="relative group">
              <motion.a
                href={link.href}
                onClick={(e) => {
                  if (!link.hasDropdown) {
                    handleLinkClick(link.href)
                  }
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex items-center text-sm font-medium uppercase transition-all duration-300 transform ${activeLink === link.href ? 'text-[#FF0000]' : 'text-white'} group-hover:scale-105 group-hover:text-red-400`}
              >
                {link.text}
                {link.hasDropdown && (
                  <span 
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleDropdown(link.href)
                    }}
                    className="ml-1 cursor-pointer"
                  >
                    <ChevronDown className="h-4 w-4 transition-transform duration-500" />
                  </span>
                )}
              </motion.a>

              {/* Underline */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: '100%', opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#FF0000] to-[#FF0000]"
              />

              {/* Dropdown - About Us */}
              {link.hasDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: openDropdown === link.href ? 1 : 0, y: openDropdown === link.href ? 0 : -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute left-0 top-full mt-2 flex flex-col w-56 rounded-xl bg-black/90 backdrop-blur-sm py-3 shadow-2xl border border-white/10 transition-all duration-300"
                  style={{ pointerEvents: openDropdown === link.href ? 'auto' : 'none' }}
                >
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        handleLinkClick(item.href)
                        setOpenDropdown(null)
                      }}
                      className="px-5 py-2 text-sm text-gray-300 hover:bg-[#FF0000]/10 hover:text-white transition-all duration-300"
                    >
                      {item.text}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Link href="/contact-us">
              <Button className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#FF0000] to-red-800 px-8 py-2 text-sm font-medium uppercase text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#FF0000]/30">
                <span className="relative z-10">GET A QUOTE</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-red-800 opacity-0 transition-opacity duration-500 hover:opacity-100" />
              </Button>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Items */}
        <div className="flex items-center gap-4 px-4 md:hidden">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Link href="/contact-us">
              <Button className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#FF0000] to-red-800 px-4 py-2 text-xs font-medium uppercase text-white transition-all duration-300">
                <span className="relative z-10">GET A QUOTE</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-red-800 opacity-0 transition-opacity duration-500 hover:opacity-100" />
              </Button>
            </Link>
          </motion.div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white relative overflow-hidden group">
                <span className="relative z-10">{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</span>
                <span className="absolute inset-0 bg-[#FF0000]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <AnimatePresence>
              {open && (
                <motion.aside
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed inset-y-0 right-0 w-72 z-50 bg-gradient-to-b from-black to-gray-900 text-white p-6 shadow-2xl h-full overflow-y-auto border-l border-white/10"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-end">
                      <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="relative overflow-hidden group">
                        <span className="relative z-10"><X className="h-6 w-6" /></span>
                        <span className="absolute inset-0 bg-[#FF0000]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    <div className="mt-4 flex justify-center">
                      <Image src="/saavik-logo-lg.png" alt="Logo" width={120} height={40} />
                    </div>
                    <nav className="mt-10 flex flex-col space-y-1">{
                      navLinks.map(link => (
                        <div key={link.href} className="relative">
                          <Link 
                            href={link.href} 
                            onClick={(e) => {
                              if (!link.hasDropdown) {
                                handleLinkClick(link.href)
                              }
                            }}
                            className={`flex items-center justify-between p-3 rounded-lg text-base font-medium uppercase transition-all duration-200 ${activeLink === link.href ? 'bg-[#FF0000]/20 text-red-400' : 'hover:bg-white/5 text-gray-100'}`}
                          >
                            <span>{link.text}</span>
                            {link.hasDropdown && (
                              <span 
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleDropdown(link.href)
                                }}
                                className="cursor-pointer"
                              >
                                <ChevronDown className="h-4 w-4" />
                              </span>
                            )}
                          </Link>
                          {link.hasDropdown && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ 
                                opacity: openDropdown === link.href ? 1 : 0,
                                height: openDropdown === link.href ? 'auto' : 0
                              }}
                              transition={{ duration: 0.3 }}
                              className="pl-4 mt-1 border-l-2 border-[#FF0000]/30 ml-4 space-y-1 overflow-hidden"
                            >
                              {link.dropdownItems.map(item => (
                                <Link 
                                  key={item.href} 
                                  href={item.href} 
                                  onClick={() => {
                                    handleLinkClick(item.href)
                                    setOpenDropdown(null)
                                    setOpen(false)
                                  }}
                                  className="block p-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                  {item.text}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))
                    }</nav>
                    <div className="pt-4">
                      <Link href="/contact-us" onClick={() => setOpen(false)} className="flex w-full justify-center rounded-lg bg-gradient-to-r from-[#FF0000] to-red-800 p-3 text-sm font-medium uppercase text-white hover:from-[#FF0000] hover:to-red-600 transition-all duration-300">
                        GET A QUOTE
                      </Link>
                    </div>
                    <div className="mt-auto pt-8 border-t border-white/10">
                      <p className="text-sm text-center text-gray-400 mb-4">Connect With Us</p>
                      <div className="flex justify-around">
                        {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                          <a key={idx} href="#" className="p-2 rounded-full bg-white/5 text-white hover:bg-[#FF0000]/20 hover:text-red-400 transition-colors duration-300">
                            <Icon className="h-5 w-5" />
                          </a>
                        ))}
                      </div>
                      <p className="text-xs text-center text-gray-500 mt-6">© 2025 Your Company</p>
                    </div>
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
