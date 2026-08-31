import { useState } from "react";
import { href } from "react-router-dom";


function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const menuItems =[
        {name: "Home", href: "#home"},
        {name: "About", href: "#about"},
        {name: "Portfolio", href: "#portfolio"},
        {name: "Certifications", href: "#certifications"}
    ];
    
    const handleMenuClick = () => {
        setIsOpen(false);
    }

    return (
       
        <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
            
            <div className="rounded-[2rem] border border-[#1D1D1D] bg-[#0F1012] px-4 py-3">

                <div className="flex items-center justify-between">

                    <a 
                        href="#home"
                        onClick={handleMenuClick}
                        className="text-base font-semibold text-white"
                    >
                        Reinardus
                    </a>

                    <div className="hidden items-center gap-7 md:flex">

                        {menuItems.map((item) => (
                            <a 
                                key={item.name}
                                href={item.href}
                                className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                            >
                                {item.name}
                            </a>
                        ))}

                        <a 
                            href="#contact"
                            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform duration-200 hover:scale-105"
                        >
                            Contact Me
                        </a>


                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#252525] text-gray-400 transition hover:text-white"
                            aria-label="Toogle theme"
                        >
                             ◐
                        </button>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#252525] text-white md:hidden"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? "x" : "☰"}

                    </button>
                </div>

                {isOpen && (
                    <div className="mt-4 border-t border-[#1D1D1D] pt-4 md:hidden">
                        
                        <div className="flex flex-col gap-1">

                            {menuItems.map((item) => (
                                <a 
                                    key={item.name}
                                    href={item.name}
                                    onClick={handleMenuClick}
                                    className="rounded-xl px-4 py-3 text-sm text-gray-400 transition-colors duration-200 hover:bg-[#1D1D1D] hover:text-white"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a 
                                href="#contact"
                                onClick={handleMenuClick}
                                className="mt-3 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );

}

export default Navbar;