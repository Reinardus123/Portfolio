function ExperienceCard({date, company, logo, position, location, description, technologies}){

    return (

        <article
            className="rounded-2xl border border-white/10 bg-[#101010] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-purple-400/30   hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]"
        >

            <div className="flex gap-5">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white">
                    <img 
                        src={logo} 
                        alt={`${company} logo`}
                        className="max-h-12 max-w-12 object-contain"
                    />
                </div>

                <div className="min-w-0 flex-1">

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-xl font-bold text-white">
                            {company}
                        </h3>

                        <span className="text-sm text-gray-500">
                            {date}
                        </span>
                    </div>

                    <p className="mt-1 text-purple-400">
                        {position}
                    </p>

                    <p className="mt-1 text-gray-500">
                       📍 {location}
                    </p>
                </div>
            </div>

            <ul className="mt-6 space-y-3">
                {description.map((item) => (
                    <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-gray-400"
                    >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500"/>
                            
                        <span>
                            {item}
                        </span>
                    </li>
                ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">

                {technologies.map((technology) => (
                    <span 
                        key={technology}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </article>
    );

}

export default ExperienceCard;