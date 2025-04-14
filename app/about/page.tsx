'use client'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about/about-hero"
import MissionVision from "@/components/about/mission-vision"
import TeamSection from "@/components/about/team-section"
import JourneyTimeline from "@/components/about/journey-timeline"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className=" text-black">
        <Navbar />
        <AboutHero />
      </div>
      
      <TeamSection />
      <JourneyTimeline />
      <Footer />
    </main>
  )
}

