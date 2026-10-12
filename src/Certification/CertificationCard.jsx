import { Dice1 } from "lucide-react";

function CertificationCard({number, title, image}){

    return (

    

    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101010] transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/40  hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]">

        <div className="relative aspect-video overflow-hidden">

                <img 
                    src={image} 
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
        </div>

        <div className="p-6 sm:p-8">

            <h3 className="text-sm text-2xl font-semibold text-white">
                {title}
            </h3>

        </div>

    </div>

    );
}

export default CertificationCard;