"use client";
import { useSyncExternalStore } from "react";

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

 function toggle() {
 const next = theme === "light" ? "dark" : "light";
 localStorage.setItem("theme", next);
 document.documentElement.setAttribute("data-theme", next);
 window.dispatchEvent(new Event(THEME_EVENT));
 }

 return (
 <button
  onClick={toggle}
  className="btn btn-ghost btn-circle"
  aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
  aria-pressed={theme === "dark"}
 >
  {theme === "light" ? "Dark" : "Light"}
 </button>
 );
}