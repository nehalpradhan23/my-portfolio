import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuSquare } from "lucide-react";

const HeroSectionLinks = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-items-start gap-5 text-sm md:text-lg mt-[50px]">
      <Link
        href={"https://github.com/nehalpradhan23"}
        target="_blank"
        className="flex gap-2 items-center px-5 py-2 bg-slate-800 dark:bg-gray-100/80 text-white dark:text-black rounded-md hover:scale-105"
      >
        <Image
          src={"/github.png"}
          alt="logo"
          height={50}
          width={50}
          className="h-6 w-6"
        />
        <span className="">Github</span>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/nehalpradhan22"}
        target="_blank"
        className="flex gap-2 items-center px-5 py-2 bg-blue-800 text-white rounded-md hover:scale-105"
      >
        <Image
          src={"/linkedin.png"}
          alt="logo"
          height={50}
          width={50}
          className="h-6 w-6"
        />
        <span>Linkedin</span>
      </Link>
      <Link
        href={"/"}
        className="flex gap-2 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-md items-center px-5 py-2 hover:scale-105 transition-all text-white"
      >
        <MenuSquare />
        <span className="">Resume</span>
      </Link>
    </div>
  );
};

export default HeroSectionLinks;
