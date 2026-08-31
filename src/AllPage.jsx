import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar/Navbar";
import TechStack from "./TechStack/TechStack";
import AboutMe from "./AbouMe/AboutMe";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import Experience from "./Experience/Experience";
import Certification from "./Certification/Certification";
import Contact from "./ContactCard/Contact";


function AllPage(){

    return (

        <div className="min-h-screen bg-[#0B0B0B]">
            <Navbar/>

            <HeroSection/>

            <TechStack/>

            <AboutMe/>

            <FeaturedProject/>

            <Experience/>

            <Certification/>

            <Contact/>
        </div>



    );

}

export default AllPage;