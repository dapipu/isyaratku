import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Material from "@/components/Material";    
import Promo from "@/components/Promo";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Material />
        <Promo />
        
      </main>

      <Footer />
    </>
  );
}