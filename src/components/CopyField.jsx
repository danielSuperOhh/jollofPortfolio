import React, { useState } from "react";
import {
  DocumentDuplicateIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

export default function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 px-4 py-3">
      <p className="text-xs text-black/45 dark:text-white/45">{label}</p>

      <div className="mt-2 flex justify-between items-center gap-3">
        <p className="truncate text-sm text-black dark:text-white">
          {value}
        </p>

        <button
          onClick={copy}
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs bg-black text-white dark:bg-white dark:text-black"
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4" /> Copied
            </>
          ) : (
            <>
              <DocumentDuplicateIcon className="h-4 w-4" /> Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}
