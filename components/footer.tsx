import Link from "next/link"
import { Linkedin, Youtube, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-red-600 py-16 text-center text-white">
      <div className="container mx-auto">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-wide opacity-90 md:text-base">IN SEARCH FOR SOME ACTION</p>
        </div>

        <div className="mb-16">
          <ul className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <li>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80 md:text-base"
              >
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80 md:text-base"
              >
                <Youtube className="h-5 w-5 md:h-6 md:w-6" />
                <span>YouTube</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80 md:text-base"
              >
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80 md:text-base"
              >
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80 md:text-base"
              >
                <Twitter className="h-5 w-5 md:h-6 md:w-6" />
                <span>Twitter</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm opacity-90">© Saavik Solution 2025</p>
        </div>
      </div>
    </footer>
  )
}

