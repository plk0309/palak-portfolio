import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NeuralMesh from "./NeuralMesh";

const roles = [
  "AI/ML Engineer",
  "Full-Stack Developer",
  "RAG Systems Builder",
  "Open Source Contributor",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralMesh />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7C5CFC15_0%,_transparent_65%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-4"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            B.Tech CSE · Bennett University · 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display font-bold text-5xl md:text-7xl leading-tight mb-4"
        >
          Palak Verma
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="font-display text-2xl md:text-3xl text-muted mb-8 h-10"
        >
          <span className="text-text">{displayed}</span>
          <span className="text-accent animate-pulse">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="font-body text-muted text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I build AI tools that actually help people — from vernacular legal aid platforms
          to intelligent commerce systems. Currently seeking SDE / AI roles for Jan 2026.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-accent text-white font-display font-semibold text-sm hover:bg-accent/80 transition-all duration-200 glow-accent"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-border text-text font-display font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200"
          >
            Get In Touch
          </a>
          <a
            href="https://github.com/plk0309"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-xl border border-border text-muted font-display font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200"
          >
            GitHub ↗
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { val: "8.33", label: "CGPA" },
            { val: "5+", label: "Projects" },
            { val: "3rd", label: "Year" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-3xl text-gradient">{val}</div>
              <div className="font-mono text-xs text-muted mt-1 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <div className="w-5 h-8 rounded-full border border-muted flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  );
}
