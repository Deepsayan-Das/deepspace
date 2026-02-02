import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const VerticalNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { label: 'HOME', href: '#hero' },
        { label: 'ABOUT', href: '#about' },
        { label: 'PROJECTS', href: '#projects' },
        { label: 'EXPERIENCE', href: '#experience' },
        { label: 'CONTACT', href: '#contact' }
    ];

    const handleClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-50">
                <div className="flex flex-col justify-evenly text-[10px] tracking-wider text-gray-500 bg-[radial-gradient(circle_at_center,_#2C2F2C_0%,_#2E2F2D_100%)] h-screen w-[5vw] left-0 translate-x-[-30%] items-center text-2xl border-r border-gray-500">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className="hover:text-[#c4ff00] transition-colors duration-300 -rotate-90 text-[1rem] font-semibold"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Mobile Navigation Toggle */}
            <motion.button
                className="md:hidden fixed top-6 right-6 z-[60] text-white p-2"
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <X className="w-8 h-8 text-[#c4ff00]" /> : <Menu className="w-8 h-8" />}
            </motion.button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-sm md:hidden flex flex-col items-center justify-center gap-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {links.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => {
                                    handleClick(e, link.href);
                                    setIsOpen(false);
                                }}
                                className="text-3xl font-black text-white hover:text-[#c4ff00] tracking-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}

                        {/* Decor */}
                        <motion.div
                            className='absolute bottom-12 w-16 h-1 bg-[#c4ff00]'
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default VerticalNav