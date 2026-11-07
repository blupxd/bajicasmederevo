"use client";
import Image from "next/image";
import { useMemo } from "react";
import Arrow from "./Arrow";
import { encodeSrc, zoom } from "./Photo";
import Viewer, { type Shot, useViewer } from "./Viewer";
import { RevealText } from "@/components/Reveal";

type Project = { folder: string; files: string[] };
type Group = { folder: string; title: string; projects: Project[] };

const src = (g: string, p: string, f: string) => encodeSrc(`/gallery/${g}/${p}/${f}`);

const Galerija = ({ groups }: { groups: Group[] }) => {
  // every photograph in one list, so the viewer steps through all projects in order
  const shots = useMemo<Shot[]>(
    () =>
      groups.flatMap((g) =>
        g.projects.flatMap((p) => p.files.map((f) => ({ src: src(g.folder, p.folder, f), project: p.folder })))
      ),
    [groups]
  );
  const viewer = useViewer(shots.length);
  const { setOpen } = viewer;

  let n = -1;

  return (
    <div className="pb-32 pt-[calc(var(--nav)+96px)]">
      <div className="wrap">
        <div className="mb-16 grid max-w-head gap-4">
          <h1><RevealText text="Galerija projekata" onLoad /></h1>
          <p className="text-lead">
            {shots.length} fotografija sa {groups.reduce((n, g) => n + g.projects.length, 0)} projekata, po vrsti radova. Kliknite na fotografiju da je vidite u punoj veličini.
          </p>
          <nav className="mt-3 flex flex-wrap gap-x-6 gap-y-3" aria-label="Vrste radova">
            {groups.map((g) => (
              <a key={g.folder} className="link group" href={`#${encodeURIComponent(g.folder)}`}>
                {g.title}
                <Arrow />
              </a>
            ))}
          </nav>
        </div>

        {groups.map((g) => (
          <section key={g.folder} id={g.folder} className="scroll-mt-nav pt-24" aria-label={g.title}>
            <h2 className="mb-12"><RevealText text={g.title} /></h2>
            {g.projects.map((p) => (
              <article key={p.folder} id={p.folder} className="scroll-mt-nav border-t border-charcoal/10 py-12">
                <h3 className="mb-6 text-card font-medium">{p.folder}</h3>
                <div className="grid-12">
                  {p.files.map((f) => {
                    const i = ++n;
                    return (
                      <button
                        key={f}
                        className="group relative col-span-12 aspect-[4/3] cursor-zoom-in overflow-hidden bg-stone-100 sm:col-span-6 lg:col-span-4"
                        type="button"
                        onClick={() => setOpen(i)}
                        aria-label={`Otvorite fotografiju: ${p.folder}`}
                      >
                        <Image
                          src={src(g.folder, p.folder, f)}
                          alt={p.folder}
                          fill
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 410px"
                          className={`object-cover ${zoom}`}
                          data-source="client"
                          data-subject={p.folder}
                        />
                      </button>
                    );
                  })}
                </div>
              </article>
            ))}
          </section>
        ))}
      </div>

      <Viewer shots={shots} {...viewer} />
    </div>
  );
};

export default Galerija;
