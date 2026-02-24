"use client";

import { useEffect, useState } from "react";
import AboutModalDesktop from "./AboutModalDesktop";
import AboutModalMobile from "./AboutModalMobile";

export default function AboutController() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 🔒 lock body scroll + hide header underneath
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Trigger */}
      <a
        onClick={() => setOpen(true)}
        className="w-[180px] px-8 py-4 rounded-lg border border-white/10 text-white text-sm font-medium bg_transparent
               hover:bg-white/5 transition-colors backdrop-blur-sm"
      >
        Know More About Me
      </a>

      {/* Modal */}
      {open &&
        (isMobile ? (
          <AboutModalMobile onClose={() => setOpen(false)} />
        ) : (
          <AboutModalDesktop onClose={() => setOpen(false)} />
        ))}
    </>
  );
}
