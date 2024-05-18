"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Hint } from "./hint";
import { MapPin, MenuSquare } from "lucide-react";

const HeroSectionPersonalDetails = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("nehal.pradhan23@gmail.com");
  };
  return (
    <div className="flex flex-col justify-items-start gap-3 text-lg mt-3">
      <Link
        href={"https://github.com/nehalpradhan23"}
        target="_blank"
        className="flex gap-2 hover:underline items-center hover:scale-105"
      >
        <Image
          src={"/github.png"}
          alt="logo"
          height={50}
          width={50}
          className="h-6 w-6"
        />
        <span>github.com/nehalpradhan23</span>
      </Link>
      <Link
        href={"https://github.com/nehalpradhan23"}
        target="_blank"
        className="flex gap-2 hover:underline items-center  hover:scale-105"
      >
        <Image
          src={"/linkedin.png"}
          alt="logo"
          height={50}
          width={50}
          className="h-6 w-6"
        />
        <span>linkedin</span>
      </Link>
      <Hint label="Copy email" side="right">
        <div
          className="flex gap-2 hover:underline items-center cursor-pointer  hover:scale-105"
          onClick={copyEmail}
        >
          <Image
            src={"/gmail.png"}
            alt="logo"
            height={50}
            width={50}
            className="h-6 w-6"
          />
          <span>nehal.pradhan23@gmail.com</span>
        </div>
      </Hint>
      <div className="flex gap-2">
        <MapPin />
        <span>Kurseong, Darjeeling, 734220</span>
      </div>
      {/* <div className="flex gap-2 hover:underline items-center cursor-pointer  hover:scale-105">
        <MenuSquare />
        <span className="">Resume</span>
      </div> */}
    </div>
  );
};

export default HeroSectionPersonalDetails;
