import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    type: "work",
    title: "AI/ML Intern",
    org: "Katharos Techie",
    period: "2024 – Present",
    points: [
      "Built an AI Commerce Platform with dual intelligent assistants for customer shopping and platform analytics.",
      "Implemented semantic search with SentenceTransformers + FAISS and real-time Q&A via Groq LLaMA 3.1.",
      "Deployed FastAPI backend to Railway; Streamlit frontend to Streamlit Cloud.",
    ],
  },
  {
    type: "project",
    title: "Nyay AI — Vernacular Legal Aid",
    org: "Personal Project",
    period: "2024",
    points: [
      "Designed and deployed end-to-end RAG system: FAISS index with 9,615 document chunks, Cohere reranking.",
      "FastAPI backend with JWT auth + PostgreSQL; React frontend deployed on Vercel.",
      "Voice integration and multi-language support (Hindi + English).",
    ],
  },
  {
    type: "education",
    title: "B.Tech — Computer Science & Engineering",
    org: "Bennett University, Greater Noida",
    period: "2022 – 2026",
    points: [
      "CGPA: 8.33 / 10",
      "Focus areas: AI/ML, Data Structures & Algorithms, Full-Stack Development.",
      "Campus placements target: Jan 2026.",
    ],
  },
];

const typeColor = {
  work: "border-accent bg-accent",
  project: "border-coral bg-coral",
  education: "border-muted bg-muted",
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-28 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-mono text-accent text-xs tracking-widest uppercase">Journey</span>
          <h2 className="font-display font-bold text-4xl mt-3">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {timeline.map(({ title, org, period, points, type }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div
                  className={`absolute left-2 top-1.5 w-4 h-4 rounded-full border-2 ${typeColor[type]}`}
                />

                <div className="rounded-2xl border border-border bg-surface p-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-text">{title}</h3>
                      <p className="font-body text-accent text-sm">{org}</p>
                    </div>
                    <span className="font-mono text-xs text-muted bg-bg px-3 py-1 rounded-full border border-border">
                      {period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {points.map((p) => (
                      <li key={p} className="font-body text-muted text-sm flex gap-2">
                        <span className="text-accent mt-0.5">›</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
