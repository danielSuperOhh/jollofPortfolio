import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <div className="max-w-4xl">
      <motion.h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-light text-black dark:text-white">
        Let’s 
        <span className="text-black/30 dark:text-white/30"> build </span> 
        something clean, fast, and 
        <span className="text-black/30 dark:text-white/30"> memorable</span>.
      </motion.h1>

      <motion.p className="mt-8 text-lg text-black/60 dark:text-white/60 max-w-2xl">
        If you need a premium frontend, smooth motion, or a full UI build —
        send a quick message.
      </motion.p>
    </div>
  );
}
