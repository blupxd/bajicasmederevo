import { about, projects, steps } from "@/constants";
import Arrow from "./Arrow";
import Photo, { zoom } from "./Photo";
import { RevealText } from "@/components/Reveal";

// Four linked portrait tiles, each opening its project in the gallery
export const Projects = () => (
  <section className="section" id={projects.id} aria-labelledby="projekti-h">
    <div className="wrap">
      <div className="mb-head flex flex-wrap items-end justify-between gap-6">
        <div className="grid max-w-head gap-4">
          <h2 id="projekti-h"><RevealText text={projects.title} /></h2>
          <p className="max-w-[60ch] text-lead">{projects.lead}</p>
        </div>
        <a className="link group" href="/galerija">
          Pogledajte sve projekte
          <Arrow />
        </a>
      </div>
      <div className="grid-12">
        {projects.items.map((p) => (
          <article
            key={p.name}
            className="group relative col-span-6 grid content-start gap-4 transition-transform ease-out hover:-translate-y-0.5 motion-reduce:transition-none lg:col-span-3"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 sm:aspect-[4/5]">
              <Photo photo={p.photo} sizes="(max-width: 1023px) 50vw, 320px" className={zoom} />
            </div>
            <div>
              <h3 className="text-card font-medium">
                <a className="card-link" href={`/galerija#${encodeURIComponent(p.anchor)}`}>
                  {p.name}
                </a>
              </h3>
              <p className="text-small text-stone-500">{p.work}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// Three steps: a card each, the step's photograph under its words
export const Steps = () => (
  <section className="section" id={steps.id} aria-labelledby="postupak-h">
    <div className="wrap">
      <div className="section-head">
        <h2 id="postupak-h"><RevealText text={steps.title} /></h2>
      </div>
      <div className="grid-12">
        {steps.items.map((s, i) => (
          <article
            key={s.title}
            className="col-span-12 flex flex-col gap-2 bg-stone-100 p-6 lg:col-span-4"
          >
            <span className="mb-3 grid size-8 place-items-center border border-green-600 text-small font-medium">
              {i + 1}
            </span>
            <h3 className="text-card font-medium">{s.title}</h3>
            <p className="max-w-[52ch]">{s.text}</p>
            <div className="relative mt-4 aspect-[16/10] overflow-hidden bg-stone-50 sm:aspect-[21/9] lg:mt-auto lg:aspect-[16/10]">
              <Photo photo={s.photo} sizes="(max-width: 1023px) 100vw, 420px" />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// The deep-green band: who we are, the clients we worked for, the team on site
export const About = () => (
  <section className="section on-dark bg-green-900 text-stone-50" id={about.id} aria-labelledby="o-nama-h">
    <div className="wrap grid-12">
      <div className="col-span-12 lg:col-span-5">
        <div className="section-head">
          <h2 id="o-nama-h"><RevealText text={about.title} /></h2>
          <p>{about.lead}</p>
        </div>
        <p className="text-label font-medium text-green-200">{about.clientsLabel}</p>
        <ul className="mt-4 grid grid-cols-2 gap-x-gutter max-sm:text-small">
          {about.clients.map((c) => (
            <li key={c} className="border-t border-stone-50/15 py-3">{c}</li>
          ))}
        </ul>
      </div>
      <div className="relative col-span-12 mt-4 aspect-[4/3] overflow-hidden bg-green-800 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:aspect-auto lg:min-h-[560px]">
        <Photo photo={about.photo} sizes="(max-width: 1023px) 100vw, 50vw" quality={85} />
      </div>
    </div>
  </section>
);
