"use client";
import Image from "next/image";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react/dist/ssr";
import { useCallback, useEffect, useState } from "react";

export type Shot = { src: string; project: string };


// the viewer's square controls: charcoal, the logo green on hover
const viewerBtn =
  "inline-grid size-12 place-items-center border border-stone-50/30 bg-charcoal-950 text-stone-50 transition-colors " +
  "hover:border-green-500 hover:bg-green-500 hover:text-charcoal";

// One photograph at a time over a flat charcoal ground: arrows and the keyboard step through `shots`
export const useViewer = (count: number) => {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((by: number) => setOpen((i) => (i === null ? i : (i + by + count) % count)), [count]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return { open, setOpen, close, step };
};

const Viewer = ({ shots, open, close, step }: { shots: Shot[] } & Omit<ReturnType<typeof useViewer>, "setOpen">) => {
  const shot = open === null ? null : shots[open];
  if (!shot) return null;
  return (
    <div
      className="fixed inset-0 z-[100] grid grid-rows-[auto_minmax(0,1fr)] bg-charcoal-950 text-stone-50"
      role="dialog"
      aria-modal="true"
      aria-label={shot.project}
      onClick={close}
    >
      <div className="flex h-nav items-center justify-between gap-4 border-b border-stone-50/15 px-gut" onClick={(e) => e.stopPropagation()}>
        <p className="text-small">
          {shot.project} <span className="text-stone-300">· {open! + 1} / {shots.length}</span>
        </p>
        <button className={viewerBtn} type="button" onClick={close} aria-label="Zatvorite">
          <X size={20} aria-hidden="true" />
        </button>
      </div>
      <div className="relative mx-gut my-8" onClick={(e) => e.stopPropagation()}>
        <button
          className={`${viewerBtn} absolute left-0 top-1/2 z-10 -translate-y-1/2`}
          type="button"
          onClick={() => step(-1)}
          aria-label="Prethodna fotografija"
        >
          <CaretLeft size={20} aria-hidden="true" />
        </button>
        <Image key={shot.src} src={shot.src} alt={shot.project} fill sizes="100vw" quality={85} className="object-contain" />
        <button
          className={`${viewerBtn} absolute right-0 top-1/2 z-10 -translate-y-1/2`}
          type="button"
          onClick={() => step(1)}
          aria-label="Sledeća fotografija"
        >
          <CaretRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Viewer;
