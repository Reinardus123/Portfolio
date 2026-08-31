import CertificationCard from "./CertificationCard";
import { useEffect, useState, useRef } from "react";
import certification from "../certification";


function Certification(){

    const [isVisible, setIsVisible] = useState(false);
        const certRef = useRef(null);
    
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
    
            if(certRef.current){
                observer.observe(certRef.current);
            }
    
            return () => observer.disconnect();
        }, []);

    return (
        <section 
            ref={certRef}
            id="certifications"
            className="mx-auto w-full max-w-6xl px-6 py-24"
        >

            <div className={`mb-12 transition-all duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>

               <h1 className="mt-3 flex gap-2 text-3xl font-bold text-white sm:text-4xl">
           
                <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Certifications
                </span>
        
            </h1>

                <p className="mt-4 max-w-xl text-sm leading 6 text-gray-400 sm:text-base">
                    My Certifications
                </p>

            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                {certification.map((cert, index) => (
                   <div
                    key={cert.number}
                    style={{transitionDelay:`${index * 50}ms`,
                }}
                    className={`transition-all duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                   >

                    <CertificationCard
                    {...cert}
                    />

                   </div>
                ))}

            </div>




        </section>
    );

}

export default Certification;