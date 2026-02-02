import React from 'react'
import { motion } from 'motion/react'
import Noise from '../components/Noise'

const Experience = () => {
    return (
        <section id='experience' className='min-h-screen w-full bg-[#0a0a0a] font-mono relative overflow-hidden flex flex-col'>
            <div className='h-full w-full absolute inset-0 pointer-events-none'>
                <Noise
                    patternSize={500}
                    patternScaleX={2}
                    patternScaleY={2}
                    patternRefreshInterval={2}
                    patternAlpha={15}
                />
            </div>
            <main className='min-h-screen w-full px-6 md:w-[90%] md:px-0 md:self-end flex flex-col justify-center items-start gap-10 relative z-10 py-20 '>
                <motion.p
                    className='text-left text-[#c4ff00] text-sm md:text-lg font-extralight italic'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {`[class_Preview: 0x000000FF_player_stats_display_initiating...]`}
                </motion.p>

                <motion.h1
                    className='text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    My Experience
                </motion.h1>
                <div
                    className="w-full md:w-[90%] h-auto md:h-[25vh] bg-gray-500/30 overflow-hidden flex flex-col md:flex-row gap-4 md:gap-20 p-4 md:p-0"
                    style={{
                        clipPath:
                            "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                >
                    <div className='hidden md:block w-2 h-full bg-[#c4ff00]' />
                    <div className='flex flex-col gap-2 self-start md:self-end m-0 md:m-6'>
                        <motion.h1
                            className='text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Comapny Name
                        </motion.h1>
                        <motion.h1
                            className='text-xl md:text-3xl lg:text-4xl font-black tracking-tight leading-none mt-2 whitespace-nowrap relative z-10 select-none'
                            style={{
                                WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                                color: 'transparent'
                            }}
                        >
                            Role
                        </motion.h1>
                        <motion.p
                            className='text-left text-[#c4ff00] text-sm md:text-lg font-extralight italic'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {`[Breif_description...]`}
                        </motion.p>
                    </div>
                </div>
                <div
                    className="w-full md:w-[90%] h-auto md:h-[25vh] bg-gray-500/30 overflow-hidden flex flex-col md:flex-row gap-4 md:gap-20 p-4 md:p-0"
                    style={{
                        clipPath:
                            "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                >
                    <div className='hidden md:block w-2 h-full bg-[#c4ff00]' />
                    <div className='flex flex-col gap-2 self-start md:self-end m-0 md:m-6'>
                        <motion.h1
                            className='text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Comapny Name
                        </motion.h1>
                        <motion.h1
                            className='text-xl md:text-3xl lg:text-4xl font-black tracking-tight leading-none mt-2 whitespace-nowrap relative z-10 select-none'
                            style={{
                                WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                                color: 'transparent'
                            }}
                        >
                            Role
                        </motion.h1>
                        <motion.p
                            className='text-left text-[#c4ff00] text-sm md:text-lg font-extralight italic'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {`[Breif_description...]`}
                        </motion.p>
                    </div>
                </div>
                <div
                    className="w-full md:w-[90%] h-auto md:h-[25vh] bg-gray-500/30 overflow-hidden flex flex-col md:flex-row gap-4 md:gap-20 p-4 md:p-0"
                    style={{
                        clipPath:
                            "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                >
                    <div className='hidden md:block w-2 h-full bg-[#c4ff00]' />
                    <div className='flex flex-col gap-2 self-start md:self-end m-0 md:m-6'>
                        <motion.h1
                            className='text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Comapny Name
                        </motion.h1>
                        <motion.h1
                            className='text-xl md:text-3xl lg:text-4xl font-black tracking-tight leading-none mt-2 whitespace-nowrap relative z-10 select-none'
                            style={{
                                WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                                color: 'transparent'
                            }}
                        >
                            Role
                        </motion.h1>
                        <motion.p
                            className='text-left text-[#c4ff00] text-sm md:text-lg font-extralight italic'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {`[Breif_description...]`}
                        </motion.p>
                    </div>
                </div>

            </main>
        </section>
    )
}

export default Experience