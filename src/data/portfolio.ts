import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const profile = {
  name: "Tushar Pal",
  role: "Computer Engineering Student • Full Stack Developer • Java Enthusiast",
  location: "Pune, India",
  email: "you@example.com",
  github: "https://github.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourhandle",
  instagram: "https://instagram.com/yourhandle",
  resumeUrl: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "I'm a Computer Engineering student at a Pune-based university, currently pursuing my B.E. (Class of 2027). I build full-stack web applications with a soft spot for clean architecture, fast interfaces, and Java on the backend.",
    "Outside of coursework I ship side projects, contribute to small open-source tools, and sharpen my skills with DSA in Java. I care about thoughtful UI, performance, and writing code other people can actually read.",
  ],
  stats: [
    { label: "Years coding", value: "3+" },
    { label: "Projects shipped", value: "12" },
    { label: "Based in", value: "Pune, IN" },
  ],
};

export const projects = [
  {
    title: "Lumen — Realtime Notes",
    description:
      "Collaborative markdown notes with live cursors, offline sync, and a tiny CRDT engine written from scratch.",
    image: project1,
    tags: ["React", "TypeScript", "WebSockets", "CRDT"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Tally — Personal Finance",
    description:
      "Mobile-first expense tracker with smart categorization, recurring detection, and end-of-month insights.",
    image: project2,
    tags: ["Next.js", "Postgres", "Tailwind", "tRPC"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "JavaForge — DSA Visualizer",
    description:
      "Interactive data structure and algorithm playground in Java + Spring, with step-through visualizations.",
    image: project3,
    tags: ["Java", "Spring Boot", "D3.js", "Docker"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const techStack = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    group: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "PostgreSQL", "REST / GraphQL"],
  },
  {
    group: "Tools",
    items: ["Git", "Docker", "Linux", "Figma", "VS Code"],
  },
];
