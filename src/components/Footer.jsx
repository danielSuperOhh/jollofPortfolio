import React from "react";

function GitHubIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.59 2 12.253c0 4.523 2.865 8.36 6.839 9.715.5.094.682-.222.682-.493 0-.244-.009-.89-.014-1.747-2.782.62-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.494-1.11-1.494-.908-.636.069-.623.069-.623 1.004.072 1.532 1.06 1.532 1.06.892 1.565 2.341 1.113 2.91.851.091-.666.35-1.113.636-1.369-2.22-.258-4.555-1.137-4.555-5.063 0-1.118.389-2.032 1.029-2.749-.103-.259-.446-1.3.098-2.709 0 0 .84-.274 2.75 1.05A9.36 9.36 0 0 1 12 6.844c.85.004 1.705.118 2.504.346 1.909-1.324 2.748-1.05 2.748-1.05.546 1.409.202 2.45.1 2.709.64.717 1.028 1.631 1.028 2.749 0 3.936-2.338 4.802-4.566 5.055.359.318.678.945.678 1.905 0 1.376-.012 2.485-.012 2.822 0 .274.18.592.688.492C19.138 20.61 22 16.774 22 12.253 22 6.59 17.523 2 12 2Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black transition-colors">
      
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="text-black dark:text-white">
            <p className="text-lg font-light tracking-tight">
              jOLLOF<span className="opacity-40">.</span>fps
            </p>

            <p className="mt-1 text-sm font-light text-black/50 dark:text-white/50">
              Frontend Engineer • Creative Developer
            </p>
          </div>


          <div className="flex items-center gap-6">

            <a
              href="mailto:daniel.iheukwumere@outlook.com"
              className="
                text-sm font-light
                text-black/70 dark:text-white/70
                hover:text-black dark:hover:text-white
                transition
              "
            >
              Email
            </a>

            <a
              href="https://github.com/danielSuperOhh"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                text-sm font-light
                text-black/70 dark:text-white/70
                hover:text-black dark:hover:text-white
                transition
              "
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>

          </div>

        </div>


        <div className="mt-10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <p className="text-sm font-light text-black/40 dark:text-white/40">
            © {year} jOLLOF.fps. All rights reserved.
          </p>

          <p className="text-sm font-light text-black/30 dark:text-white/30">
            Built with React & Tailwind
          </p>

        </div>

      </div>

    </footer>
  );
}
