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
    icon: "/skills/shadcn.png",
    title: "Shadcn UI",
  },
  {
    icon: "/skills/react-native.png",
    title: "React Native",
  },
];

const otherSkills = [
  "MongoDb",
  "Express",
  "Node",
  "Redux toolkit",
  "SASS",
  "Next Auth",
  "zustand",
  "zod",
];

export const MySkills2 = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="flex items-center gap-5 flex-wrap bg-slate-950 w-[600px] p-10 rounded-xl shadow-lg shadow-white/20">
        <span className="text-xl font-bold">My skills:</span>
        {skills.map((item) => (
          <div
            key={item.title}
            className="pointer-events-none flex items-center border bg-gray-300 dark:bg-blue-950 rounded-full shadow-md dark:shadow-white/10 h-fit"
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
      <div className="">
        <ul className="flex font-bold gap-2 px-3 md:px-10 pt-[50px] flex-wrap items-center justify-center">
          {otherSkills.map((item) => (
            <li className="flex" key={item}>
              <Dot />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
