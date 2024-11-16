import { Card } from "@/components/card";
import {
  otherProjectsListData,
  projectsListData,
  reactNativeProjects,
} from "@/data/projectListData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllProjects = () => {
  return (
    <div className="pt-[100px] pb-[20px] flex flex-col max-w-[1500px] mx-auto bg-[url(/circuit-board.svg)] dark:bg-[url(/circuit-board-dark.svg)]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px] justify-center px-4 mx-auto">
        {projectsListData.map((item) => (
          <Card cardItem={item} key={item.title} />
        ))}
      </div>
      <p className="text-4xl font-bold text-center mt-20">Other projects</p>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-3">
          {otherProjectsListData.map((item) => (
            // <div
            //   className="dark:backdrop-blur-md bg-gray-200 dark:bg-white/10 p-3 rounded-md flex flex-col border-black border-[1px] gap-4 hover:shadow hover:shadow-black dark:hover:shadow-white max-sm:w-full"
            //   key={item.title}
            // >
            <div
              className="bg-gradient-to-b from-white to-black/70 dark:from-slate-900 dark:to-gray-600 p-3 rounded-md flex flex-col border-black border-[1px] gap-4 hover:shadow hover:shadow-black dark:hover:shadow-white max-sm:w-full"
              key={item.title}
            >
              {/* title and link ====================================== */}
              <div className="flex gap-2 md:gap-3 items-center justify-between">
                <span className="text-xl md:text-2xl pointer-events-none">
                  {item.title}
                </span>
                <Link
                  href={item.githubLink}
                  target="_blank"
                  className="flex justify-center items-center border p-2 cursor-pointer border-black dark:border-white gap-2 rounded-md hover:scale-105 hover:bg-gray-400 dark:hover:bg-slate-950 transition-all"
                >
                  <Image
                    src={"/github.png"}
                    alt="github"
                    height={20}
                    width={20}
                  />
                  <span>Github link</span>
                </Link>
              </div>
              {/* stack list =============== */}
              <div className="flex gap-2">
                {item.stack.map((item) => (
                  <Image
                    key={item}
                    src={`/skills/${item}.png`}
                    alt="img"
                    width={22}
                    height={22}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* react native -------------------------- */}
      <p className="text-4xl font-bold text-center mt-20">React native</p>
      <div className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-3">
          {reactNativeProjects.map((item) => (
            <div
              className="bg-gradient-to-b from-white to-black/70 dark:from-slate-900 dark:to-gray-600 p-3 rounded-md flex flex-col border-black border-[1px] gap-4 hover:shadow hover:shadow-black dark:hover:shadow-white max-sm:w-full"
              key={item.title}
            >
              {/* <div
              className="dark:backdrop-blur-md bg-gray-200 dark:bg-white/10 p-3 rounded-md flex flex-col border-black border-[1px] gap-4 hover:shadow hover:shadow-black dark:hover:shadow-white max-sm:w-full"
              key={item.title}
            > */}
              {/* title and link ====================================== */}
              <div className="flex gap-2 md:gap-3 items-center justify-between">
                <span className="text-xl md:text-2xl pointer-events-none">
                  {item.title}
                </span>
                <Link
                  href={item.githubLink}
                  target="_blank"
                  className="flex justify-center items-center border p-2 cursor-pointer border-black dark:border-white gap-2 rounded-md hover:scale-105 hover:bg-gray-400 dark:hover:bg-slate-950 transition-all"
                >
                  <Image
                    src={"/github.png"}
                    alt="github"
                    height={20}
                    width={20}
                  />
                  <span>Github link</span>
                </Link>
              </div>
              {/* stack list =============== */}
              <div className="flex gap-2">
                {item.stack.map((item) => (
                  <Image
                    className="object-contain"
                    key={item}
                    src={`/skills/${item}.png`}
                    alt="img"
                    width={22}
                    height={22}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
