"use client";
import React, { useContext } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { UserContext } from "./context/user-context";
import Image from "next/image";
import { ArrowRight, Dot, SquareArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Hint } from "./hint";

const DetailsModal = () => {
  const { isOpen, setIsOpen, data, setData } = useContext(UserContext);

  const onClose = () => {
    setIsOpen(false);
    // setData(defaultData);
  };
  if (data === null) return;
  const {
    title,
    description,
    githubLink,
    liveProjectLink,
    stack,
    otherStack,
    points,
  } = data;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-5xl pt-5">
            {title}
          </DialogTitle>
        </DialogHeader>
        <span className="text-base md:text-lg">{description}</span>
        <div className="flex gap-3">
          {stack?.map((item) => (
            <Hint label={item} key={item}>
              <div key={item}>
                <Image
                  src={`/skills/${item}.png`}
                  alt="icons"
                  width={40}
                  height={40}
                  className="object-contain h-8 w-8 md:h-10 md:w-10"
                />
              </div>
            </Hint>
          ))}
        </div>
        {/* other stack ================== */}
        <ul className="flex flex-wrap">
          {otherStack &&
            otherStack.map((item) => (
              <div className="flex items-center" key={item}>
                <Dot />
                <li>{item}</li>{" "}
              </div>
            ))}
        </ul>
        {/* points ======================== */}
        <div className="text-base md:text-lg">
          <ul>
            {points?.map((item) => (
              <div className="flex items-center gap-2" key={item}>
                <ArrowRight className="h-4 w-4" />
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>

        {/* links =========================================== */}
        <div className="flex justify-end gap-4">
          <Link
            href={githubLink}
            target="_blank"
            className="flex justify-center items-center border p-2 cursor-pointer border-black dark:border-white gap-2 rounded-md hover:scale-110 hover:bg-gray-200 dark:hover:bg-slate-950 transition-all"
          >
            <Image src={"/github.png"} alt="github" height={30} width={30} />
            <span>Github link</span>
          </Link>
          {/* app link ================== */}
          {liveProjectLink && (
            <Link
              href={liveProjectLink}
              target="_blank"
              className="flex justify-center items-center border p-2 cursor-pointer border-black dark:border-white gap-2 rounded-md hover:scale-110 hover:bg-gray-200 dark:hover:bg-slate-950 transition-all"
            >
              <SquareArrowUpRight />
              <span>Open App</span>
            </Link>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsModal;
