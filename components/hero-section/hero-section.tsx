import Image from "next/image";
import React from "react";
import HeroSectionPersonalDetails from "./hero-section-personal-details";
import HeroSectionLinks from "./hero-section-links";

export const HeroSection = () => {
  return (
    <div className="flex flex-col justify-between mt-[5rem] 2xl:flex-row max-2xl:items-center max-w-[1500px] mx-auto w-full px-5 md:px-[5vw]">
      <div className="flex flex-col max-2xl:mb-[60px] md:w-[60vw]">
        <div className="text-4xl font-bold">I&apos;m a</div>
        <br />
        <div className="mb-[30px] md:mb-[40px] heroText text-[60px] md:text-[80px] font-bold leading-[1]">
          Frontend Developer
        </div>
        <div className="xl:w-fit text-md md:text-lg flex flex-col gap-4">
          <span className="">
            &emsp; &emsp; I&apos;m Nehal Pradhan. An aspiring frontend
            developer. My journey began with a fascination for how user
            interfaces create a bridge between technology and people.
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
        <HeroSectionLinks />
      </div>
      {/* image, links and info section ====================== */}
      <div className="flex flex-col 2xl:-mt-10 max-sm:items-center max-sm:justify-center">
        <div className="rounded-full">
          <Image
            src={"/myImage.JPG"}
            alt="myImage"
            height={500}
            width={500}
            className="rounded-full object-cover h-[16em] w-[16em] max-sm:h-[200px] max-sm:w-[200px]"
          />
        </div>
        {/* links ====================== */}
        <div className="flex flex-col gap-3 items-center mt-6">
          <span className="text-3xl">Nehal pradhan</span>
          <HeroSectionPersonalDetails />
        </div>
      </div>
    </div>
  );
};
