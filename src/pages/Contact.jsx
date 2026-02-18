import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactCards from "../components/ContactCards";
import ContactCT from "../components/ContactCT";

export default function Contact() {
  return (
    <main className="bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-32">
        <ContactHero />
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10 min-w-0">
          <div className="lg:col-span-7 min-w-0">
            <ContactForm />
          </div>
          <div className="lg:col-span-5 min-w-0">
            <ContactCards />
          </div>
        </div>
        <ContactCT />
      </div>
      <Footer />
    </main>
  );
}
