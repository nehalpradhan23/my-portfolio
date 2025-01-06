import { HeroSection } from "@/components/hero-section/hero-section";
import { MySkills } from "@/components/my-skills";
import { MySkills2 } from "@/components/my-skills2";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="pt-[50px] md:pt-[70px] mx-auto bg-gradient-to-r dark:from-black dark:to-slate-950 from-white to-gray-400">
      {/* <div className="pt-[50px] md:pt-[70px] mx-auto bg-[url(/circuit-board.svg)] dark:bg-[url(/circuit-board-dark.svg)]"> */}
      <HeroSection />
      <MySkills />
      {/* <MySkills2 /> */}
      <Projects />
    </div>
  );
}
