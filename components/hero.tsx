'use client'
import React, { useEffect, useRef } from "react";
import Navbar from "./navbar";

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug mb-6 max-w-4xl">
            Empowering{" "}
            <span className="text-[#FF0000]">Businesses</span> with <br />
            <span className="text-[#FF0000]">Cutting-Edge IT Solutions</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
            From software to staffing, we deliver tailored solutions that drive growth and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-[#FF0000] text-white font-semibold rounded-sm hover:bg-[#ff0000dc] transition duration-200 shadow-md">
              Get a Quote
            </button>
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-sm hover:bg-white hover:text-black transition duration-200">
              Our Services
            </button>
          </div>
        </div>

        {/* Trusted By Section with Parallelogram */}
        <div className="absolute bottom-0 left-0 w-full">
          {/* Parallelogram SVG - this creates the angled shape */}
          <svg
  className="w-[40%] h-16 absolute bottom-0"
  preserveAspectRatio="none"
viewBox="0 0 1440 10"
>
  <polygon
   
    points="0,0 0,10 1100,10 850,0 1300,0"
    fill="#ffffff"

  />
</svg>

          
          {/* Content inside the trusted by section */}
          <div className="relative z-10 container mx-auto px-6 pb-6 pt-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left side with "We are trusted by" text */}
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl md:text-2xl font-bold text-black">WE ARE TRUSTED BY</h2>
              </div>
              
              {/* Right side with logo carousel */}
              <div className="overflow-hidden w-full md:w-2/3">
                <div 
                  ref={carouselRef} 
                  className="flex items-center space-x-12"
                  style={{ width: "fit-content" }}
                >
                  {/* First set of logos */}
                  <div className="flex items-center space-x-12 mx-8">
                    <img src="/logosipsum-1.png" alt="Logo 1" className="h-8" />
                    <img src="/logosipsum-3.png" alt="Logo 2" className="h-8" />
                   
                  </div>
                  
                  {/* Duplicate logos for seamless looping */}
                  <div className="flex items-center space-x-12 mx-8">
                    <img src="/logosipsum-2.png" alt="Logo 1" className="h-8" />
                    <img src="/logosipsum-4.png" alt="Logo 2" className="h-8" />
                   
                  </div>
                  
                  {/* Third set of logos for extra buffer */}
                  <div className="flex items-center space-x-12 mx-8">
                    <img src="/logosipsum-4.png" alt="Logo 1" className="h-8" />
                    <img src="/logosipsum-3.png" alt="Logo 2" className="h-8" />
                    
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