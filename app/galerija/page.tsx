import React from "react";
import path from "path";
import { promises as fs } from "fs";
import Galerija from "@/components/Galerija";

const Gallery: React.FC = async () => {
  const imageDirectory = path.join(process.cwd(), "public/gallery");
  const parentFolders = await fs.readdir(imageDirectory);

  const folderContents = await Promise.all(
    parentFolders.map(async (parentFolder) => {
      const parentFolderPath = path.join(imageDirectory, parentFolder);
      const subFolders = await fs.readdir(parentFolderPath);

      // Kreiranje strukture za svaki podfolder sa slikama
      const subFolderContents = await Promise.all(
        subFolders.map(async (subFolder) => {
          const subFolderPath = path.join(parentFolderPath, subFolder);
          const files = await fs.readdir(subFolderPath);
          return { folder: subFolder, files };
        })
      );

      return { folder: parentFolder, subFolders: subFolderContents };
    })
  );

  return (
    <section className="px-4 lg:px-20 pt-24 pb-12 md:py-12 bg-gradient-to-b from-[#F7FFED] to-white">
      <Galerija folderi={folderContents} />
    </section>
  );
};

export default Gallery;

