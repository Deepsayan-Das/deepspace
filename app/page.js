'use client'
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Landing from "./sections/Landing";
import VerticalNav from "./components/VerticalNav";
import Hero from "./sections/Hero";
import Preloader from "./components/Preloader";
import Noise from "./components/Noise";
import About from "./sections/About";
import { Projector } from "lucide-react";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className={`flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 overflow-x-hidden`}>

        <VerticalNav />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <div className='h-full w-full absolute inset-0'>
          <Noise
            patternSize={500}
            patternScaleX={2}
            patternScaleY={2}
            patternRefreshInterval={2}
            patternAlpha={15}
          />
        </div>
        <Noise
          patternSize={500}
          patternScaleX={2}
          patternScaleY={2}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
        {/* Animated Scan Lines */}
        <motion.div
          className="fixed inset-0 pointer-events-none opacity-[0.02]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.02 }}
          transition={{ duration: 2, delay: 1 }}
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)',
            animation: 'scan 8s linear infinite'
          }}
        />
      </div>
    </>
  );
}
