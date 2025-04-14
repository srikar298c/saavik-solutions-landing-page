'use client'
import React, { useEffect, useRef } from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion"

export default function Hero() {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Animation for continuous carousel
    const carousel = carouselRef.current;
    if (!carousel) return;

    let position = 0;
    const speed = 0.5;
    const totalWidth = (carousel as HTMLElement).scrollWidth / 2; // We have duplicate items for seamless loop

    const animate = () => {
      position -= speed;
      
      // Reset position when first set of logos has scrolled out of view
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      
      (carousel as HTMLElement).style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/office-background.jpg')" }}
      >
        {/* NAVBAR */}
        <Navbar />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70" />

        {/* Hero Content */}
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-white px-6 text-center mt-[-80px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug mb-6 max-w-4xl"
          >
            Empowering{" "}
            <span className="bg-gradient-to-r from-[#FF0000] to-[#FF0000] bg-clip-text text-transparent">Businesses</span> with <br />
            <span className="bg-gradient-to-r from-[#FF0000] to-[#FF0000] bg-clip-text text-transparent">Cutting-Edge IT Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed mb-8"
          >
            From software to staffing, we deliver tailored solutions that drive growth and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-[#FF0000] to-[#FF0000] text-white font-semibold rounded-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get a Quote
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              Our Services
            </button>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <div className="absolute bottom-0 left-0 w-full bg-gray-950/50 backdrop-blur-sm">
          <div className="relative z-10 container mx-auto px-6 pb-8 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 md:mb-0 relative bg-white px-6 py-3 rounded-lg"
                style={{ transform: 'skew(120deg)' }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-black">WE ARE TRUSTED BY</h2>
                {/* Rectangle blob */}
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-500 rounded-full blur-sm"></div>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full blur-sm"></div>
              </motion.div>
              
              <div className="overflow-hidden w-full md:w-2/3">
                <div 
                  ref={carouselRef} 
                  className="flex items-center space-x-16"
                  style={{ width: "fit-content" }}
                >
                  {/* First set of logos */}
                  <div className="flex items-center space-x-12 mx-8">
                    <img src="/logosipsum-1.png" alt="Logo 1" className="h-8" />
                   
                   
                  </div>
                  
                  {/* Duplicate logos for seamless looping */}
                  <div className="flex items-center space-x-12 mx-8">
                    <img src="/logosipsum-2.png" alt="Logo 1" className="h-8" />
            
                   
                  </div>
                  
                  {/* Third set of logos for extra buffer */}
                  <div className="flex items-center space-x-12 mx-8">
                    <img src="/logosipsum-3.png" alt="Logo 1" className="h-8" />
               
                    
                  </div>
                  <div className="flex items-center space-x-12 mx-8">
                    <img src="/logosipsum-4.png" alt="Logo 1" className="h-8" />
               
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}