import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="space-y-0 pb-20">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}
