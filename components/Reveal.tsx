"use client";
import { Fragment } from "react";
import { MotionConfig, motion } from "framer-motion";

const ease = [0.2, 0.7, 0.2, 1] as const;
const inView = { once: true, margin: "0px 0px -10% 0px" };

// Wraps the site once: under "reduce motion" Framer skips the movement and the text simply appears
export const MotionRoot = ({ children }: { children: React.ReactNode }) => <MotionConfig reducedMotion="user">{children}</MotionConfig>;

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  // the hero plays on load; everything else when it first scrolls into view
  onLoad?: boolean;
  as?: "div" | "span"; // a span inside a heading
};

// A block that rises 20px and fades in, once
export const Reveal = ({ children, className, delay = 0, onLoad, as = "div" }: Props) => {
  const to = { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay } };
  const Tag = as === "span" ? motion.span : motion.div;
  return (
    <Tag className={className} initial={{ opacity: 0, y: 20 }} {...(onLoad ? { animate: to } : { whileInView: to, viewport: inView })}>
      {children}
    </Tag>
  );
};

// A heading's words rise one after another from under a mask. The words stay real text with real spaces
// between them, so the heading wraps normally and search engines and screen readers read it whole.
export const RevealText = ({ text, delay = 0, onLoad, stagger = 0.05 }: { text: string; delay?: number; onLoad?: boolean; stagger?: number }) => {
  const words = text.split(" ");
  return (
    <motion.span initial="hidden" {...(onLoad ? { animate: "shown" } : { whileInView: "shown", viewport: inView })}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden pb-[0.1em] align-top">
            <motion.span
              className="inline-block"
              variants={{ hidden: { y: "110%" }, shown: { y: "0%" } }}
              transition={{ duration: 0.8, ease, delay: delay + i * stagger }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </motion.span>
  );
};
