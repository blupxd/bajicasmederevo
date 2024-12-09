"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";

interface SubFolderContent {
  folder: string;
  files: string[];
}

interface ParentFolderContent {
  folder: string;
  subFolders: SubFolderContent[];
}

interface Gallery {
  folderi: ParentFolderContent[];
}

const Galerija: React.FC<Gallery> = ({ folderi }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentParentIndex, setCurrentParentIndex] = useState<number | null>(
    null
  );
  const [currentSubFolderIndex, setCurrentSubFolderIndex] = useState<
    number | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openModal = (
    parentIndex: number,
    subFolderIndex: number,
    imageIndex: number
  ) => {
    setCurrentParentIndex(parentIndex);
    setCurrentSubFolderIndex(subFolderIndex);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(
      folderi[parentIndex].subFolders[subFolderIndex].files[imageIndex]
    );
  };

  const closeModal = () => setSelectedImage(null);

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (
      currentParentIndex !== null &&
      currentSubFolderIndex !== null &&
      currentImageIndex !== null
    ) {
      let newImageIndex = currentImageIndex - 1;
      let newSubFolderIndex = currentSubFolderIndex;
      let newParentIndex = currentParentIndex;

      if (newImageIndex < 0) {
        newSubFolderIndex -= 1;
        if (newSubFolderIndex < 0) {
          newParentIndex -= 1;
          if (newParentIndex >= 0) {
            newSubFolderIndex = folderi[newParentIndex].subFolders.length - 1;
            newImageIndex =
              folderi[newParentIndex].subFolders[newSubFolderIndex].files
                .length - 1;
          } else {
            return; // Ne prelazi dalje ako je na početku svih foldera
          }
        } else {
          newImageIndex =
            folderi[newParentIndex].subFolders[newSubFolderIndex].files.length -
            1;
        }
      }

      setCurrentParentIndex(newParentIndex);
      setCurrentSubFolderIndex(newSubFolderIndex);
      setCurrentImageIndex(newImageIndex);
      setSelectedImage(
        folderi[newParentIndex].subFolders[newSubFolderIndex].files[
          newImageIndex
        ]
      );
    }
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (
      currentParentIndex !== null &&
      currentSubFolderIndex !== null &&
      currentImageIndex !== null
    ) {
      let newImageIndex = currentImageIndex + 1;
      let newSubFolderIndex = currentSubFolderIndex;
      let newParentIndex = currentParentIndex;

      if (
        newImageIndex >=
        folderi[currentParentIndex].subFolders[currentSubFolderIndex].files
          .length
      ) {
        newSubFolderIndex += 1;
        if (
          newSubFolderIndex >= folderi[currentParentIndex].subFolders.length
        ) {
          newParentIndex += 1;
          if (newParentIndex < folderi.length) {
            newSubFolderIndex = 0;
            newImageIndex = 0;
          } else {
            return; // Ne prelazi dalje ako je na kraju svih foldera
          }
        } else {
          newImageIndex = 0;
        }
      }

      setCurrentParentIndex(newParentIndex);
      setCurrentSubFolderIndex(newSubFolderIndex);
      setCurrentImageIndex(newImageIndex);
      setSelectedImage(
        folderi[newParentIndex].subFolders[newSubFolderIndex].files[
          newImageIndex
        ]
      );
    }
  };

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-center mx-auto text-5xl text-[#1e1e1e] font-black">
        Galerija slika
      </h1>
      {folderi.map((parentFolder, parentIndex) => (
        <div
          id={parentFolder.folder}
          key={parentIndex}
          className="flex flex-col space-y-4"
        >
          <h2 className="text-4xl font-bold text-[#7DB238]">
            {parentFolder.folder}
          </h2>
          {parentFolder.subFolders.map((subFolder, subIndex) => (
            <div key={subIndex} className="flex flex-col mb-4">
              <h3 className="text-2xl font-semibold text-[#A1D164]">
                {subFolder.folder}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subFolder.files.map((file, fileIndex) => (
                  <div
                    key={fileIndex}
                    className="w-full h-72 relative overflow-hidden cursor-pointer"
                    onClick={() => openModal(parentIndex, subIndex, fileIndex)}
                  >
                    <Image
                      src={`/gallery/${parentFolder.folder}/${subFolder.folder}/${file}`}
                      alt={file}
                      fill
                      className="object-cover hover:scale-110 transition-all duration-200 ease-in-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      <AnimatePresence>
        {selectedImage &&
          currentParentIndex !== null &&
          currentSubFolderIndex !== null && (
            <motion.div
              className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-75"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative flex items-center w-full max-w-5xl mx-auto h-[70%] md:h-[90%] p-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute left-5 text-white text-2xl md:text-3xl bg-black bg-opacity-50 p-2 rounded-full z-40"
                  onClick={showPrevImage}
                >
                  <FaArrowLeft />
                </button>
                <button
                  className="absolute right-5 text-white text-2xl md:text-3xl bg-black bg-opacity-50 p-2 rounded-full z-40"
                  onClick={showNextImage}
                >
                  <FaArrowRight />
                </button>

                <Image
                  src={`/gallery/${folderi[currentParentIndex].folder}/${folderi[currentParentIndex].subFolders[currentSubFolderIndex].folder}/${selectedImage}`}
                  alt={selectedImage}
                  fill
                  className="object-cover"
                />
                <div className="absolute flex md:flex-row md:w-auto w-full flex-col left-0 bottom-0 z-30 bg-black/70 px-4 py-2">
                  <h1 className="text-center font-semibold text-sm text-[#A1D164]">
                    {folderi[currentParentIndex].folder} -
                  </h1>
                  <h1 className="text-center text-sm text-white italic ">
                    &quot;
                    {
                      folderi[currentParentIndex].subFolders[
                        currentSubFolderIndex
                      ].folder
                    }
                    &quot;
                  </h1>
                </div>

                <button
                  className="absolute top-4 right-4 text-[#1e1e1e] text-3xl z-40 p-2 bg-[#A2EE42]"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                >
                  <IoCloseOutline className="text-xl md:text-3xl" />
                </button>
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};

export default Galerija;
