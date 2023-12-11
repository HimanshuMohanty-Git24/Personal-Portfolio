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
    github,
    linkedin,
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
    resume,
    twitter,
    leetcode,
    HackerRank,
    TinderClone,
    NalcoNagar,
    nalco,
    Amazon,
    FacultyChatbot,
    opensource,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id:"ResSoc",
      title:"Resume & Socials"
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
      title: "UI/UX Designer",
      icon: web,
    },
    {
      title: "Fullstack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
      icon: creator,
    },
  ];
  const Resume = [
    {
      title: "Resume",
      icon: resume,
      source_code_link: "https://drive.google.com/file/d/1dLwrxLHdXsGWxJjSVrVk2Arryn9JiOnn/view?usp=sharing",
    },
    {
      title: "Github",
      icon: github,
      source_code_link: "https://github.com/HimanshuMohanty-Git24"
    },
    {
      title: "Linkedin",
      icon: linkedin,
      source_code_link: "https://www.linkedin.com/in/himanshumohanty/"
    },
    {
      title:"Twitter",
      icon: twitter ,
      source_code_link: "https://twitter.com/CodingHima"
    },
    {
      title:"Leetcode",
      icon: leetcode ,
      source_code_link: "https://leetcode.com/Hima_Codes/"
    },
    {
      title:"HackerRank",
      icon: HackerRank ,
      source_code_link: "https://www.hackerrank.com/profile/Hima_Codes"
    }
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
      title: "Summer Internship",
      company_name: "NALCO",
      icon: nalco,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Developed and implemented CPP MIS system at NALCO's Captive Power Plant, enhancing user interface for data entry and analysis with PHP, MySQL, HTML, CSS, and JavaScript.",
        "Optimized power generation operations, tracked equipment performance, and facilitated data-driven decisions, improving overall power plant efficiency at NALCO.",
        "Collaborated with Systems Department professionals, gaining insights into power plant industry challenges and deepening understanding of MIS concepts.",
        "Strengthened technical skills, problem-solving abilities, and project management through hands-on experience in the power plant industry.",
      ],
    },
    {
      title: "Open Source Contributor",
      company_name: "Open Source",
      icon: opensource,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Participated in Hacktoberfest 2022, contributing to open-source projects.",
        "Collaborated with a global community of developers to actively contribute code and resolve issues, improving the functionality of open-source projects.",
        "Engaged in project discussions, sharing insights and knowledge to foster learning and growth within the community.",
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
      name: "KIIT Faculty ChatBot",
      description:
        "Discover faculty members effortlessly with the KIIT Faculty Chatbot! 🤖🎓This Botpress-powered tool offers an interactive and user-friendly experience, allowing you to explore qualifications, expertise, and contact details.Engage and explore effortlessly! 🌐🚀",
      tags: [
        {
          name: "BotPress",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: FacultyChatbot,
      live_link:"https://himanshumohanty-git24.github.io/KIIT-Faculty-Chatbot/",
      source_code_link: "https://github.com/HimanshuMohanty-Git24/KIIT-Faculty-Chatbot",
    },
    {
      name: "Amazon Clone",
      description:
        "🚀 Welcome to the Amazon Clone project, where I've recreated the magic of Amazon's website using React, Tailwind CSS, and Redux in 2023! 🌟 Dive into a world of seamless shopping experiences with advanced features like search functionality, easy cart management, and more.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: Amazon,
      live_link:"https://amazon-clone-inzt.onrender.com/",
      source_code_link: "https://github.com/HimanshuMohanty-Git24/Amazon-Clone",
    },
    {
      name: "Tinder Clone",
      description:
        "The Tinder Clone project, built with React JS, replicates Tinder's swipe and message features. Perfect for beginners, it offers a simplified yet engaging user experience. Deployed on Firebase, it showcases fundamental React and Firebase integration. Explore the code and enjoy swiping!.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: TinderClone,
      live_link:"https://tinderclone-rkir.onrender.com/",
      source_code_link: "https://github.com/HimanshuMohanty-Git24/Tinder-Clone",
    },
    {
      name: "Nalco CPP MIS",
      description:
        "The NALO_CPP_MIS (National Aluminium Company Limited - Captive Power Plant Management Information System) is a web application developed to monitor and manage the production processes at the Captive Power Plant of NALCO. It provides real-time data on power generation, consumption, raw material usage, production output, energy consumption, and quality control parameters.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Ajax",
          color: "pink-text-gradient",
        },
      ],
      image: NalcoNagar,
      live_link:"https://cpp-mis.000webhostapp.com/",
      source_code_link: "https://github.com/HimanshuMohanty-Git24/NALCO_CPP_MIS",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,Resume};