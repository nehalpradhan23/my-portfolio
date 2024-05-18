export type dataType = {
  title: string;
  description: string;
  imageSrc: string;
  githubLink: string;
  liveProjectLink: string;
  stack: string[];
  points: string[];
};

export const defaultData: dataType[] = [
  {
    title: "",
    description: "",
    imageSrc: "",
    githubLink: "",
    liveProjectLink: "",
    points: [],
    stack: [],
  },
];
