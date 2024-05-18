import { HeroSection } from "@/components/hero-section";
import { MySkills } from "@/components/my-skills";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="pt-[50px] md:pt-[70px] mx-auto bg-[url(/circuit-board.svg)] dark:bg-[url(/circuit-board-dark.svg)]">
      <HeroSection />
      <MySkills />
      <Projects />
    </div>
  );
}
