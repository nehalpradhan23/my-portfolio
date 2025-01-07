import { Dot } from "lucide-react";
import Image from "next/image";

const skills = [
  {
    icon: "/skills/html.png",
    title: "HTML",
  },
  {
    icon: "/skills/css.png",
    title: "CSS",
  },
  {
    icon: "/skills/javascript.png",
    title: "JavaScript",
  },
  {
    icon: "/skills/react.png",
    title: "React js",
  },
  {
    icon: "/skills/next.png",
    title: "Next js",
  },
  {
    icon: "/skills/tailwind.png",
    title: "Tailwind",
  },
  {
    icon: "/skills/typescript.png",
    title: "Typescript",
  },
  {
    icon: "/skills/mongoDB.png",
    title: "MongoDB",
  },
  {
    icon: "/skills/node.png",
    title: "Node.js",
  },
];

const otherSkills = [
  "Express",
  "Redux toolkit",
  "SASS",
  "Next Auth",
  "zustand",
  "zod",
  "REST APIs",
];

export const MySkills = () => {
  return (
    <>
      <div className="px-3 md:px-10 pt-[50px] md:pt-[100px] flex flex-wrap items-center justify-center gap-5 mt-[50px]">
        <span className="text-xl font-bold">My skills: </span>
        {skills.map((item) => (
          <div
            key={item.title}
            className="pointer-events-none px-2 flex items-center bg-white dark:bg-slate-950 rounded-full shadow-md shadow-black/70 dark:shadow-white/40"
          >
            <div className="flex items-center gap-2 px-3 py-2">
              <span>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="h-6 w-6 md:h-8 md:w-8 object-contain"
                />
              </span>

              <span className="dark:text-white max-md:text-base md:font-bold">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <ul className="flex font-bold gap-2 px-3 md:px-10 pt-[50px] flex-wrap items-center justify-center">
        {otherSkills.map((item) => (
          <li className="flex" key={item}>
            <Dot />
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
