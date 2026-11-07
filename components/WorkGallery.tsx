"use client";
import Image from "next/image";
import { useMemo } from "react";
import { encodeSrc, zoom } from "./Photo";
import Viewer, { type Shot, useViewer } from "./Viewer";

type Project = { name: string; photos: string[] };

// A service's work, project by project: the first photograph of each project wide, the rest beside it;
// every photograph opens the viewer, which steps through all of them
const WorkGallery = ({ projects }: { projects: Project[] }) => {
  const shots = useMemo<Shot[]>(
    () => projects.flatMap((p) => p.photos.map((src) => ({ src: encodeSrc(src), project: p.name }))),
    [projects]
  );
  const viewer = useViewer(shots.length);
  let n = -1;

  return (
    <>
      <div className="grid gap-12 lg:gap-16">
        {projects.map((p) => (
          <article key={p.name} className="grid gap-5">
            <div className="flex items-baseline justify-between gap-4 border-t border-charcoal/10 pt-4">
              <h3 className="text-card font-medium">{p.name}</h3>
              <span className="flex-none text-small text-stone-500">
                {p.photos.length} {p.photos.length === 1 ? "fotografija" : p.photos.length < 5 ? "fotografije" : "fotografija"}
              </span>
            </div>
            {/* three or more: the first photograph on 8 columns, as tall as the others stacked beside it on 4;
                two: side by side at one ratio. On a phone an odd last photograph takes the row. */}
            <div className="grid-12" style={{ "--rows": Math.max(p.photos.length - 1, 1) } as React.CSSProperties}>
              {p.photos.map((src, k) => {
                const i = ++n;
                const lead = k === 0 && p.photos.length > 2;
                return (
                  <button
                    key={src}
                    className={`group relative aspect-[4/3] cursor-zoom-in overflow-hidden bg-stone-100 ${
                      lead
                        ? "col-span-12 lg:col-span-8 lg:aspect-auto lg:[grid-row:span_var(--rows)]"
                        : p.photos.length > 2
                          ? "col-span-6 max-lg:[&:last-child:nth-child(even)]:col-span-12 lg:col-span-4"
                          : "col-span-12 sm:col-span-6"
                    }`}
                    type="button"
                    onClick={() => viewer.setOpen(i)}
                    aria-label={`Otvorite fotografiju: ${p.name}`}
                  >
                    <Image
                      src={encodeSrc(src)}
                      alt={`${p.name}, fotografija ${k + 1}`}
                      fill
                      sizes={lead ? "(max-width: 1023px) 100vw, 860px" : "(max-width: 1023px) 50vw, 420px"}
                      quality={lead ? 85 : 80}
                      className={`object-cover ${zoom}`}
                      data-source="client"
                      data-subject={p.name}
                    />
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>
      <Viewer shots={shots} {...viewer} />
    </>
  );
};

export default WorkGallery;
