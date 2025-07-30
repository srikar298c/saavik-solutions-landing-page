'use client'

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PlayCircle, PauseCircle, VolumeX, Volume2 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutUs() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = isMuted
    }
  }, [isMuted])

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      {/* Optional background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          {/* Left column - Text content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-block">
              <span className="bg-[#6A43E7] px-4 py-1 text-sm font-semibold uppercase tracking-wider text-white">
                About Us
              </span>
            </div>

            <h2 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              We at <span className="text-[#6A43E7]">Saavik Solutions</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-lg leading-relaxed text-gray-700"
            >
              Saavik Solutions is a premier IT services company, delivering cutting-edge technology solutions across the
              globe. With expertise in website and software development, staffing, CRM, ERP, and digital marketing, we
              help businesses scale and innovate. Our commitment to excellence and customer success drives us to
              transform ideas into powerful digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <Link href="/about">
                <Button className="rounded-md bg-gradient-to-r from-[#6A43E7] via-[#7F38E8] to-[#E879F9] px-8 py-3 text-sm font-medium uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:shadow-xl">
                  LEARN MORE
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column - Video with background image and controls */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-2xl border border-white/10 group"
              style={{
                backgroundImage: 'url("/about-us.png")', // Put this image in your /public folder
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <video
                ref={videoRef}
                src="/about-us.mp4"
                autoPlay
                loop
                muted={isMuted}
                className="w-full h-full  rounded-xl mix-blend-darken"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

              {/* Video Controls */}
              <div className="absolute inset-0 z-20 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={togglePlay}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white"
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                >
                  {isPlaying ? <PauseCircle className="w-10 h-10" /> : <PlayCircle className="w-10 h-10" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white"
                  aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                >
                  {isMuted ? <VolumeX className="w-8 h-8" /> : <Volume2 className="w-8 h-8" />}
                </button>
              </div>

              {/* Footer Text Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center text-white text-sm">
                <span className="bg-gradient-to-r from-[#6A43E7] via-[#7F38E8] to-[#E879F9] px-2 py-1 rounded font-semibold">
                  Saavik
                </span>
                <span className="text-white/80 text-xs">Transforming businesses through technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
