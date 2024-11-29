"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";

interface FolderContent {
  folder: string;
  files: string[];
}

interface Gallery {
  folderi: FolderContent[];
}

const Galerija: React.FC<Gallery> = ({ folderi }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentFolder, setCurrentFolder] = useState<FolderContent | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Otvaranje modala sa trenutnom slikom
  const openModal = (folder: FolderContent, imageIndex: number) => {
    setCurrentFolder(folder);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(folder.files[imageIndex]);
  };

  // Zatvaranje modala
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigacija levo (prethodna slika)
  // Navigacija levo (prethodna slika ili folder)
const showPrevImage = (e: React.MouseEvent) => {
  e.stopPropagation();

  if (currentFolder) {
    const prevIndex = currentImageIndex - 1;

    // Ako je prva slika u folderu, pređi na prethodni folder
    if (prevIndex < 0) {
      const currentFolderIndex = folderi.findIndex(
        (folder) => folder === currentFolder
      );

      if (currentFolderIndex > 0) {
        const prevFolder = folderi[currentFolderIndex - 1];
        const prevFolderLastImageIndex = prevFolder.files.length - 1;
        setCurrentFolder(prevFolder);
        setCurrentImageIndex(prevFolderLastImageIndex);
        setSelectedImage(prevFolder.files[prevFolderLastImageIndex]);
      }
    } else {
      // Inače, samo pređi na prethodnu sliku u istom folderu
      setCurrentImageIndex(prevIndex);
      setSelectedImage(currentFolder.files[prevIndex]);
    }
  }
};

// Navigacija desno (sledeća slika ili folder)
const showNextImage = (e: React.MouseEvent) => {
  e.stopPropagation();

  if (currentFolder) {
    const nextIndex = currentImageIndex + 1;

    // Ako je poslednja slika u folderu, pređi na sledeći folder
    if (nextIndex >= currentFolder.files.length) {
      const currentFolderIndex = folderi.findIndex(
        (folder) => folder === currentFolder
      );

      if (currentFolderIndex < folderi.length - 1) {
        const nextFolder = folderi[currentFolderIndex + 1];
        setCurrentFolder(nextFolder);
        setCurrentImageIndex(0);
        setSelectedImage(nextFolder.files[0]);
      }
    } else {
      // Inače, samo pređi na sledeću sliku u istom folderu
      setCurrentImageIndex(nextIndex);
      setSelectedImage(currentFolder.files[nextIndex]);
    }
  }
};

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-center mx-auto text-5xl text-[#1e1e1e] font-black">
        Galerija slika
      </h1>
      {folderi &&
        folderi.map((folder, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold bg-gradient-to-r from-[#7DB238] to-[#A1D164] bg-clip-text text-transparent">
              {folder.folder}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {folder.files.map((slika, idx) => (
                <div
                  key={idx}
                  className="w-full h-72 relative overflow-hidden cursor-pointer"
                  onClick={() => openModal(folder, idx)}
                >
                  <span className="bg-gray-200 animate-pulse absolute w-full h-full"/>
                  <Image
                    src={`/gallery/${folder.folder}/${slika}`}
                    alt={slika}
                    fill
                    className="object-cover hover:scale-110 z-10 transition-all duration-200 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

      {/* Modal za prikaz slike */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 hidden lg:block text-[#1e1e1e] text-3xl z-40 p-2 bg-[#A2EE42]"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <IoCloseOutline className="text-3xl" />
            </button>
            <motion.div
              className="relative w-96 max-w-5xl mx-auto h-[70%] md:h-[90%] p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 lg:hidden text-[#1e1e1e] text-3xl z-40 p-2 bg-[#A2EE42]"
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
              >
                <IoCloseOutline className="text-3xl" />
              </button>
              <h1 className="absolute left-0 bottom-0 text-center z-30 mt-12 text-sm text-white italic bg-black/70 px-4 py-2">
                &quot;{currentFolder?.folder}&quot;
              </h1>
              <Image
                src={`/gallery/${currentFolder?.folder}/${selectedImage}`}
                alt={selectedImage}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Strelice za navigaciju */}
            <button
              className="absolute left-5 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full z-40"
              onClick={showPrevImage}
            >
              <FaArrowLeft className="text-2xl" />
            </button>
            <button
              className="absolute right-5 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full
"
              onClick={showNextImage}
            >
              <FaArrowRight className="text-2xl" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galerija;
