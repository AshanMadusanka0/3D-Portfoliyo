import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI / UX Designer",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Development",
    company_name: "Projects",
    icon: starbucks,
    iconBg: "#383E56",
    date: "FRONTEND-DEVELOPMENT",
    points: [
      "Developing and maintaining web applications using React js,java Script,Teldwind Css, and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Development",
    company_name: "Projects",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "BACKEND-DEVELOPMENT",
    points: [
      "Developing and maintaining web applications using ExpressJS,MongoDB and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Built and optimized backend services using that technologies, ensuring robust performance, secure data handling, and seamless integration with frontend applications.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile Application Development",
    company_name: "Projects",
    icon: shopify,
    iconBg: "#383E56",
    date: "MOBILE-APPLICATION-DEVELOPMENT",
    points: [
      "Developing and maintaining web applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI / UX Design",
    company_name: "Projects",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "UI-UX DESIGN",
    points: [
      "Designing and maintaining user interfaces using modern UI/UX principles and design tools.",
      "Collaborating with cross-functional teams including developers and stakeholders to deliver intuitive user experiences.",
      "Implementing responsive layouts and ensuring accessibility across various devices and screen sizes.",
      "PParticipating in design reviews and providing constructive feedback to enhance usability and visual appeal.",
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
    name: " Frontend of Education LMS Website ",
    description:
      " Developed the frontend interface of a Learning Management System with course listings,instructor profiles, and student dashboards. Emphasis on educational UX design and layout clarity.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Java Script",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AshanMadusanka0/Education-Website.git",
  },
  {
    name: "Travel-Booking-Website",
    description:
      " Developed the frontend interface of a responsive travel booking site interface where users can search and browse travel packages. Focused on clean UI, hover effects, and mobile first responsiveness",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Java Script",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AshanMadusanka0/Travel-Booking-Website.git",
  },
  {
    name: "GSAP Web Project",
    description:
      " Created an animated, responsive landing page using GSAP animations. Focused on smooth transitions, scroll-based effects, and engaging user interaction.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "Java Script",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AshanMadusanka0/GSAP-Web-Project.git",
  },


   {
    name: " AI Image Generative Web Application",
    description:
      " Developed a full-stack web app that generates AI-based images using DALL·E API. user can share images on website community and explore , download AI-created visuals.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "Java Script",
        color: "pink-text-gradient",
      },

      {
        name: "Tailwind Css",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/AshanMadusanka0/AI-Image-Generative-Web-Apllication.git",
  },


    {
    name: " Cosmetic Shop Frontend / Backend",
    description:
      " Built a e-commerce cosmetic store with product listings , cart management, and order placement. Backend supports CRUD operations, authentication, and  database management.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "Java Script",
        color: "pink-text-gradient",
      },

      {
        name: "Tailwind Css",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/AshanMadusanka0/Cosmetic-Shop-Backend.git",
  },


  {
    name: "Flutter To-Do Application",
    description:
      " Built a cross-platform mobile app using Flutter that helps users manage daily tasks. Includes task creation and a simple UI optimized for productivity.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
     
    ],
    image: tripguide,
    source_code_link: "https://github.com/AshanMadusanka0/Flutter-ToDo-App.git",
  },

   {
    name: "UI/UX Design for a Burgur Hut",
    description:
      " Designed a modern, user-friendly interface for a burger restaurant's digital ordering platform. Included interactive prototypes and clean ui/ux design",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://www.linkedin.com/posts/ashan-edirisinghe-a92144262_uiuxdesign-figma-burgerhut-activity-7356419282789941250-TgNt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBy0Q4Bf82gSQKQMFo5tqmbT19G-E45ONg",
  },



];

export { services, technologies, experiences, testimonials, projects };
