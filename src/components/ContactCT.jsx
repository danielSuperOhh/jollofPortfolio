import React from "react";

export default function ContactCT() {
  return (
    <div className="mt-24 bg-black text-white dark:bg-white dark:text-black p-12 rounded-[40px]">
      <p className="text-3xl font-light">
        If you want a premium frontend, let’s build it.
      </p>

      <a
        href="mailto:daniel.iheukwumere@outlook.com"
        className="inline-block mt-6 px-7 py-3 rounded-full bg-white text-black dark:bg-black dark:text-white"
      >
        Send email →
      </a>
    </div>
  );
}
