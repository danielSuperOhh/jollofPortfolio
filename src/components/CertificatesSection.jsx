import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import dieuB from "../assets/dieuB.png";
import kioskB from "../assets/kioskB.png";

const certificates = [
  {
    name: "Frontend Development Certificate",
    issuer: "—",
    year: "2025",
    image: dieuB,
  },
  {
    name: "React + UI Engineering Certificate",
    issuer: "—",
    year: "2025",
    image: kioskB,
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
  show: { transition: { staggerChildren: 0.12 } },
};

const modalWrap = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

const modalPanel = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 14, scale: 0.98, transition: { duration: 0.2 } },
};

function Modal({ open, onClose, title, image }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="
            fixed inset-0 z-[1000]
            flex items-center justify-center
            px-4
          "
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onMouseDown={onClose}
          variants={modalWrap}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm" />

          <motion.div
            className="
              relative z-10
              w-full max-w-5xl
              rounded-3xl
              bg-white dark:bg-black
              shadow-[0_40px_140px_rgba(0,0,0,0.45)]
              border border-black/10 dark:border-white/10
              overflow-hidden
            "
            onMouseDown={(e) => e.stopPropagation()}
            variants={modalPanel}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-light text-black/55 dark:text-white/55">
                  Certificate
                </p>
                <h4 className="truncate text-lg font-light text-black dark:text-white">
                  {title}
                </h4>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="
                  rounded-full
                  px-4 py-2
                  text-sm font-light
                  bg-black text-white
                  dark:bg-white dark:text-black
                  transition
                  hover:opacity-90
                "
              >
                Close
              </button>
            </div>

            <div className="bg-black/5 dark:bg-white/5 p-4 sm:p-6">
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-2xl object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function CertificatesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const hovered = useMemo(() => {
    if (hoveredIndex === null) return null;
    return certificates[hoveredIndex] ?? null;
  }, [hoveredIndex]);

  const opened = openIndex === null ? null : certificates[openIndex];

  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <motion.div
          className="mb-10 md:mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-light text-black dark:text-white"
          >
            Certificates
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-2xl text-base md:text-lg font-light text-black/60 dark:text-white/60"
          >
            Hover a certificate name to preview it. Click to view the full
            certificate.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <motion.div
            className="md:col-span-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <ul className="space-y-3">
              {certificates.map((c, idx) => (
                <motion.li key={`${c.name}-${idx}`} variants={fadeUp}>
                  <button
                    type="button"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(idx)}
                    onBlur={() => setHoveredIndex(null)}
                    onClick={() => setOpenIndex(idx)}
                    className="
                      group w-full text-left
                      rounded-2xl px-5 py-4
                      transition
                      bg-black/5 hover:bg-black/10
                      dark:bg-white/5 dark:hover:bg-white/10
                    "
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate text-lg font-light text-black/85 dark:text-white/85">
                          {c.name}
                        </p>
                        <p className="mt-1 text-sm font-light text-black/50 dark:text-white/50">
                          {c.issuer} {c.year ? `• ${c.year}` : ""}
                        </p>
                      </div>

                      <span
                        className="
                          shrink-0
                          rounded-full
                          px-3 py-1
                          text-xs font-light
                          bg-black text-white
                          dark:bg-white dark:text-black
                          opacity-0 group-hover:opacity-100
                          transition
                        "
                      >
                        View
                      </span>
                    </div>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="md:col-span-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div
              className="
                relative overflow-hidden rounded-[44px]
                bg-black dark:bg-white
                h-[320px] sm:h-[380px] md:h-[420px]
                shadow-[0_22px_70px_rgba(0,0,0,0.18)]
                dark:shadow-[0_22px_70px_rgba(0,0,0,0.45)]
              "
            >
              <AnimatePresence mode="wait">
                {hovered?.image ? (
                  <motion.div
                    key={hovered.name}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <img
                      src={hovered.image}
                      alt={`${hovered.name} preview`}
                      className="
                        absolute inset-0 h-full w-full object-cover
                        scale-110
                        blur-xl
                        opacity-70
                      "
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35 dark:bg-white/25" />

                    <div className="relative z-10 flex h-full items-end p-6 sm:p-8">
                      <div className="max-w-md">
                        <p className="text-sm font-light text-white/70 dark:text-black/70">
                          Preview
                        </p>
                        <p className="mt-1 text-xl font-light text-white dark:text-black">
                          {hovered.name}
                        </p>
                        <p className="mt-2 text-sm font-light text-white/70 dark:text-black/70">
                          Click the name on the left to view full size.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    className="flex h-full items-center justify-center p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-base font-light text-white/70 dark:text-black/70">
                      Hover a certificate name to preview it here.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        title={opened?.name ?? ""}
        image={opened?.image ?? ""}
      />
    </section>
  );
}
