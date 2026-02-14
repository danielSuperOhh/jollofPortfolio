import React from "react";

export default function ContactCTA() {
  const email = "daniel.iheukwumere@outlook.com";

  return (
    <section className="bg-white dark:bg-black transition-colors py-16 md:py-24">
      
      <div className="mx-auto max-w-7xl px-6">

        <a
          href={`mailto:${email}?subject=New Project Inquiry&body=Hi Daniel,%0D%0A%0D%0AI would like to discuss a project with you.`}
          className="
            block
            rounded-[32px]
            bg-black dark:bg-white
            text-white dark:text-black

            px-8 py-20 md:py-28

            text-center

            transition-all duration-300
            hover:scale-[1.01]
            hover:shadow-[0_30px_100px_rgba(0,0,0,0.35)]

            cursor-pointer
          "
        >

          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-light
              tracking-tight
            "
          >
            Ready to start a new project?
          </h2>

          <p className="
            mt-6
            text-base sm:text-lg
            font-light
            opacity-70
          ">
            Click here to send me an email
          </p>

          <p className="
            mt-3
            text-lg sm:text-xl
            font-light
            opacity-90
          ">
            {email}
          </p>

        </a>

      </div>

    </section>
  );
}
