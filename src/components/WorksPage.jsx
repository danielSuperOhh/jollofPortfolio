import React from "react";
import { motion } from "framer-motion";
import WorksHero from "./WorksHero";
import WorkCaseStudy from "./WorkCaseStudy";

const viewport = { once: false, amount: 0.22 };

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WorksPage() {
  return (
    <main className="bg-white dark:bg-black transition-colors">
      <WorksHero />

      <WorkCaseStudy
        number="01"
        title="DieuSoms"
        subtitle="An ecommerce storefront for elegant handcrafted crochet bags — built to feel clean, smooth, and conversion-friendly."
        accent="bg-[#0A0A0A]"
        link="https://dieu-soms.vercel.app/"
        role="Full-stack (React + Firebase) • In progress"
        stack={["React", "Tailwind CSS", "Firebase Auth", "Firestore", "Hosting"]}
        highlights={[
          "Modern product browsing and clean layout",
          "Responsive UI built mobile-first",
          "Authentication + data layer wired end-to-end",
        ]}
        challenges={[
          "Balancing premium UI with performance",
          "Keeping state predictable (auth/cart/data)",
          "Designing around real product content + images",
        ]}
        solutions={[
          "Reusable UI blocks with consistent spacing",
          "Firebase auth + Firestore modeling for products/orders",
          "Iterative UI polish across screen sizes",
        ]}
        results={[
          "A polished ecommerce experience that feels modern",
          "Smooth product discovery and fast navigation",
          "Still evolving with more features + refinements",
        ]}
      />

      <WorkCaseStudy
        number="02"
        title="Real-Time Kiosk CMS & Assistant Platform"
        subtitle="A real-time CMS to manage kiosk playlists, announcements, and interactions — designed for live updates and multi-kiosk control."
        accent="bg-[#5B2EFF]"
        link="https://kiosk-display-self.vercel.app/"
        role="Frontend Engineer • Full-stack (Supabase)"
        stack={["React", "Tailwind CSS", "Supabase Auth", "Postgres", "Realtime", "Storage"]}
        highlights={[
          "CMS dashboard for media + announcements",
          "Live updates pushed to kiosk display in real time",
          "Clean UI that stays readable and kiosk-friendly",
        ]}
        challenges={[
          "Real-time syncing without UI glitches",
          "Protecting routes and sessions properly",
          "Keeping admin workflows simple and predictable",
        ]}
        solutions={[
          "Supabase realtime subscriptions + careful state updates",
          "Route protection + token/session handling",
          "Clear content models and streamlined flows",
        ]}
        results={[
          "Reliable live announcements + playlist control",
          "Fast admin experience with clear UX",
          "Great showcase of real-time systems thinking",
        ]}
        reverse
      />

      {/* Ending CTA (future-proof text) */}
      <section className="bg-white dark:bg-black transition-colors">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="
              rounded-[44px]
              bg-black text-white
              dark:bg-white dark:text-black
              p-10 sm:p-12
              shadow-[0_30px_120px_rgba(0,0,0,0.35)]
            "
          >
            <p className="text-sm font-light opacity-80">More coming soon</p>
            <p className="mt-3 text-2xl sm:text-3xl font-light leading-tight max-w-3xl">
              This page grows as I ship more work — clean UI, strong engineering, real outcomes.
            </p>

            <a
              href="mailto:daniel.iheukwumere@outlook.com?subject=Project%20Inquiry&body=Hi%20Daniel%2C%0D%0A%0D%0AI%27d%20love%20to%20work%20with%20you%20on..."
              className="
                mt-8 inline-flex
                rounded-full px-7 py-3
                bg-white text-black
                dark:bg-black dark:text-white
                text-sm font-light
                transition hover:opacity-90 active:scale-95
              "
            >
              Email me →
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
