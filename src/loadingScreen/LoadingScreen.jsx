import { useEffect, useState } from "react";

function LoadingScreen({onFinish}){

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if(prev >= 100){
                    clearInterval(interval);
                    onFinish();
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [onFinish]);7

    return(
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
            <h1 className="text-7xl font-bold font-bastarda">
                {progress} %
            </h1>

            <div className="mt-8 h-3 w-64 bg-gray-800">
                <div className="h-full bg-white transition-all duration-200" 
                style={{width: `${progress}%`}}/>
                </div>

                <p className="mt-4 text-sm text-gray-400 font-bastarda flex justify-center">
                    Loading portfolio...
                </p>
            </div>  
    
    );
}

export default LoadingScreen;