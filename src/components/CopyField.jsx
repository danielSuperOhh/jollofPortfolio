import React, { useState } from "react";
import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div
      className="
        w-full
        rounded-2xl
        border border-black/10 dark:border-white/10
        bg-white/70 dark:bg-black/40
        px-4 py-3
        overflow-hidden
      "
    >
      <p className="text-xs font-light text-black/45 dark:text-white/45">
        {label}
      </p>

      <div className="mt-2 flex items-center justify-between gap-3 min-w-0">
        {/* Email text — forced no underline */}
        <p
          className="
            min-w-0 flex-1
            text-sm sm:text-base
            font-light
            text-black/80 dark:text-white/80
            break-all

            no-underline
            decoration-transparent
            underline-offset-0

            hover:no-underline
            focus:no-underline
            active:no-underline
          "
        >
          {value}
        </p>

        <button
          type="button"
          onClick={copy}
          className="
            shrink-0
            inline-flex items-center gap-2
            rounded-full px-3 py-1.5
            text-xs font-light
            bg-black text-white
            dark:bg-white dark:text-black
            transition hover:opacity-90 active:scale-95
          "
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <DocumentDuplicateIcon className="h-4 w-4" />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}
