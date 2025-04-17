"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Briefcase, Calendar, Globe, Mail, MapPin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TeamPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("leadership")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  // Sample team data - would normally come from API or CMS
  const teamMembers = {
    leadership: [
      {
        name: "Alex Morgan",
        position: "Chief Executive Officer",
        images: {
        large: "https://placehold.co/400x400",
        medium: "https://placehold.co/300x300",
        small: "https://placehold.co/200x200"
      },
        bio: "With over 20 years of experience in technology and business leadership, Alex drives Saavik's vision and strategic direction.",
        social: { linkedin: "#", twitter: "#" }
      },
      {
        name: "Sarah Chen",
        position: "Chief Technology Officer",
        images: {
        large: "https://placehold.co/400x400",
        medium: "https://placehold.co/300x300",
        small: "https://placehold.co/200x200"
      },
        bio: "Sarah leads our technical strategy and innovation, ensuring we remain at the cutting edge of technology solutions.",
        social: { linkedin: "#", twitter: "#" }
      },
      {
        name: "Michael Okonkwo",
        position: "Chief Operations Officer",
        images: {
        large: "https://placehold.co/400x400",
        medium: "https://placehold.co/300x300",
        small: "https://placehold.co/200x200"
      },
        bio: "Michael oversees our global operations, focusing on optimizing processes and delivering exceptional service.",
        social: { linkedin: "#", twitter: "#" }
      }
    ],
    development: [
      {
        name: "David Rodriguez",
        position: "Lead Software Architect",
        images: {
        large: "https://placehold.co/400x400",
        medium: "https://placehold.co/300x300",
        small: "https://placehold.co/200x200"
      },
        bio: "David designs robust, scalable software architecture for our most complex client challenges.",
        social: { linkedin: "#", github: "#" }
      },
      {
        name: "Priya Sharma",
        position: "Frontend Development Lead",
        images: {
        large: "https://placehold.co/400x400",
        medium: "https://placehold.co/300x300",
        small: "https://placehold.co/200x200"
      },
        bio: "Priya specializes in creating intuitive, responsive user interfaces that enhance user experience.",
        social: { linkedin: "#", github: "#" }
      },
      {
        name: "James Wilson",
        position: "Backend Development Lead",
        images: {
        large: "https://placehold.co/400x400",
        medium: "https://placehold.co/300x300",
        small: "https://placehold.co/200x200"
      },
        bio: "James focuses on building powerful, efficient backend systems that power our clients' applications.",
        social: { linkedin: "#", github: "#" }
      },
      {
        name: "Sophia Park",
        position: "Mobile Development Specialist",
        images: {
        large: "https://placehold.co/400x400",
        medium: "https://placehold.co/300x300",
        small: "https://placehold.co/200x200"
      },
        bio: "Sophia creates native mobile applications that deliver seamless experiences across iOS and Android platforms.",
        social: { linkedin: "#", github: "#" }
      }
    ],
    marketing: [
      {
        name: "Emma Johnson",
        position: "Marketing Director",
        images: {
        large: "https://placehold.co/400x400",
        medium: "https://placehold.co/300x300",
        small: "https://placehold.co/200x200"
      },
        bio: "Emma leads our marketing strategy, focusing on brand development and client acquisition.",
        social: { linkedin: "#", twitter: "#" }
      },
      {
        name: "Carlos Mendez",
        position: "Digital Marketing Specialist",
        images: {
        large: "https://placehold.co/400x400",
        medium: "https://placehold.co/300x300",
        small: "https://placehold.co/200x200"
      },
        bio: "Carlos implements data-driven marketing campaigns that deliver measurable results for our clients.",
        social: { linkedin: "#", twitter: "#" }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-red-900/20 z-10" />
          <Image 
            src="https://placehold.co/1920x500" 
            alt="Team Background" 
            fill 
            className="object-cover object-center opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <motion.div 
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              className="max-w-3xl mb-8 md:mb-0"
            >
              <div className="mb-4">
                <Link href="/about" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 rotate-180 mr-2" /> Back to About
                </Link>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="text-[#FF0000]">Team</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Meet the talented professionals behind Saavik Solutions. Our diverse team combines deep technical expertise with creative problem-solving to deliver exceptional results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10"
            >
              <p className="text-lg font-semibold text-red-400">Team Highlights</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gray-400 mr-3" />
                  <p>18+ Countries Represented</p>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                  <p>250+ Technology Experts</p>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                  <p>15+ Years Average Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Tabs */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {Object.keys(teamMembers).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full text-lg transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-[#FF0000] text-white' 
                      : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Team
                </button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers[activeTab as keyof typeof teamMembers].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-[#FF0000]/30 transition-all duration-300 group"
              >
                <div className="relative h-80">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet="https://placehold.co/400x400"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://placehold.co/300x300"
                    />
                    <Image
                      src="https://placehold.co/200x200"
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-red-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#FF0000] mb-4">{member.position}</p>
                  <p className="text-gray-400 mb-6">{member.bio}</p>
                  <div className="flex gap-3">
                    {Object.keys(member.social).map((platform) => (
                      <a
                        key={platform}
                        href={member.social[platform as keyof typeof member.social]}
                        className="p-2 bg-gray-800 hover:bg-[#FF0000] rounded-full transition-colors"
                        aria-label={`${platform} profile`}
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Locations */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Global Locations</h2>
            <p className="text-gray-300">
              Our team members work across multiple locations worldwide, bringing diverse perspectives to every project.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { city: "San Francisco", country: "USA", icon: <MapPin className="h-5 w-5" /> },
              { city: "London", country: "United Kingdom", icon: <MapPin className="h-5 w-5" /> },
              { city: "Singapore", country: "Singapore", icon: <MapPin className="h-5 w-5" /> },
              { city: "Mumbai", country: "India", icon: <MapPin className="h-5 w-5" /> }
            ].map((location, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
              >
                <div className="flex items-center text-[#FF0000] mb-3">
                  {location.icon}
                  <span className="ml-2 text-lg font-medium">{location.city}</span>
                </div>
                <p className="text-gray-400">{location.country}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative h-80 lg:h-full min-h-[400px] rounded-xl overflow-hidden"
            >
              <Image 
                src="https://placehold.co/800x600"
                alt="Join Our Team"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-2xl font-bold">Join Our Growing Team</p>
                  <p className="text-gray-300">Explore exciting career opportunities</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-lg"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
                Join the Saavik Team
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-300 mb-6">
                We're always looking for talented individuals who are passionate about technology and innovation. Join our diverse team and work on exciting projects that make a difference.
              </motion.p>
              <motion.div variants={staggerContainer} className="space-y-4 mb-8">
                {[
                  "Collaborative work environment",
                  "Professional growth opportunities",
                  "Work with cutting-edge technologies",
                  "Global, diverse team culture"
                ].map((benefit, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#FF0000] mr-3" />
                    <p>{benefit}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex gap-4">
                <Link href="/careers">
                  <button className="px-6 py-3 bg-[#FF0000] hover:bg-[#ff0000bb] transition-colors rounded-lg flex items-center">
                    View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
                <Link href="/contact-us">
                  <button className="px-6 py-3 border border-white/20 hover:bg-white/10 transition-colors rounded-lg flex items-center">
                    Contact Us <Mail className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}