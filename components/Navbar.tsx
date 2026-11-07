"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CaretDown, List, X } from "@phosphor-icons/react/dist/ssr";
import { contact, mainAction, phones } from "@/constants";
import { serviceHref, services } from "@/constants/services";
import Arrow from "./Arrow";
import Photo, { zoom } from "./Photo";

// A word in the bar: a 2px green line draws under it from the left on hover and focus
const barLink =
  "relative inline-flex h-9 items-center gap-1 whitespace-nowrap px-3 text-[15px] font-medium " +
  "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-right after:scale-x-0 after:bg-green-500 " +
  "after:transition-transform after:ease-out hover:after:origin-left hover:after:scale-x-100 " +
  "focus-visible:after:origin-left focus-visible:after:scale-x-100 aria-[current=page]:after:scale-x-100";

// The sheet's items come in one after another once the sheet has opened, and leave together
const enter = (i: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1], delay: 0.18 + i * 0.06 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
});

// The words left, the logo on the centre line, the phone and the main action right. The bar slides away
// while the page scrolls down and comes back on the first scroll up; a green line under it fills with
// the reading position. Under 1024 the menu button opens a charcoal sheet over the page.
type Props = {
  base?: "" | "/";
  page?: "galerija" | "usluge";
  action?: string; // where the main button goes: the page's own form, else the home page's
};

const Navbar = ({ base = "", page, action = `${base}${mainAction.href}` }: Props) => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const progress = useRef<HTMLDivElement>(null);

  const links = [
    { label: "Projekti", href: `${base}#projekti` },
    { label: "O nama", href: `${base}#o-nama` },
    { label: "Galerija", href: "/galerija", current: page === "galerija" },
  ];

  // hide on the way down (past the first 120px), show on the way up; one frame per scroll burst
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (Math.abs(y - last) > 8) {
        setHidden(y > last && y > 120);
        last = y;
      }
      if (y < 120) setHidden(false);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current?.style.setProperty("transform", `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onWide = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onWide);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onWide);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-nav border-b transition-[transform,background-color,border-color] duration-300 ease-out
        focus-within:translate-y-0 motion-reduce:transition-none
        ${open ? "border-stone-50/15 bg-charcoal text-stone-50" : "border-charcoal/10 bg-stone-50"}
        ${hidden && !open ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="wrap flex h-full items-center lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <a
            className="absolute h-px w-px overflow-hidden whitespace-nowrap [clip-path:inset(50%)] focus:z-[60] focus:inline-flex focus:h-10 focus:w-auto focus:items-center focus:bg-green-500 focus:px-4 focus:text-charcoal focus:[clip-path:none]"
            href={`${base}#top`}
          >
            Preskočite na sadržaj
          </a>

          <a
            className="flex-none lg:col-start-2 lg:row-start-1"
            href={base ? "/" : "#top"}
            aria-label="Bajica Smederevo, početna"
            onClick={close}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={open ? "/assets/logo-horizontal-light.svg" : "/assets/logo-horizontal.svg"}
              alt="Bajica Smederevo"
              width={254}
              height={40}
              className="h-8 w-auto sm:h-10"
            />
          </a>

          {/* the bar's words, from 1024 up */}
          <nav className="hidden h-full items-center lg:col-start-1 lg:row-start-1 lg:flex" aria-label="Glavni meni">
            <div className="group/usluge flex h-full items-center">
              <a className={`${barLink} pl-0 after:left-0`} href="/usluge" aria-current={page === "usluge" ? "page" : undefined}>
                Usluge
                <CaretDown
                  size={14}
                  className="opacity-60 transition-transform group-hover/usluge:rotate-180 group-focus-within/usluge:rotate-180"
                  aria-hidden="true"
                />
              </a>
              {/* the services panel: opens after 150ms of hover intent, or on keyboard focus */}
              <div
                className="invisible absolute inset-x-0 top-full -translate-y-1.5 border-b border-t border-charcoal/10 bg-stone-50 pb-16 pt-12 opacity-0
                transition-[opacity,transform,visibility] duration-150 ease-out
                group-focus-within/usluge:visible group-focus-within/usluge:translate-y-0 group-focus-within/usluge:opacity-100
                group-hover/usluge:visible group-hover/usluge:translate-y-0 group-hover/usluge:opacity-100 group-hover/usluge:delay-150"
              >
                <div className="wrap grid-12">
                  {services.map((s) => (
                    <div key={s.slug} className="group relative col-span-3 grid gap-3">
                      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                        <Photo photo={s.navPhoto} sizes="320px" className={zoom} />
                      </div>
                      <a className="card-link text-card font-medium" href={serviceHref(s)}>
                        {s.name}
                      </a>
                      <span className="text-small text-stone-500">{s.short}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {links.map((l) => (
              <a key={l.label} className={barLink} href={l.href} aria-current={l.current ? "page" : undefined}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 justify-self-end lg:col-start-3 lg:row-start-1 lg:flex">
            <a className={`${barLink} px-2 tabular-nums after:inset-x-2`} href={contact.phoneHref}>
              {contact.phone}
            </a>
            <a className="btn btn-primary text-[15px]" href={action}>
              {mainAction.label}
            </a>
          </div>

          {/* the menu button: Phosphor's list, a cross while the sheet is open */}
          <button
            className={`relative ml-auto grid size-11 flex-none place-items-center border transition-colors lg:hidden ${
              open ? "border-stone-50/30 hover:border-stone-50/60" : "border-charcoal/20 hover:border-charcoal/40"
            }`}
            type="button"
            aria-expanded={open}
            aria-controls="nav-sheet"
            aria-label={open ? "Zatvorite meni" : "Otvorite meni"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <List size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* the reading position: a 2px logo-green line under the bar */}
        <div
          ref={progress}
          className={`absolute inset-x-0 -bottom-px h-0.5 origin-left scale-x-0 bg-green-500 ${open ? "opacity-0" : ""}`}
          aria-hidden="true"
        />
      </header>

      {/* the phone and tablet sheet: it unrolls from under the bar like a blind, the words come in one by one.
          It mounts on open and unmounts after its exit, so a closed sheet adds no links to the page. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="nav-sheet"
            className="fixed inset-x-0 bottom-0 top-nav z-40 flex flex-col overflow-y-auto bg-charcoal text-stone-50 lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.5, ease: [0.7, 0, 0.2, 1] } }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)", transition: { duration: 0.35, ease: [0.7, 0, 0.2, 1] } }}
          >
            <nav className="wrap flex-1 pt-6" aria-label="Glavni meni">
              <ol>
                <motion.li {...enter(0)}>
                  <div className="flex items-center border-b border-stone-50/15">
                    <a
                      className="flex flex-1 items-baseline gap-4 py-4 text-[clamp(32px,8vw,48px)] leading-none tracking-[-0.035em]"
                      href="/usluge"
                      aria-current={page === "usluge" ? "page" : undefined}
                      onClick={close}
                    >
                      <span className="w-6 text-label tracking-normal text-green-500">01</span>
                      Usluge
                    </a>
                    <button
                      className="grid size-11 place-items-center border border-stone-50/30"
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-label="Prikažite usluge"
                      onClick={() => setServicesOpen((s) => !s)}
                    >
                      <CaretDown
                        size={18}
                        className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  {/* the four services with their photographs, opening in place */}
                  <AnimatePresence initial={false}>
                    {servicesOpen && (
                      <motion.ul
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1, transition: { duration: 0.35, ease: [0.2, 0.7, 0.2, 1] } }}
                        exit={{ height: 0, opacity: 0, transition: { duration: 0.25 } }}
                      >
                        {services.map((s) => (
                          <li key={s.slug}>
                            <a
                              className="group flex items-center gap-4 border-b border-stone-50/10 py-3 pl-10"
                              href={serviceHref(s)}
                              onClick={close}
                            >
                              <span className="relative size-14 flex-none overflow-hidden bg-charcoal-700">
                                <Photo photo={s.navPhoto} sizes="112px" className={zoom} />
                              </span>
                              <span className="grid">
                                <span className="font-medium">{s.name}</span>
                                <span className="text-small text-stone-300">{s.short}</span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
                {links.map((l, i) => (
                  <motion.li key={l.label} {...enter(i + 1)}>
                    <a
                      className="flex items-baseline gap-4 border-b border-stone-50/15 py-4 text-[clamp(32px,8vw,48px)] leading-none tracking-[-0.035em] aria-[current=page]:text-green-500"
                      href={l.href}
                      aria-current={l.current ? "page" : undefined}
                      onClick={close}
                    >
                      <span className="w-6 text-label tracking-normal text-green-500">{String(i + 2).padStart(2, "0")}</span>
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ol>
            </nav>

            <motion.div {...enter(links.length + 1)}>
              <div className="wrap grid gap-5 pb-8 pt-10">
                <dl className="grid gap-4 text-small sm:grid-cols-2 sm:gap-gutter">
                  <div className="grid gap-1">
                    <dt className="text-stone-300">Telefon</dt>
                    {phones.map((p) => (
                      <dd key={p.href}>
                        <a className="font-medium tabular-nums" href={p.href}>
                          {p.label}
                        </a>
                      </dd>
                    ))}
                  </div>
                  <div className="grid gap-1">
                    <dt className="text-stone-300">E-pošta</dt>
                    <dd>
                      <a className="font-medium" href={`mailto:${contact.email}`}>
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                </dl>
                <a className="btn btn-primary group w-full" href={action} onClick={close}>
                  {mainAction.label}
                  <Arrow />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
