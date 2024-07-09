// export type dataType = {
//   title: string;
//   description: string;
//   imageSrc: string;
//   githubLink: string;
//   liveProjectLink: string;
//   stack: string[];
//   otherStack?: string[];
//   points: string[];
// };

import { dataType } from "./data";

export const projectsListData: dataType[] = [
  {
    title: "MyEstate Real Estate Marketplace",
    description:
      "A real estate marketplace to explore and list a real estate property",
    imageSrc: "/images/react/my-estate.png",
    githubLink: "https://github.com/nehalpradhan23/mern-real-estate-market",
    liveProjectLink: "https://mern-real-estate-market.onrender.com",
    points: [
      "Full stack app with sign-in/sign-up, CRUD operations",
      "React router protected routes to handle unauthorized access",
      "Single reusable card component throughout the whole app",
      "Mongodb for database and mongoose for backend",
      "Firebase for authentication and storage",
      "React redux for state management",
      "Tailwind CSS for styling",
    ],
    stack: ["html", "css", "tailwind", "javascript", "react"],
    otherStack: ["mongoose", "express", "firebase", "redux"],
  },
  {
    title: "Game shop",
    description: "A User Interface to explore games",
    imageSrc: "/images/nextjs/game-shop.png",
    githubLink: "https://github.com/nehalpradhan23/game-shop-nextjs",
    liveProjectLink: "https://game-shop-ui.vercel.app/",
    points: [
      "Used Nextjs best practises",
      "Nextjs route groups for routing and and handling layouts",
      "Reusable card components",
      "Typescript for type safety",
    ],
    stack: ["html", "css", "tailwind", "typescript", "next", "shadcn"],
  },

  {
    title: "Netflix",
    description: "A netflix like app to explore all its contents",
    imageSrc: "/images/nextjs/netflix-clone.png",
    githubLink: "https://github.com/nehalpradhan23/netflix-clone-nextjs",
    liveProjectLink: "https://netflix-clone-nextjs-nu.vercel.app/",
    points: [
      "Next-auth for authentication",
      "Reusable components for multiple cases",
      "Multiple accounts handling in one",
      "Tailwind CSS for styling",
    ],
    stack: ["html", "css", "tailwind", "javascript", "next"],
    otherStack: ["mongoose", "next-auth", "material UI", "framer motion"],
  },
  {
    title: "Blog app",
    description: "",
    imageSrc: "/images/react/blog.png",
    githubLink: "https://github.com/nehalpradhan23/blog-app-reactjs",
    liveProjectLink: "",
    points: [""],
    stack: ["html", "css", "tailwind", "javascript", "react"],
    otherStack: ["mongoose", "express"],
  },
  {
    title: "Movio movie explorer",
    description: "A movie search and explorer web app",
    imageSrc: "/images/react/movio.png",
    githubLink: "https://github.com/nehalpradhan23/movio-movie-explorer",
    liveProjectLink: "https://movio-movie-explorer.vercel.app/",
    points: [
      "Display movie info (title, rating, release date, etc) from TMDB api",
      "Reusable Card and carousel component for all items",
      "React Lazy loading library implementation for images",
      "React Infinite scroll for loading items",
      "Redux for state management",
      "Fully responsive",
    ],
    stack: ["html", "css", "sass", "javascript", "react"],
    otherStack: ["mongoose", "express"],
  },
  {
    title: "Linkedin clone",
    description: "",
    imageSrc: "/images/nextjs/linkedin-clone.png",
    githubLink: "https://github.com/nehalpradhan23/linkedin-clone-nextjs",
    liveProjectLink: "https://linkedin-clone-nextjs.vercel.app/",
    points: [],
    stack: ["html", "tailwind", "next", "typescript"],
    otherStack: ["mongoose", "express"],
  },
  {
    title: "Form builder",
    description: "",
    imageSrc: "/images/nextjs/form-builder.png",
    githubLink: "https://github.com/nehalpradhan23/form-builder-nextjs",
    liveProjectLink: "https://form-builder-nextjs-lac.vercel.app/",
    points: [],
    stack: ["html", "tailwind", "next", "typescript"],
    otherStack: ["mongoose", "express"],
  },
  {
    title: "Notion clone",
    description: "",
    imageSrc: "/images/nextjs/notion-clone.png",
    githubLink: "https://github.com/nehalpradhan23/nextjs-notion-clone",
    liveProjectLink: "https://notion-clone-nextjs-opal.vercel.app/",
    points: [],
    stack: ["html", "tailwind", "next", "typescript"],
    otherStack: ["mongoose", "express"],
  },
];

export const otherProjectsListData = [
  {
    title: "Airbnb clone",
    description: "",
    imageSrc: "",
    githubLink: "https://github.com/nehalpradhan23/airbnb-clone-reactjs",
    liveProjectLink: "",
    points: [],
    stack: ["html", "react", "tailwind", "javascript"],
    otherStack: ["mongoose", "express", "react-router", "axios"],
  },
  {
    title: "Discord clone",
    description: "",
    imageSrc: "",
    githubLink: "https://github.com/nehalpradhan23/nextjs-discord-clone",
    liveProjectLink: "",
    points: [],
    stack: ["html", "next", "tailwind", "typescript", "shadcn"],
    otherStack: [
      "mongo db",
      "react hook form",
      "zod",
      "prisma",
      "clerk-auth",
      "zustand",
    ],
  },
  {
    title: "Miro clone",
    description: "",
    imageSrc: "",
    githubLink: "https://github.com/nehalpradhan23/nextjs-miro-clone",
    liveProjectLink: "",
    points: [],
    stack: ["html", "next", "tailwind", "typescript", "shadcn"],
    otherStack: [
      "mongo db",
      "react hook form",
      "zod",
      "prisma",
      "clerk-auth",
      "zustand",
    ],
  },
  {
    title: "web scraping",
    description: "",
    imageSrc: "",
    githubLink: "https://github.com/nehalpradhan23/nextjs-web-scraping",
    liveProjectLink: "",
    points: [],
    stack: ["html", "next", "tailwind", "typescript", "shadcn"],
    otherStack: [
      "mongo db",
      "react hook form",
      "zod",
      "prisma",
      "clerk-auth",
      "zustand",
    ],
  },
];
