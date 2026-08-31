import BcaLogo from "./assets/Image/LogoBCA.png";
import LogoBinus from "./assets/Image/LogoBinus.png";


const experience = [
    {
        date: "Feb 2025 - May 2026",
        company : "BCA (Bank Central Asia)",
        logo: BcaLogo,
        position : "Application Developer Intern",
        location : "Jakarta Indonesia",
        description: [
            "Supported SIT (System Integrated Testing) and UAT (User Acceptance Testing) for ERP Applications",
            "Developed and maintained ERP feature using Vue.js for frontend and Java SpringBoot for backend services",
            "Investigated and resolved application bugs while improving system functionallity and reliability",
        ],

        technologies : [
            "Java",
            "Spring Boot",
            "Java Script",
            "REST API",
            "Postgre SQL",
        ],
    },

    {
        date: "Sept 2023 - Oct 2024",
        company: "Binus University",
        logo: LogoBinus,
        position: "Team Promotion Part Time",
        location: "Jakarta, Indonesia",
        description: [
            "Assisted in planning and executing university promotional events and campus activities",
            "Communicated with prospective students and provided information about university programs",
            "Presented Binus University programs to prospective student at various school and provided informaton about academic opportunities",
        ],
        technologies: [
            "Communication",
            "Teamwork",
            "Event Planning",
        ],
    }, 

    {
        date: "Aug 2023 - Sept 2023",
        company : "Binus University",
        logo: LogoBinus,
        position : 'Freshmen Leader',
        location: "Jakarta, Indonesia",
        description:[
            "Guided and mentored new students during their transition to university life.",
            "Organized mentoring sessions and activities to support academic and personal growth",
            "Built positive relationships and fostered a supportive commnuity"
        ],
        technologies: [
            "Leadership",
            "Mentoring",
            "Public Speaking",
            "Problem Solving"
        ],
    },
];

export default experience;