export type dataType = {
  title: string;
  description: string;
  imageSrc: string;
  githubLink: string;
  liveProjectLink: string;
  stack: string[];
  points: string[];
};

export const reactData: dataType[] = [
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
    stack: ["html", "css", "sass", "js", "react"],
  },
  {
    title: "title2",
    description: "description",
    imageSrc: "/images/react/movio.png",
    githubLink: "https://github.com/nehalpradhan23/movio-movie-explorer",
    liveProjectLink: "https://movio-movie-explorer.vercel.app/",
    points: [""],
    stack: ["html", "css", "sass", "js", "react"],
  },
];
