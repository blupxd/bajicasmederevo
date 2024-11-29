import React from "react";
import path from "path";
import { promises as fs } from "fs";
import Galerija from "@/components/Galerija";
const Gallery: React.FC = async () => {
  const imageDirectory = path.join(process.cwd(), "public/gallery");
  const folderNames = await fs.readdir(imageDirectory);
  const folderContents = await Promise.all(
    folderNames.map(async (folder) => {
      const folderPath = path.join(imageDirectory, folder);
      const fileNames = await fs.readdir(folderPath);
      return {
        folder,
        files: fileNames,
      };
    })
  );
  return (
    <section className="px-10 lg:px-20 pt-24 pb-12 md:py-12 bg-gradient-to-b from-[#F7FFED] to-white">
      <Galerija folderi={folderContents} />
    </section>
  );
};

export default Gallery;
