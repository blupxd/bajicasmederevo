"use client";
import { FC, ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedComponentProps {
  children: ReactNode;
}

const Animation1: FC<AnimatedComponentProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="w-full inline-block h-full z-20"
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Animation1;