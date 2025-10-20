import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "../components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center bg-black-100 mx-auto px-5 sm:px-10 overflow-clip">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
