'use client'
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'motion/react'
import VerticalNav from '../components/VerticalNav';
import '../stylesheets/landings.css';
import Noise from '../components/Noise';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const radarControls = useAnimation();

    useEffect(() => {
        // Delay to ensure smooth entry
        const timer = setTimeout(() => setIsLoaded(true), 100);
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        // Trigger radar expansion
        radarControls.start({
            scale: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }
        });

        return () => {
            clearTimeout(timer);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        }
    }, [radarControls]);

    // Safety check for server-side rendering
    const parallaxX = windowSize.width ? (mousePosition.x - windowSize.width / 2) * 0.01 : 0;
    const parallaxY = windowSize.height ? (mousePosition.y - windowSize.height / 2) * 0.01 : 0;

    // Container variants for staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    // Slide up fade in for text elements
    const slideUpVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            filter: 'blur(4px)'
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        }
    };

    // Glitch reveal for titles
    const glitchVariants = {
        hidden: {
            opacity: 0,
            x: -20,
            filter: 'blur(10px)'
        },
        visible: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        }
    };

    // Scale up for hex address
    const hexVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            rotate: -5
        },
        visible: {
            opacity: 0.1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 1.2,
                delay: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        }
    };

    // Radar pulse animation
    const radarPulseVariants = {
        hidden: {
            scale: 0.5,
            opacity: 0
        },
        visible: (i) => ({
            scale: 1,
            opacity: 0.15 - (i * 0.015),
            transition: {
                duration: 1.5,
                delay: i * 0.1,
                ease: 'easeOut'
            }
        })
    };

    return (
        <motion.div
            className='min-h-screen w-full bg-[#0a0a0a] font-mono relative overflow-hidden flex flex-col'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Grid background with fade in */}
            <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{
                    backgroundImage: `
            linear-gradient(to right, #1a1a1a 1px, transparent 1px),
            linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                    transform: `translate(${parallaxX}px, ${parallaxY}px)`,
                    transition: 'transform 0.3s ease-out'
                }}
            />



            {/* Hex address with dramatic entry */}
            <motion.h1
                className='text-7xl font-bold absolute top-[15%] right-[10%] z-0 text-white opacity-10 font-inter'
                variants={hexVariants}
                initial="hidden"
                animate="visible"
            >
                0xF4A2
            </motion.h1>

            {/* Radar effect container */}
            <motion.div
                className='absolute top-1/2 left-1/2 -translate-y-1/3 translate-x-1/3'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={radarControls}
            >
                {/* the greenish glow */}
                <motion.div
                    className='w-[20vw] aspect-square rounded-full blur-3xl opacity-30 bg-[#c4ff00]'
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{
                        duration: 2,
                        delay: 0.4,
                        ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                />

                {/* Elliptical concentric radar lines */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className='absolute top-1/2 left-1/2 translate-x-1/3 -translate-y-1/2 border border-[#c4ff00] rounded-full animate-radar-pulse'
                            custom={i}
                            variants={radarPulseVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                                width: `${(i + 1) * 15}vw`,
                                height: `${(i + 1) * 15}vw`,
                                animationDelay: `${i * 0.3}s`,
                                animationDuration: '4s'
                            }}
                        />
                    ))}
                </div>

                {/* Rotating radar sweep line */}
                <motion.div
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                >
                    <div
                        className='absolute top-1/2 left-1/2 w-[60vw] h-[1px] origin-left rotate-0 animate-radar-sweep'
                        style={{
                            background: 'linear-gradient(to right, rgba(196, 255, 0, 0.4), transparent)'
                        }}
                    />
                </motion.div>
            </motion.div>

            <VerticalNav />

            <main className='min-h-screen w-[90%] self-end'>
                <motion.div
                    className='mt-[10%]'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Welcome label */}
                    <motion.div
                        className='flex items-end gap-2 mt-4'
                        variants={slideUpVariants}
                    >
                        <motion.div
                            className='w-1 h-10 bg-[#c4ff00]'
                            initial={{ height: 0 }}
                            animate={{ height: 40 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        />
                        <p className="text-gray-400 text-2xl font-extralight tracking-wider leading-relaxed mb-1">
                            WELCOME TO MY
                        </p>
                    </motion.div>

                    {/* Main titles with glitch effect */}
                    <motion.h1
                        className='text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none'
                        variants={glitchVariants}
                    >
                        DIGITAL
                    </motion.h1>

                    <motion.h1
                        className='text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mt-2'
                        variants={glitchVariants}
                        style={{
                            WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                            color: 'transparent'
                        }}
                    >
                        DOMAIN
                    </motion.h1>
                </motion.div>

                {/* Description section */}
                <motion.div
                    className='max-w-md mb-12 flex gap-4'
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <motion.div
                        className='w-1 h-25 bg-[#c4ff00]'
                        initial={{ height: 0 }}
                        animate={{ height: 100 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    />

                    <motion.div
                        className="text-xl font-extralight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                    >
                        <p className="text-gray-400 text-sm leading-relaxed mb-1">
                            CONSTRUCTING DIGITAL
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-1">
                            BRUTALISM THROUGH PRECISION
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-1">
                            CODE AND HIGH-CONCEPT
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            INTERACTION MODELS.
                        </p>
                    </motion.div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    className='mb-16'
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 1.3,
                        ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <motion.button
                        className="group relative bg-[#c4ff00] shadow-[-5px_-5px_0_#c4ff00] text-black px-8 py-4 font-bold text-sm tracking-wider hover:bg-[#b3e600] transition-all duration-300 overflow-hidden"
                        whileHover={{
                            boxShadow: '0 0 20px rgba(196, 255, 0, 0.5)',
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            INITIALIZE TRANSMISSION
                            <motion.svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </motion.svg>
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        />
                    </motion.button>
                </motion.div>

                {/* Project description */}
                <motion.div
                    className='flex flex-col items-end justify-between w-[40%] ml-[50%] mt-[-10%]'
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <div>
                        <p className="text-[10px] text-gray-600 tracking-widest mb-2">
                            PROJECT_PORTFOLIO_ABSTRACT_v4.0
                        </p>
                        <motion.p
                            className="text-2xl md:text-3xl font-bold text-white italic"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.7 }}
                        >
                            {`"SUPERNOVA"`}
                        </motion.p>
                    </div>
                    <div className="text-right">
                        <p className="text-[9px] text-gray-600 tracking-wider mb-1">
                            SYSTEM AUTOMATED_AGENT
                        </p>
                        <p className="text-[9px] text-gray-600 tracking-wider mb-1">
                            INTERFACE NEURAL_SYNCHRONIZE
                        </p>
                        <p className="text-[9px] text-gray-600 tracking-wider">
                            PLATFORM DISTRIBUTED
                        </p>
                    </div>
                </motion.div>
            </main>

            {/* Bottom Info Bar */}
            <motion.div
                className="fixed bottom-6 right-6 text-[9px] text-gray-600 tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
            >
                © Deepsayan Das
            </motion.div>

            {/* Corner Decorative Elements */}
            <motion.div
                className="fixed top-6 right-6 flex gap-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
            >
                <motion.div
                    className="w-2 h-2 border border-gray-700"
                    animate={{
                        borderColor: ['#374151', '#c4ff00', '#374151'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2
                    }}
                />
                <motion.div
                    className="w-2 h-2 border border-gray-700"
                    animate={{
                        borderColor: ['#374151', '#c4ff00', '#374151'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        delay: 0.5
                    }}
                />
            </motion.div>


        </motion.div>
    )
}

export default Hero