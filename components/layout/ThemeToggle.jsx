"use client";
import { useEffect, useSyncExternalStore } from "react";

const THEME_EVENT = "helpinghands-theme-change";

function getTheme() {
 return localStorage.getItem("theme") === "dark" ? "dark" : "light";
}

function getServerTheme() {
 return "light";
}

function subscribeToTheme(onChange) {
 window.addEventListener("storage", onChange);
 window.addEventListener(THEME_EVENT, onChange);

 return () => {
 window.removeEventListener("storage", onChange);
 window.removeEventListener(THEME_EVENT, onChange);
 };
}

export default function ThemeToggle() {
 const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);

 useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
 }, [theme]);

 function toggle() {
 const next = theme === "light" ? "dark" : "light";
 localStorage.setItem("theme", next);
 document.documentElement.setAttribute("data-theme", next);
 window.dispatchEvent(new Event(THEME_EVENT));
 }

 return (
 <button
  onClick={toggle}
  className="btn btn-ghost btn-circle h-10 w-10 border border-ink/10 bg-base-100 text-ink/70 hover:bg-base-200"
  aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
  aria-pressed={theme === "dark"}
  title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
 >
  {theme === "light" ? (
   <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path d="M20.2 15.4A8.3 8.3 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
   </svg>
  ) : (
   <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
   </svg>
  )}
 </button>
 );
}