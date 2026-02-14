import React from "react";
import apex from "../assets/apex.mp4";

export default function VideoSection() {
  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        
        <div className="
          overflow-hidden
          rounded-3xl
          border border-black/10 dark:border-white/10
          bg-black/5 dark:bg-white/5
        ">
          
          <video
            className="
              w-full
              h-[240px]
              sm:h-[360px]
              md:h-[460px]
              lg:h-[560px]
              object-cover
              object-[center_78%]
            "
            src={apex}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

        </div>

      </div>
    </section>
  );
}
