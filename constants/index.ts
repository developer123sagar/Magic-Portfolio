import {
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
  threejs,
  nextjs,
  framer,
} from "@/assets";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Jiffychat - Online Chatting Web app",
    des: "A real-time chat application developed with Next.js,Socket.io,React,Typescript,RTK Query, offering seamless authentication,messaging and file sharing experiences.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://jiffychat.vercel.app/",
  },
  {
    id: 2,
    title: "Rara online food ordering system",
    des: "Rara online Food Order Delivery System is a comprehensive web application designed to streamline food ordering and delivery processes. Built using React and TypeScript, it ensures a seamless user experience with modern and efficient code",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://rarafoods.com.au/",
  },
  {
    id: 3,
    title: "Moviehub",
    des: "Developed a dynamic movie catalog web application using React, Tailwind CSS, and the TMDB API. Implemented CRUD (Create, Read, Update, Delete) operations utilizing Firebase for seamless user interaction. Users can add movies in favourite section and there is authetication using firebase.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://moviehub-sand.vercel.app/",
  },
  {
    id: 4,
    title: "AI Podcastr - Saas Application",
    des: "A unique Software-as-a-Service app with AI-powered features like text-to-multiple-voices functionality and AI-generated images with Next.js 14 and Convex.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://podcastr-saggu.vercel.app/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Freelance Web App Dev Project",
    desc: "Led the dev of a web app for a client, from initial concept to deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/developer123sagar"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sagar-chand/"
  },
];

export const technologies = [
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
    name: "Next.js",
    icon: nextjs
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
    name: "framer motion",
    icon: framer,
  },
];

export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};