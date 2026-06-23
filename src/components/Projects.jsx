import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Nyay AI",
    tagline: "Vernacular Indian Legal Aid Platform",
    description:
      "A full-stack RAG-powered legal assistant supporting Hindi and English, designed for everyday legal issues like tenant disputes and consumer complaints. Built with FAISS (9,615 chunks), Cohere reranking, JWT auth, and voice integration.",
    tags: ["FastAPI", "React", "FAISS", "Groq LLaMA 3.1", "PostgreSQL", "RAG", "Cohere"],
    demo: "https://nyay-ai-one.vercel.app",
    github: "https://github.com/plk0309",
    highlight: true,
    badge: "🏆 Flagship Project",
  },
  {
    title: "AI Commerce Platform",
    tagline: "Dual Intelligent Assistant System",
    description:
      "Internship deliverable featuring a Customer AI Shopping Assistant and a Platform Owner AI Analytics Assistant. Uses SentenceTransformers semantic search, FAISS, and Groq LLaMA 3.1-8b for real-time recommendations.",
    tags: ["FastAPI", "SentenceTransformers", "FAISS", "Streamlit", "Groq", "Railway"],
    demo: null,
    github: "https://github.com/plk0309",
    badge: "💼 Internship @ Katharos Techie",
  },
  {
    title: "Hybrid ATS Resume Analyzer",
    tagline: "AI-Powered Resume Scoring Dashboard",
    description:
      "Redesigned a basic TF-IDF system into a full Streamlit dashboard with hybrid TF-IDF + semantic scoring, manipulation detection, and Plotly visualizations. Built as a critical take-home evaluation with full system redesign.",
    tags: ["Python", "Streamlit", "NLP", "TF-IDF", "Semantic Search", "Plotly"],
    demo: null,
    github: "https://github.com/plk0309/hybrid-ats-resume-analyzer",
  },
  {
    title: "Crop Recommendation System",
    tagline: "Weather & Soil Based ML Model",
    description:
      "Random Forest classifier recommending optimal crops based on soil composition and weather data. Covers preprocessing, model training, and evaluation — groundwork for the upcoming agriculture AI assistant.",
    tags: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Data Analysis"],
    demo: null,
    github: "https://github.com/plk0309",
  },
];

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`group relative rounded-2xl border bg-surface p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 ${
        project.highlight ? "border-accent/50 glow-accent" : "border-border hover:border-accent/30"
      }`}
    >
      {project.badge && (
        <span className="font-mono text-xs text-accent">{project.badge}</span>
      )}
      <div>
        <h3 className="font-display font-bold text-xl text-text">{project.title}</h3>
        <p className="font-body text-muted text-sm mt-1">{project.tagline}</p>
      </div>
      <p className="font-body text-muted text-sm leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded bg-bg border border-border font-mono text-xs text-muted">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 pt-2">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-white text-xs font-display font-semibold hover:bg-accent/80 transition-colors"
          >
            Live Demo ↗
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-muted text-xs font-display font-semibold hover:border-accent hover:text-accent transition-all"
        >
          GitHub ↗
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-28 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="font-mono text-accent text-xs tracking-widest uppercase">Work</span>
        <h2 className="font-display font-bold text-4xl mt-3">
          Projects & <span className="text-gradient">Builds</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
