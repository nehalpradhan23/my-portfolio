import { Card } from "@/components/card";
import {
  otherProjectsListData,
  projectsListData,
} from "@/data/projectListData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllProjects = () => {
  return (
    <div className="pt-[100px] pb-[20px] flex flex-col max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px] justify-center px-4">
        {projectsListData.map((item) => (
          <Card cardItem={item} key={item.title} />
        ))}
      </div>
      <p className="text-4xl font-bold text-center mt-20">Other projects</p>
      <div className="mt-10">
        <div className="flex gap-5">
          {otherProjectsListData.map((item) => (
            <div
              className="backdrop-blur-md bg-white/10 p-5 rounded-md flex flex-col  gap-4 hover:shadow hover:shadow-white"
              key={item.title}
            >
              {/* title and link ====================================== */}
              <div className="flex gap-3">
                <span className="text-3xl pointer-events-none">
                  {item.title}
                </span>
                <Link
                  href={item.githubLink}
                  target="_blank"
                  className="flex justify-center items-center border p-2 cursor-pointer border-black dark:border-white gap-2 rounded-md hover:scale-105 hover:bg-gray-200 dark:hover:bg-slate-950 transition-all"
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
    </div>
  );
};

export default AllProjects;
