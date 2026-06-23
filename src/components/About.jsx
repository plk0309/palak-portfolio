import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Left: text */}
        <div>
          <span className="font-mono text-accent text-xs tracking-widest uppercase">About Me</span>
          <h2 className="font-display font-bold text-4xl mt-3 mb-6">
            Building AI that <span className="text-gradient">matters</span>
          </h2>
          <p className="font-body text-muted leading-relaxed mb-4">
            I'm a third-year Computer Science student at Bennett University with a focus on
            AI/ML and full-stack development. My work is driven by a simple idea: technology
            should solve real problems for real people.
          </p>
          <p className="font-body text-muted leading-relaxed mb-4">
            I built <span className="text-text font-medium">Nyay AI</span> — a vernacular Indian legal aid
            platform using RAG + LLaMA — because millions of people can't access legal help in English.
            Currently working on an AI agriculture assistant for wheat farmers in UP, and completing
            an AI/ML internship at Katharos Techie.
          </p>
          <p className="font-body text-muted leading-relaxed">
            My stack spans the full pipeline: ML modeling, FastAPI backends, React frontends,
            vector search with FAISS, and production deployments on Railway + Vercel.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://linkedin.com/in/palak-verma-plk"
              target="_blank"
              rel="noreferrer"
              className="text-accent font-mono text-sm hover:underline"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/plk0309"
              target="_blank"
              rel="noreferrer"
              className="text-accent font-mono text-sm hover:underline"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Right: terminal card */}
        <div className="rounded-2xl border border-border bg-surface overflow-hidden">
          <div className="flex gap-1.5 px-4 py-3 bg-bg border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-2 font-mono text-xs text-muted">palak.info</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-3">
            {[
              { key: "name", val: "Palak Verma", color: "text-coral" },
              { key: "university", val: "Bennett University, UP", color: "text-text" },
              { key: "cgpa", val: "8.33 / 10", color: "text-green-400" },
              { key: "focus", val: "AI/ML + Full-Stack", color: "text-accent" },
              { key: "status", val: "Open to Opportunities ✓", color: "text-green-400" },
              { key: "location", val: "Uttar Pradesh, India", color: "text-text" },
              { key: "github", val: "plk0309", color: "text-accent" },
            ].map(({ key, val, color }) => (
              <div key={key} className="flex gap-3">
                <span className="text-muted min-w-[100px]">{key}:</span>
                <span className={color}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
