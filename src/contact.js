import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import {
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const contacts = [
  {
    title: "Phone",
    value: "+62 878-73150-260",
    icon: FaPhone,
    href: "",
  },
  {
    title: "Email",
    value: "reinardusrevelino@gmail.com",
    icon:  FaEnvelope,
    href: "",
  },
  {
    title: "LinkedIn",
    value: "Reinardus Revelino Djafar",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/reinardus-revelino-02909a2b7/",
  },
  {
    title: "GitHub",
    value: "Reinardus123",
    icon:   FaGithub, 
    href: "https://github.com/Reinardus123",
  },
  {
    title: "Instagram",
    value: "@reinardusrevelino",
    icon:   FaInstagram,
    href: "https://instagram.com/reinardusrevelio",
  },
];

export default contacts;