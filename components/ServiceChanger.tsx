"use client";
import React, { useRef } from "react";
import { usluge } from "@/constants";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useInView } from "framer-motion";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const ServiceChanger = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const lastScroll = useRef<HTMLDivElement | null>(null);

  const handleLeftClick = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const inView = useInView(lastScroll);
  const handleRightClick = () => {
    if (scrollerRef.current && !inView) {
      scrollerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col -mt-72 md:-mt-56 lg:-mt-72 px-10 md:px-20">
      <div className="flex items-center justify-between space-x-4 w-full max-h-max">
        <h2 className="text-white text-sm md:text-lg max-w-max text-nowrap">
          Naše usluge
        </h2>
        <hr className="w-full border-none bg-gradient-to-r from-transparent via-[#A2EE42] to-transparent h-0.5 my-16" />
        <div className="flex items-center space-x-4 md:space-x-8">
          <button
            onClick={handleLeftClick}
            className="px-4 md:px-6 py-1 border-[#A2EE42] hover:border-transparent hover:bg-[#A2EE42] hover:text-[#1E1E1E] transition-all duration-200 ease-in-out border-2 rounded-full text-[#A2EE42] md:text-xl"
          >
            <FaArrowLeftLong className="md:text-xl" />
          </button>
          <button
            onClick={handleRightClick}
            className="px-4 md:px-6 py-1 bg-white lg:text-base items-center text-sm hover:border-2 hover:border-white hover:bg-transparent border-2 border-transparent hover:text-white transition-all duration-200 ease-in-out rounded-full flex gap-2 text-[#1E1E1E]"
          >
            Nastavi <FaArrowRightLong className="md:text-xl" />
          </button>
        </div>
      </div>
      <div
        ref={scrollerRef}
        className="scroller auto-cols-[100%] xl:auto-cols-[50%] snaps-inline xl:gap-x-24 xl:pr-24"
      >
        {usluge.map((x, y) => (
          <div
            ref={y === usluge.length - 1 ? lastScroll : null}
            key={y}
            className="relative w-full h-72 md:h-80 shadow-xl shadow-black/20"
          >
            <span className="absolute left-0 right-0 top-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />
            <Image src={x.image} alt={x.label} fill objectFit="cover" />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-black">{x.label}</h1>
              <div className="flex items-center justify-between mt-2">
                <p className="font-thin text-white md:text-base text-sm lg:text-lg">{x.description}</p>
                <Link
                  className="md:text-base text-sm relative bg-[#A2EE42] max-w-max px-4 md:px-8 py-2 text-[#1E1E1E] font-semibold
                  before:content-[''] before:absolute before:inset-0 before:bg-white 
                  before:w-full before:h-full hover:text-white before:translate-x-1 before:translate-y-1 before:-z-20
                  before:transition-transform flex items-center gap-2 before:duration-300 hover:before:translate-x-2 hover:before:translate-y-2"
                  href="/galerija"
                >
                  Galerija <LuExternalLink className="md:text-xl mb-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceChanger;
