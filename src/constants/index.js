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
    title: "React Developer",
    icon: web,
  },
  {
    title: "Open Source Contributor",
    icon: mobile,
  },
  {
    title: "Exploring Web3 space",
    icon: backend,
  },
  {
    title: "Core Java Programmer",
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Trainee Engineer @Telesys Software Ltd.",
    company_name: "Telesys",
    icon: telesys,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Developed proficiency in Linux environment by mastering shell scripting,      networking fundamentals, and advanced technologies such as SS7, Signalling,      OSI, and Vim editorto enhance technical acumen and problem-solving      capabilities.      ",
    ],
  },
  ,
  {
    title: "Technical Head @GFG Student Chapter KIET",
    company_name: "GeeksforGeeks",
    icon: gfg,
    iconBg: "#383E56",
    date: "Nov 2023 - Feb 2024",
    points: [
      "Designed and developed the official website for GFG in collaboration with a team of developers, using modern web technologies and frameworks.",
      "Managed the technical aspects of various events organized by GFG, such as coding competitions, hackathons, workshops, and seminars, ensuring that they ran smoothly and met the participants' expectations.",
      "Coordinated with other departments and stakeholders to align the technical requirements of GFG with the overall goals and strategies of the organization, contributing to its growth and success.",
    ],
  },
  {
    title: "React intern @EclipTech",
    company_name: "EclipTech Solutions",
    icon: ecliptech,
    iconBg: "#E6DEDD",
    date: "March 2023-June 2023",
    points: [
      " Contributed to the front-end development and maintenance of React-based applications in collaboration with a skilled team and understand seamless integration of front-end to back-end functionality",
      "Enhanced proficiency in front-end development by mastering HTML, CSS, and       JavaScript; leveraged cutting-edge tools like Visual Studio Code to build       responsive and visually appealing websites that boosted user engagement       metrics by 40%",
    ],
  },
  {
    title: "Hackathon Participations and Victories",
    icon: victory,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Participated in multiple hackathons such as TechHacks 3.0 and Endeavour Hackathon, where I collaborated with other developers to create innovative and impactful solutions to real-world problems.",
      "Demonstrated my ability to work under pressure and deliver high-quality projects within tight deadlines, while adapting to new technologies and tools on the fly.",
      "Contributed to a range of projects, including web applications, mobile apps, and hardware prototypes, using languages and frameworks such as Python, JavaScript, React.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NetflixGPT",
    description:
      "Developed an innovative amalgamation of Netflix’s immersive streaming experience with the cutting-edge capabilities of OpenAI, showcasing advanced         React JS features and seamless integration of the ChatGPT Open API in the search functionalities",
    image: netflix,
    source_code_link:
      "https://github.com/IayushCoderJOD/netflix-gpt-majorproject",
  },

  {
    name: "AYUNTRAA",
    description:
      " AYUNTRAA, ReactJS-powered eCommerce site where you can toggle themes, add product to cart , edit the cart, diffrent products section for Men, Women,Children, Kids etc",
    image: freelance,
    source_code_link: "https://ayuntraa.vercel.app/",
  },

  {
    name: "Ayu-job Search",
    description:
      "An innovative job portal crafted with React 18 and packed with advanced      features! login/signup is a breeze to unlock the full potential of the website, exploring       TechNews, searching any tech topic, browsing job listings, and creating your     profile.       ",
    image: cbr,
    source_code_link: "https://kaam-milega-portal.vercel.app/",
  },
  {
    name: "GFG Chapter Official Website ",
    description:
      "As the tech head of GFG Student Chapter AI KIET, I developed their official website. The website serves as a platform for students to stay updated about the organization's events and activities, and also provides information about the team members and their roles.",
    image: gfgWeb,
    source_code_link:
      "https://github.com/IayushCoderJOD/GFG-Student-Chapter-KIET",
  },

  {
    name: "The Snake Mania",
    description:
      "This is a classic Snake game. The player controls a snake that moves around the screen, eating food and growing in length. The game features a score system and keeps track of the player's highest score. It also includes sound effects and graphics to enhance the gaming experience.",
    image: snake,
    source_code_link: "https://github.com/ayushTyagiJod/Snake_Game",
  },
  {
    name: "Simple CRUD App",
    description:
      "The CRUD app is a web application built using Node.js, Express.js, and MongoDB. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a database of articles. The app features a simple user interface for managing articles, including the ability to add new articles, edit existing articles, delete articles, and view a list of all articles in the database.",
    image: crud,
    source_code_link: "https://github.com/IayushCoderJOD/CRUD_app",
  },
];

export { services, technologies, experiences, testimonials, projects };
