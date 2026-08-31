import { SiGithub } from "react-icons/si"
import { CgWebsite } from "react-icons/cg"

function ProjectCard({number, title, description, image, technologies, github, demo}){

    return(

    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101010] transition-all duration-500 hover:-transalte-y-2 hover:border-purple-400/40  hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]">

        <div className="relative aspect-video overflow-hidden">

            <img 
                src={image}
                alt="" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        </div>

        <div className="p-6 sm:p-8">
            <span className="text-sm text-gray-500">
                {number}
            </span>

            <h3 className="text-sm text-2xl font-semibold text-white">
                {title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400 text:text-base">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span 
                        key={tech}
                        className="rounded-full border  bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                    >
                        {tech}

                    </span>
                ))}
            </div>

            <div className="mt-8 flex gap-6">
                
                <a 
                    href={github}
                    className="text-sm font-medium text-white hover:text-purple-400"
                >
                    <SiGithub size={22}/>
                    
                </a>

                <a 
                    href={demo}
                    className="text-sm font-medium text-white hover:text-purple-400"
                >
                    <CgWebsite size={22}/>

                </a>

            </div>
        </div>

    </div>

            );
}

export default ProjectCard;