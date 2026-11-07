import type { Metadata } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Photo, { zoom } from "@/components/Photo";
import { siteUrl } from "@/constants";
import { serviceHref, services } from "@/constants/services";
import { RevealText } from "@/components/Reveal";

const title = "Usluge: restauracija, teraco i epoxy podovi | Bajica";
const description =
  "Restauracija fasada i spomenika kulture, teraco, mermerni i epoxy podovi, sanacija industrijskih objekata. Smederevo i cela Srbija.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/usluge" },
  openGraph: { type: "website", url: "/usluge", title, description, siteName: "Bajica Smederevo", locale: "sr_RS" },
};

// The services hub: one large linked card a service, its photograph, its name, its line, what it covers
const Usluge = () => (
  <>
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.title, url: `${siteUrl}${serviceHref(s)}` })),
      }}
    />
    <Navbar base="/" page="usluge" />
    <main id="top" className="pt-nav">
      <section className="section" aria-labelledby="usluge-h">
        <div className="wrap">
          <div className="section-head">
            <p className="label">Usluge</p>
            <h1 id="usluge-h" className="text-h2 lg:text-[clamp(48px,3.5vw+10px,64px)]"><RevealText text="Šta radimo" onLoad /></h1>
            <p>
              Radimo restauraciju fasada i spomenika kulture, teraco, mermerne i epoxy podove i sanacije industrijskih objekata, u Smederevu i
              širom Srbije. Izaberite uslugu da vidite šta obuhvata i fotografije sa naših gradilišta.
            </p>
          </div>
          <div className="grid-12 gap-y-12">
            {services.map((s) => (
              <article
                key={s.slug}
                className="group relative col-span-12 grid content-start gap-5 transition-transform ease-out hover:-translate-y-0.5 sm:col-span-6"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-stone-100">
                  <Photo photo={s.hero} sizes="(max-width: 639px) 100vw, 640px" quality={85} className={zoom} />
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div className="grid gap-2">
                    <h2 className="text-h3">
                      <a className="card-link" href={serviceHref(s)}>
                        {s.title}
                      </a>
                    </h2>
                    <p className="max-w-[52ch] text-charcoal-600">{s.lead}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {s.scope.slice(0, 3).map((item) => (
                        <li key={item.name} className="border border-charcoal/15 px-2.5 py-1 text-small">
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="grid size-12 flex-none place-items-center bg-green-500 text-charcoal transition-colors group-hover:bg-green-550">
                    <ArrowUpRight size={22} className="transition-transform ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand href="/#upit" />
    </main>
    <Footer base="/" close={false} />
  </>
);

export default Usluge;
