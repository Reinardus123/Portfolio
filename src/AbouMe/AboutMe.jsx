import { GraduationCap } from "lucide-react";
import { Focus } from "lucide-react";
import { LocationEdit } from "lucide-react";
import { Workflow } from "lucide-react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import Profile from "../assets/Image/profile.png";
function AboutMe(){
    
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

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

        if(aboutRef.current){
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);
    
    return(

        <section
            ref={aboutRef}
            id="about"
            className= {`mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:px-12 transition-all duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >   
            <div className="mb-10 text-center">
                <h2 className="text-2xl font-bold text-white sm:text-4xl">
                    About Me
                </h2>
            </div>

            <div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-[#101010] p-6 sm:p-8 md:flex-row md:items-center md:p-10 lg:gap-12">

                <div className="w-full md:w-2/5">

                    <div className="mx-auto aspect-square h-[320px] w-[260px] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#151515]">

                       <img 
                            src={Profile}
                            alt="Reinardus Revelino" 
                            className="h-full w-full object-cover"
                        />

                    </div>

                </div>

                <div className="w-full md:w-3/5">
                    <h3 className="text-lg font-semibold text-white sm:text-2xl">
                        I'm Computer Science fresh graduate.
                    </h3>

                    <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base">
                        I'm a fresh graduate from Binus University with a strong interest in web development,
                        particularly fullstack development. I enjoy building modern,
                        responsive. and user-focused web application while continously
                        learning new technologies.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        
                        <div className="flex items-center gap-4">
                            <p className="text-xs text-white">
                                <GraduationCap size={30}/>
                            </p>

                            <p className="mt-1 text-sm font-medium text-white">
                                Computer Science
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <p className="text-xs text-white">
                                <Focus size={30}/>
                            </p>

                            <p className="mt-1 text-sm font-medium text-white">
                                Fullstack Development
                            </p>
                        </div>

                         <div className="flex items-center gap-4">
                            <p className="text-xs text-white">
                                <LocationEdit size={30}/>
                            </p>

                            <p className="mt-3 text-sm font-medium text-white">
                                Indonesia
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <p className="text-xs text-white">
                                <Workflow size={30}/>
                            </p>

                            <p className="mt-3 text-sm font-medium text-white">
                                Open for opportunities
                            </p>
                        </div>


                    </div>

                </div>

            </div>


        </section>




    );
}

export default AboutMe;