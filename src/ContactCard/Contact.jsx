import ContactCard from "./ContactCard";
import { useEffect, useState, useRef } from "react";

import contacts from "../contact.js";

function Contact(){

    const [isVisible, setIsVisible] = useState(false);
        const ctRef = useRef(null);
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if(entry.isIntersecting){
                        setIsVisible(true);
                        // observer.disconnect();
                    }
                    else{
                        setIsVisible(false);
                    }
                },
                {
                    threshold: 0.2, 
                }
            );
    
            if(ctRef.current){
                observer.observe(ctRef.current);
            }
    
            return () => observer.disconnect();
        }, []);

    return (
        
        <section
            ref={ctRef}
            id="contact"
            className={`mx-auto w-full max-w-5xl px-6 py-24  transition-all duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
            <div className="rounded-3xl border border-white/10 bg-[#101010] px-6 py-10 sm:px-10">

                <div className="text-center">
                    <h2 className="text-xl font-semibold text-white">
                        LET'S CONNECT
                    </h2>

                    <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-gray-400">
                        I'm open opportunities and collaboration.

                        <br />

                        Feel free to reach out anytime.
                    </p>
                    
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {contacts.map((ct) => (
                        <ContactCard
                            key={ct.title}
                            {...ct}

                        />
                    ))}
                </div>

            </div>

        </section>

    );
}

export default Contact;