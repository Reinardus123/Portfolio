import shoply from "./assets/Image/shoply.png"
import CB from "./assets/Image/CeritaBakmi.png";
import UVDetec from "./assets/Image/UVDetection.png";
import GlobalSaver from "./assets/Image/globalSaver.png";
import Paper from "./assets/Image/Paper.png";
import jetflix from "./assets/Image/jetflix.png";

const projects = [
    {
        number: "01",
        title: "Shoply",
        image: shoply,
        description: "A fullstack e-commerce application with product management, authentication, product variants, and admin functionality.",
        technologies : [
            "React",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Tailwind CSS",
        ],
        
        github:"github.com/Reinardus123/Shoply-FrontEnd",
        demo: "#"
    },

     {
        number: "02",
        title: "Cerita Bakmi",
        description: "A web platform for order bakmi",
        image: CB,
        technologies : [
           "ReactJS",
           "Java Spring Boot",
           "PostgreSQL",
           "Tailwind CSS",
           "HTML",
        ],
        
        github:"https://github.com/Reinardus123/CeritaBakmiFE",
        demo: "#"
    },    

    {
        number: "03",
        title: "UV Detection",
        description: "A web platform for uv detection",
        image: UVDetec,
        technologies: [
            "EJS",
            "HTML",
            "CSS",
            "ExpressJS"
        ],
        github:"https://github.com/Reinardus123/UV-Detection",
        demo: "#"
    } , 

    {
        number: "04",
        title : "Global Saver",
        description: "A web platform that enables users to discover and book environmental events, promoting sustainability and raising environmental awareness.",
        image: GlobalSaver,
        technologies: [
            "Php",
            "Laravel",
            "HTML",
            "CSS",
            "Bootstrap"
        ],
        github: "https://github.com/Reinardus123/GlobalSaver",
        demo: "#"
    } ,

    {
        number: "05",
        title: "Explainable Ensemble Learning for Water Potability Classification Using SHAP Based Feature Interpretation",
        description: "A machine learning project that combines ensemble learning and SHAP-based explainability to predict water potability and identify key factors influencing water quality.",
        image: Paper,
        technologies : [
            "Python",
            "Scikit-learn",
            "XGBoost",
            "CatBoost",
            "SVM",
            "SHAP"
        ],
        github: "#",
        demo: "#"
    } , 
    {
        number: "06",
        title: "Jetflix",
        description : "A web platform for online streaming",
        image: jetflix,
        technologies : [
            "HTML",
            "CSS",
            "Javascript"
        ], 
        github: "https://github.com/Reinardus123/Project2",
        demo: "#"
    },
    

    

];

export default projects;
