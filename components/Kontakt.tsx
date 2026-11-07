import { ArrowUpRight, EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { contact, phones } from "@/constants";
import { RevealText } from "@/components/Reveal";

const lines = [
  ...phones.map((p) => ({ label: "Telefon", value: p.label, href: p.href, Icon: Phone, nums: true })),
  { label: "E-pošta", value: contact.email, href: `mailto:${contact.email}`, Icon: EnvelopeSimple, nums: false },
];

// How to reach us: what happens next on the left, the two lines and the e-mail as large rows on the right
const Kontakt = ({ title = "Zatražite ponudu za vaš objekat" }: { title?: string }) => (
  <section className="section" id="upit" aria-labelledby="upit-h">
    <div className="wrap grid-12">
      <div className="col-span-12 lg:col-span-5">
        <div className="section-head">
          <h2 id="upit-h"><RevealText text={title} /></h2>
          <p>Pozovite nas ili pošaljite e-poštu sa opisom objekta i radova. Dogovaramo obilazak i šaljemo pisanu ponudu.</p>
        </div>
        <dl className="grid grid-cols-2 gap-gutter text-small">
          <div className="grid gap-1">
            <dt className="text-stone-500">Sedište</dt>
            <dd className="font-medium">{contact.town}, Srbija</dd>
          </div>
          <div className="grid gap-1">
            <dt className="text-stone-500">Područje rada</dt>
            <dd className="font-medium">Cela Srbija</dd>
          </div>
        </dl>
      </div>
      <ul className="col-span-12 mt-6 border-b border-charcoal/10 lg:col-span-6 lg:col-start-7 lg:mt-0">
        {lines.map(({ label, value, href, Icon, nums }) => (
          <li key={href}>
            <a
              className="group flex items-center gap-4 border-t border-charcoal/10 py-5 transition-colors hover:bg-stone-100 sm:gap-6 sm:px-4 lg:py-7"
              href={href}
            >
              <span className="grid size-12 flex-none place-items-center bg-green-500 text-charcoal sm:size-14">
                <Icon size={24} aria-hidden="true" />
              </span>
              <span className="grid min-w-0 flex-1 gap-1">
                <span className="text-small text-stone-500">{label}</span>
                <span className={`truncate text-[clamp(22px,2vw+12px,36px)] leading-tight tracking-[-0.03em] ${nums ? "tabular-nums" : ""}`}>
                  {value}
                </span>
              </span>
              <ArrowUpRight
                size={28}
                className="flex-none text-stone-500 transition-transform ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-charcoal"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Kontakt;
