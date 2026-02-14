import React from "react";
import { motion } from "framer-motion";

import genesys from "../assets/genesys.png";
import tenece from "../assets/tenece.png";

const logos = [
  { type: "img", src: genesys, alt: "GENESYS" },
  { type: "img", src: tenece, alt: "Tenece" },
  { type: "text", label: "and more" },
];

const viewport = { once: false, amount: 0.25 };

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

function LogoItem({ item }) {
  if (item.type === "img") {
    return (
      <motion.div
        variants={fadeUp}
        className="
          flex items-center justify-center
          h-16 w-full
          rounded-xl
          bg-transparent
          dark:bg-white/90
          dark:border dark:border-white/10
          transition-colors
        "
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="max-h-8 w-auto object-contain"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center justify-center h-16 w-full"
    >
      <span className="text-base font-light text-black/70 dark:text-white/70">
        {item.label}
      </span>
    </motion.div>
  );
}

export default function CompaniesSection() {
  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
          
          <motion.div
            className="max-w-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p className="text-2xl md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80">
              Some of the companies I've worked with
              <br />
              to deliver outstanding digital experiences:
            </p>
          </motion.div>

          <motion.div
            className="md:pl-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                gap-x-8 gap-y-8
                sm:gap-x-10 sm:gap-y-10
              "
            >
              {logos.map((item, index) => (
                <LogoItem key={index} item={item} />
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
