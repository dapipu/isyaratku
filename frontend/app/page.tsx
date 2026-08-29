import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Blog from "@/components/Blog";import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <About />
        <Process />
        <Blog />
      </main>

      <Footer />
    </>
  );
}