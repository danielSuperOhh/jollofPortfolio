import React, { useEffect, useState } from "react";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const links = [
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const THEME_KEY = "theme";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const isDark = saved === "dark";

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);

    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(THEME_KEY, next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black transition-colors">
      <nav className="mx-auto max-w-7xl px-6">

        <div className="flex h-40 items-center">

          <div className="text-2xl font-normal text-black dark:text-white">
            jOLLOF
          </div>

          <div className="ml-auto hidden items-center gap-10 md:flex">

            <ul className="flex items-center gap-10">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      text-lg font-light
                      text-black/70 dark:text-white/70
                      hover:text-black dark:hover:text-white
                      transition
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleTheme}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                hover:bg-black/5 dark:hover:bg-white/10
                transition active:scale-95
              "
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-white" />
              ) : (
                <MoonIcon className="h-6 w-6 text-black" />
              )}
            </button>

          </div>

          <div className="ml-auto flex items-center gap-2 md:hidden">

            <button
              onClick={toggleTheme}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                hover:bg-black/5 dark:hover:bg-white/10
                transition
              "
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-white" />
              ) : (
                <MoonIcon className="h-6 w-6 text-black" />
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                hover:bg-black/5 dark:hover:bg-white/10
                transition
              "
            >
              {mobileOpen ? (
                <XMarkIcon className="h-6 w-6 text-black dark:text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
              )}
            </button>

          </div>

        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${mobileOpen ? "max-h-96 pb-6" : "max-h-0"}
          `}
        >
          <ul className="flex flex-col gap-6 pt-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="
                    text-lg font-light
                    text-black/70 dark:text-white/70
                    hover:text-black dark:hover:text-white
                    transition
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </header>
  );
}
