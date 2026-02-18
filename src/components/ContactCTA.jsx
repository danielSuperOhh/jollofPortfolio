import React from "react";

export default function ContactCTA() {
  return (
    <section className="bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

        <div
          className="
            my-16 sm:my-20 md:my-24

            rounded-[28px] sm:rounded-[36px] md:rounded-[40px]

            bg-black text-white
            dark:bg-white dark:text-black

            px-6 py-10
            sm:px-10 sm:py-12
            md:px-14 md:py-14

            text-center

            shadow-[0_30px_120px_rgba(0,0,0,0.35)]

            transition-colors
          "
        >
          <h2
            className="
              font-light leading-tight

              text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
            "
          >
            Ready to start a new project?
          </h2>

          {/* Email */}
          <p
            className="
              mt-4

              font-light opacity-80

              text-xs
              sm:text-sm
              md:text-base

              break-all
              max-w-full
            "
          >
            Email me at{" "}
            <a
              href="mailto:danieliheukwumere17@gmail.com"
              className="
                font-light
                opacity-90 hover:opacity-100
                transition duration-300
                hover:text-white dark:hover:text-black
              "
            >
              daniel.iheukwumere@outlook.com
            </a>
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="mailto:daniel.iheukwumere@outlook.com?subject=Project%20Inquiry"
              className="
                inline-flex items-center justify-center

                rounded-full

                px-5 py-2.5
                sm:px-6 sm:py-3
                md:px-7 md:py-3

                text-xs sm:text-sm

                bg-white text-black
                dark:bg-black dark:text-white

                font-light

                transition
                hover:opacity-90
                active:scale-95
              "
            >
              Send email →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
