import { floors, heritage, industry } from "@/constants";
import Arrow from "./Arrow";
import Photo, { zoom } from "./Photo";
import { RevealText } from "@/components/Reveal";

// The service pages the home sections lead to
const HERITAGE = "/usluge/restauracija-fasada-i-kulturnog-nasledja";
const TERRAZZO = "/usluge/teraco-i-mermerni-podovi";
const EPOXY = "/usluge/epoxy-podovi";
const INDUSTRY = "/usluge/sanacija-industrijskih-objekata";
const floorPages = [TERRAZZO, TERRAZZO, EPOXY]; // teraco, mermer, epoxy, in the order of floors.tiles

const More = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className="link group" href={href}>
    {children}
    <Arrow />
  </a>
);

// Usluga 01: the h2, its line and the rows on 5 columns, the photograph on columns 7-12 as tall as the words
export const Heritage = () => (
  <section className="section" id={heritage.id} aria-labelledby="nasledje-h">
    <div className="wrap grid-12">
      <div className="col-span-12 lg:col-span-5">
        <div className="section-head">
          <p className="label">{heritage.label}</p>
          <h2 id="nasledje-h"><RevealText text={heritage.title} /></h2>
          <p>{heritage.lead}</p>
        </div>
        <ul>
          {heritage.rows.map((r) => (
            <li key={r.name} className="grid gap-1 border-b border-charcoal/10 py-4 first:pt-0">
              <span className="font-medium">{r.name}</span>
              <p className="text-small">{r.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <More href={HERITAGE}>Više o restauraciji</More>
        </div>
      </div>
      <div className="relative col-span-12 mt-4 aspect-[4/3] overflow-hidden bg-stone-100 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:aspect-auto lg:min-h-[560px]">
        <Photo photo={heritage.photo} sizes="(max-width: 1023px) 100vw, 50vw" quality={85} />
      </div>
    </div>
  </section>
);

// Usluga 02: the head, then three linked tiles, one kind of floor each, each opening its service page
export const Floors = () => (
  <section className="section" id={floors.id} aria-labelledby="podovi-h">
    <div className="wrap">
      <div className="mb-head flex flex-wrap items-end justify-between gap-6">
        <div className="grid max-w-head gap-4">
          <p className="label">{floors.label}</p>
          <h2 id="podovi-h"><RevealText text={floors.title} /></h2>
          <p className="max-w-[60ch] text-lead">{floors.lead}</p>
        </div>
      </div>
      <div className="grid-12">
        {floors.tiles.map((t, i) => (
          <article
            key={t.title}
            className="group relative col-span-12 grid content-start gap-4 transition-transform ease-out hover:-translate-y-0.5 sm:col-span-6 sm:last:odd:col-span-12 lg:col-span-4 lg:last:odd:col-span-4"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
              <Photo photo={t.photo} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 420px" className={zoom} />
            </div>
            <h3 className="text-card font-medium">
              <a className="card-link flex items-center gap-2" href={floorPages[i]}>
                {t.title}
                <Arrow />
              </a>
            </h3>
            <p className="max-w-[52ch]">{t.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// Usluga 03: the head, then two photographs of two jobs at one ratio
export const Industry = () => (
  <section className="section" id={industry.id} aria-labelledby="industrija-h">
    <div className="wrap">
      <div className="mb-head flex flex-wrap items-end justify-between gap-6">
        <div className="grid max-w-head gap-4">
          <p className="label">{industry.label}</p>
          <h2 id="industrija-h"><RevealText text={industry.title} /></h2>
          <p className="max-w-[60ch] text-lead">{industry.lead}</p>
        </div>
        <More href={INDUSTRY}>Više o sanaciji</More>
      </div>
      <div className="grid-12">
        {industry.photos.map((p) => (
          <div key={p.src} className="relative col-span-12 aspect-[4/3] overflow-hidden bg-stone-100 sm:col-span-6 lg:aspect-[3/2]">
            <Photo photo={p} sizes="(max-width: 639px) 100vw, 50vw" quality={85} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
