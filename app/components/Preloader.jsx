'use client'
import React, { useState, useEffect } from 'react'
import '../stylesheets/preloader.css'

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('INITIALIZING');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setIsComplete(true);
                    if (onComplete) {
                        setTimeout(() => onComplete(), 500);
                    }
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 200);

        // Cycling loading text
        const textStates = [
            'INITIALIZING',
            'LOADING MODULES',
            'SYNCHRONIZING',
            'ESTABLISHING CONNECTION',
            'READY'
        ];
        let textIndex = 0;

        const textInterval = setInterval(() => {
            if (progress < 100) {
                textIndex = (textIndex + 1) % (textStates.length - 1);
            } else {
                textIndex = textStates.length - 1;
            }
            setLoadingText(textStates[textIndex]);
        }, 1500);

        return () => {
            clearInterval(progressInterval);
            clearInterval(textInterval);
        };
    }, [progress, onComplete]);

    return (
        <div className='fixed inset-0 z-50 min-h-screen w-full bg-[#0a0a0a] font-mono overflow-hidden flex items-center justify-center'>
            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #1a1a1a 1px, transparent 1px),
                        linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                }}
            />

            {/* Radar effect container - centered */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                {/* Central glow */}
                <div className='w-[25vw] aspect-square rounded-full blur-3xl opacity-40 bg-[#c4ff00]'></div>

                {/* Elliptical concentric radar lines */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#c4ff00] rounded-full'
                            style={{
                                width: `${(i + 1) * 18}vw`,
                                height: `${(i + 1) * 14}vw`,
                                opacity: 0.2 - (i * 0.015),
                                animation: 'radar-pulse 5s ease-out infinite',
                                animationDelay: `${i * 0.25}s`
                            }}
                        />
                    ))}
                </div>

                {/* Rotating radar sweep line */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'>
                    <div
                        className='absolute top-1/2 left-1/2 w-[80vw] h-[2px] origin-left'
                        style={{
                            background: 'linear-gradient(to right, rgba(196, 255, 0, 0.6), transparent)',
                            animation: 'radar-sweep 6s linear infinite'
                        }}
                    />
                </div>

                {/* Center dot pulse */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div
                        className='w-4 h-4 bg-[#c4ff00] rounded-full shadow-[0_0_20px_rgba(196,255,0,0.8)]'
                        style={{
                            animation: 'center-pulse 2s ease-in-out infinite'
                        }}
                    ></div>
                </div>
            </div>

            {/* Loading content */}
            <div className='relative z-10 flex flex-col items-center gap-8'>
                {/* Logo/Title */}
                <div className='text-center'>
                    <div className='text-[#c4ff00] text-6xl font-bold tracking-tighter mb-2 animate-fade-in'>
                        Λ
                    </div>
                    <h1
                        className='text-4xl md:text-5xl font-black tracking-tight text-white animate-fade-in'
                        style={{ animationDelay: '0.2s' }}
                    >
                        INITIALIZING
                    </h1>
                    <h1
                        className='text-4xl md:text-5xl font-black tracking-tight mt-1 animate-fade-in'
                        style={{
                            WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                            color: 'transparent',
                            animationDelay: '0.3s'
                        }}
                    >
                        SYSTEM
                    </h1>
                </div>

                {/* Loading text */}
                <div className='flex items-center gap-3 min-h-[24px]'>
                    <div className='flex gap-1'>
                        <div
                            className='w-2 h-2 bg-[#c4ff00] rounded-full'
                            style={{
                                animation: 'loading-dot 1.5s ease-in-out infinite',
                                animationDelay: '0s'
                            }}
                        ></div>
                        <div
                            className='w-2 h-2 bg-[#c4ff00] rounded-full'
                            style={{
                                animation: 'loading-dot 1.5s ease-in-out infinite',
                                animationDelay: '0.2s'
                            }}
                        ></div>
                        <div
                            className='w-2 h-2 bg-[#c4ff00] rounded-full'
                            style={{
                                animation: 'loading-dot 1.5s ease-in-out infinite',
                                animationDelay: '0.4s'
                            }}
                        ></div>
                    </div>
                    <p className='text-[#c4ff00] text-sm tracking-[0.3em] font-bold transition-all duration-300'>
                        {loadingText}
                    </p>
                </div>

                {/* Progress bar */}
                <div className='w-[300px] md:w-[400px]'>
                    {/* Progress percentage */}
                    <div className='flex justify-between text-xs text-gray-500 mb-2 font-mono'>
                        <span>PROGRESS</span>
                        <span>{Math.min(Math.round(progress), 100)}%</span>
                    </div>

                    {/* Progress bar container */}
                    <div className='w-full h-1 bg-gray-800 relative overflow-hidden'>
                        {/* Background grid lines */}
                        <div
                            className='absolute inset-0'
                            style={{
                                backgroundImage: 'repeating-linear-gradient(90deg, #1a1a1a 0px, #1a1a1a 1px, transparent 1px, transparent 10px)',
                            }}
                        />

                        {/* Progress fill */}
                        <div
                            className='h-full bg-[#c4ff00] transition-all duration-300 ease-out relative'
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        >
                            {/* Animated scan line at the edge */}
                            <div
                                className='absolute right-0 top-0 w-[2px] h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                                style={{
                                    animation: 'pulse 1s ease-in-out infinite'
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Grid marks below bar */}
                    <div className='flex justify-between mt-1'>
                        {[0, 25, 50, 75, 100].map(mark => (
                            <div key={mark} className='flex flex-col items-center'>
                                <div className='w-[1px] h-2 bg-gray-700'></div>
                                <span className='text-[8px] text-gray-600 mt-1'>{mark}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System info */}
                <div className='text-center text-[10px] text-gray-600 tracking-wider space-y-1 mt-4'>
                    <p className={isComplete ? 'text-[#c4ff00]' : ''}>SYSTEM_AUTHENTICATED</p>
                    <p className={isComplete ? 'text-[#c4ff00]' : ''}>NEURAL_INTERFACE_ACTIVE</p>
                    <p className={isComplete ? 'text-[#c4ff00]' : ''}>PROTOCOL_v4.0_LOADED</p>
                </div>
            </div>

            {/* Corner decorative elements */}
            <div className="fixed top-6 left-6 flex gap-2">
                <div
                    className="w-2 h-2 border border-gray-700"
                    style={{
                        animation: 'corner-blink 3s ease-in-out infinite',
                        animationDelay: '0s'
                    }}
                />
                <div
                    className="w-2 h-2 border border-gray-700"
                    style={{
                        animation: 'corner-blink 3s ease-in-out infinite',
                        animationDelay: '0.5s'
                    }}
                />
            </div>

            <div className="fixed bottom-6 right-6 flex gap-2">
                <div
                    className="w-2 h-2 border border-gray-700"
                    style={{
                        animation: 'corner-blink 3s ease-in-out infinite',
                        animationDelay: '1s'
                    }}
                />
                <div
                    className="w-2 h-2 border border-gray-700"
                    style={{
                        animation: 'corner-blink 3s ease-in-out infinite',
                        animationDelay: '1.5s'
                    }}
                />
            </div>

            {/* Timestamp */}
            <div className="fixed bottom-6 left-6 text-[9px] text-gray-600 tracking-wider">
                © SYSTEM STUDIO™ — DIRECTIVE
            </div>


        </div>
    )
}

export default Preloader
