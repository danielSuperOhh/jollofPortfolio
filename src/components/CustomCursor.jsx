import React, { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR = `
  a, button, input, textarea, select, label,
  [role="button"], [data-cursor="hover"]
`;

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const rafRef = useRef(0);

  const [isHovering, setIsHovering] = useState(false);
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      });
    };

    const onOver = (e) => {
      const el = e.target?.closest?.(HOVER_SELECTOR);
      setIsHovering(!!el);
    };

    const onDown = () => setIsDown(true);
    const onUp = () => setIsDown(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={[
        "custom-cursor",
        isHovering ? "is-hovering" : "",
        isDown ? "is-down" : "",
      ].join(" ")}
    />
  );
}
