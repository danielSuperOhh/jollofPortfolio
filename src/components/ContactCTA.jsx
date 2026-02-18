import React from "react";

export default function ContactCTA() {
  return (
    <div className="mt-24">
      <div
        className="
          rounded-[40px]
          bg-black text-white
          dark:bg-white dark:text-black
          p-10 sm:p-12
          text-center
          shadow-[0_30px_120px_rgba(0,0,0,0.35)]
        "
      >
        <p className="text-3xl font-light leading-tight">
          Ready to start a new project?
        </p>

        <p className="mt-4 text-sm sm:text-base font-light opacity-80">
          Email me at{" "}
          <a
            className="underline underline-offset-4 break-all"
            href="mailto:daniel.iheukwumere@outlook.com"
          >
            daniel.iheukwumere@outlook.com
          </a>
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="mailto:daniel.iheukwumere@outlook.com?subject=Project%20Inquiry&body=Hi%20Daniel%2C%0D%0A%0D%0A"
            className="
              inline-flex items-center justify-center
              rounded-full px-7 py-3
              bg-white text-black
              dark:bg-black dark:text-white
              text-sm font-light
              transition hover:opacity-90 active:scale-95
            "
          >
            Send email →
          </a>
        </div>
      </div>
    </div>
  );
}
