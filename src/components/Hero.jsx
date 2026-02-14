import React from "react";
import { motion } from "framer-motion";

function GitHubIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.59 2 12.253c0 4.523 2.865 8.36 6.839 9.715.5.094.682-.222.682-.493 0-.244-.009-.89-.014-1.747-2.782.62-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.494-1.11-1.494-.908-.636.069-.623.069-.623 1.004.072 1.532 1.06 1.532 1.06.892 1.565 2.341 1.113 2.91.851.091-.666.35-1.113.636-1.369-2.22-.258-4.555-1.137-4.555-5.063 0-1.118.389-2.032 1.029-2.749-.103-.259-.446-1.3.098-2.709 0 0 .84-.274 2.75 1.05A9.36 9.36 0 0 1 12 6.844c.85.004 1.705.118 2.504.346 1.909-1.324 2.748-1.05 2.748-1.05.546 1.409.202 2.45.1 2.709.64.717 1.028 1.631 1.028 2.749 0 3.936-2.338 4.802-4.566 5.055.359.318.678.945.678 1.905 0 1.376-.012 2.485-.012 2.822 0 .274.18.592.688.492C19.138 20.61 22 16.774 22 12.253 22 6.59 17.523 2 12 2Z" />
    </svg>
  );
}

const viewport = { once: false, amount: 0.25 };

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

export default function Hero() {
  return (
    <section className="bg-white dark:bg-black transition-colors pb-14">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Left block */}
        <motion.div
          className="max-w-4xl"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.h1
            variants={fadeUp}
            className="
              font-light
              text-black dark:text-white
              tracking-tight
              leading-[1.05]
              text-[48px]
              sm:text-[64px]
              md:text-[80px]
              lg:text-[96px]
            "
          >
            jOLLOF<span className="text-black/30 dark:text-white/30">.</span>fps
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="
              mt-5
              max-w-xl
              text-lg sm:text-xl
              font-light
              text-black/60 dark:text-white/60
              leading-relaxed
            "
          >
            I build smooth, high-impact experiences for the web — with a
            gamer’s instinct for speed, clarity, and flow.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="https://github.com/danielSuperOhh"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6
              inline-flex items-center gap-3
              text-black/70 dark:text-white/70
              hover:text-black dark:hover:text-white
              transition
              group
            "
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
          >
            <GitHubIcon className="h-5 w-5 transition-transform group-hover:scale-110" />

            <span className="font-light text-base">github.com/danielSuperOhh</span>

            <span className="opacity-0 group-hover:opacity-100 transition">→</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="
            mt-5
            md:mt-7
            md:ml-auto
            md:max-w-xl
          "
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <p
            className="
              text-lg sm:text-xl
              font-light
              text-black/70 dark:text-white/70
              leading-relaxed
            "
          >
            I'm a gamer, frontend engineer, and creative developer focused on
            building fast, immersive, and visually refined digital experiences.
          </p>

          <p className="mt-3 text-sm font-light text-black/40 dark:text-white/40">
            Frontend Engineer • Gamer • Creative Developer • UI • Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
