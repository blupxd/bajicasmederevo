import { Plus } from "@phosphor-icons/react/dist/ssr";

// Questions as native disclosures (readable without JavaScript, indexable): a hairline between them,
// a plus that turns into a cross when one is open
const Faq = ({ items }: { items: { q: string; a: string }[] }) => (
  <div className="border-b border-charcoal/10">
    {items.map((f) => (
      <details key={f.q} className="group border-t border-charcoal/10">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-card font-medium transition-colors hover:text-green-700 [&::-webkit-details-marker]:hidden">
          {f.q}
          <Plus size={22} className="flex-none transition-transform duration-300 ease-out group-open:rotate-45" aria-hidden="true" />
        </summary>
        <p className="max-w-[68ch] pb-6 text-body text-charcoal-600">{f.a}</p>
      </details>
    ))}
  </div>
);

export default Faq;
