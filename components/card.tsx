"use client";

import { dataType } from "@/data/data";
import { ListCollapse, SquareArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "./context/user-context";
import Link from "next/link";

export const Card = ({ cardItem }: { cardItem: dataType }) => {
  const { setIsOpen, setData, data } = useContext(UserContext);
  const handleOpen = () => {
    setIsOpen(true);
    setData(cardItem);
  };
  const { title, description, imageSrc, stack } = cardItem;
  // ==================================================================
  return (
    // bg-gray-300 dark:bg-gray-50/10
    <div className="border-[1px] rounded-md w-[350px] max-sm:w-[90vw] 2xl:w-[450px] h-[250px] 2xl:h-[300px] shadow-md hover:shadow-md hover:shadow-black dark:hover:shadow-white/80 transition-all relative overflow-hidden border-black/40 dark:border-white/30">
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
      <div className="absolute flex flex-col bottom-0 justify-between w-full backdrop-blur-xl bg-white/50 dark:bg-black/30 px-2 py-2 md:py-3 border-t-[1px] border-slate-300">
        <div className="flex flex-col gap-1">
          <span className="text-4xl dark:text-gray-200 font-semibold max-lg:text-3xl max-md:text-2xl line-clamp-1 pointer-events-none">
            {title}
          </span>
          <span className="line-clamp-1 text-lg dark:text-white/80 pointer-events-none">
            {description}
          </span>
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2">
              {stack.map((item) => (
                <Image
                  key={item}
                  src={`/skills/${item}.png`}
                  alt="img"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              ))}
            </div>
            {/* direct links */}
            <div className="flex justify-end gap-4 mr-2">
              <Link
                href={cardItem.githubLink}
                target="_blank"
                className="flex items-center cursor-pointer  rounded-full hover:scale-110 transition-all"
              >
                <Image
                  src={"/github.png"}
                  alt="github"
                  height={25}
                  width={25}
                />
                {/* <span>Github link</span> */}
              </Link>
              {/* app link ================== */}
              {cardItem.liveProjectLink && (
                <Link
                  href={cardItem.liveProjectLink}
                  target="_blank"
                  className="flex items-center cursor-pointer  rounded-full hover:scale-110 transition-all"
                >
                  <SquareArrowUpRight />
                  {/* <span>Open App</span> */}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* details link ================================== */}
      <div className="flex justify-end gap-2 absolute right-3 top-3 bg-gray-200 border-slate-700 dark:border-slate-400 dark:bg-slate-800 rounded-md hover:scale-105 hover:bg-gray-300 dark:hover:bg-slate-900 border border-white/80">
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
