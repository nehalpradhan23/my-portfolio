"use client";

import { dataType } from "@/data/data";
import { ListCollapse } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "./context/user-context";

export const Card = ({ cardItem }: { cardItem: dataType }) => {
  const { setIsOpen, setData } = useContext(UserContext);
  const handleOpen = () => {
    setIsOpen(true);
    setData(cardItem);
  };
  const { title, description, githubLink, imageSrc, liveProjectLink, stack } =
    cardItem;
  // ==================================================================
  return (
    // bg-gray-300 dark:bg-gray-50/10
    <div className="border-2 rounded-md w-[350px] 2xl:w-[450px] h-[250px] 2xl:h-[300px] shadow-md hover:shadow-md hover:shadow-black dark:hover:shadow-white/80 transition-all relative overflow-hidden">
      <div className="object-cover">
        <Image
          src={imageSrc}
          alt="cover image"
          height={400}
          width={500}
          className="object-cover"
        />
      </div>
      {/* info ========================== */}
      <div className="absolute flex flex-col bottom-0 justify-between w-full backdrop-blur-2xl bg-white/60 dark:bg-white/10 px-2 py-1 gap-2">
        <div className="flex flex-col">
          <span className="text-3xl">{title}</span>
          <span className="line-clamp-1 text-md">{description}</span>
        </div>
      </div>
      {/* details link ================================== */}
      <div className="flex justify-end gap-2 absolute right-3 top-3 bg-gray-200 dark:bg-slate-950 rounded-md hover:scale-105 hover:bg-gray-300 dark:hover:bg-slate-900 border border-white/80">
        <div
          className="flex items-center gap-2 cursor-pointer  px-3 py-2 rounded-full transition-all"
          onClick={handleOpen}
        >
          <ListCollapse />
          <span>Details</span>
        </div>
      </div>
    </div>
  );
};
