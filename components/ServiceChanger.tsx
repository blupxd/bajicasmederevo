"use client";
import React, { useRef, useState, useEffect } from "react";
import { usluge } from "@/constants";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { AnimatePresence, useInView, motion } from "framer-motion";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

const ServiceChanger = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const lastScroll = useRef<HTMLDivElement | null>(null);
  const [scrollAmount, setScrollAmount] = useState(500);
  const [openDesc, setOpenDesc] = useState<number | null>(null);

  // Set the scroll amount based on window width
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScrollAmount(window.innerWidth > 1200 ? 600 : 500);
    }
  }, []);

  const handleLeftClick = () => {
    if (scrollerRef.current) {
      setOpenDesc(null);
      scrollerRef.current.scrollTo({
        left: scrollerRef.current.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const isAtEnd = useInView(lastScroll);
  const handleRightClick = () => {
    if (scrollerRef.current) {
      if (isAtEnd) {
        // If it's the last item, scroll to the first
        scrollerRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Otherwise, scroll normally
        scrollerRef.current.scrollTo({
          left: scrollerRef.current.scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="flex flex-col -mt-72 md:-mt-56 lg:-mt-72 px-4 lg:px-20">
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
        className="scroller overflow-hidden auto-cols-[100%] gap-x-20 xl:auto-cols-[50%] snaps-inline xl:gap-x-24 xl:pr-24"
      >
        {usluge.map((x, y) => (
          <div
            ref={y === usluge.length - 1 ? lastScroll : null}
            key={y}
            className="relative w-full h-72 md:h-80 shadow-xl shadow-black/20"
          >
            <span className="absolute left-0 right-0 top-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />
            {openDesc === y && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute p-8 flex flex-col justify-between max-w-max left-0 right-0 top-0 bottom-0 z-20 bg-black/80"
                >
                  <div className="flex items-start gap-4 justify-between">
                    <p className="text-sm border-b-2 pb-2 border-[#91c551] h-full overflow-y-scroll md:text-lg italic text-white font-semibold">
                      {x.description}
                    </p>
                    <button
                      className="text-black font-semibold max-w-max p-2 bg-white"
                      onClick={() => setOpenDesc(null)}
                    >
                      <IoCloseOutline className="text-xl" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
            <Image src={x.image} alt={x.label} fill className="object-cover" />
            {openDesc !== y && (
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <h1 className="text-2xl mb-4 md:text-3xl lg:text-4xl text-white font-black">
                  {x.label}
                </h1>
                <div className="flex items-start space-x-4">
                  <button
                    className="flex items-center bg-white text-black px-4 py-2"
                    onClick={() => setOpenDesc(y)}
                  >
                    Više informacija{" "}
                    <IoMdInformationCircleOutline className="w-4 h-4 ml-2" />
                  </button>
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceChanger;
