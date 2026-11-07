import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Galerija from "@/components/Galerija";
import Navbar from "@/components/Navbar";
import { galleryGroups } from "@/constants";
import { allGroups } from "@/lib/gallery";

export const metadata: Metadata = {
  title: { absolute: "Galerija projekata | Bajica Smederevo" },
  description:
    "Fotografije sa naših gradilišta: restauracija fasada i spomenika kulture, teraco, mermerni i epoxy podovi i sanacija industrijskih objekata u Smederevu i Srbiji.",
  alternates: { canonical: "/galerija" },
};

// Reads public/gallery: one folder a kind of work, one subfolder a project, its photographs inside
const Gallery = async () => {
  const groups = (await allGroups()).map((g) => ({ ...g, title: galleryGroups[g.folder] ?? g.folder }));

  return (
    <>
      <Navbar base="/" page="galerija" />
      <main id="top">
        <Galerija groups={groups} />
      </main>
      <Footer base="/" />
    </>
  );
};

export default Gallery;
