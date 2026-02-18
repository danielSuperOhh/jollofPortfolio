import React from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  BoltIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

import dieuB from "../assets/dieuB.png";
import kioskB from "../assets/kioskB.png";

const viewport = { once: false, amount: 0.18 };

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

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-light bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70">
      {children}
    </span>
  );
}

function Kpi({ label, value }) {
  return (
    <div className="rounded-[26px] bg-black/5 dark:bg-white/5 p-6">
      <p className="text-xs font-light text-black/45 dark:text-white/45">
        {label}
      </p>
      <p className="mt-2 text-2xl font-light text-black dark:text-white">
        {value}
      </p>
    </div>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-[30px] bg-black/5 dark:bg-white/5 p-7">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-black text-white dark:bg-white dark:text-black p-3">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-lg font-light text-black dark:text-white">
            {title}
          </p>
          <p className="mt-2 text-sm font-light leading-relaxed text-black/55 dark:text-white/55">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WorkCaseStudy({
  number = "01",
  title,
  subtitle,
  accent = "bg-black",
  link,
  role,
  stack = [],
  highlights = [],
  challenges = [],
  solutions = [],
  results = [],
  reverse = false,
}) {
  const image = (() => {
    const t = (title ?? "").toLowerCase();
    if (t.includes("dieusoms") || t.includes("dieu")) return dieuB;
    if (t.includes("kiosk")) return kioskB;
    return null;
  })();

  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className={["lg:col-span-6", reverse ? "lg:order-2" : "lg:order-1"].join(
              " "
            )}
          >
            <div className="relative">
              <div className="select-none text-[150px] sm:text-[200px] md:text-[260px] lg:text-[300px] font-light tracking-tight text-black/85 dark:text-white/85 leading-none">
                {number}
              </div>

            <div
            className="
                mt-6
                relative
                rounded-[44px]
                overflow-hidden
                shadow-[0_22px_70px_rgba(0,0,0,0.18)]
                h-[260px] sm:h-[320px] md:h-[380px]
                bg-black dark:bg-white
                group
                flex items-center justify-center
                p-6 sm:p-8 md:p-10   /* ✅ padding added */
            "
            >
            {image ? (
                <>
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="
                    max-w-full max-h-full
                    object-contain     /* ✅ shows full image */
                    transition-transform duration-700
                    group-hover:scale-105
                    drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]
                    "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent dark:from-white/10 pointer-events-none" />
                </>

                ) : (
                  <div className={`h-full w-full ${accent} relative`}>
                    <div className="absolute inset-0 bg-white/5 dark:bg-black/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.18),transparent_55%)]" />
                  </div>
                )}
              </div>

              <div className="pointer-events-none absolute left-8 right-8 bottom-[-10px] h-10 rounded-full bg-black/5 dark:bg-white/5 blur-xl" />
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className={[
              "lg:col-span-6",
              reverse ? "lg:order-1" : "lg:order-2",
              "lg:pt-10",
            ].join(" ")}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-light text-black/50 dark:text-white/50"
            >
              Case Study
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl sm:text-5xl font-light tracking-tight text-black dark:text-white leading-[1.05]"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base sm:text-lg font-light text-black/60 dark:text-white/60 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2
                  rounded-full px-6 py-3
                  bg-black text-white
                  dark:bg-white dark:text-black
                  text-sm font-light
                  transition hover:opacity-90 active:scale-95
                "
              >
                Visit live <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </a>

              <span className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-black/5 dark:bg-white/10 text-black dark:text-white text-sm font-light">
                <CodeBracketIcon className="h-5 w-5" />
                {role}
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <p className="text-sm font-light text-black/45 dark:text-white/45">
                Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 md:mt-18 lg:mt-20"
        >
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <Kpi label="Build style" value="Premium UI" />
            <Kpi label="Focus" value="Speed + UX" />
            <Kpi label="Approach" value="Iterate" />
            <Kpi label="Outcome" value="Shipped" />
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Feature icon={BoltIcon} title="Highlights" desc={highlights.join(" • ")} />
            <Feature icon={ShieldCheckIcon} title="Challenges" desc={challenges.join(" • ")} />
            <Feature icon={RocketLaunchIcon} title="Solutions" desc={solutions.join(" • ")} />
            <Feature icon={CodeBracketIcon} title="Results" desc={results.join(" • ")} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
