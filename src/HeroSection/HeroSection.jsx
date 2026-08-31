


function HeroSection(){

    return (
        <section id="home" className="min-h-screen px-4 pt-28 ">


            <div className="mx-auto flex min-h-[80vh] w-full max-w-7xl items-center sm:px-8 lg:px-10 xl:px-12">

                
                <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">

                    <div>

                        <div className="mb-5 flex items-center gap-2 text-xs text-gray-400">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            
                            <span>Available for new projects</span>
                        </div>

                        <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"> 
                            <span className="text-white">
                                Hi, I'm
                            </span>

                            <br />

                            <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Reinardus .
                            </span>
                        </h1>

                        <p className="mt-6 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
                             A fresh graduate with a strong interest in web development,
                            particularly in building modern and scalable fullstack
                            applications. I enjoy turning ideas into functional and
                            user-focused digital experiences.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-10">

                            <a 
                                href="#contact"
                                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105 font-bold"
                            >
                                Contact Me →
                            </a>

                            <a href="/resume.pdf" download className="text-sm text-gray-400 transition hover:text-white">
                                 Download CV ↓
                            </a>

                        </div>

                    </div>

                    <div className="flex justify-center md:justify-end">

                        <div className="relative hover:scale-105 transition-all hover:rotate-3">
                            
                            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-green-500/50 via-transparent to-purple-500/50 blur-sm">
                            </div>

                            <div className="relative h-[320px] w-[260px] overflow-hidden rounded-[2rem] border boder-purple-500/30 bg-[#101010] sm:h-[400px] sm:w-[320px] ">

                            </div>
                        </div>

                    </div>

                </div>

            </div>




        </section>
    )
}

export default HeroSection;