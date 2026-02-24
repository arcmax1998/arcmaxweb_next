"use client";

import { useEffect, useState } from "react";
import AboutModalDesktop from "./AboutModalDesktop";
import AboutModalMobile from "./AboutModalMobile";

export default function AboutController() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🔒 LOCK BODY SCROLL WHEN MODAL IS OPEN
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-8 py-4 rounded-lg border border-white/10 text-white text-sm font-medium
                   hover:bg-white/5 transition-colors backdrop-blur-sm"
      >
        Know More About Me
      </button>

      {open &&
        (isMobile ? (
          <AboutModalMobile onClose={() => setOpen(false)} />
        ) : (
          <AboutModalDesktop onClose={() => setOpen(false)} />
        ))}
    </>
  );
}
