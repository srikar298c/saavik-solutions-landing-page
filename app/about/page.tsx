import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about/about-hero"
import MissionVision from "@/components/about/mission-vision"
import TeamSection from "@/components/about/team-section"
import JourneyTimeline from "@/components/about/journey-timeline"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-black text-white">
        <Navbar />
        <AboutHero />
      </div>
      <MissionVision />
      <TeamSection />
      <JourneyTimeline />
      <Footer />
    </main>
  )
}

