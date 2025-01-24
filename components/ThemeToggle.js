// 'use client';

// import { Sun, Moon } from 'lucide-react';
// import { useTheme } from './ThemeProvider';

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="theme-toggle"
//       aria-label="Toggle theme"
//     >
//       {theme === 'light' ? (
//         <Moon className="w-5 h-5" />
//       ) : (
//         <Sun className="w-5 h-5" />
//       )}
//     </button>
//   );
// }

"use client";

import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Ensure the default theme is light
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const defaultTheme = savedTheme || "light";
    setTheme(defaultTheme);
    document.documentElement.setAttribute("data-theme", defaultTheme);
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}