import React, { useMemo, useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactForm() {
  const email = "daniel.iheukwumere@outlook.com";

  const [subject, setSubject] = useState("Project Inquiry");
  const [message, setMessage] = useState("Hi Daniel,");

  const mailto = useMemo(() => {
    return `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
  }, [email, subject, message]);

  const fieldClass = `
    w-full
    rounded-2xl
    border border-black/10 dark:border-white/10
    bg-white/80 dark:bg-black/40
    px-4 py-3
    text-sm sm:text-base font-light
    text-black dark:text-white
    placeholder:text-black/35 dark:placeholder:text-white/35
    outline-none
    focus:border-black/30 dark:focus:border-white/30
    transition
  `;

  return (
    <div className="rounded-[40px] bg-black/5 dark:bg-white/5 p-8 transition-colors">
      <p className="text-2xl font-light text-black dark:text-white">
        Quick message
      </p>
      <p className="mt-2 text-sm font-light text-black/55 dark:text-white/55">
        This opens a ready-to-send draft in your email app.
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label className="text-xs font-light text-black/45 dark:text-white/45">
            Subject
          </label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Project Inquiry"
            className={fieldClass}
          />
        </div>

        <div>
          <label className="text-xs font-light text-black/45 dark:text-white/45">
            Message
          </label>
          <textarea
            rows={8}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hi Daniel,"
            className={`${fieldClass} resize-none`}
          />
        </div>

        <a
          href={mailto}
          className="
            inline-flex items-center gap-2
            rounded-full px-6 py-3
            bg-black text-white
            dark:bg-white dark:text-black
            text-sm font-light
            transition hover:opacity-90 active:scale-95
          "
        >
          <EnvelopeIcon className="h-5 w-5" />
          Send email
        </a>
      </div>
    </div>
  );
}
