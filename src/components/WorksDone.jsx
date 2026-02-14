import React from "react";
import { motion } from "framer-motion";

import dieu from "../assets/dieu.PNG";
import dieuB from "../assets/dieuB.png";

import kiosk from "../assets/kiosk.png";
import kioskB from "../assets/kioskB.png"

const works = [
  {
    title: "DieuSoms",
    description:
      "An online boutique offering elegant, handcrafted crochet bags that combine timeless style with artisan quality, perfect for those seeking chic, handmade accessories.",
    mobileImg: dieu,
    desktopImg: dieuB,
    link: "https://dieu-soms.vercel.app/",
  },
  {
    title: "Real-Time Kiosk CMS & Assistant Platform",
    description:
      "A real-time CMS and assistant platform for managing kiosk media, announcements, and user interactions using React and Supabase.",
    mobileImg: kiosk,
    desktopImg: kioskB,
    link: "https://kiosk-display-self.vercel.app/",
  },
];

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
  show: { transition: { staggerChildren: 0.16 } },
};

function WorkRow({ item, reverse = false }) {
  return (
    <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12">
      <div className={`md:col-span-4 ${reverse ? "md:order-2" : "md:order-1"}`}>
        <div className="space-y-5">
          {/* Mobile card */}
          <motion.div
            variants={fadeUp}
            className="
              self-start w-fit rounded-3xl p-6
              bg-black dark:bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              transition-colors
            "
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={item.mobileImg}
              alt={`${item.title} mobile view`}
              className="h-56 w-auto rounded-2xl object-contain sm:h-64"
              loading="lazy"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-2">
            <h3 className="text-3xl font-light leading-tight text-black/85 dark:text-white/85">
              {item.title}
            </h3>

            <p className="max-w-sm text-sm font-light leading-relaxed text-black/55 dark:text-white/55">
              {item.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className={`md:col-span-8 ${reverse ? "md:order-1" : "md:order-2"}`}>
        <motion.div
          variants={fadeUp}
          className="
            group relative overflow-hidden rounded-[44px]
            h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px]
            bg-black dark:bg-white
            shadow-[0_22px_70px_rgba(0,0,0,0.18)]
            dark:shadow-[0_22px_70px_rgba(0,0,0,0.45)]
            transition-colors
          "
        >
          <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
            <img
              src={item.desktopImg}
              alt={`${item.title} desktop view`}
              loading="lazy"
              className="
                max-h-full max-w-full
                object-contain
                drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]
                transition-transform duration-500 ease-out
                group-hover:scale-110
              "
            />
          </div>

          <div
            className="
              absolute inset-0
              flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              bg-white/10 dark:bg-black/10
              backdrop-blur-sm
            "
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 rounded-full
                bg-white text-black
                dark:bg-black dark:text-white
                text-sm font-light
                transition-transform duration-300
                hover:scale-105
              "
            >
              Visit →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function WorksDone() {
  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-10 md:mb-14"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-light text-black dark:text-white"
          >
            Some works done
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-2xl text-base md:text-lg font-light text-black/60 dark:text-white/60"
          >
            A few projects where I shipped clean UI and responsive experiences —
            mobile and desktop views designed to feel premium.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="space-y-28 md:space-y-40 lg:space-y-52"
        >
          {works.map((item, idx) => (
            <motion.div key={`${item.title}-${idx}`} variants={fadeUp}>
              <WorkRow item={item} reverse={idx % 2 === 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
