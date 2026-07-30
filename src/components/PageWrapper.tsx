"use client";

import { motion } from "motion/react";

import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 24,
        filter: "blur(6px)",
        scale: 0.99,
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.main>
  );
}
