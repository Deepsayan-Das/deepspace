'use client'
import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState('');

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            if (!isVisible) {
                setIsVisible(true);
            }
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Detect hoverable elements
        const handleHoverableEnter = (e) => {
            setIsHovering(true);
            const text = e.target.getAttribute('data-cursor-text');
            if (text) {
                setCursorText(text);
            }
        };

        const handleHoverableLeave = () => {
            setIsHovering(false);
            setCursorText('');
        };

        // Add event listeners
        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, input, textarea, [role="button"], .cursor-hover'
        );

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverableEnter);
            el.addEventListener('mouseleave', handleHoverableLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);

            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverableEnter);
                el.removeEventListener('mouseleave', handleHoverableLeave);
            });
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <>
            {/* Hide default cursor */}
            <style jsx global>{`
                * {
                    cursor: none !important;
                }
            `}</style>

            {/* Main Cursor */}
            <motion.div
                className='fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference'
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                }}
            >
                {/* Outer ring */}
                <motion.div
                    className='relative'
                    animate={{
                        scale: isHovering ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Inner dot */}
                    <motion.div
                        className='w-2 h-2 bg-[#c4ff00] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        animate={{
                            scale: isHovering ? 0 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                    />

                    {/* Outer square */}
                    <motion.div
                        className='w-8 h-8 border-2 border-[#c4ff00] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        animate={{
                            scale: isHovering ? 1.8 : 1,
                            rotate: isHovering ? 45 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Corner brackets */}
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10'>
                        <motion.div
                            className='absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#c4ff00]'
                            animate={{
                                opacity: isHovering ? 1 : 0,
                                x: isHovering ? -4 : 0,
                                y: isHovering ? -4 : 0,
                            }}
                        />
                        <motion.div
                            className='absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#c4ff00]'
                            animate={{
                                opacity: isHovering ? 1 : 0,
                                x: isHovering ? 4 : 0,
                                y: isHovering ? -4 : 0,
                            }}
                        />
                        <motion.div
                            className='absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#c4ff00]'
                            animate={{
                                opacity: isHovering ? 1 : 0,
                                x: isHovering ? -4 : 0,
                                y: isHovering ? 4 : 0,
                            }}
                        />
                        <motion.div
                            className='absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#c4ff00]'
                            animate={{
                                opacity: isHovering ? 1 : 0,
                                x: isHovering ? 4 : 0,
                                y: isHovering ? 4 : 0,
                            }}
                        />
                    </div>
                </motion.div>

                {/* Cursor Text */}
                {cursorText && (
                    <motion.div
                        className='absolute top-8 left-8 bg-[#c4ff00] text-black px-2 py-1 text-[10px] font-bold tracking-wider whitespace-nowrap'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {cursorText}
                    </motion.div>
                )}
            </motion.div>

            {/* Glow effect */}
            <motion.div
                className='fixed top-0 left-0 pointer-events-none z-[9998]'
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    opacity: isVisible ? (isHovering ? 0.3 : 0.15) : 0,
                }}
            >
                <div
                    className='w-20 h-20 rounded-full bg-[#c4ff00] blur-xl'
                    style={{
                        filter: 'blur(20px)',
                    }}
                />
            </motion.div>

            {/* Trail effect - multiple delayed cursors */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className='fixed top-0 left-0 pointer-events-none z-[9997]'
                    style={{
                        x: useSpring(cursorX, { damping: 25 - i * 5, stiffness: 300 - i * 50 }),
                        y: useSpring(cursorY, { damping: 25 - i * 5, stiffness: 300 - i * 50 }),
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                    animate={{
                        opacity: isVisible ? 0.2 - i * 0.05 : 0,
                    }}
                >
                    <div className={`w-1 h-1 bg-[#c4ff00] rounded-full`} />
                </motion.div>
            ))}
        </>
    );
};

export default CustomCursor;