import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { contact, mainAction, phones, social } from "@/constants";
import { serviceHref, services } from "@/constants/services";
import Arrow from "./Arrow";
import Share from "./Share";
import { RevealText } from "@/components/Reveal";

const columns = (base: string): { title: string; links: { label: string; href?: string }[] }[] => [
  {
    title: "Usluge",
    links: services.map((s) => ({ label: s.name, href: serviceHref(s) })),
  },
  {
    title: "Firma",
    links: [
      { label: "Projekti", href: `${base}#projekti` },
      { label: "Postupak", href: `${base}#postupak` },
      { label: "O nama", href: `${base}#o-nama` },
      { label: "Galerija", href: "/galerija" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      ...phones.map((p) => ({ label: p.label, href: p.href })),
      { label: contact.email, href: `mailto:${contact.email}` },
      { label: `${contact.town}, Srbija` },
    ],
  },
];

// The footer on the charcoal ground: the close (the main action) on pages without the contact section, then the links
const Footer = ({ base = "", close = true }: { base?: "" | "/"; close?: boolean }) => (
  <footer className="on-dark bg-charcoal pb-10 pt-16 text-stone-50 lg:pt-24" aria-labelledby={close ? "close-h" : undefined}>
    <div className="wrap">
      {close && (
        <div className="mb-16 grid justify-items-start gap-head lg:mb-24">
          <div className="section-head mb-0">
            <h2 id="close-h"><RevealText text="Pošaljite nam upit za vaš objekat" /></h2>
            <p>
              Ili nas pozovite na{" "}
              <a className="link tabular-nums" href={phones[0].href}>{phones[0].label}</a> ili{" "}
              <a className="link tabular-nums" href={phones[1].href}>{phones[1].label}</a>.
            </p>
          </div>
          <a
            className="btn btn-primary group h-[clamp(64px,1.4vw+48px,72px)] w-full max-w-[640px] text-[clamp(20px,0.6vw+16px,26px)] font-normal tracking-[-0.035em]"
            href={`${base}${mainAction.href}`}
          >
            {mainAction.label}
            <Arrow size={24} />
          </a>
        </div>
      )}

      <div className={close ? "border-t border-stone-50/15 pt-12" : ""}>
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 grid content-start gap-4 lg:col-span-4">
            <div>
              <a href="/" aria-label="Bajica Smederevo, početna" className="inline-flex">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/logo-horizontal-light.svg" alt="Bajica Smederevo" width={356} height={56} className="h-14 w-auto" />
              </a>
            </div>
            <p className="max-w-[40ch] text-stone-300">
              Porodična građevinska firma: restauracija fasada i kulturnog nasleđa, teraco, mermerni i epoxy podovi. Smederevo, Srbija.
            </p>
          </div>
          {columns(base).map((c, i) => (
            <div key={c.title} className={`col-span-6 sm:col-span-4 lg:col-span-2 ${i === 0 ? "lg:col-start-7" : ""}`}>
              <h4 className="mb-4 text-small font-medium text-stone-300">{c.title}</h4>
              <ul className="grid gap-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      <a
                        className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-green-500"
                        href={l.href}
                      >
                        {l.label}
                      </a>
                    ) : (
                      l.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* the last row: share this page, then Bajica's own Instagram */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-stone-50/15 pt-8">
          <Share />
          <ul className="flex items-center gap-4">
            {social.map((s) => (
              <li key={s.href}>
                <a
                  className="group flex items-center gap-2 font-medium transition-colors hover:text-green-300"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo size={24} className="transition-transform group-hover:-rotate-6" aria-hidden="true" />
                  Pratite nas na Instagramu
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-small text-stone-300">&copy; {new Date().getFullYear()} Bajica Smederevo. Sva prava zadržana.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
