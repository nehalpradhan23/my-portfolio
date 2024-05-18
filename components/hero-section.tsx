import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="flex flex-col justify-between px-10 md:px-[80px] pt-[150px] md:pt-[170px] 2xl:flex-row max-2xl:items-center">
      <div className="flex flex-col mb-[100px]">
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
      {/* image section ====================== */}
      <div className="flex items-center justify-center md:mr-28 md:mt-12 rounded-full h-[400px] w-[400px]">
        <Image
          src={"/myImage.JPG"}
          alt="myImage"
          height={500}
          width={500}
          className="rounded-full object-cover h-[400px] w-[400px] max-sm:h-[300px] max-sm:w-[300px]"
        />
      </div>
    </div>
  );
};
