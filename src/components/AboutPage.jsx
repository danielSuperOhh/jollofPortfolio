import React, { useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

const viewport = { once: false, amount: 0.22 };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

function Pill({ children }) {
  return (
    <span className="px-5 py-2 rounded-full text-sm font-light bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70">
      {children}
    </span>
  );
}

function Card({ title, desc }) {
  return (
    <div className="rounded-[30px] p-7 bg-black/5 dark:bg-white/5 transition-colors">
      <p className="text-lg font-light text-black dark:text-white">{title}</p>
      <p className="mt-3 text-sm font-light leading-relaxed text-black/55 dark:text-white/55">
        {desc}
      </p>
    </div>
  );
}

function StatCard({ title, value, note }) {
  return (
    <div className="rounded-[30px] p-7 bg-black/5 dark:bg-white/5 transition-colors">
      <p className="text-sm font-light text-black/50 dark:text-white/50">{title}</p>
      <p className="mt-3 text-3xl font-light text-black dark:text-white">{value}</p>
      <p className="mt-4 text-sm font-light text-black/55 dark:text-white/55">{note}</p>
    </div>
  );
}

function CVModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center px-6"
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="CV Viewer"
    >
      <div className="absolute inset-0 bg-black/70 dark:bg-black/75 backdrop-blur-sm" />

      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="
          relative z-10 w-full max-w-6xl
          bg-white dark:bg-black
          rounded-[36px]
          border border-black/10 dark:border-white/10
          overflow-hidden
          shadow-[0_40px_160px_rgba(0,0,0,0.55)]
        "
      >
        <div className="flex justify-between items-center px-7 py-5 border-b border-black/10 dark:border-white/10">
          <p className="text-lg font-light text-black dark:text-white">Curriculum Vitae</p>

          <button
            onClick={onClose}
            className="
              p-2 rounded-full
              hover:bg-black/5 dark:hover:bg-white/10
              transition active:scale-95
            "
            aria-label="Close"
          >
            <XMarkIcon className="h-6 w-6 text-black dark:text-white" />
          </button>
        </div>

        <div className="bg-black/5 dark:bg-white/5 p-3 sm:p-5">
          <div className="overflow-hidden rounded-[24px] bg-white dark:bg-black border border-black/10 dark:border-white/10">
            <iframe title="CV PDF" src="/cv.pdf" className="w-full h-[75vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 md:pb-36 lg:pt-40 lg:pb-44">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-black dark:text-white"
          >
            Frontend engineer with a 
            <span className="text-black/30 dark:text-white/30"> gamer’s instinct </span>
            for precision.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg font-light text-black/60 dark:text-white/60 leading-relaxed"
          >
            I design and build smooth, high-performance web interfaces that feel intentional.
            Every interaction is crafted with clarity, speed, and purpose.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <Pill>React</Pill>
            <Pill>Tailwind</Pill>
            <Pill>Framer Motion</Pill>
            <Pill>Performance</Pill>
            <Pill>FPS Gaming</Pill>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14 flex flex-wrap gap-4">
            <button
              onClick={() => setCvOpen(true)}
              className="
                px-7 py-3 rounded-full
                bg-black text-white
                dark:bg-white dark:text-black
                text-sm font-light
                transition hover:opacity-90 active:scale-95
              "
            >
              View CV
            </button>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                px-7 py-3 rounded-full
                bg-black/5 text-black
                dark:bg-white/15 dark:text-white
                text-sm font-light
                transition
                hover:bg-black/10 dark:hover:bg-white/20
                active:scale-95
              "
            >
              Open CV →
            </a>
          </motion.div>
        </motion.div>

        <div className="mt-32 md:mt-40 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light mb-8 text-black dark:text-white">
              Frontend mindset
            </h2>

            <div className="grid gap-6">
              <Card title="Clean architecture" desc="Structured, scalable UI systems." />
              <Card title="Performance first" desc="Fast load, smooth render." />
              <Card title="Motion design" desc="Meaningful interaction." />
              <Card title="Responsive design" desc="Perfect on all screens." />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-8 text-black dark:text-white">
              Gaming mindset
            </h2>

            <div className="grid gap-6">
              <Card title="Decision speed" desc="Fast thinking under pressure." />
              <Card title="Iteration mindset" desc="Review, improve, repeat." />
              <Card title="Precision focus" desc="Attention to micro detail." />
              <Card title="Competitive drive" desc="Constant improvement." />
            </div>
          </div>
        </div>

        <div className="mt-32 md:mt-40">
          <h2 className="text-3xl font-light mb-10 text-black dark:text-white">
            Snapshot
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <StatCard title="Focus" value="Frontend" note="UI engineering" />
            <StatCard title="Specialty" value="Motion" note="Interaction design" />
            <StatCard title="Mindset" value="Competitive" note="Always improving" />
            <StatCard title="Style" value="Minimal" note="Clean visuals" />
          </div>
        </div>

        <div className="mt-40 md:mt-52">
          <div className="rounded-[36px] p-12 bg-black text-white dark:bg-white dark:text-black shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
            <p className="text-3xl font-light leading-tight max-w-xl">
              I build interfaces like competitive matches — calm, fast, precise.
            </p>

            <button
              onClick={() => setCvOpen(true)}
              className="
                mt-8 px-7 py-3 rounded-full
                bg-white text-black
                dark:bg-black dark:text-white
                text-sm font-light
                transition hover:opacity-90 active:scale-95
              "
            >
              View CV
            </button>
          </div>
        </div>
      </div>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}
