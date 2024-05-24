export type dataType = {
  title: string;
  description: string;
  imageSrc: string;
  githubLink: string;
  liveProjectLink: string;
  stack: string[];
  otherStack?: string[];
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
    otherStack: [],
  },
];
