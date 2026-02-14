// src/components/MotionBlock.jsx
import React from "react";
import { motion } from "framer-motion";
import { viewport, fadeUp } from "../lib/motion";

export default function MotionBlock({
  children,
  className = "",
  variants = fadeUp,
  as = "div",
}) {
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </Comp>
  );
}
