"use client";

import React, { useEffect } from "react";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import Image from "next/image";

// Manually list image paths
const images = [
  "/galerija/slika1.jpeg",
  "/galerija/slika2.jpg",
  "/galerija/slika3.jpg",
];

const InfinityImage: React.FC = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 32;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);
  return (
    <div className="w-full h-72 relative overflow-x-hidden">
      <motion.div
        style={{ x: xTranslation }}
        ref={ref}
        className="absolute left-0 flex gap-16"
      >
        {[...images, ...images].map((item, index) => (
          <div key={index} className="relative overflow-hidden w-96 md:w-[40rem] h-64 md:h-72">
            <Image alt={item} src={item} fill className="object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfinityImage;
