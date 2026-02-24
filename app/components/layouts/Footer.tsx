import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050510] overflow-x-hidden">
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">

    {/* Top row */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

      {/* Brand */}
      <div className="flex items-center gap-3 shrink-0">
        <Image
          src="/assets/images/logo-dark-1768883752637.png"
          alt="ArcMax logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <div>
          
          <div className="text-xs text-neutral-400 font-semibold font-mono ">
            25 Years PHP / Laravel / CI / Wordpress
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
        {["Home","Projects","Skills","Testimonials","Contact"].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>

    {/* Bottom bar */}
    <div className="
      mt-8 pt-8 border-t border-white/5
      flex flex-col md:flex-row
      justify-between items-center
      gap-4 text-xs text-neutral-500 font-mono
    ">
      <div>© {new Date().getFullYear()} ArcMax. All rights reserved.</div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        

        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Projects</span>
        </div>
      </div>
    </div>

  </div>
</footer>

  );
}
