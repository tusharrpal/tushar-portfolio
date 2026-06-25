import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const profile = {
  name: "Tushar Pal",
  role: "Computer Engineering Student • Full Stack Developer • Java Enthusiast",
  location: "Pune, India",
  email: "pal.tusharr@gmail.com",
  phone: "+91 9156091227",
  github: "https://github.com/tusharrpal",
  linkedin: "https://linkedin.com/in/tushar-pal-978950289",
  instagram: "https://instagram.com/tusharrpal",
  resumeUrl: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "I'm a third-year Computer Engineering student at KJEI's Trinity Academy of Engineering, Pune (B.E., Class of 2027). I build full-stack web applications with the MERN stack and have a soft spot for clean architecture, REST APIs, and Java.",
    "Beyond academics, I spend my time strengthening my problem-solving skills through Data Structures & Algorithms, exploring new technologies, and building projects that help me learn through hands-on experience. I value clean architecture, readable code, and the creation of applications that deliver a smooth user experience.",
  ],
  stats: [
    { label: "Graduating", value: "2027" },
    { label: "PROJECTS BUILTT", value: "5+" },
    { label: "Based in", value: "Pune, IN" },
  ],
};

export const projects = [
  {
    title: "Real-Time Chat Application",
    description:
      "MERN + Socket.io messaging app with JWT auth, online/offline presence, unread tracking, and media sharing over WebSockets.",
    image: project1,
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    liveUrl: "#",
    repoUrl: "https://github.com/tusharrpal",
  },
  {
    title: "AgroControl — Smart Agri Marketplace",
    description:
      "Full-stack e-commerce platform connecting farmers and buyers, with crop management, payments, order tracking, and an admin dashboard.",
    image: project2,
    tags: ["Django", "JavaScript", "HTML", "CSS", "REST"],
    liveUrl: "#",
    repoUrl: "https://github.com/tusharrpal",
  },
  {
    title: "EYJDS Farmer-to-User Platform",
    description:
      "Python full-stack training project enabling farmers to connect directly with end users. Contributed to backend, database integration, and core features.",
    image: project3,
    tags: ["Python", "Full Stack", "Database", "REST"],
    liveUrl: "#",
    repoUrl: "https://github.com/tusharrpal",
  },
];

export const techStack = [
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "Java", "Python", "HTML5", "CSS3"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    group: "Backend & DB",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "MongoDB", "MySQL"],
  },
  {
    group: "Tools & Core",
    items: ["Git", "GitHub", "MongoDB Atlas", "DSA", "OOP", "DBMS", "OS"],
  },
];
