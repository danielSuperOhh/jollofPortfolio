import React from "react";

const items = [
  "Frontend Engineer",
  "React",
  "UI / Motion",
  "Gamer",
  "Supabase",
  "Creative Developer",
  "Performance Focused",
  "Interactive Design",
];

export default function MarqueeSlider() {
  const loopItems = [...items, ...items];

  return (
    <section className="bg-white dark:bg-black transition-colors py-14 md:py-20 overflow-hidden">
      
      <div className="relative w-full">

        {/* soft edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

        <div className="marquee-track flex w-[200%] gap-6">

          {loopItems.map((item, index) => (
            <div
              key={index}
              className="
                whitespace-nowrap
                text-xl sm:text-2xl md:text-3xl
                font-light
                text-black dark:text-white
                tracking-tight
              "
            >
              {item}
              <span className="mx-6 text-black/30 dark:text-white/30">
                •
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
