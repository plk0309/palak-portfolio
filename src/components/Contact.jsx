import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com", icon: "✉" },
  { label: "LinkedIn", value: "palak-verma-plk", href: "https://linkedin.com/in/palak-verma-plk", icon: "🔗" },
  { label: "GitHub", value: "plk0309", href: "https://github.com/plk0309", icon: "⌥" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-28 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="font-mono text-accent text-xs tracking-widest uppercase">Let's talk</span>
        <h2 className="font-display font-bold text-4xl mt-3 mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="font-body text-muted text-lg max-w-xl mx-auto">
          I'm actively looking for SDE / AI roles starting January 2026. If you're hiring or want to
          collaborate on something cool, reach out!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-4 mb-12"
      >
        {links.map(({ label, value, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-surface p-6 flex flex-col gap-3 hover:border-accent transition-all duration-200 hover:-translate-y-1"
          >
            <span className="text-2xl">{icon}</span>
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-wider">{label}</p>
              <p className="font-body text-text text-sm mt-1 group-hover:text-accent transition-colors">
                {value}
              </p>
            </div>
          </a>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center border-t border-border pt-8"
      >
        <p className="font-mono text-muted text-xs">
          Built with React + Vite + Tailwind · Deployed on GitHub Pages
        </p>
        <p className="font-mono text-muted text-xs mt-1">
          © 2024 Palak Verma · <a href="https://github.com/plk0309" className="text-accent hover:underline">plk0309</a>
        </p>
      </motion.div>
    </section>
  );
}
