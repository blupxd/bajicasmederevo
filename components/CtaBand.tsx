import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { contact, mainAction, phones } from "@/constants";

// The call to action as its own band, edge to edge in the logo green: the whole top row is one link set
// large, its arrow in a charcoal square that slides on hover; the direct lines underneath
const CtaBand = ({ href = mainAction.href, line = "Imate objekat koji treba obnoviti?" }: { href?: string; line?: string }) => (
  <section className="bg-green-500 text-charcoal" aria-label="Zatražite ponudu">
    <div className="wrap py-12 sm:py-16 lg:py-20">
      <p className="text-lead">{line}</p>
      <a
        className="group mt-4 flex items-center justify-between gap-6 border-b-2 border-charcoal pb-6 transition-colors hover:border-charcoal/60 lg:pb-8"
        href={href}
      >
        <span className="text-[clamp(44px,7vw+8px,120px)] leading-[0.95] tracking-[-0.045em]">
          {mainAction.label}
        </span>
        <span
          className="grid size-[clamp(56px,6vw+20px,112px)] flex-none place-items-center bg-charcoal text-green-500 transition-[transform,background-color] duration-300 ease-out
            group-hover:translate-x-1 group-hover:bg-charcoal-950 group-active:scale-95 motion-reduce:transition-none"
          aria-hidden="true"
        >
          <ArrowRight
            weight="light"
            className="size-[45%] transition-transform duration-300 ease-out group-hover:-rotate-45 motion-reduce:transition-none"
          />
        </span>
      </a>
      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-lead lg:mt-8">
        <span>Ili pozovite:</span>
        {phones.map((p) => (
          <a key={p.href} className="font-medium tabular-nums underline decoration-charcoal/30 underline-offset-4 hover:decoration-current" href={p.href}>
            {p.label}
          </a>
        ))}
        <a className="font-medium underline decoration-charcoal/30 underline-offset-4 hover:decoration-current" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </div>
    </div>
  </section>
);

export default CtaBand;
