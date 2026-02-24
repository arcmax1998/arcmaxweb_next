export default function Contact() {
  return (
     <>
    
    <section   id="contact"
      className="relative w-full py-32 bg-[#0A0B1E] border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col mb-10 md:mb-20">
  {/* Top Section - Let's Connect */}
  <div className="w-full">
    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 font-mono mb-6">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      Let&apos;s Connect
    </span>
  </div>

  {/* Middle Section - Ready to Build */}
  <div className="w-full mb-8 md:mb-12">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight m-0">
      Ready to Build{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#EF4444]">
        Projects
      </span>
    </h2>
  </div>

  {/* Bottom Two-Column Section */}
  <div className="flex flex-col md:flex-row w-full gap-6">
    {/* Left Column - Paragraph Text */}
    <div className="flex-1">
      <p className="max-w-4xl text-neutral-400 text-sm lg:text-base leading-relaxed mb-0 sm:mb-[revert]">
        Whether you need a custom CRM system, an e-commerce platform, an enterprise web application, or a beautiful no-code WordPress website for your small business, connect with me and see how 25 years of experience can bring your project to life.
      </p>
    </div>

    {/* Divider - Visible on md and above */}
    <div className="hidden md:block w-px bg-neutral-800 self-stretch"></div>

    {/* Right Column - Contact Info (Stacked) */}
    <div className="flex-1 md:pl-8">
      <div className="space-y-4 mt-0 pt-0">
        {/* Email */}
        <div className="flex items-center gap-4 text-neutral-300">
          <div className="w-12 h-12 rounded-lg bg-[#DC2626]/10 border border-[#DC2626]/20 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[#DC2626]"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22 6 12 13 2 6" />
            </svg>
          </div>

          <div>
            <div className="text-sm text-neutral-500 font-mono">
              Email
            </div>
            <a
              href="mailto:contact@arc-max.com"
              className="text-white font-medium hover:text-[#EF4444] transition-colors"
            >
              contact@arc-max.com
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center gap-4 text-neutral-300">
          <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[#25D366]"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>

          <div>
            <div className="text-sm text-neutral-500 font-mono">
              WhatsApp
            </div>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-[#25D366] transition-colors"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
      </div>
    </section>
    </>
  );
}
