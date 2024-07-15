import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constants";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex_col_center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <LatestProjects />
        <Experience />
        <Skills />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
