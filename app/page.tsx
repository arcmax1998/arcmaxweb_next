import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}
