import { Hero } from "@/components/sections/hero";
import { BentoIdentity } from "@/components/sections/bento-identity";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { SocLab } from "@/components/sections/soc-lab";
import { AiOps } from "@/components/sections/ai-ops";
import { TechStack } from "@/components/sections/tech-stack";
import { Certifications } from "@/components/sections/certifications";
import { Philosophy } from "@/components/sections/philosophy";
import { Lab } from "@/components/sections/lab";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoIdentity />
      <About />
      <Experience />
      <Projects />
      <SocLab />
      <AiOps />
      <TechStack />
      <Certifications />
      <Philosophy />
      <Lab />
      <Blog />
      <Contact />
    </>
  );
}
