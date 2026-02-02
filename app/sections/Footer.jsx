'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, Heart } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Github className='w-5 h-5' />, label: 'GITHUB', url: '#' },
        { icon: <Linkedin className='w-5 h-5' />, label: 'LINKEDIN', url: '#' },
        { icon: <Twitter className='w-5 h-5' />, label: 'TWITTER', url: '#' },
        { icon: <Mail className='w-5 h-5' />, label: 'EMAIL', url: '#' }
    ];

    const quickLinks = [
        { label: 'PROJECTS', url: '#projects' },
        { label: 'EXPERIENCE', url: '#experience' },
        { label: 'ABOUT', url: '#about' },
        { label: 'CONTACT', url: '#contact' }
    ];

    return (
        <footer className='w-full bg-[#0a0a0a] border-t-2 border-[#c4ff00]/30 font-mono relative overflow-hidden'>
            {/* Background Effects */}
            <div className='absolute inset-0 opacity-5'>
                <div
                    className='w-full h-full'
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #c4ff00 1px, transparent 1px),
                            linear-gradient(to bottom, #c4ff00 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Animated scan line */}
            <motion.div
                className='absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c4ff00] to-transparent opacity-50'
                animate={{
                    top: ['-10%', '110%']
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <div className='relative z-10 max-w-7xl mx-auto px-8 py-16'>
                {/* Top Section */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
                    {/* Left - Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className='flex items-center gap-2 mb-4'>
                            <div className='text-[#c4ff00] text-3xl font-bold'>Λ</div>
                            <div>
                                <h3 className='text-xl font-black text-white tracking-tight'>DIGITAL</h3>
                                <p className='text-xs text-gray-600 tracking-widest'>DOMAIN_SYSTEM</p>
                            </div>
                        </div>
                        <p className='text-sm text-gray-500 leading-relaxed'>
                            Crafting digital experiences through precision code and innovative design solutions.
                        </p>

                        {/* Status indicator */}
                        <div className='flex items-center gap-2 mt-4'>
                            <motion.div
                                className='w-2 h-2 bg-[#c4ff00] rounded-full'
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                            />
                            <span className='text-[10px] text-gray-600 tracking-widest'>
                                SYSTEM_OPERATIONAL
                            </span>
                        </div>
                    </motion.div>

                    {/* Center - Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className='text-sm font-bold text-[#c4ff00] tracking-widest mb-4'>
                            QUICK_NAVIGATION
                        </h4>
                        <div className='space-y-2'>
                            {quickLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    className='group flex items-center gap-2 text-gray-500 hover:text-[#c4ff00] transition-colors text-sm'
                                    whileHover={{ x: 5 }}
                                >
                                    <span className='text-[#c4ff00] opacity-0 group-hover:opacity-100 transition-opacity'>
                                        →
                                    </span>
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className='text-sm font-bold text-[#c4ff00] tracking-widest mb-4'>
                            CONNECT_NETWORK
                        </h4>
                        <div className='grid grid-cols-2 gap-3'>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    className='group flex items-center gap-2 text-gray-500 hover:text-[#c4ff00] border border-gray-800 hover:border-[#c4ff00]/50 px-3 py-2 transition-colors text-xs'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                    <span>{social.label}</span>
                                    <ExternalLink className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto' />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    className='h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8'
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />

                {/* Thank You Section */}
                <motion.div
                    className='text-center mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className='inline-flex items-center gap-2 px-6 py-3 border border-[#c4ff00]/30 bg-[#c4ff00]/5'>
                        <Heart className='w-4 h-4 text-[#c4ff00]' fill='#c4ff00' />
                        <p className='text-sm text-gray-400'>
                            Thank you for visiting my digital space
                        </p>
                        <Heart className='w-4 h-4 text-[#c4ff00]' fill='#c4ff00' />
                    </div>
                    <motion.p
                        className='text-xs text-gray-600 mt-3 tracking-wider'
                        animate={{
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity
                        }}
                    >
                        VISITOR_ACKNOWLEDGED // SESSION_APPRECIATED
                    </motion.p>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    className='flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {/* Left - Copyright */}
                    <div className='flex items-center gap-2'>
                        <span>© {currentYear}</span>
                        <span className='text-[#c4ff00] font-bold'>Deepsayan Das</span>
                        <span>• All Rights Reserved</span>
                    </div>

                    {/* Center - Built with */}
                    <div className='flex items-center gap-2 text-[10px] tracking-widest'>
                        <span>BUILT_WITH</span>
                        <span className='text-[#c4ff00]'>REACT</span>
                        <span>+</span>
                        <span className='text-[#c4ff00]'>NEXT.JS</span>
                        <span>+</span>
                        <span className='text-[#c4ff00]'>FRAMER_MOTION</span>
                    </div>

                    {/* Right - Version */}
                    <div className='flex items-center gap-2 text-[10px]'>
                        <span className='px-2 py-1 bg-gray-900 border border-gray-800'>
                            v4.0.1_STABLE
                        </span>
                    </div>
                </motion.div>

                {/* Secret Footer Message */}
                <motion.div
                    className='mt-8 text-center'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className='text-[8px] text-gray-700 tracking-widest font-mono'>
                        [SYSTEM_MSG]: IF_YOU_READ_THIS_YOU_ARE_AWESOME // DEEPSAYAN_DAS_2024
                    </p>
                </motion.div>
            </div>

            {/* Corner decorations */}
            <div className='absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#c4ff00]/20' />
            <div className='absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#c4ff00]/20' />
        </footer>
    )
}

export default Footer