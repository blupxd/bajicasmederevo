import { Phone } from "@phosphor-icons/react/dist/ssr";
import { hero, heroAction, mainAction, phones } from "@/constants";
import Arrow from "./Arrow";
import Photo from "./Photo";
import { Reveal, RevealText } from "./Reveal";

// The first screen: the client's photograph edge to edge under the bar, the firm's name and slogan in
// warm white on its lower left. Three layers keep the words readable on any photograph without a hard
// band: a light charcoal veil, a fade up from the foot, and (from 640) a fade in from the left edge.
// On a phone the words stay short (one sentence, one row of actions) so the photograph shows above
// them, and the facts move to a strip under the hero.
const Hero = () => (
  <>
    <section
      className="relative mt-nav flex h-[calc(100svh-var(--nav))] min-h-[520px] max-h-[1000px] items-end overflow-hidden bg-charcoal text-stone-50 sm:min-h-[600px]"
      aria-labelledby="hero-h"
    >
      <Photo photo={hero.photo} sizes="100vw" priority quality={85} />
      <div className="absolute inset-0 bg-charcoal/20 sm:bg-charcoal/30" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/0 sm:inset-y-0 sm:h-full sm:from-charcoal/95 sm:via-charcoal/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 left-0 hidden w-3/4 bg-gradient-to-r from-charcoal/55 via-charcoal/20 to-charcoal/0 sm:block"
        aria-hidden="true"
      />

      <div className="wrap relative pb-6 sm:pb-14 lg:pb-16">
        <h1 id="hero-h">
          <Reveal as="span" onLoad className="mb-3 flex items-center gap-2.5 text-label font-medium uppercase tracking-[0.06em] text-stone-50/85 sm:mb-5 sm:tracking-[0.14em] sm:gap-3 sm:text-small lg:mb-6">
            <span className="size-2.5 flex-none bg-green-500 sm:size-3" aria-hidden="true" />
            {hero.eyebrow}
          </Reveal>{" "}
          <span className="block max-w-[16ch] text-[clamp(34px,5.2vw+14px,92px)] leading-[1.02] tracking-[-0.045em]">
            <RevealText text={hero.title} onLoad delay={0.1} stagger={0.07} />
          </span>
        </h1>
        <div className="mt-4 grid gap-8 sm:mt-6 lg:mt-8 lg:grid-cols-12 lg:items-end lg:gap-x-gutter">
          <Reveal onLoad delay={0.45} className="lg:col-span-6">
            <p className="max-w-[56ch] text-body text-stone-50/90 sm:text-lead">
              {hero.lead} <span className="max-sm:hidden">{hero.leadMore}</span>
            </p>
            <div className="mt-5 flex items-center gap-3 sm:mt-6 lg:mt-8">
              <a className="btn btn-primary group flex-1 sm:flex-none" href={mainAction.href}>
                {heroAction}
                <Arrow />
              </a>
              <a className="btn btn-text decoration-stone-50/40 hover:decoration-current max-sm:hidden" href="/usluge">
                Pogledajte usluge
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
          <Reveal onLoad delay={0.6} className="hidden lg:col-span-5 lg:col-start-8 sm:block">
            <dl className="grid grid-cols-3 border-t border-stone-50/25 pt-4">
              {hero.facts.map((f) => (
                <div key={f.label} className="grid content-start gap-1">
                  <dt className="text-small text-stone-50/70">{f.label}</dt>
                  <dd className="text-lead font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>

    {/* the facts on a phone: a charcoal strip right under the photograph */}
    <dl className="grid grid-cols-3 gap-x-3 bg-charcoal px-gut pb-6 pt-1 text-stone-50 sm:hidden">
      {hero.facts.map((f) => (
        <div key={f.label} className="grid content-start gap-0.5 border-t border-stone-50/20 pt-3">
          <dt className="text-label text-stone-50/65">{f.label}</dt>
          <dd className="font-medium">{f.value}</dd>
        </div>
      ))}
    </dl>
  </>
);

export default Hero;
