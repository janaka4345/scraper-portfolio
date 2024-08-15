import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import Projects from "@/components/custom/Projects";
import Services from "@/components/custom/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}
