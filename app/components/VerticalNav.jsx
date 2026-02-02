import React from 'react'

const VerticalNav = () => {
    return (
        <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
            <div className="flex flex-col gap-20 text-[10px] tracking-wider text-gray-500 bg-[radial-gradient(circle_at_center,_#2C2F2C_0%,_#2E2F2D_100%)] h-screen w-[5vw] left-0 translate-x-[-30%] justify-center items-center text-2xl border-r border-gray-500">
                <button className="hover:text-[#c4ff00] transition-colors duration-300 -rotate-90 text-[1rem] font-semibold">
                    HOME
                </button>
                <button className="hover:text-[#c4ff00] transition-colors duration-300 -rotate-90 text-[1rem] font-semibold">
                    PROJECTS
                </button>
                <button className="hover:text-[#c4ff00] transition-colors duration-300 -rotate-90 text-[1rem] font-semibold">
                    ABOUT
                </button>
                <button className="hover:text-[#c4ff00] transition-colors duration-300 -rotate-90 text-[1rem] font-semibold">
                    CONTACT
                </button>
            </div>
        </nav>
    )
}

export default VerticalNav