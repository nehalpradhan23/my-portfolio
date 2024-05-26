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
    title: "MyEstate Real Estate Marketplace",
    description:
      "A real estate marketplace to explore and list a real estate property",
    imageSrc: "/images/react/my-estate.png",
    githubLink: "https://github.com/nehalpradhan23/mern-real-estate-market",
    liveProjectLink: "https://myestate-real-estate-market.onrender.com/",
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
    title: "Netflix clone",
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
    otherStack: ["mongoose", "next-auth", "material UI"],
  },
];
