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
    icon: "/skills/js.png",
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
    icon: "/skills/typescript.png",
    title: "Typescript",
  },
  {
    icon: "/skills/tailwind.png",
    title: "Tailwind",
  },
  {
    icon: "/skills/shadcn.png",
    title: "Shadcn UI",
  },
];

const otherSkills = [
  "MongoDb",
  "Next Auth",
  "Clerk Auth",
  "Convex",
  "Firebase",
  "Git",
  "Redux toolkit",
  "Node",
  "SASS",
  "Prisma",
  "zustand",
  "zod",
];

export const MySkills = () => {
  return (
    <div className="px-10 pt-[100px] md:pt-[150px] flex flex-wrap items-center justify-center gap-3">
      <span className="text-xl font-bold">My skills: </span>
      {skills.map((item) => (
        <div className="pointer-events-none flex items-center border bg-gray-300 dark:bg-blue-950 rounded-full shadow-md dark:shadow-white/10">
          <div className="flex items-center gap-2 px-3 py-2">
            <span>
              <Image
                src={item.icon}
                alt={item.title}
                width={500}
                height={500}
                className="h-9 w-9 object-contain"
              />
            </span>

            <span className="dark:text-white font-bold">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
