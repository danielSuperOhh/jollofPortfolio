import React from "react";
import { motion } from "framer-motion";

const viewport = { once: false, amount: 0.22 };

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-light bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70">
      {children}
    </span>
  );
}

export default function WorksHero() {
  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-10 md:pt-32 md:pb-14 lg:pt-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            className="
              mt-6
              text-5xl md:text-6xl lg:text-7xl
              font-light tracking-tight
              text-black dark:text-white
              leading-[1.05]
            "
          >
            Projects I’ve shipped —
            <span className="text-black/30 dark:text-white/30"> and keep evolving</span>.
            <br />
            Clean UI, fast UX, real systems.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-black/60 dark:text-white/60"
          >
            A growing collection of builds with real tradeoffs, real implementation details,
            and real outcomes — from ecommerce UX to real-time platforms.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <Pill>React</Pill>
            <Pill>Tailwind</Pill>
            <Pill>Firebase</Pill>
            <Pill>Supabase</Pill>
            <Pill>Real-time</Pill>
            <Pill>UX polish</Pill>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
