import {
  Hero,
  About,
  Projects,
  TechStack,
  CoreExpertise,
  Experience,
  Contact,
} from "@/sections";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CoreExpertise />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
    </>
  );
}
