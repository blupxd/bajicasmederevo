import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Phone } from "@phosphor-icons/react/dist/ssr";
import Arrow from "@/components/Arrow";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Kontakt from "@/components/Kontakt";
import Navbar from "@/components/Navbar";
import Photo, { zoom } from "@/components/Photo";
import WorkGallery from "@/components/WorkGallery";
import { heroAction, phones, siteUrl } from "@/constants";
import { serviceBySlug, serviceHref, services } from "@/constants/services";
import { projectPhotos } from "@/lib/gallery";
import { Reveal, RevealText } from "@/components/Reveal";

type Params = { params: { slug: string } };

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export const generateMetadata = ({ params }: Params): Metadata => {
  const s = serviceBySlug(params.slug);
  if (!s) return {};
  const url = serviceHref(s);
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: s.metaTitle,
      description: s.metaDescription,
      siteName: "Bajica Smederevo",
      locale: "sr_RS",
      images: [{ url: encodeURI(s.hero.src), alt: s.hero.alt }],
    },
    twitter: { card: "summary_large_image", title: s.metaTitle, description: s.metaDescription, images: [encodeURI(s.hero.src)] },
  };
};

// A service page: the photograph edge to edge with the name and the main action, what the service is,
// what it covers, the work itself project by project, the band, questions, the other services, contacts
const ServicePage = async ({ params }: Params) => {
  const s = serviceBySlug(params.slug);
  if (!s) notFound();
  const projects = await Promise.all(s.projects.map(async (p) => ({ name: p.name, photos: await projectPhotos(p.group, p.project) })));
  const photoCount = projects.reduce((n, p) => n + p.photos.length, 0);
  const others = services.filter((o) => o.slug !== s.slug);
  const url = `${siteUrl}${serviceHref(s)}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${url}#service`,
              name: s.title,
              serviceType: s.name,
              description: s.metaDescription,
              url,
              image: `${siteUrl}${encodeURI(s.hero.src)}`,
              provider: { "@id": `${siteUrl}/#firma` },
              areaServed: [
                { "@type": "City", name: "Smederevo" },
                { "@type": "Country", name: "Srbija" },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Početna", item: `${siteUrl}/` },
                { "@type": "ListItem", position: 2, name: "Usluge", item: `${siteUrl}/usluge` },
                { "@type": "ListItem", position: 3, name: s.name, item: url },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ],
        }}
      />
      <Navbar base="/" page="usluge" action="#upit" />
      <main id="top">
        {/* the first screen: the work edge to edge, the name lower left */}
        <section
          className="relative mt-nav flex h-[calc(88vh-var(--nav))] min-h-[460px] max-h-[860px] supports-[height:100dvh]:h-[calc(88dvh-var(--nav))] sm:min-h-[520px] items-end overflow-hidden bg-charcoal text-stone-50"
          aria-labelledby="usluga-h"
        >
          <Photo photo={s.hero} sizes="100vw" priority quality={85} />
          <div className="absolute inset-0 bg-charcoal/15 sm:bg-charcoal/25" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/0" aria-hidden="true" />
          <div className="wrap relative pb-6 sm:pb-14">
            <nav aria-label="Putanja" className="mb-4 text-label text-stone-50/75 sm:mb-6 sm:text-small">
              <ol className="flex flex-wrap items-center gap-2">
                <li><a className="hover:text-stone-50 hover:underline" href="/">Početna</a></li>
                <li aria-hidden="true">/</li>
                <li><a className="hover:text-stone-50 hover:underline" href="/usluge">Sve usluge</a></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-stone-50">{s.name}</li>
              </ol>
            </nav>
            <h1 id="usluga-h" className="max-w-[18ch] text-[clamp(32px,4.2vw+16px,76px)] leading-[1.03] tracking-[-0.042em]">
              <RevealText text={s.title} onLoad stagger={0.06} />
            </h1>
            <Reveal onLoad delay={0.4}>
              <p className="mt-4 max-w-[56ch] text-body text-stone-50/90 sm:mt-5 sm:text-lead">{s.lead}</p>
              <div className="mt-5 flex items-center gap-3 sm:mt-8">
                <a className="btn btn-primary group flex-1 sm:flex-none" href="#upit">
                  {heroAction}
                  <Arrow />
                </a>
                <a className="btn btn-text tabular-nums decoration-stone-50/40 hover:decoration-current max-sm:hidden" href={phones[0].href}>
                  Pozovite {phones[0].label}
                </a>
                <a
                  className="grid size-12 flex-none place-items-center border border-stone-50/40 transition-colors hover:border-stone-50 active:scale-95 sm:hidden"
                  href={phones[0].href}
                >
                  <Phone size={22} aria-hidden="true" />
                  <span className="sr-only">Pozovite nas telefonom</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* what the service is */}
        <section className="section" aria-labelledby="opis-h">
          <div className="wrap grid-12">
            <div className="col-span-12 lg:col-span-5">
              <div className="section-head mb-0">
                <p className="label">O usluzi</p>
                <h2 id="opis-h"><RevealText text={s.about.title} /></h2>
                {s.about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="!text-body text-charcoal-600 lg:!text-lead">{p}</p>
                ))}
              </div>
              <a className="link group mt-8" href="#radovi">
                Pogledajte {photoCount} fotografija sa gradilišta
                <Arrow />
              </a>
            </div>
            <div className="relative col-span-12 mt-6 aspect-[4/3] overflow-hidden bg-stone-100 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:aspect-auto lg:min-h-[520px]">
              <Photo photo={s.aboutPhoto} sizes="(max-width: 1023px) 100vw, 50vw" quality={85} />
            </div>
          </div>
        </section>

        {/* what it covers */}
        <section className="section bg-stone-100" aria-labelledby="obuhvata-h">
          <div className="wrap">
            <div className="section-head">
              <p className="label">Šta obuhvata</p>
              <h2 id="obuhvata-h"><RevealText text="Šta radimo u okviru usluge" /></h2>
            </div>
            <ol className="grid-12 gap-y-0">
              {s.scope.map((item, i) => (
                <li key={item.name} className="col-span-12 grid content-start gap-2 border-t border-charcoal/15 py-6 sm:col-span-6 lg:col-span-4 lg:py-8">
                  <span className="text-small font-medium tabular-nums text-green-700">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-card font-medium">{item.name}</h3>
                  <p className="max-w-[44ch] text-charcoal-600">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* the work, project by project */}
        <section className="section scroll-mt-nav" id="radovi" aria-labelledby="radovi-h">
          <div className="wrap">
            <div className="mb-head flex flex-wrap items-end justify-between gap-6">
              <div className="grid max-w-head gap-4">
                <p className="label">Naši radovi</p>
                <h2 id="radovi-h"><RevealText text="Fotografije sa naših gradilišta" /></h2>
                <p className="max-w-[60ch] text-lead">
                  {projects.length} {projects.length < 5 ? "projekta" : "projekata"}, {photoCount} fotografija. Kliknite na fotografiju da je vidite u punoj veličini.
                </p>
              </div>
              <a className="link group" href="/galerija">
                Cela galerija
                <Arrow />
              </a>
            </div>
            <WorkGallery projects={projects} />
          </div>
        </section>

        <CtaBand href="#upit" line="Imate sličan posao? Pošaljite nam upit ili nas pozovite." />

        {/* questions */}
        <section className="section" aria-labelledby="pitanja-h">
          <div className="wrap grid-12">
            <div className="col-span-12 lg:col-span-4">
              <div className="section-head">
                <p className="label">Pitanja</p>
                <h2 id="pitanja-h"><RevealText text="Česta pitanja" /></h2>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <Faq items={s.faq} />
            </div>
          </div>
        </section>

        {/* the other services */}
        <section className="section bg-stone-100" aria-labelledby="ostale-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="ostale-h"><RevealText text="Ostale usluge" /></h2>
            </div>
            <div className="grid-12">
              {others.map((o) => (
                <article
                  key={o.slug}
                  className="group relative col-span-12 grid content-start gap-4 transition-transform ease-out hover:-translate-y-0.5 sm:col-span-4"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-50">
                    <Photo photo={o.navPhoto} sizes="(max-width: 639px) 100vw, 420px" className={zoom} />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-card font-medium">
                        <a className="card-link" href={serviceHref(o)}>
                          {o.title}
                        </a>
                      </h3>
                      <p className="text-small text-stone-500">{o.short}</p>
                    </div>
                    <ArrowUpRight
                      size={24}
                      className="flex-none transition-transform ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Kontakt title={`Zatražite ponudu: ${s.name.toLowerCase()}`} />
      </main>
      <Footer base="/" close={false} />
    </>
  );
};

export default ServicePage;
