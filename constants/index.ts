export const RESUME_PDF = "/CV.pdf";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client & team collaboration, fostering open communication",
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
    description: "React, Next.js, TypeScript, Mapbox, Web GIS",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with 4+ years building web apps.",
    description: "React, Next.js, TypeScript, Web GIS",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Web GIS & geospatial applications",
    description: "D-MAPs, Khaderi Drought Tool & more",
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
    title: "Digital Metric Addressing System (D-MAPs)",
    des: "Address information management system for local governments in Nepal. Integrated geospatial technology, AI, and participatory mapping to improve service delivery and urban navigation for underserved communities.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://dma-dev.naxa.com.np/",
  },
  {
    id: 2,
    title: "Khaderi Drought Indicator Tool",
    des: "Anticipatory drought monitoring platform in collaboration with IHRR, Mercy Corps, and DHM. Integrated real-time data, predictive models (SPI, SPEI, VCI), and geospatial visualization for drought resilience decision-making.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://khaderi-dev.naxa.com.np/",
  },
  {
    id: 3,
    title: "Rara Online Food Ordering System",
    des: "Rara online Food Order Delivery System is a comprehensive web application designed to streamline food ordering and delivery processes. Built using React and TypeScript with modern, efficient code.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://rarafoods.com.au/",
  },
  {
    id: 4,
    title: "Twittee - Social Media Web App",
    des: "A full stack social media web app like Twitter(X) using Next.js 15, React 19, TanStack Query and more. Real-time posts, authentication, and engagement features.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://twittee.vercel.app/",
  },
  {
    id: 5,
    title: "Jiffychat - Real-time Chat App",
    des: "Real-time chat application with Next.js, Socket.io, React, TypeScript, RTK Query. Features include real-time messaging, user authentication, and group chats.",
    img: "/p5.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://jiffychat.vercel.app/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer @ NAXA",
    period: "Jan 2024 – Present",
    location: "Baluwatar, Kathmandu",
    desc: "Led frontend team across D-MAPs & Khaderi. Oversee implementation, code quality & delivery. Mentor juniors on React & Git. Collaborate with backend & design teams.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer @ Silicontech Nepal",
    period: "Mar 2022 – Jan 2024",
    location: "Pepsicola, Kathmandu",
    desc: "Led frontend team building responsive food ordering web app & admin dashboard. Built Koseli with table booking, location filtering & multi-admin support.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer Intern @ Flaresight",
    period: "Jan 2022 – Mar 2022",
    location: "Everest Hospitality / Marriott",
    desc: "Designed responsive, user-friendly website layouts. Learned production workflows & design handoff.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "How I Work",
    period: "4+ years of building",
    location: "React • Next.js • Web GIS",
    desc: "Blend creativity with technical expertise. Prioritize clean, scalable code. Focus on seamless UX, performance & maintainability.",
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
