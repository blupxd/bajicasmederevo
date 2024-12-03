import Link from "next/link";
import React from "react";
import { LuExternalLink } from "react-icons/lu";
import InfinityImage from "./InfinityImage";

const ImageSlider = () => {
  return (
    <section className="flex flex-col mt-0 xl:mt-0 space-y-12 mb-12">
      <div className="mx-4 lg:mx-20 flex md:flex-row flex-col md:items-end justify-between">
        <div className="text-[#1E1E1E] flex flex-col">
          <h1 className="text-3xl sm:text-5xl md:text-4xl font-extrabold">Slike naših radova</h1>
          <p className="text-lg sm:text-xl md:text-lg">
            Možete pogledati detaljnije sve naše slike u galeriji
          </p>
        </div>
        <Link
          href="/galerija"
          className="px-8 py-2 md:py-3 flex items-center gap-2 md:mt-0 mt-8 bg-[#1E1E1E] text-white transition-all duration-200 ease-in-out rounded-full hover:bg-[#A2EE42] max-w-max text-base sm:text-xl md:text-base 2xl:text-lg"
        >
          Galerija <LuExternalLink className="text-xl mb-1" />
        </Link>
      </div>
      <InfinityImage />
    </section>
  );
};

export default ImageSlider;
