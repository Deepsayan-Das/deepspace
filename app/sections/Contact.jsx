import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Noise from '../components/Noise'
import { Send, Mail, MapPin, Clock } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isFocused, setIsFocused] = useState({
        name: false,
        email: false,
        message: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            console.log('Form submitted:', formData);

            // Reset after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
            }, 5000);
        }, 2000);
    };

    return (
        <section id='contact' className='min-h-screen w-full bg-[#0a0a0a] font-mono relative overflow-hidden flex flex-col p-6'>
            <div className='h-full w-full absolute inset-0 pointer-events-none'>
                <Noise
                    patternSize={500}
                    patternScaleX={2}
                    patternScaleY={2}
                    patternRefreshInterval={2}
                    patternAlpha={15}
                />
            </div>

            <main className='min-h-screen w-full px-6 md:w-[90%] md:px-0 md:self-end relative z-10'>
                <motion.div className='mt-[30%] md:mt-[10%]'>
                    {/* Welcome label */}
                    <motion.div
                        className='flex items-end gap-2 mt-4'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.div
                            className='w-1 h-10 bg-[#c4ff00]'
                            initial={{ height: 0 }}
                            animate={{ height: 40 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        />
                        <p className="text-gray-400 text-lg md:text-2xl font-extralight tracking-wider leading-relaxed mb-1">
                            Make something together or just say hi
                        </p>
                    </motion.div>

                    {/* Main titles */}
                    <motion.h1
                        className='text-5xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        CONTACT
                    </motion.h1>

                    <motion.h1
                        className='text-5xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mt-2'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        style={{
                            WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                            color: 'transparent'
                        }}
                    >
                        ME
                    </motion.h1>
                </motion.div>

                {/* Form Container */}
                <motion.div
                    className='w-full md:w-[75%] h-auto md:h-[75vh] ml-0 md:ml-[10%] flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-0 mt-8 md:mt-12'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className='w-full md:w-[65%] h-auto min-h-[400px] md:h-[80%] bg-transparent border-2 border-[#c4ff00]/30 p-4 md:p-8 relative overflow-hidden'
                        whileHover={{ borderColor: 'rgba(196, 255, 0, 0.5)' }}
                    >
                        {/* Grid overlay */}
                        <div
                            className='absolute inset-0 opacity-5 pointer-events-none'
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, #c4ff00 1px, transparent 1px),
                                    linear-gradient(to bottom, #c4ff00 1px, transparent 1px)
                                `,
                                backgroundSize: '20px 20px'
                            }}
                        />

                        {/* Success Overlay */}
                        <AnimatePresence>
                            {isSubmitted && (
                                <motion.div
                                    className='absolute inset-0 bg-[#c4ff00] flex flex-col items-center justify-center z-50'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <div className='w-24 h-24 border-4 border-black rounded-full flex items-center justify-center mb-6'>
                                            <motion.svg
                                                className='w-12 h-12 text-black'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 0.5, delay: 0.4 }}
                                            >
                                                <motion.path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={3}
                                                    d='M5 13l4 4L19 7'
                                                />
                                            </motion.svg>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className='text-center'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        <h3 className='text-2xl md:text-3xl font-black text-black mb-2'>
                                            TRANSMISSION_SUCCESSFUL
                                        </h3>
                                        <p className='text-xs md:text-sm text-black/70 tracking-wider'>
                                            MESSAGE_RECEIVED // RESPONSE_PENDING
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className='absolute left-0 right-0 h-1 bg-black/20'
                                        animate={{ top: ['-10%', '110%'] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className='relative z-10 h-full flex flex-col justify-between'>
                            {/* Form Header */}
                            <div className='mb-4 md:mb-6'>
                                <div className='flex justify-between items-center mb-4'>
                                    <p className='text-[10px] text-gray-600 tracking-widest'>_UPLINK_ID</p>
                                    <p className='text-[10px] text-[#c4ff00] tracking-widest'>SECURE_PATH</p>
                                </div>
                            </div>

                            {/* Form Fields */}
                            <div className='space-y-4 md:space-y-6 flex-1'>
                                <div className='flex flex-col md:flex-row gap-4'>
                                    <div className='flex-1'>
                                        <label className='text-[10px] text-gray-600 tracking-widest mb-2 block'>
                                            YOUR_NAME
                                        </label>
                                        <input
                                            type='text'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            className='w-full bg-transparent border-b-2 border-gray-800 focus:border-[#c4ff00] outline-none text-white py-2 transition-colors duration-300'
                                            placeholder='ENTER_IDENTIFIER'
                                        />
                                    </div>

                                    <div className='flex-1'>
                                        <label className='text-[10px] text-gray-600 tracking-widest mb-2 block'>
                                            EMAIL_SIGNATURE_CODE
                                        </label>
                                        <input
                                            type='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            className='w-full bg-transparent border-b-2 border-gray-800 focus:border-[#c4ff00] outline-none text-white py-2 transition-colors duration-300'
                                            placeholder='CONTACT@PROTOCOL.COM'
                                        />
                                    </div>
                                </div>

                                <div className='flex-1 flex flex-col'>
                                    <label className='text-[10px] text-gray-600 tracking-widest mb-2'>
                                        PAYLOAD_DATA
                                    </label>
                                    <textarea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        className='flex-1 min-h-[120px] bg-transparent border-2 border-gray-800 focus:border-[#c4ff00] outline-none text-white p-4 resize-none transition-colors duration-300'
                                        placeholder='ENTER TRANSMISSION PARAMETERS...'
                                    />
                                </div>
                            </div>

                            {/* Form Footer */}
                            <div className='mt-4 md:mt-6 flex justify-between items-center text-[9px] text-gray-600 tracking-wider'>
                                <div className='flex gap-2 md:gap-4 flex-wrap'>
                                    <span>ENCODING: AES_GCM</span>
                                    <span>STATUS: STANDBY</span>
                                    <span className='hidden md:inline'>LATENCY: ~14ms</span>
                                </div>
                            </div>
                        </div>

                        {/* Corner decorations */}
                        <div className='absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#c4ff00]' />
                        <div className='absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#c4ff00]' />
                    </motion.form>

                    {/* Send Button - Horizontal on mobile, Vertical on desktop */}
                    <motion.button
                        type='submit'
                        onClick={handleSubmit}
                        disabled={isSubmitting || isSubmitted}
                        className='w-full md:w-[30%] h-[100px] md:h-[80%] bg-[#c4ff00] text-[#0a0a0a] font-bold shadow-[-8px_8px_0px_0px_#000] md:shadow-[-15px_15px_0px_0px_#000] flex flex-row md:flex-col items-center justify-center gap-4 md:gap-6 px-6 md:px-0 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed'
                        whileHover={!isSubmitting && !isSubmitted ? {
                            scale: 1.02,
                            boxShadow: '-10px 10px 0px 0px #000, 0 0 40px rgba(196, 255, 0, 0.3)'
                        } : {}}
                        whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <motion.div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity' />

                        {isSubmitting ? (
                            <motion.div className='flex flex-row md:flex-col items-center gap-3 md:gap-4'>
                                <motion.div
                                    className='w-10 h-10 md:w-16 md:h-16 border-4 border-black border-t-transparent rounded-full'
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                />
                                <div className='text-left md:text-center'>
                                    <p className='text-lg md:text-xl font-black tracking-wider'>SENDING</p>
                                    <p className='text-[10px] tracking-widest mt-1'>PROCESSING...</p>
                                </div>
                            </motion.div>
                        ) : (
                            <>
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Send className='w-10 h-10 md:w-16 md:h-16' strokeWidth={3} />
                                </motion.div>

                                <div className='text-left md:text-center'>
                                    <p className='text-2xl md:text-3xl font-black tracking-wider'>SEND</p>
                                    <p className='text-[10px] tracking-widest mt-1'>
                                        INITIALIZE_HANDSHAKE
                                    </p>
                                </div>
                            </>
                        )}

                        <motion.div
                            className='absolute left-0 right-0 h-[2px] bg-black/20'
                            animate={{ top: ['-10%', '110%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.button>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                    className='w-full md:w-[75%] md:ml-[10%] mt-8 flex flex-col md:flex-row gap-4'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <ContactInfoCard icon={<Mail className='w-4 h-4' />} label='EMAIL_ENDPOINT' value='contact@protocol.dev' />
                    <ContactInfoCard icon={<MapPin className='w-4 h-4' />} label='PHYSICAL_NODE' value='Kolkata, West Bengal, IN' />
                    <ContactInfoCard icon={<Clock className='w-4 h-4' />} label='TIMEZONE_UTC' value='+05:30 IST' />
                </motion.div>

                {/* Footer info */}
                <motion.div
                    className='w-full md:w-[75%] md:ml-[10%] mt-6 text-[9px] text-gray-600 tracking-wider flex flex-col md:flex-row justify-between gap-2 pb-20 md:pb-0'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                >
                    <p>[PORT_80] [HTTPS_443] [SMTP_25]</p>
                    <p>© UPLINK_PROTOCOL_SYSTEM™</p>
                </motion.div>
            </main>

            {/* Bottom corner indicator */}
            <div className='fixed bottom-6 right-6 flex items-center gap-2 text-[9px] text-gray-600'>
                <motion.div
                    className='w-2 h-2 bg-[#c4ff00] rounded-full'
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <span>SYSTEM_ONLINE</span>
            </div>
        </section>
    )
}

const ContactInfoCard = ({ icon, label, value }) => {
    return (
        <motion.div
            className='flex-1 border border-gray-800 p-4 hover:border-[#c4ff00]/50 transition-colors cursor-default'
            whileHover={{ y: -5 }}
        >
            <div className='flex items-center gap-2 mb-2 text-[#c4ff00]'>
                {icon}
                <p className='text-[9px] tracking-widest'>{label}</p>
            </div>
            <p className='text-sm text-white'>{value}</p>
        </motion.div>
    );
};

export default Contact