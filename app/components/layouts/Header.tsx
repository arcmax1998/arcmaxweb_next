"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ===============================
     SCROLL BG EFFECT
  =============================== */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===============================
     ACTIVE SECTION TRACKING
  =============================== */
  useEffect(() => {
    const sections = NAV_ITEMS.map(i => document.getElementById(i.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(section => observer.observe(section!));
    return () => observer.disconnect();
  }, []);

  /* ===============================
     CLOSE MOBILE MENU ON LINK CLICK
  =============================== */
  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  /* ===============================
     CLOSE MOBILE MENU ON ESC KEY
  =============================== */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  /* ===============================
     CLOSE MOBILE MENU ON CLICK OUTSIDE
  =============================== */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#mobileMenuBtn') && !target.closest('#mobileMenu')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 inset-x-0 z-50 p-6 transition-all duration-300
        ${scrolled
          ? "bg-[#0A0B1E]/95 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-[1fr_auto] items-center">

        {/* LEFT BRAND */}
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
                        <span className="hidden md:inline-block">25 Years</span> PHP / Laravel / CI / Wordpress
                    </span>
                </div>
            </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map(item => {
            const isActive = active === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`
                  nav-link group relative text-sm font-medium
                  px-5 py-[3px] leading-none transition-all duration-300
                  no-underline hover:no-underline
                  ${isActive ? "nav-active" : "text-neutral-300 hover:text-white"}
                `}
              >
                {/* RED PILL */}
                <span
                  className={`
                    nav-pill pointer-events-none absolute -inset-x-1 -inset-y-1
                    rounded-full opacity-0
                    bg-gradient-to-r from-[#B91C1C] via-[#EF4444] to-[#B91C1C]
                    shadow-[0_6px_20px_rgba(220,38,38,0.55)]
                    blur-[0.5px]
                    transition-all duration-300
                    ${isActive ? "opacity-0" : "group-hover:opacity-100"}
                  `}
                />

                {/* TEXT */}
                <span className="relative z-10 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        {/*  RIGHT: Mobile Burger */}
        <div className="pointer-events-auto justify-self-end lg:hidden z-50">
            <button 
                id="mobileMenuBtn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden w-11 h-11 rounded-sm border border-white/20
                  bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-[#DC2626]
                  shadow-[0_0_20px_rgba(220,38,38,0.45)]
                  flex items-center justify-center text-white
                  transition-transform hover:scale-105
                  ${mobileMenuOpen ? 'opacity-90' : ''}`}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
            >
                 <span className="text-2xl leading-none">
                    {mobileMenuOpen ? '✕' : '☰'}
                 </span>
            </button>

            {/*  Mobile Dropdown */}
            <div 
                id="mobileMenu"
                className={`absolute right-6 mt-1 w-52 rounded-sm
    bg-[#0A0B1E]  /* Dark background instead of gradient */
    z-[100]
    shadow-[0_20px_60px_rgba(0,0,0,0.6)]
    overflow-hidden
    origin-top-right
    ${mobileMenuOpen 
      ? 'opacity-100 scale-100 visible' 
      : 'opacity-0 scale-95 invisible '}`}
            >
                <a 
                  href="#hero" 
                  onClick={handleMobileLinkClick}
                  
 
  
  className="mobile-nav-link block px-5 py-3 text-sm text-white
  bg-[#DC2626] 
  hover:bg-[#B91C1C]  /* Darker red on hover */
    hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
    active:bg-[#991B1B]
    active:drop-shadow-[0_0_12px_rgba(255,255,255,1)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
    no-underline hover:no-underline"
                >
                  Home
                </a>
                <a 
                  href="#projects" 
                  onClick={handleMobileLinkClick}
                  className="mobile-nav-link block px-5 py-3 text-sm text-white
    bg-[#DC2626]  /* Solid background to override parent gradient */
    hover:bg-[#B91C1C]  /* Darker red on hover */
    hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
    active:bg-[#991B1B]
    active:drop-shadow-[0_0_12px_rgba(255,255,255,1)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
    no-underline hover:no-underline
    "
                >
                  Projects
                </a>
                <a 
                  href="#skills" 
                  onClick={handleMobileLinkClick}
                  className="mobile-nav-link block px-5 py-3 text-sm text-white
    bg-[#DC2626]  /* Solid background to override parent gradient */
    hover:bg-[#B91C1C]  /* Darker red on hover */
    hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
    active:bg-[#991B1B]
    active:drop-shadow-[0_0_12px_rgba(255,255,255,1)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
    no-underline hover:no-underline
    "
                >
                  Skills
                </a>
                <a 
                  href="#testimonials" 
                  onClick={handleMobileLinkClick}
                  className="mobile-nav-link block px-5 py-3 text-sm text-white
    bg-[#DC2626]  /* Solid background to override parent gradient */
    hover:bg-[#B91C1C]  /* Darker red on hover */
    hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
    active:bg-[#991B1B]
    active:drop-shadow-[0_0_12px_rgba(255,255,255,1)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
    no-underline hover:no-underline
    "
                >
                  Testimonials
                </a>
                <a 
                  href="#contact" 
                  onClick={handleMobileLinkClick}
                  className="mobile-nav-link block px-5 py-3 text-sm text-white
    bg-[#DC2626]  /* Solid background to override parent gradient */
    hover:bg-[#B91C1C]  /* Darker red on hover */
    hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
    active:bg-[#991B1B]
    active:drop-shadow-[0_0_12px_rgba(255,255,255,1)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
    no-underline hover:no-underline
    "
                >
                  Contact
                </a>
            </div>
        </div>

    </div>
  </nav>
  );
}