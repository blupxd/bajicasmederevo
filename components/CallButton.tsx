"use client";
import { Phone, X } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { contact, phones } from "@/constants";

// The floating call button: a green square in the lower right that comes in once the hero is behind
// you; it opens the two lines and the e-mail. Escape or a click outside closes it.
const CallButton = () => {
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => !box.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <div
      ref={box}
      className={`fixed bottom-[max(16px,env(safe-area-inset-bottom))] right-4 z-30 flex flex-col items-end gap-2 transition-[opacity,transform] duration-300 ease-out sm:bottom-6 sm:right-6
        motion-reduce:transition-none ${shown || open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      {/* the lines: a charcoal card that unfolds upward from the button */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="call-lines"
            className="grid w-64 origin-bottom-right bg-charcoal text-stone-50"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: [0.2, 0.7, 0.2, 1] } }}
            exit={{ opacity: 0, y: 8, scale: 0.97, transition: { duration: 0.16 } }}
          >
            <p className="border-b border-stone-50/15 px-4 py-3 text-small text-stone-300">Pozovite nas</p>
            {phones.map((p) => (
              <a
                key={p.href}
                className="flex items-center justify-between gap-3 border-b border-stone-50/10 px-4 py-3 text-lead font-medium tabular-nums transition-colors hover:bg-charcoal-700"
                href={p.href}
              >
                {p.label}
                <Phone size={18} className="text-green-500" aria-hidden="true" />
              </a>
            ))}
            <a
              className="px-4 py-3 text-small text-stone-300 transition-colors hover:bg-charcoal-700 hover:text-stone-50"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="group relative grid size-14 place-items-center bg-green-500 text-charcoal transition-[background-color,transform] hover:bg-green-550 active:scale-95"
        type="button"
        aria-expanded={open}
        aria-controls="call-lines"
        aria-label={open ? "Zatvorite brojeve telefona" : "Pozovite nas"}
        onClick={() => setOpen((o) => !o)}
      >
        {/* a square ring that runs out from the button twice when it first comes in */}
        {shown && !open && (
          <span
            className="absolute inset-0 animate-[ring_1.6s_ease-out_2] border-2 border-green-500 motion-reduce:hidden"
            aria-hidden="true"
          />
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "phone"}
            className="grid place-items-center"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, rotate: 90, transition: { duration: 0.12 } }}
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Phone size={24} weight="fill" className="transition-transform group-hover:-rotate-12" aria-hidden="true" />
            )}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
};

export default CallButton;
