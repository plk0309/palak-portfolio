import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-xl tracking-tight">
          <span className="text-gradient">PV</span>
          <span className="text-muted text-sm font-mono ml-2">/ palak verma</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-muted hover:text-text text-sm font-body transition-colors duration-200 hover:text-accent"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent text-sm font-display font-medium hover:bg-accent hover:text-white transition-all duration-200"
        >
          Resume ↗
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden text-text" onClick={() => setOpen(!open)}>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-text transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-text transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-text transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-border px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-muted hover:text-accent font-body transition-colors"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-accent font-display font-medium"
          >
            Resume ↗
          </a>
        </div>
      )}
    </motion.nav>
  );
}
