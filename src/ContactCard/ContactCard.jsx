function ContactCard({icon : Icon, title, value, href}){

    return (
        <a 
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noreferrer" : undefined}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.04]"
        >
            <div className="flex justify-center text-gray-400 transition-colors group-hover:text-purple-400">
                    <Icon size={20}/>


            </div>

            
                <p className="mt-4 text-sm text-gray-500">
                    {title}
                </p>

                <p className="mt-1 text-sm font-medium text-white break-all">
                    {value}
                </p>

        </a>
    );
}
export default ContactCard;