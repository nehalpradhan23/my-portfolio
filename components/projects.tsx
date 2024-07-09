import Link from "next/link";
import { Card } from "./card";
import { projectsListData } from "@/data/projectListData";

export const Projects = () => {
  return (
    <div className="pt-[100px] pb-[20px] flex flex-col max-w-[1500px] mx-auto mt-[50px]">
      <span className="text-center mb-[50px] text-5xl md:text-6xl font-semibold">
        MY PROJECTS
      </span>

      <div className="flex flex-col mx-auto">
        {/* cards ====================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px] justify-center">
          {projectsListData.map((item) => (
            <Card cardItem={item} key={item.title} />
          ))}
          <Link
            href={"/all-projects"}
            className="hover:scale-110 text-3xl font-bold flex items-center justify-center cursor-pointer  transition-all hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-600 hover:text-transparent hover:bg-clip-text group w-[350px] 2xl:w-[450px] h-[250px] 2xl:h-[300px]"
          >
            View all projects -{">"}
          </Link>
        </div>
      </div>
    </div>
  );
};
