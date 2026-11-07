import type { Metadata } from "next";
import Arrow from "@/components/Arrow";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Photo from "@/components/Photo";
import { notFoundPhoto, phones } from "@/constants";
import { RevealText } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Stranica nije pronađena: Bajica Smederevo",
  robots: { index: false },
};

// 404: the words on 5 columns, a photograph from the site on columns 7-12, the way back home
const NotFound = () => (
  <>
    <Navbar base="/" />
    <main id="top" className="pt-nav">
      <section className="section" aria-labelledby="nf-h">
        <div className="wrap grid-12">
          <div className="col-span-12 flex flex-col lg:col-span-5 lg:py-8">
            <p className="label">Greška 404</p>
            <h1 id="nf-h" className="mt-6"><RevealText text="Ovde još nismo gradili" onLoad /></h1>
            <p className="mt-6 max-w-[48ch] text-lead">
              Stranica koju tražite ne postoji ili je premeštena. Vratite se na početnu ili pogledajte radove u galeriji.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="btn btn-primary group max-sm:w-full" href="/">
                Vratite se na početnu
                <Arrow />
              </a>
              <a className="btn btn-text" href="/galerija">Pogledajte galeriju</a>
            </div>
            <p className="mt-10 text-small text-stone-500 lg:mt-auto lg:pt-10">
              Tražite nešto određeno? Pozovite nas na{" "}
              <a className="link tabular-nums" href={phones[0].href}>{phones[0].label}</a> ili{" "}
              <a className="link tabular-nums" href={phones[1].href}>{phones[1].label}</a>
            </p>
          </div>
          <div className="relative col-span-12 mt-8 aspect-[4/3] overflow-hidden bg-stone-100 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:aspect-[4/5]">
            <Photo photo={notFoundPhoto} sizes="(max-width: 1023px) 100vw, 50vw" priority quality={85} />
            <span
              className="absolute bottom-0 left-0 bg-stone-50 px-4 pt-3 text-[clamp(64px,10vw,140px)] leading-none tracking-[-0.05em] text-charcoal"
              aria-hidden="true"
            >
              404
            </span>
          </div>
        </div>
      </section>
    </main>
    <Footer base="/" />
  </>
);

export default NotFound;
