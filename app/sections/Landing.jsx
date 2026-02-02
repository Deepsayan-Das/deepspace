'use client';

import { useState, useEffect } from 'react';

export default function Landing() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const parallaxX = (mousePosition.x - window.innerWidth / 2) * 0.01;
    const parallaxY = (mousePosition.y - window.innerHeight / 2) * 0.01;

    return (
        <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden font-mono">
            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-20"
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

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                }}
            />

            {/* Vertical Navigation */}
            <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
                <div className="flex flex-col gap-8 text-[10px] tracking-wider text-gray-500">
                    <button className="hover:text-[#c4ff00] transition-colors duration-300 -rotate-90 origin-left">
                        HOME
                    </button>
                    <button className="hover:text-[#c4ff00] transition-colors duration-300 -rotate-90 origin-left">
                        PROJECTS
                    </button>
                    <button className="hover:text-[#c4ff00] transition-colors duration-300 -rotate-90 origin-left">
                        ABOUT
                    </button>
                    <button className="hover:text-[#c4ff00] transition-colors duration-300 -rotate-90 origin-left">
                        CONTACT
                    </button>
                </div>
            </nav>

            {/* Top Corner Logo */}
            <div className="fixed top-6 left-6 z-50">
                <div className="text-[#c4ff00] text-2xl font-bold tracking-tighter">
                    Λ
                </div>
            </div>

            {/* Bottom Navigation Icons */}
            <div className="fixed bottom-6 left-6 z-50 flex gap-4">
                <button className="w-8 h-8 border border-gray-700 hover:border-[#c4ff00] flex items-center justify-center transition-colors duration-300">
                    <svg className="w-4 h-4 text-gray-500 hover:text-[#c4ff00]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                </button>
                <button className="w-8 h-8 border border-gray-700 hover:border-[#c4ff00] flex items-center justify-center transition-colors duration-300">
                    <svg className="w-4 h-4 text-gray-500 hover:text-[#c4ff00]" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3" />
                        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </button>
            </div>

            {/* Main Content */}
            <main className="relative flex items-center justify-center min-h-screen px-8">
                <div className="max-w-6xl w-full">
                    {/* Main Title */}
                    <div className="mb-8">
                        <h1
                            className={`text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '100ms' }}
                        >
                            <span className="text-white">FRONTEND</span>
                        </h1>
                        <h1
                            className={`text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mt-2 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{
                                transitionDelay: '200ms',
                                WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                                color: 'transparent'
                            }}
                        >
                            ARCHITECT
                        </h1>
                    </div>

                    {/* Description */}
                    <div
                        className={`max-w-md mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        <div className="border-l-2 border-[#c4ff00] pl-4">
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
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div
                        className={`mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <button className="group relative bg-[#c4ff00] text-black px-8 py-4 font-bold text-sm tracking-wider hover:bg-[#b3e600] transition-all duration-300 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                INITIALIZE TRANSMISSION
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </button>
                    </div>

                    {/* Project Info */}
                    <div
                        className={`flex items-end justify-between transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        <div>
                            <p className="text-[10px] text-gray-600 tracking-widest mb-2">
                                ABSTRACT_VERSION_03
                            </p>
                            <p className="text-2xl md:text-3xl font-bold text-white italic">
                                "THE VOID"
                            </p>
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
                    </div>
                </div>
            </main>

            {/* Bottom Info Bar */}
            <div className="fixed bottom-6 right-6 text-[9px] text-gray-600 tracking-wider">
                © SYSTEM STUDIO™ — DIRECTIVE
            </div>

            {/* Corner Decorative Elements */}
            <div className="fixed top-6 right-6 flex gap-2">
                <div className="w-2 h-2 border border-gray-700" />
                <div className="w-2 h-2 border border-gray-700" />
            </div>

            {/* Animated Scan Lines */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)',
                    animation: 'scan 8s linear infinite'
                }}
            />

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&family=Orbitron:wght@900&display=swap');
        
        * {
          font-family: 'Chakra Petch', monospace;
        }
        
        h1 {
          font-family: 'Orbitron', sans-serif;
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        /* Custom cursor effect */
        body {
          cursor: crosshair;
        }

        button {
          cursor: pointer;
        }
      `}</style>
        </div>
    );
}