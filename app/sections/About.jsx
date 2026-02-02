import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Noise from '../components/Noise'
import { Download, Scan, Share2 } from 'lucide-react'

const About = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div id='about' className='min-h-screen w-full bg-[#0a0a0a] font-mono relative overflow-hidden flex flex-col'>

            {/* Atomic Orbital Animation Background - Positioned Right */}
            <div className='absolute inset-0 flex items-center justify-center md:justify-end md:pr-[10%] opacity-15'>
                <div className='relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] scale-75 md:scale-100'>

                    {/* Central Core/Nucleus */}
                    <motion.div
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                        <motion.div
                            className='w-8 h-8 rounded-full bg-[#c4ff00] shadow-[0_0_40px_rgba(196,255,0,0.6)]'
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.8, 1, 0.8]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    {/* Orbital 1 - Horizontal */}
                    <motion.div
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <svg width="500" height="500" viewBox="0 0 500 500" className='overflow-visible'>
                            <ellipse
                                cx="250"
                                cy="250"
                                rx="230"
                                ry="80"
                                fill="none"
                                stroke="#c4ff00"
                                strokeWidth="2"
                                opacity="0.4"
                            />
                        </svg>

                        {/* Electron 1 - stays on path */}
                        <motion.div
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                            style={{
                                width: '460px',
                                height: '160px',
                            }}
                        >
                            <motion.div
                                className='w-3 h-3 rounded-full bg-[#c4ff00] shadow-[0_0_15px_rgba(196,255,0,0.8)] absolute'
                                animate={{
                                    offsetDistance: ['0%', '100%'],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    offsetPath: 'ellipse(230px 80px at center)',
                                    offsetRotate: '0deg',
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Orbital 2 - 60 degrees */}
                    <motion.div
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        style={{ rotate: '60deg' }}
                        animate={{ rotate: '420deg' }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <svg width="500" height="500" viewBox="0 0 500 500" className='overflow-visible'>
                            <ellipse
                                cx="250"
                                cy="250"
                                rx="230"
                                ry="80"
                                fill="none"
                                stroke="#c4ff00"
                                strokeWidth="2"
                                opacity="0.4"
                            />
                        </svg>

                        {/* Electron 2 */}
                        <motion.div
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                            style={{
                                width: '460px',
                                height: '160px',
                            }}
                        >
                            <motion.div
                                className='w-3 h-3 rounded-full bg-[#c4ff00] shadow-[0_0_15px_rgba(196,255,0,0.8)] absolute'
                                animate={{
                                    offsetDistance: ['25%', '125%'],
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    offsetPath: 'ellipse(230px 80px at center)',
                                    offsetRotate: '0deg',
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Orbital 3 - 120 degrees */}
                    <motion.div
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        style={{ rotate: '120deg' }}
                        animate={{ rotate: '480deg' }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <svg width="500" height="500" viewBox="0 0 500 500" className='overflow-visible'>
                            <ellipse
                                cx="250"
                                cy="250"
                                rx="230"
                                ry="80"
                                fill="none"
                                stroke="#c4ff00"
                                strokeWidth="2"
                                opacity="0.4"
                            />
                        </svg>

                        {/* Electron 3 */}
                        <motion.div
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                            style={{
                                width: '460px',
                                height: '160px',
                            }}
                        >
                            <motion.div
                                className='w-3 h-3 rounded-full bg-[#c4ff00] shadow-[0_0_15px_rgba(196,255,0,0.8)] absolute'
                                animate={{
                                    offsetDistance: ['50%', '150%'],
                                }}
                                transition={{
                                    duration: 18,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    offsetPath: 'ellipse(230px 80px at center)',
                                    offsetRotate: '0deg',
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Outer decorative ring */}
                    <motion.div
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <svg width="500" height="500" viewBox="0 0 500 500" className='overflow-visible'>
                            <circle
                                cx="250"
                                cy="250"
                                r="240"
                                fill="none"
                                stroke="#c4ff00"
                                strokeWidth="1"
                                opacity="0.15"
                            />
                        </svg>
                    </motion.div>

                </div>
            </div>

            <div className='h-full w-full absolute inset-0'>
                <Noise
                    patternSize={500}
                    patternScaleX={2}
                    patternScaleY={2}
                    patternRefreshInterval={2}
                    patternAlpha={15}
                />

                <main className='h-full w-full px-6 md:px-0 md:w-[75%] md:ml-[20%] flex flex-col items-start justify-center gap-6 relative z-10'>
                    <motion.h1
                        className='text-5xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        WELL WHO
                    </motion.h1>
                    <motion.h1
                        className='text-5xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mt-2'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{
                            WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                            color: 'transparent'
                        }}
                    >
                        AM I ?
                    </motion.h1>

                    <motion.div
                        className='flex gap-2 h-auto md:h-[25%] w-full md:w-[50%]'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.div
                            className='h-auto min-h-[100px] w-1 md:w-2 bg-[#c4ff00]'
                            initial={{ height: 0 }}
                            animate={{ height: '100%' }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        />
                        <p className='text-sm md:text-md lg:text-lg font-extralight text-gray-500 tracking-tight leading-relaxed w-full'>
                            {`Actually, that's a surprisingly tough question and I myself am not sure about it.
                            But I can say I'm a developer who loves to build cool and innovative things.
                            I'm a quick learner and I'm always looking for new challenges.
                            I'm a team player and I'm always looking for new opportunities to grow.
                            Also I'm a nerd who loves to play video games and watch anime, also you'll find me vibin' on my favourite tracks.`}
                        </p>
                    </motion.div>

                    <motion.div
                        className='mb-16 flex flex-col md:flex-row gap-8 md:gap-4 w-full md:w-auto'
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 1.0,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                    >
                        <motion.button
                            className="group relative bg-transparent border-2 border-gray-500 text-gray-500 px-8 py-4 font-bold text-sm tracking-wider hover:bg-gray-500 hover:text-black transition-all duration-300 overflow-hidden flex items-center justify-center gap-2 w-full md:w-auto"
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 0 20px rgba(107, 114, 128, 0.5)',
                            }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                window.open('/DeepsayanDas.pdf', '_blank');
                            }}
                        >
                            <Download className='w-4 h-4' strokeWidth={3} />
                            <span className="relative z-10 flex items-center gap-2">
                                DOWNLOAD MY_RESUME.PDF
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            />
                        </motion.button>

                        <div className='h-auto md:h-[250%] w-full md:w-[20vw] flex flex-col items-center md:items-end justify-center gap-2 text-center md:text-right italic'>
                            <p className='text-md md:text-lg lg:text-xl font-extralight text-gray-500 tracking-tight leading-none w-full md:w-[80%]'>
                                Download Availability
                            </p>
                            <motion.p
                                className='text-lg md:text-xl lg:text-2xl font-bold text-[#c4ff00] tracking-tight leading-none w-full md:w-[80%]'
                                animate={{
                                    opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                Available
                            </motion.p>
                        </div>
                    </motion.div>
                </main>

                <motion.div
                    className='absolute bottom-4 right-4 flex items-center gap-2'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <motion.div
                        className='h-2 w-2 bg-[#c4ff00]'
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <p className='text-xs text-gray-500 tracking-tight leading-none'>
                        Kernel Status : Active
                    </p>
                    <Share2 className='w-4 h-4 text-gray-500' />
                    <Scan className='w-4 h-4 text-gray-500' />
                </motion.div>
            </div>
        </div>
    )
}

export default About