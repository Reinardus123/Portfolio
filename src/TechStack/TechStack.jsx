import expressLogo from "../assets/Image/express.png";
import reactLogo from "../assets/Image/react.png";
import postgre from "../assets/Image/postgre.png";
import tailwind from "../assets/Image/tailwind.png"
import springBootLogo from "../assets/Image/SpringBoot.png";

 const technologies = [
        {name : "React", logo: reactLogo},
        {name : "Express", logo: expressLogo},
        {name : "PostgreSQL", logo: postgre},
        {name : "SpringBoot", logo: springBootLogo},
        {name : "Tailwind", logo: tailwind}

    ];

function TechStack(){

    return (
        
        <section className="overflow-hidden py-20">

            <div className="mx-auto mb-12 max-w-2xl text-center">

                <h2 className="text-2xl font-bold text-white sm:text-4xl">
                    Technological Foundation
                </h2>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                    The technologies I use to build modern
                    fullstack applications.
                </p>
            </div>

            <div className="relative mx-auto w-full max-w-2xl overflow-hidden">

                <div className="w-max animate-marquee">

                    <div className="flex min-w-full shrink-0 justify-center gap-4">

                        {technologies.map((tech) => (
                        <div key={tech}  className="flex items-center px-6 text-sm font-medium text-gray-300">
                            
                            <img 
                                src={tech.logo} 
                                alt={tech.name}
                                className="w-18 h-18 object-contain"
                            />

                        </div>
                    ))}

                     {technologies.map((tech) => (
                        <div  key={`duplicate ${tech.name}`} className="flex items-center px-6 font-medium text-gray-300">
                               <img 
                                src={tech.logo} 
                                alt={tech.name}
                                className="w-18 h-18 object-contain"
                            />
                        </div>
                    ))}


                    </div>

                 

                   
                </div>

            </div>


        </section>
    );
   

}

export default TechStack