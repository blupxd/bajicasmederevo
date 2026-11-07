import { hero, mainAction } from "@/constants";
import Arrow from "./Arrow";
import Photo from "./Photo";

// The first screen: the client's photograph edge to edge under the bar, the firm's name and slogan in
// warm white on its lower left. Three layers keep the words readable on any photograph without a hard
// band: a light charcoal veil over all of it, a fade up from the foot, and a fade in from the left edge.
const Hero = () => (
  <section
    className="relative mt-nav flex h-[calc(100svh-var(--nav))] min-h-[600px] max-h-[1000px] items-end overflow-hidden bg-charcoal text-stone-50"
    aria-labelledby="hero-h"
  >
    <Photo photo={hero.photo} sizes="100vw" priority quality={85} />
    <div className="absolute inset-0 bg-charcoal/30" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/45 to-charcoal/0" aria-hidden="true" />
    <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-charcoal/55 via-charcoal/20 to-charcoal/0 lg:w-3/4" aria-hidden="true" />

    <div className="wrap relative pb-10 sm:pb-14 lg:pb-16">
      <h1 id="hero-h">
        <span className="mb-5 flex items-center gap-3 text-small font-medium uppercase tracking-[0.14em] text-stone-50/85 lg:mb-6">
          <span className="size-3 flex-none bg-green-500" aria-hidden="true" />
          {hero.eyebrow}
        </span>
        <span className="block max-w-[16ch] text-[clamp(42px,5.2vw+12px,92px)] leading-[1.0] tracking-[-0.045em]">{hero.title}</span>
      </h1>
      <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-12 lg:items-end lg:gap-x-gutter">
        <div className="lg:col-span-6">
          <p className="max-w-[56ch] text-lead text-stone-50/90">{hero.lead}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 lg:mt-8">
            <a className="btn btn-primary group max-sm:w-full" href={mainAction.href}>
              {mainAction.label}
              <Arrow />
            </a>
            <a className="btn btn-text decoration-stone-50/40 hover:decoration-current" href="/usluge">
              Pogledajte usluge
            </a>
          </div>
        </div>
        <dl className="grid grid-cols-3 border-t border-stone-50/25 pt-4 lg:col-span-5 lg:col-start-8">
          {hero.facts.map((f) => (
            <div key={f.label} className="grid content-start gap-1">
              <dt className="text-small text-stone-50/70">{f.label}</dt>
              <dd className="text-lead font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default Hero;
