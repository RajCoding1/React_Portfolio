import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Springboot, Java, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Development Engineer specializing in Java, Spring Boot, SQL, and ReactJS, with a strong focus on backend development and a keen eagerness for frontend technologies. Experienced in working on various frontend and full-stack projects independently, building scalable APIs, localizing services, and collaborating with cross-functional teams. Currently pursuing a Post Graduate Diploma in Data Science from Symbiosis Centre for Distance Learning to enhance productivity, efficiency, and analytical capabilities.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Development Engineer",
    company:"Standard Chartered Global Business Service LTD.",
    description:'Experienced Development Engineer specializing in Spring Boot and Java, with hands-on expertise in localizing microservices for Indian servers. Proven track record of significantly increasing test coverage and collaborating effectively with cross-functional teams to drive seamless deployments and robust software solutions.',
    technologies: ["Java", "Springboot", "mySql"],
  },
  {
    year: "2021 - 2021",
    role: "Technical Inter(Internship)",
    company: "BSNL LTD",
    description: `Completed an internship at BSNL Ltd., gaining hands-on experience in telecommunications, bandwidth management, cyberattack mitigation, and 5G technology. Worked on optimizing network efficiency and understanding security challenges in modern telecom infrastructure.`,
    technologies: ["Telecommunication", "CyberSecurity", "Bandwidth Management"],
  },
  {
    year: "2020 - 2021",
    role: "Trainee Developer",
    company: "SRM Coding Bootcamp",
    description:'Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication.',
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Urban Bangalore",
  phoneNo: "+91 82401 55344",
  email: "bhattacharjeesubhadeep0@gmail.com",
};
