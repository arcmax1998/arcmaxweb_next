"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav  id="mainNav"  className={`
        fixed z-50  inset-x-0 p-6
        transition-all duration-300
        ${scrolled
          ? "bg-[#0A0B1E]/95 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent shadow-none"}
      `}>
    <div className="grid grid-cols-[1fr_auto] items-center max-w-[1400px] mx-auto ">

        {/*  LEFT: Logo */}
        <div className="pointer-events-auto justify-self-start ">
            <div 
                id="navBrand"
                className="flex items-center gap-0 rounded-full transition-all duration-300 pl-0  md:px-4 ">
                {/*  Logo */}
                <div className="relative">
                    <img 
                        src="assets/images/logo-dark-1768883752637.png"
                        alt="ArcMax logo"
                        className="w-auto object-contain hidden md:flex"
                    />

                    {/*  Overlapping red slash */}
                    <span 
                        className="absolute -right-0.5 top-1/2 -translate-y-1/2 h-9 w-[3px] 
                               bg-[#DC2626] rounded-full"
                        aria-hidden="true"
                    ></span>
                </div>

                {/*  Text */}
                <div className="flex flex-col pl-2 gap-1 md:pl-4">
                    <span className="text-base text-white font-semibold leading-none">
                        arc-max.com
                    </span>
                    <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest leading-none w-fit">
                        25 Years PHP Programming Experience
                    </span>
                </div>
            </div>
        </div>
     
        <div className="hidden lg:flex items-center gap-1">

      {/*  Home */}
      <a href="#hero"
         className="nav-link nav-active group relative text-sm font-medium text-neutral-300
                px-5 py-[3px] leading-none transition-all duration-300
                hover:text-white  no-underline hover:no-underline
                [&.nav-active_.nav-pill]:opacity-0">
        <span
           className="nav-pill pointer-events-none absolute -inset-x-1 -inset-y-1
         rounded-full opacity-0
         bg-gradient-to-r from-[#B91C1C] via-[#EF4444] to-[#B91C1C]
         shadow-[0_6px_20px_rgba(220,38,38,0.55)]
         blur-[0.5px]
         transition-all duration-300
         group-hover:opacity-100">
        </span>
        <span className="relative z-10
                     group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
          Home
        </span>
      </a>

      {/*  Projects */}
      <a href="#projects"
         className="nav-link group relative text-sm font-medium text-neutral-300
                px-5 py-[3px] leading-none transition-all duration-300
                hover:text-white no-underline hover:no-underline 
                [&.nav-active_.nav-pill]:opacity-0">
        <span
          className="nav-pill pointer-events-none absolute -inset-x-1 -inset-y-1
         rounded-full opacity-0
         bg-gradient-to-r from-[#B91C1C] via-[#EF4444] to-[#B91C1C]
         shadow-[0_6px_20px_rgba(220,38,38,0.55)]
         blur-[0.5px]
         transition-all duration-300
         group-hover:opacity-100">
        </span>
        <span className="relative z-10
                     group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
          Projects
        </span>
      </a>

      {/*  Skills */}
        <a href="#skills"
         className="nav-link group relative text-sm font-medium text-neutral-300
                px-5 py-[3px] leading-none transition-all duration-300
                hover:text-white no-underline hover:no-underline 
                [&.nav-active_.nav-pill]:opacity-0">
        <span
          className="nav-pill pointer-events-none absolute -inset-x-1 -inset-y-1
         rounded-full opacity-0
         bg-gradient-to-r from-[#B91C1C] via-[#EF4444] to-[#B91C1C]
         shadow-[0_6px_20px_rgba(220,38,38,0.55)]
         blur-[0.5px]
         transition-all duration-300
         group-hover:opacity-100">
        </span>
        <span className="relative z-10
                     group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
          Skills
        </span>
      </a>     

      {/*  Testimonials */}
      <a href="#testimonials"
         className="nav-link  group relative text-sm font-medium text-neutral-300
                px-5 py-[3px] leading-none transition-all duration-300
                hover:text-white no-underline hover:no-underline 
                [&.nav-active_.nav-pill]:opacity-0">
        <span
           className="nav-pill pointer-events-none absolute -inset-x-1 -inset-y-1
         rounded-full opacity-0
         bg-gradient-to-r from-[#B91C1C] via-[#EF4444] to-[#B91C1C]
         shadow-[0_6px_20px_rgba(220,38,38,0.55)]
         blur-[0.5px]
         transition-all duration-300
         group-hover:opacity-100">
        </span>
        <span className="relative z-10
                     group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
          Testimonials
        </span>
      </a>

      {/*  Contact */}
      <a href="#contact"
         className="nav-link group relative text-sm font-medium text-neutral-300
                px-5 py-[3px] leading-none transition-all duration-300
                hover:text-white no-underline hover:no-underline 
                [&.nav-active_.nav-pill]:opacity-0">
        <span
          className="nav-pill pointer-events-none absolute -inset-x-1 -inset-y-1
         rounded-full opacity-0
         bg-gradient-to-r from-[#B91C1C] via-[#EF4444] to-[#B91C1C]
         shadow-[0_6px_20px_rgba(220,38,38,0.55)]
         blur-[0.5px]
         transition-all duration-300
         group-hover:opacity-100">
        </span>
        <span className="relative z-10
                     group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
          Contact
        </span>
      </a>

    </div>


        {/*  RIGHT: Mobile Burger */}
        <div className="pointer-events-auto justify-self-end lg:hidden relative">
            <button 
                id="mobileMenuBtn"
                className="w-11 h-11 rounded-sm border border-white/20
       bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-[#DC2626]
       shadow-[0_0_20px_rgba(220,38,38,0.45)]
       flex items-center justify-center text-white
       transition-transform hover:scale-105"
                aria-label="Open menu"
            >
                 <span className="text-2xl leading-none">
        ☰
    </span>
            </button>

            {/*  Mobile Dropdown */}
            <div 
                id="mobileMenu"
                className="hidden absolute right-0 mt-1 w-52 rounded-sm
           bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-[#DC2626]
           border border-white/20
           shadow-[0_20px_60px_rgba(220,38,38,0.6)]
           overflow-hidden"
>
                <a href="#hero" className="mobile-nav-link  block px-5 py-3 text-sm text-white
         hover:bg-white/15 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
         active:bg-white/20 active:drop-shadow-[0_0_12px_rgba(255,255,255,1)]
         focus-visible:bg-white/15 focus-visible:outline-none
         transition-all duration-200"
>Home</a>
                <a href="#projects" className="mobile-nav-link  block px-5 py-3 text-sm text-white
         hover:bg-white/15 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
         active:bg-white/20 active:drop-shadow-[0_0_12px_rgba(255,255,255,1)]
         focus-visible:bg-white/15 focus-visible:outline-none
         transition-all duration-200">Projects</a>
                <a href="#skills" className="mobile-nav-link  block px-5 py-3 text-sm text-white
         hover:bg-white/15 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
         active:bg-white/20 active:drop-shadow-[0_0_12px_rgba(255,255,255,1)]
         focus-visible:bg-white/15 focus-visible:outline-none
         transition-all duration-200">Skills</a>
                <a href="#testimonials" className="mobile-nav-link  block px-5 py-3 text-sm text-white
         hover:bg-white/15 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
         active:bg-white/20 active:drop-shadow-[0_0_12px_rgba(255,255,255,1)]
         focus-visible:bg-white/15 focus-visible:outline-none
         transition-all duration-200">Testimonials</a>
                <a href="#contact" className="mobile-nav-link  block px-5 py-3 text-sm text-white
         hover:bg-white/15 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
         active:bg-white/20 active:drop-shadow-[0_0_12px_rgba(255,255,255,1)]
         focus-visible:bg-white/15 focus-visible:outline-none
         transition-all duration-200">Contact</a>
            </div>
        </div>

    </div>
</nav>
  );
}
