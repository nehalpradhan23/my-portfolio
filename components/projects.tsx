import Link from "next/link";
import { Card } from "./card";
import { reactData } from "@/data/react";

export const Projects = () => {
  return (
    <div className="pt-[150px] pb-[20px] flex flex-col max-w-[1500px] mx-auto">
      <span className="text-center mb-[50px] text-5xl md:text-6xl font-semibold">
        MY PROJECTS
      </span>

      <div className="flex flex-col mx-auto">
        <span className="text-4xl md:text-5xl font-semibold mb-[50px]">
          React js
        </span>
        {/* cards ====================== */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px] justify-center">
            {reactData.map((item) => (
              <Card cardItem={item} />
            ))}
            <Link
              href={"/projects"}
              className="hover:scale-110 text-3xl font-bold flex items-center justify-center cursor-pointer  transition-all hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-600 hover:text-transparent hover:bg-clip-text group"
            >
              View all projects -{">"}
            </Link>
          </div>
        </div>
        <span className="text-4xl md:text-5xl font-semibold mt-[50px] mb-[50px]">
          next js
        </span>
        {/* cards ====================== */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px] justify-center">
            <Link
              href={"/"}
              className="hover:scale-110 text-3xl font-bold flex items-center justify-center cursor-pointer  transition-all hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-600 hover:text-transparent hover:bg-clip-text group"
            >
              View all projects -{">"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
