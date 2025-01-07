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
    title: "Code Board (Code snippet saver)",
    description:
      "A web app to save all your code snippets, with tagging, searching, etc",
    imageSrc: "/images/nextjs/code-board.png",
    githubLink: "https://github.com/nehalpradhan23/code-snippet-saver-nextjs",
    liveProjectLink: "https://code-snippet-saver-nextjs.vercel.app/",
    points: [
      "Full stack app with CRUD operations",
      "Features like adding tags, language selection, code snippet",
      "Filter using tags, searching, add to favorites, deletion or restore, undo deletion",
      "Add or delete tags",
      "Main highlights being Array methods like - some, map, filter, find etc for manipulating data",
    ],
    stack: [
      "html",
      "css",
      "tailwind",
      "typescript",
      "react",
      "next",
      "mongoDB",
    ],
    otherStack: [
      "mongoose",
      "clerk",
      "react toast",
      "react syntax highlighter",
    ],
  },
  {
    title: "Anonimo - anonymous message app",
    description:
      "A real estate marketplace to explore and list a real estate property",
    imageSrc: "/images/nextjs/anonimo.png",
    githubLink: "https://github.com/nehalpradhan23/anonymous-messages-nextjs",
    points: [
      "Full stack app with sign-in/sign-up, CRUD operations",
      "anonymous messaging app allowing users to create accounts and receive anonymous messages via a shared link",
      "Implemented a toggle feature for users to enable or disable the acceptance of anonymous messages",
      "Real-time messaging functionality to ensure instant delivery and receipt of anonymous messages.",
    ],
    liveProjectLink: "https://anonimo-rust.vercel.app/",
    stack: [
      "html",
      "css",
      "tailwind",
      "typescript",
      "react",
      "next",
      "shadcn",
      "mongoDB",
    ],
    otherStack: ["mongoose", "next-auth", "react hook form", "zod"],
  },
  {
    title: "Jobkart - job portal app",
    description:
      "Job portal app where you can post jobs or find one. Join as recruiter or candidate.",
    imageSrc: "/images/react/jobkart.png",
    liveProjectLink: "https://jobkart-job-portal-react-js.vercel.app/",
    githubLink: "https://github.com/nehalpradhan23/jobkart-job-portal-react-js",
    points: [
      "Full stack app with sign-in/sign-up, CRUD operations",
      "Protected routes for authorized access",
      "Incorporated job application tracking features, enabling candidates to monitor the status of their applications and recruiters to manage their hiring pipeline.",
    ],
    stack: ["html", "css", "tailwind", "javascript", "react", "shadcn"],
    otherStack: [
      "vite",
      "clerk",
      "react hook form",
      "zod",
      "react router dom",
      "supabase",
    ],
  },

  // {
  //   title: "Game shop",
  //   description: "A User Interface to explore games",
  //   imageSrc: "/images/nextjs/game-shop.png",
  //   githubLink: "https://github.com/nehalpradhan23/game-shop-nextjs",
  //   liveProjectLink: "https://game-shop-ui.vercel.app/",
  //   points: [
  //     "Used Nextjs best practises",
  //     "Nextjs route groups for routing and and handling layouts",
  //     "Reusable card components",
  //     "Typescript for type safety",
  //   ],
  //   stack: ["html", "css", "tailwind", "typescript", "next", "shadcn"],
  // },
  {
    title: "MyEstate - Real Estate Marketplace",
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
    title: "Notion clone",
    description: "A note taking app like notion.",
    imageSrc: "/images/nextjs/notion-clone.png",
    githubLink: "https://github.com/nehalpradhan23/nextjs-notion-clone",
    liveProjectLink: "https://notion-clone-nextjs-opal.vercel.app/",
    points: ["Create notes, nested note", "Create note using block note"],
    stack: ["html", "css", "tailwind", "next", "typescript", "shadcn"],
    otherStack: ["mongoose", "express", "zod", "zustand", "convex", "clerk"],
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
    title: "E-commerce",
    description: "",
    imageSrc: "",
    githubLink: "https://github.com/nehalpradhan23/E-commerce-NextJS",
    liveProjectLink: "",
    points: [],
    stack: ["html", "next", "tailwind", "javascript"],
    otherStack: ["mongo db"],
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
];

export const reactNativeProjects: dataType[] = [
  {
    title: "News app",
    description: "",
    imageSrc: "",
    githubLink: "https://github.com/nehalpradhan23/news-app-react-native",
    liveProjectLink: "",
    points: [""],
    stack: ["react-native", "react-native-expo", "css", "typescript"],
    otherStack: [""],
  },
  {
    title: "Uber clone",
    description: "",
    imageSrc: "",
    githubLink: "https://github.com/nehalpradhan23/uber-clone-react-native",
    liveProjectLink: "",
    points: [""],
    stack: [
      "react-native",
      "react-native-expo",
      "css",
      "tailwind",
      "typescript",
    ],
    otherStack: [""],
  },
  {
    title: "Social media App",
    description: "",
    imageSrc: "",
    githubLink:
      "https://github.com/nehalpradhan23/social-media-app-react-native",
    liveProjectLink: "",
    points: [""],
    stack: ["react-native", "react-native-expo", "css", "javascript"],
    otherStack: [""],
  },
];
