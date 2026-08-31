import experience from "../experience";
import ExperienceCard from "./ExperienceCard";
import { useState, useEffect } from "react";
import { useRef } from "react";
function Experience() {

     const [isVisible, setIsVisible] = useState(false);
     const expRef = useRef(null);
    
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
    
            if(expRef.current){
                observer.observe(expRef.current);
            }
    
            return () => observer.disconnect();
        }, []);
  return (
    <section
      ref={expRef}
      id="experience"
      className={`mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:px-12 transition-all duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
    >
      <div className="mb-12">

         <h1 className="mt-3 flex gap-2 text-3xl font-bold text-white sm:text-4xl">
           
            <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Experience
            </span>
        
        </h1>
      </div>
      <div className="space-y-6">
        {experience.map((exp) => (
            <ExperienceCard
                key={`${exp.company}-${exp.date}`}
                {...exp}
            />
        ))}
      </div>


        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#101010] p-6 sm:flex-row sm:items-center sm:justify-between">
                    
                    <div>
                        <h3 className="text-xl font-bold text-white">
                            Looking for my next opportunity 
                        </h3>

                        <p className="mt-2 text-sm text-gray-400">
                            I'm open to full-time opportunities and new challenges.
                        </p>
                    </div>

        </div>


    </section>
  );
}

export default Experience;