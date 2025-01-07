"use client";
import Image from "next/image";
import React from "react";
import { Hint } from "../hint";
import { MapPin, MenuSquare, School } from "lucide-react";

const HeroSectionPersonalDetails = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("nehal.pradhan23@gmail.com");
  };
  return (
    <div className="flex flex-col px-2 justify-items-start gap-5 text-base mt-3">
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
          <span className="text-sm">nehal.pradhan23@gmail.com</span>
        </div>
      </Hint>
      <div className="flex gap-2">
        <MapPin />
        <span>Kurseong, Darjeeling, 734220</span>
      </div>
      <div className="text-sm flex flex-col gap-4">
        <span className="flex gap-3">
          <span>
            <School />
          </span>
          <span className="flex flex-col gap-1">
            <span>Diploma, Computer Science (8.3)</span>
            <span>Darjeeling Polytechnic Institute</span>
            {/* <span>8.3</span> */}
          </span>
        </span>
        <span className="flex gap-3">
          <span>
            <School />
          </span>
          <span className="flex flex-col gap-1">
            <span>B.Tech Computer Science (7.67)</span>
            {/* <span>7.67</span> */}
            <span className="">
              Jalpaiguri Government Engineering <br /> College
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default HeroSectionPersonalDetails;
