import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeFaq from "@/components/HomeFaq";
import Kontakt from "@/components/Kontakt";
import Navbar from "@/components/Navbar";
import { About, Projects, Steps } from "@/components/Projects";
import { Floors, Heritage, Industry } from "@/components/Services";

/* type: service (site-kind other). The home page: the full-bleed hero, the three kinds of work (each
   leading to its page under /usluge), the call-to-action band, projects, steps, the green band, questions, contacts */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Heritage />
        <Floors />
        <Industry />
        <CtaBand />
        <Projects />
        <Steps />
        <About />
        <HomeFaq />
        <Kontakt />
      </main>
      <Footer close={false} />
    </>
  );
}
