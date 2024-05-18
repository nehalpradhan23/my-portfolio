import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MapPin, MenuSquare } from "lucide-react";
import { Hint } from "./hint";
import HeroSectionPersonalDetails from "./hero-section-personal-details";

export const HeroSection = () => {
  return (
    <div className="flex flex-col justify-between px-10 md:px-[150px] pt-[150px] md:pt-[170px] 2xl:flex-row max-2xl:items-center">
      <div className="flex flex-col max-2xl:mb-[60px]">
        <div className="text-5xl font-bold">I'm a</div>
        <br />
        <div className="mb-[50px] heroText text-[70px] md:text-[100px] font-bold leading-[1]">
          Frontend Developer
        </div>
        <div className="xl:w-[1000px] text-lg md:text-xl flex flex-col gap-4">
          <span className="">
            &emsp; &emsp; I'm Nehal Pradhan. An aspiring frontend developer. My
            journey began with a fascination for how user interfaces create a
            bridge between technology and people.
          </span>
          <span>
            &emsp; &emsp; I have honed my skills in HTML, CSS, JavaScript,
            ReactJs, nextjs, etc, and I am continually exploring new frameworks
            and technologies to expand my toolkit.
          </span>
          <span>
            &emsp;&emsp; My approach is centered around creating intuitive and
            accessible web applications and user experiences, with a keen eye
            for detail and design. I am eager to contribute to projects that
            challenge me to grow and learn. I am excited to embark on my
            professional journey and make a positive impact in the tech
            industry. Let’s build something great together!
          </span>
        </div>
      </div>
      {/* image, links and info section ====================== */}
      {/* <div className="flex flex-col items-center justify-center md:mr-28 md:mt-12 rounded-full h-[400px] w-[400px]"> */}
      <div className="flex flex-col md:mr-28 2xl:-mt-14">
        <div className="rounded-full">
          <Image
            src={"/myImage.JPG"}
            alt="myImage"
            height={500}
            width={500}
            className="rounded-full object-cover h-[400px] w-[400px] max-sm:h-[300px] max-sm:w-[300px]"
          />
        </div>
        {/* links ====================== */}
        <div className="flex flex-col gap-3 items-center mt-6">
          <span className="text-3xl">Nehal pradhan</span>
          <HeroSectionPersonalDetails />
          <Link
            href={"/"}
            className="flex gap-2 mt-4 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-md items-center cursor-pointer px-5 py-2 hover:scale-105 text-white"
          >
            <MenuSquare />
            <span className="text-xl">Resume</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
