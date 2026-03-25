export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/thurunuym", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/thurunuym/", icon: "Linkedin" },
  { name: "Behance", url: "https://www.behance.net/thurunumarasin", icon: "Behance" },
  { name: "Medium", url: "https://medium.com/@marasinghe.ty", icon: "Medium" },
];

export const EDUCATION = [
  {
    duration: "2022-2026",
    institution: "University of Kelaniya",
    degree: "Bcs. (Hons) in Electronics and Computer Science",
  },
  {
    duration: "2020-2022",
    institution: "IBA Campus",
    degree: "Diploma in Information Technology",
  },
  {
    duration: "2006-2020",
    institution: "Dharmaraja College Kandy",
    degree: "GCE OL , GCE AL",
  },
];

export const EXPERIENCE = [
  {
  company: "Freelance",
  role: "UI/UX Designer",
  duration: "Jan 2025 - Present",
  contributions: [
    "Designed interfaces and prototypes using Figma.",
    "Improved user experience through thoughtful and user-centered design.",
  ],
},
  {
    company: "Appwhiz Solutions",
    role: "Web Developer",
    duration: "Feb 2025 - Sep 2025",
    contributions: [
      "Developed responsive UI components using React and Tailwind CSS.",
      "Integrated RESTful APIs with SpringBoot.",
      "Optimized database queries for MongoDB",
    ],
  },
  {
    company: "Infinity AI",
    role: "Software Engineer Intern",
    duration: "Oct 2025 - Apr 2026",
    contributions: [
      "Built and optimized backend services using Node.js, Express.js, and PostgreSQL.",
    "Developed scalable frontend features with React and Redux Toolkit (RTK).",
    "Engineered high-performance APIs with FastAPI for efficient data processing.",
    "Containerized applications and improved deployment consistency using Docker."
    ],
  },

];

export const TECH_STACK = {
  main: [
    { name: "Node.js", role: "Engine", icon: "Zap" },
    { name: "Express.js", role: "Communication", icon: "Radio" },
    { name: "React.js", role: "Control Panel", icon: "Cpu" },
    { name: "Spring Boot", role: "Core Logic", icon: "Shield" },
  ],
  categories: [
    {
      name: "Programming Languages",
      skills: ["Java", "JavaScript", "PHP", "Python"],
    },
    {
      name: "Web Development",
      skills: ["HTML", "CSS", "React", "Spring Boot", "Node.js", "Express.js", "Next.js", "FastAPI"],
    },
    {
      name: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      name: "Tools",
      skills: ["Git/GitHub", "CI/CD", "AWS", "Docker", "Figma", "Adobe Photoshop", "Adobe Premiere Pro"],
    },
  ],
};

export const PROJECTS = [
  {
    name: "ChatWhiz",
    description: "A real-time chat application built for seamless chatting.",
    tech: ["React", "Node.js", "Express.js","MongoDB","Socket.io"],
    links: { github: "https://github.com/thurunuym/ChatWhiz", live: "https://chatwhiz-kpvi.onrender.com/", video: "#" },
    color: "#4f46e5",
  },
  {
    name: "AI based Fitness Recommendation System",
    description: "An AI-driven fitness recommendation system using microservices architecture.",
    tech: ["React", "SpringBoot", "PostgreSQL", "RabbitMQ", "Eureka", "KeyCloak", "Gemini API"],
    links: { github: "#"},
    color: "#ec4899",
  },
  {
    name: "WhizWalt",
    description: "A banking web application that allows users to securely connect their bank accounts, view balances, and track transactions",
    tech: ["NextJS", "TypeScript", "Appwrite" , "ShadCN","Plaid","Zod"],
    links: { github: "https://github.com/ShashithaU/Sports-Center-Frontend", live: "#" },
    color: "#f43f5e",
  },

  {
    name: "E-Commerce Platform",
    description: "A fully functional E-Commerce platform for sports item shop.",
    tech: ["React", "SpringBoot", "Redis" , "MySQL"],
    links: { github: "https://github.com/ShashithaU/Sports-Center-Frontend" },
    color: "#f43f5e",
  },
  {
    name: "Hardware Store Manager",
    description: "An application provides seemless management for hardware stores.",
    tech: ["C#", ".NET"],
    links: { github: "https://github.com/thurunuym/HardwareManagement", video: "#" },
    color: "#06b6d4",
  },
  {
    name: "Sign Language Detector",
    description: "A real-time sign language detector for selected signs",
    tech: ["YOLOv8", "Python", "Flask"],
    links: { github: "https://github.com/thurunuym/sign-language-detector",video: "#"  },
    color: "#8b5cf6",
  },
  {
    name: "Card Flipping Game",
    description: "A simple card flipping game deployed on AWS to explore AWS services.",
    tech: ["AWS S3", "CodePipeline", "HTML" , "JavaScript"],
    links: { github: "#", live: "#" },
    color: "#f43f5e",
  },
];
