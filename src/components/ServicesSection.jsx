import React from "react";
import { motion } from "framer-motion";

const viewport = { once: false, amount: 0.22 };

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function ServicesSection() {
  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-xl"
        >
          <motion.h1
            variants={fadeUp}
            className="
              text-4xl sm:text-5xl md:text-6xl
              font-light tracking-tight
              text-black dark:text-white
              leading-[1.05]
            "
          >
            jOLLOF.fps
            <br />
            <span className="text-3xl">Services</span>
          </motion.h1>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-7"
          >
            <div className="relative">
              <div
                className="
                  select-none
                  text-[160px] leading-none
                  sm:text-[220px]
                  md:text-[280px]
                  lg:text-[320px]
                  font-light
                  tracking-tight
                  text-black/85 dark:text-white/85
                "
              >
                01
              </div>

              <div
                className="
                  pointer-events-none
                  absolute left-6 right-6
                  bottom-[-14px]
                  h-10
                  rounded-full
                  bg-black/5 dark:bg-white/5
                  blur-xl
                "
              />
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-5 lg:pt-10"
          >
            <motion.h2
              variants={fadeUp}
              className="
                text-3xl sm:text-4xl
                font-light
                text-black dark:text-white
                leading-tight
              "
            >
              Frontend
              <br />
              Services
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mt-6
                max-w-md
                text-base sm:text-lg
                font-light
                leading-relaxed
                text-black/60 dark:text-white/60
              "
            >
              I design and build high-performance, responsive interfaces that
              feel premium — focused on clean UI, smooth motion, accessibility,
              and conversion-driven layouts.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              className="mt-8 space-y-3 text-sm sm:text-base font-light text-black/70 dark:text-white/70"
            >
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/40" />
                React / Next.js UI builds
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/40" />
                Tailwind + design systems
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/40" />
                Motion & micro-interactions
              </li>
            </motion.ul>
          </motion.div>
        </div>

        <div className="mt-24 md:mt-32 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="
              order-1 lg:order-2
              lg:col-span-7
              lg:text-right
            "
          >
            <div className="relative">
              <div
                className="
                  select-none
                  text-[160px] leading-none
                  sm:text-[220px]
                  md:text-[280px]
                  lg:text-[320px]
                  font-light
                  tracking-tight
                  text-black/85 dark:text-white/85
                "
              >
                02
              </div>

              <div
                className="
                  pointer-events-none
                  absolute left-6 right-6
                  bottom-[-14px]
                  h-10
                  rounded-full
                  bg-black/5 dark:bg-white/5
                  blur-xl
                "
              />
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="
              order-2 lg:order-1
              lg:col-span-5
              lg:pt-10
            "
          >
            <motion.h2
              variants={fadeUp}
              className="
                text-3xl sm:text-4xl
                font-light
                text-black dark:text-white
                leading-tight
              "
            >
              Local
              <br />
              Professional Gamer
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mt-6
                max-w-md
                text-base sm:text-lg
                font-light
                leading-relaxed
                text-black/60 dark:text-white/60
              "
            >
              Competing locally with strong mechanics, discipline, and game
              sense — focused on consistent performance, team coordination, and
              high-pressure decision-making.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              className="mt-8 space-y-3 text-sm sm:text-base font-light text-black/70 dark:text-white/70"
            >
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/40" />
                Competitive FPS experience
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/40" />
                Tournament participation
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/40" />
                Strategy & gameplay analysis
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
