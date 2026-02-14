export const viewport = {
  once: false,     // ✅ repeat on re-enter
  amount: 0.2,     // how much of element must be visible
  margin: "0px 0px -10% 0px", // triggers slightly earlier
};

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export const stagger = (delay = 0.08) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay },
  },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
