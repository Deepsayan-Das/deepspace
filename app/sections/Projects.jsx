'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'
import Noise from '../components/Noise'
import { Github } from 'lucide-react'

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Smooth spring animation with latency
    const smoothX = useSpring(cursorX, {
        damping: 30,
        stiffness: 200,
        mass: 0.5
    });
    const smoothY = useSpring(cursorY, {
        damping: 30,
        stiffness: 200,
        mass: 0.5
    });

    // Project data
    const projects = [
        { id: 1, title: "Project 1" },
        { id: 2, title: "Project 2" },
        { id: 3, title: "Project 3" },
        { id: 4, title: "Project 4" }
    ];

    const handleMouseMove = (e) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
    };

    return (
        <div
            id='projects'
            className='min-h-screen w-full bg-[#0a0a0a] font-mono relative overflow-hidden flex flex-col'
            onMouseMove={handleMouseMove}
        >
            <div className='h-full w-full absolute inset-0 pointer-events-none'>
                <Noise
                    patternSize={500}
                    patternScaleX={2}
                    patternScaleY={2}
                    patternRefreshInterval={2}
                    patternAlpha={15}
                />
            </div>

            {/* Floating image that follows cursor with smooth easing */}
            <AnimatePresence mode="wait">
                {hoveredProject && (
                    <motion.div
                        className='hidden md:block fixed pointer-events-none z-[100] w-[300px] h-[400px] rounded-sm overflow-hidden'
                        style={{
                            left: 0,
                            top: 0,
                            x: smoothX,
                            y: smoothY,
                            translateX: '-50%',
                            translateY: '-50%'
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                    >
                        {/* Placeholder div */}
                        <div className='w-full h-full bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#2a2a2a] relative border-2 border-[#c4ff00] shadow-[0_0_40px_rgba(196,255,0,0.5)]'>
                            {/* Grid overlay */}
                            <div
                                className='absolute inset-0 opacity-30'
                                style={{
                                    backgroundImage: `
                                        linear-gradient(to right, #c4ff00 1px, transparent 1px),
                                        linear-gradient(to bottom, #c4ff00 1px, transparent 1px)
                                    `,
                                    backgroundSize: '20px 20px'
                                }}
                            />

                            {/* Center content */}
                            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
                                <div className='w-20 h-20 border-4 border-[#c4ff00] rounded-sm animate-pulse' />
                                <p className='text-[#c4ff00] text-xl font-bold tracking-wider'>
                                    {hoveredProject.title}
                                </p>
                                <p className='text-gray-500 text-xs tracking-widest'>
                                    [IMAGE_PLACEHOLDER]
                                </p>
                            </div>

                            {/* Corner accents */}
                            <div className='absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#c4ff00]' />
                            <div className='absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#c4ff00]' />
                            <div className='absolute top-3 left-3 w-2 h-2 bg-[#c4ff00] rounded-full animate-pulse' />
                            <div className='absolute bottom-3 right-3 w-2 h-2 bg-[#c4ff00] rounded-full animate-pulse' style={{ animationDelay: '0.5s' }} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className='min-h-screen w-full px-6 md:w-[90%] md:px-0 md:self-end flex flex-col justify-center items-start gap-10 relative z-10 py-20'>
                <motion.p
                    className='text-left text-[#c4ff00] text-sm md:text-lg font-extralight italic'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {`[class_Storage: 0x00000000_Artifacts_display_initiating...]`}
                </motion.p>

                <motion.h1
                    className='text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    My Projects
                </motion.h1>



                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onHover={setHoveredProject}
                    />
                ))}
            </main>
        </div>
    )
}

// Individual Project Card Component
const ProjectCard = ({ project, index, onHover }) => {
    return (
        <motion.div
            className='project-container h-[50vh] w-[80%] relative flex flex-col items-start justify-center gap-6 cursor-pointer border-2 border-transparent hover:border-[#c4ff00]/20 transition-colors'
            style={{
                marginTop: index > 0 ? '6rem' : '0'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => {
                console.log('Hovering:', project.title);
                onHover(project);
            }}
            onMouseLeave={() => {
                console.log('Left:', project.title);
                onHover(null);
            }}
        >
            {/* Project Title */}
            <motion.h1
                className='text-5xl md:text-8xl lg:text-[10rem] xl:text-[15rem] font-black tracking-tight leading-none mt-2 whitespace-normal md:whitespace-nowrap relative z-10 select-none break-words'
                style={{
                    WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                    color: 'transparent'
                }}
            >
                {project.title}
            </motion.h1>

            {/* GitHub Icon */}
            <motion.div
                className='text-left text-[#c4ff00] relative z-10'
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
            >
                <Github className='w-7 h-7 cursor-pointer' />
            </motion.div>
        </motion.div>
    );
};

export default Projects