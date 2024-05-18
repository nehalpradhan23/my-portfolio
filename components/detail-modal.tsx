"use client";
import React, { useContext } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { UserContext } from "./context/user-context";
import Image from "next/image";
import { Dot, SquareArrowUpRight } from "lucide-react";
import Link from "next/link";

const DetailsModal = () => {
  const { isOpen, setIsOpen, data, setData } = useContext(UserContext);

  const onClose = () => {
    setIsOpen(false);
    setData("");
  };
  if (data === null) return;
  const { title, description, githubLink, liveProjectLink, stack, points } =
    data;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-5xl">{title}</DialogTitle>
        </DialogHeader>
        <h1>{description}</h1>
        <div className="flex gap-3">
          {stack?.map((item: any) => (
            <Image
              src={`/skills/${item}.png`}
              alt="icons"
              width={40}
              height={40}
              className="object-contain h-8 w-8 md:h-10 md:w-10"
            />
          ))}
        </div>
        <div className="">
          <ul>
            {points?.map((item: any) => (
              <div className="flex">
                <Dot />
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>

        {/* links =========================================== */}
        <div className="flex justify-end gap-4">
          <Link
            href={"/www.google.com"}
            className="flex justify-center items-center border p-2 cursor-pointer border-black dark:border-white gap-2 rounded-md hover:scale-110 hover:bg-gray-200 dark:hover:bg-slate-950 transition-all"
          >
            <Image src={"/github.png"} alt="github" height={30} width={30} />
            <span>Github link</span>
          </Link>
          <Link
            href={"/www.google.com"}
            className="flex justify-center items-center border p-2 cursor-pointer border-black dark:border-white gap-2 rounded-md hover:scale-110 hover:bg-gray-200 dark:hover:bg-slate-950 transition-all"
          >
            <SquareArrowUpRight />
            <span>Open App</span>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsModal;
