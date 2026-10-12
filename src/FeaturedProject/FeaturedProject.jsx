import ProjectCard from "./ProjectCard";
import projects from "../project.js";
import { useState, useEffect, useRef } from "react";

function FeaturedProject(){

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
                threshold: 0.1, 
            }
        );

        if(aboutRef.current){
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);
    



    return (

            <section
                id="projects"
                className= {`mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:px-12 transition-all duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                ref={aboutRef}

            >
                <div className="mb-12">
                    <h1 className="mt-3 flex gap-2 text-3xl font-bold text-white sm:text-4xl">
                        <span className="text-white">
                            Featured
                        </span>

                        <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Project.
                        </span>
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading 6 text-gray-400 sm:text-base">
                         A selection of projects I've built while exploring
                        fullstack development and modern web technologies.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.number}
                            {...project}
                        />
                    ))}
                </div>


            </section>
    );
}

export default FeaturedProject;