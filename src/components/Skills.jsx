import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const groups = [
  {
    label: "AI / ML",
    color: "accent",
    skills: ["Python", "LangChain", "FAISS", "Sentence Transformers", "Groq LLaMA 3.1", "Cohere Reranking", "RAG Pipelines", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    label: "Backend",
    color: "coral",
    skills: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT Auth", "REST APIs", "Docker", "Railway"],
  },
  {
    label: "Frontend",
    color: "accent",
    skills: ["React", "Vite", "Tailwind CSS", "Streamlit", "HTML/CSS", "JavaScript"],
  },
  {
    label: "Tools & DevOps",
    color: "coral",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Linux", "Postman"],
  },
];

const colorMap = {
  accent: "border-accent/40 text-accent bg-accent/10 hover:bg-accent/20",
  coral: "border-coral/40 text-coral bg-coral/10 hover:bg-coral/20",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-28 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-mono text-accent text-xs tracking-widest uppercase">Tech Stack</span>
          <h2 className="font-display font-bold text-4xl mt-3">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {groups.map(({ label, skills, color }, gi) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-display font-semibold text-sm text-muted uppercase tracking-widest mb-4">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className={`px-3 py-1 rounded-full border text-xs font-mono cursor-default transition-all duration-200 ${colorMap[color]}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
