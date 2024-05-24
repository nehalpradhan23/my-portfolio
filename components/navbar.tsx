"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Hint } from "./hint";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
    setCurrentTheme("dark");
  }, [setTheme]);

  const changeTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      setCurrentTheme("light");
    } else {
      setTheme("dark");
      setCurrentTheme("dark");
    }
  };
  // ======================================
  return (
    <nav className="fixed w-full z-20 backdrop-blur-3xl">
      <div className=" flex flex-wrap items-center justify-between mx-auto py-4 px-8">
        <Hint label="Home">
          <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 text-transparent bg-clip-text hover:cursor-pointer">
            My Portfolio
          </span>
        </Hint>

        {/* links and theme toggle ==================== */}
        {/* links ======== */}
        <div className="flex items-center gap-3">
          {/* 
          <div className="flex gap-2 items-center">
            <Link href={"/"}>
              <span>Resume</span>
            </Link>
            <Link href={"/"}>
              <Image src="/gmail.png" alt="gmail" width={30} height={30} />
            </Link>
            <Link target="_blank" href="https://github.com/nehalpradhan23">
              <Image src="/github.png" alt="github" width={30} height={30} />
            </Link>
            <Link href={"/"}>
              <Image
                src="/linkedin.png"
                alt="linkedin"
                width={30}
                height={30}
              />
            </Link>
          </div> */}

          {/* theme toggle ================== */}
          <Hint label="Change theme">
            <Button onClick={changeTheme} className="" variant="ghost">
              {currentTheme === "dark" ? <Moon /> : <Sun />}
            </Button>
          </Hint>
        </div>
      </div>
    </nav>
  );
};
