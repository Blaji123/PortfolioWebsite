import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  bootstrap,
  mongodb,
  git,
  java,
  springboot,
  spring,
  mysql,
  cpp,
  cns,
  ubb,
  hotel,
  movies,
  ghid,
  bljOS,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
];

const educations = [
  {
    title: "University",
    school_name: "Univesitatea Babes-Bolyai",
    profile: "computer science",
    icon: ubb,
    iconBg: "#ffffff",
    date: "October 2023 - present",
  },
  {
    title: "High School",
    school_name: "Colegiul National Silvania",
    profile: "mathematics-informatics",
    icon: cns,
    iconBg: "#E6DEDD",
    date: "September 2019 - June 2023",
  },
];

const experiences = [
  // {
  //   title:
  //   company_name:
  //   icon:
  //   iconBg: =
  //   date:
  //   points: [
  //
  //   ],
  // }
];

const testimonials = [
  // {
  //   testimonial:
  //
  //   name:
  //   designation:
  //   company:
  //   image:
  // },
];

const projects = [
  {
    name : "bljOS",
    description:
      "bljOS is a custom operating system kernel designed from the ground up. Built to run with the GRUB bootloader, bljOS is my own OS implementation that includes low-level hardware communication, essential drivers, multitasking, and the beginnings of a filesystem.",
    tags : [
      {
        name : "C++",
        color : "blue-text-gradient",
      },
      {
        name : "Assembly",
        color : "green-text-gradient",
      },
      {
        name : "Linker",
        color : "red-text-gradient",
      },
    ],
    image: bljOS,
    source_code_link: "https://github.com/Blaji123/bljOS",
  },
  {
    name: "Demo Hotel",
    description:
      "Web-based application that allows user to view the rooms that a hotel has available, book rooms and a jwt security login system that allows admins to manage the rooms in the hotel !! Admin account, email : admin123@email.com, password: 123456789",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/Blaji123/DemoHotel",
  },
  {
    name: "Movies",
    description:
      "Web application that allows user to view the description of some movies, watch the trailer of the movie, add reviews and add movies to the watchlist",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/Blaji123/movies",
  },
  {
    name: "Ghidul admiterii la informatica",
    description:
      "Begginer project that was created to help students wanting to get into UBB prepare for the entrance exam",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ghid,
    source_code_link:
      "https://github.com/Blaji123/Ghidul-admiterii-la-informatica",
    link: "https://blaji123.github.io/Ghidul-admiterii-la-informatica/",
    logo: cns,
  },
];

export {
  services,
  technologies,
  experiences,
  educations,
  testimonials,
  projects,
};
