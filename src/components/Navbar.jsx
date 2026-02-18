import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const THEME_KEY = "theme";

const links = [
  { label: "Works", to: "/works" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const isDark = saved === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(THEME_KEY, next ? "dark" : "light");
  };

  const linkClass = (to) => {
    const active = location.pathname === to;

    return [
      "inline-flex items-center",
      "text-lg",
      "transition-transform duration-200 ease-out",
      "will-change-transform select-none",

      "hover:scale-[1.08]",

      "active:scale-[0.96]",
      "active:animate-[navVibrate_220ms_linear_1]",

      active
        ? "font-medium text-black dark:text-white"
        : "font-light text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white",
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black transition-colors">
      <style>{`
        @keyframes navVibrate {
          0%   { transform: scale(0.96) translate(0, 0); }
          10%  { transform: scale(0.96) translate(-2px, -1px); }
          20%  { transform: scale(0.96) translate(2px, 1px); }
          30%  { transform: scale(0.96) translate(-3px, 1px); }
          40%  { transform: scale(0.96) translate(3px, -1px); }
          50%  { transform: scale(0.96) translate(-2px, 1px); }
          60%  { transform: scale(0.96) translate(2px, -1px); }
          70%  { transform: scale(0.96) translate(-1px, 1px); }
          80%  { transform: scale(0.96) translate(1px, -1px); }
          90%  { transform: scale(0.96) translate(-1px, 0); }
          100% { transform: scale(0.96) translate(0, 0); }
        }
      `}</style>

      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-40 items-center">
          <Link to="/" className="text-2xl font-normal text-black dark:text-white">
            jOLLOF
          </Link>

          {/* Desktop */}
          <div className="ml-auto hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-10">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={linkClass(link.to)}>
                    {link.label}
                  </Link>
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
              aria-label="Toggle theme"
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
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-white" />
              ) : (
                <MoonIcon className="h-6 w-6 text-black" />
              )}
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                hover:bg-black/5 dark:hover:bg-white/10
                transition
              "
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <XMarkIcon className="h-6 w-6 text-black dark:text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${mobileOpen ? "max-h-96 pb-6" : "max-h-0"}
          `}
        >
          <ul className="flex flex-col gap-6 pt-2">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={linkClass(link.to)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
