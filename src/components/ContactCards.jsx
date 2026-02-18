import React from "react";
import CopyField from "./CopyField";

function CardShell({ title, desc, children }) {
  return (
    <div className="w-full rounded-[34px] bg-black/5 dark:bg-white/5 p-6 sm:p-7 transition-colors overflow-hidden">
      <p className="text-xl font-light text-black dark:text-white">{title}</p>
      <p className="mt-3 text-sm sm:text-base font-light leading-relaxed text-black/55 dark:text-white/55">
        {desc}
      </p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function ContactCards() {
  return (
    <div className="w-full space-y-6 min-w-0">
      <CardShell title="Direct" desc="Copy my email and reach out instantly.">
        <CopyField label="Email" value="daniel.iheukwumere@outlook.com" />
      </CardShell>

      <CardShell title="Perfect first message" desc="Fastest reply if you include:">
        <ul className="space-y-2 text-sm font-light text-black/70 dark:text-white/70">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/40" />
            What are we building?
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/40" />
            Timeline / deadline
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/40" />
            Links / references
          </li>
        </ul>
      </CardShell>

      <CardShell title="Availability" desc="Open to freelance, contract, and collabs.">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full px-4 py-2 text-sm font-light bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70">
            Freelance
          </span>
          <span className="rounded-full px-4 py-2 text-sm font-light bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70">
            Contract
          </span>
          <span className="rounded-full px-4 py-2 text-sm font-light bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70">
            Collab
          </span>
        </div>
      </CardShell>
    </div>
  );
}
