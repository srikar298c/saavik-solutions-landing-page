"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-black text-white">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-end">
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
             
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="mt-8 flex flex-col space-y-6">
            <Link href="/" className="text-lg font-medium uppercase hover:text-gray-300" onClick={() => setOpen(false)}>
              HOME
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium uppercase hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium uppercase hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/careers"
              className="text-lg font-medium uppercase hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              CAREERS
            </Link>
            <Link
              href="/blogs"
              className="text-lg font-medium uppercase hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              BLOGS
            </Link>
            <Link
              href="/contact-us"
              className="mt-4 rounded-full bg-red-600 px-6 py-2 text-sm font-medium uppercase hover:bg-red-700"
              onClick={() => setOpen(false)}
            >
              GET A QUOTE
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

