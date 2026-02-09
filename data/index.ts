export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Deepak Chauhan - Building scalable web applications with focus on performance and user experience",
    description: "Full Stack Developer based in Tosham",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to remote opportunities and flexible collaboration",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Full Stack & Modern Tools",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about creating efficient, production-ready applications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "B.Tech in Computer Science at CGC Landran (2021-2025)",
    description: "Education & Academic Background",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to collaborate on your next project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Event-Hub - Event Management Platform",
    des: "A premium event booking platform with a modern UI, enabling users to discover, book, and manage local events with ease.",
    img: "/eventhub.png",
    bg: "/eventhub.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/nodejs.svg"],
    link: "https://event-hub-iota-sage.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    des: "Professional portfolio showcasing projects and skills, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.",
    img: "/portfolio.png",
    bg: "",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://deepak-chauhan-portfolio-flax.vercel.app/",
  },
  {
    id: 3,
    title: "DealZone - Deal Management Platform",
    des: "Role-based platform enabling deal creation between paying and receiving parties with admin monitoring panel for transparency.",
    img: "/dealzone.png",
    bg: "",
    iconLists: ["/re.svg", "/tail.svg", "/next.svg", "/ts.svg", "/fm.svg"],
    link: "https://deel-zone.vercel.app/",
  },
  {
    id: 4,
    title: "StyleNest - Beauty Services Marketplace",
    des: "A premium beauty services platform featuring expert booking, smooth animations with Framer Motion and Lenis, and a modern glassmorphism UI.",
    img: "/style-nest.png",
    bg: "/style-nest.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    link: "https://style-nest-ten.vercel.app/",
  },
];

export const testimonials: {
  quote: string;
  name: string;
  title: string;
}[] = [];

export const companies = [
  {
    id: 1,
    name: "React",
    img: "/re.svg",
    nameImg: "/re.svg",
  },
  {
    id: 2,
    name: "Node.js",
    img: "/nodejs.svg",
    nameImg: "/nodejs.svg",
  },
  {
    id: 3,
    name: "MongoDB",
    img: "/mongodb.svg",
    nameImg: "/mongodb.svg",
  },
  {
    id: 4,
    name: "Tailwind",
    img: "/tail.svg",
    nameImg: "/tail.svg",
  },
  {
    id: 5,
    name: "GitHub",
    img: "/git.svg",
    nameImg: "/git.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc: "Built production-ready web applications using MongoDB, Express.js, React, and Node.js with focus on scalability and performance.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Development",
    desc: "Designed and implemented RESTful APIs, database schemas, and responsive frontends for real-world applications.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "API Design & Integration",
    desc: "Developed robust REST APIs using Node.js and Express.js, ensuring seamless frontend-backend communication.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Database Management",
    desc: "Managed MongoDB databases with optimized schemas and queries for efficient data storage and retrieval.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Dissu33",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/deepak-chauhan-a67a4a396",
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "https://www.instagram.com/dpx.k",
  },
];
