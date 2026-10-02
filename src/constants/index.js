import {
  mobile,
  backend,
  creator,
  web,
  cbr,
  crud,
  nextjs,
  snake,
  ecliptech,
  javascript,
  typescript,
  html,
  telesys,
  blood,
  rehab100mph,
  css,
  victory,
  tsf,
  gfg,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  freelance,
  git,
  figma,
  docker,
  starbucks,
  gfgWeb,
  tesla,
  shopify,
  carrent,
  netflix,
  jobit,
  tripguide,
  threejs,
  techsophy,
  orahi,
  spring,
  java,
  postgresql,
  redis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Engineer",
    icon: web,
  },
  {
    title: "React / React Native Dev",
    icon: mobile,
  },
  {
    title: "Java & Spring Boot",
    icon: backend,
  },
  {
    title: "LLM / AI Integration",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "TechSophy",
    icon: techsophy,
    iconBg: "#1a1a2e",
    date: "July 2025 – Present",
    points: [
      "Building a BPM (Business Process Management) engine to replace a legacy Cordys platform — React front end backed by a scalable Apache Camel execution layer.",
      "Wrote workflow execution logic using tree BFS traversal: each workflow compiles into one master JSON covering 3 data stores (MongoDB, RDBMS, Redis) and converts into runnable Apache Camel YAML routes.",
      "Developed Spring Boot REST APIs for full CRUD on workflows, plus dataset APIs that expose operations and structure so tags can be mapped at the field level for workflow bindings.",
      "Built React screens for 5 hospital workflows (KIMS–Practo): patient visits, registration, billing, bed allocation, and OPD-to-IPD conversion.",
      "Rebuilt the doctor appointment booking flow for MedUnited and integrated a conversational AI chatbot that streams policy information in real time.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Orahi",
    icon: orahi,
    iconBg: "#ff6b35",
    date: "July 2024 – June 2025",
    points: [
      "Built the front end of an AI document platform (React.js, Spring Boot, REST APIs) where users upload books and documents and chat with them through LLM-powered chatbots.",
      "Integrated the OpenAI API with document chunking, semantic parsing, and vector-based retrieval (RAG) to give accurate, in-context answers over uploaded content.",
      "Cut application startup time by 56% (from 8 minutes to 3.5 minutes) and lowered hardware costs through targeted performance optimisations.",
      "Migrated the codebase from legacy Redux to Redux Toolkit, upgraded the front end to React 19, and modernised dependencies for better performance and maintainability.",
    ],
  },
  {
    title: "Technical Head",
    company_name: "GFG Student Chapter – KIET",
    icon: gfg,
    iconBg: "#383E56",
    date: "Nov 2023 – Feb 2024",
    points: [
      "Designed and developed the official website for the GFG Student Chapter in collaboration with a team of developers, using modern web technologies.",
      "Managed the technical aspects of coding competitions, hackathons, workshops, and seminars, ensuring smooth execution.",
      "Coordinated with stakeholders to align technical requirements with the organisation's goals, contributing to its growth.",
    ],
  },
  {
    title: "React Intern",
    company_name: "EclipTech Solutions",
    icon: ecliptech,
    iconBg: "#E6DEDD",
    date: "March 2023 – June 2023",
    points: [
      "Contributed to the front-end development and maintenance of React-based applications in collaboration with a skilled team.",
      "Enhanced proficiency in HTML, CSS, and JavaScript; built responsive and visually appealing websites that boosted user engagement metrics by 40%.",
    ],
  },
  {
    title: "Hackathon Participations & Victories",
    icon: victory,
    iconBg: "#383E56",
    date: "2022 – 2023",
    points: [
      "Won TechHacks 3.0 at Chitkara University — collaborated with teammates to build innovative solutions under tight deadlines.",
      "Participated in multiple hackathons including Endeavour Hackathon, delivering high-quality projects using Python, JavaScript, and React.",
      "LeetCode rating 1800+; solved 800+ coding problems across multiple competitive programming platforms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ayush built our entire rehab app from scratch — Android, iOS, and web — and it just works. Our clients love it.",
    name: "100mph Co-founder",
    designation: "Co-founder",
    company: "100mph Physiotherapy",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "The BPM engine Ayush built replaced years of legacy infrastructure. The Apache Camel integration was flawlessly designed.",
    name: "Team Lead",
    designation: "Engineering Lead",
    company: "TechSophy",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Ayush cut our app startup time from 8 minutes to 3.5 minutes — a 56% improvement that saved us real server costs.",
    name: "Product Manager",
    designation: "Product Manager",
    company: "Orahi",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const projects = [
  {
    name: "100mph – Physiotherapy Rehab App",
    description:
      "Co-founded and built a full-stack rehab app in React Native running on Android, iOS, and web — serving 50+ paying clients. Features condition-specific programs (lower back, shoulder, neck), an admin dashboard with RBAC, membership lifecycle management with JWT refresh tokens, and Cloudflare Stream for exercise video delivery.",
    image: rehab100mph,
    source_code_link: "https://github.com/IayushCoderJOD/100mph_rehab",
  },
  {
    name: "Care Health Insurance – BPM Engine",
    description:
      "Building a Business Process Management engine at TechSophy that replaces a legacy Cordys platform. Workflows compile into a master JSON covering MongoDB, RDBMS, and Redis, then convert into Apache Camel YAML routes. Built with React and Spring Boot REST APIs.",
    image: cbr,
    source_code_link: "https://github.com/IayushCoderJOD",
  },
  {
    name: "AI Document Platform",
    description:
      "Built the front end of an AI-powered document platform at Orahi where users upload books and documents and chat with them via LLM-powered chatbots. Integrated OpenAI API with RAG (document chunking, semantic parsing, vector retrieval) for accurate in-context answers.",
    image: netflix,
    source_code_link: "https://github.com/IayushCoderJOD",
  },
  {
    name: "AYUNTRAA – eCommerce Platform",
    description:
      "ReactJS-powered eCommerce site with theme toggling, cart management, and product sections for Men, Women, and Children. Features a clean UI with Redux Toolkit for state management.",
    image: freelance,
    source_code_link: "https://ayuntraa.vercel.app/",
  },
  {
    name: "Ayu-job Search Portal",
    description:
      "An innovative job portal built with React 18 featuring login/signup, TechNews, job listings, and profile creation. Integrates real-time job data APIs for a seamless job-hunting experience.",
    image: jobit,
    source_code_link: "https://kaam-milega-portal.vercel.app/",
  },
  {
    name: "GFG Chapter Official Website",
    description:
      "Developed the official website for GFG Student Chapter KIET as Technical Head — a platform for students to stay updated on events, team members, and activities.",
    image: gfgWeb,
    source_code_link: "https://github.com/IayushCoderJOD/GFG-Student-Chapter-KIET",
  },
];

export { services, technologies, experiences, testimonials, projects };
