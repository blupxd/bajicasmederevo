import About from "@/components/About";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import Kontakt from "@/components/Kontakt";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-b from-[#F7FFED] to-white">
      <Hero />
      <About />
      <Services />
      <Kontakt />
      <ImageSlider />
    </main>
  );
}
