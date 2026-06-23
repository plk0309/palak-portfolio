import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Languages",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    label: "AI / ML",
    skills: [
      { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "FAISS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    ],
  },
  {
    label: "Frontend & Backend",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ],
  },
  {
    label: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-xs tracking-widest uppercase">Tech Stack</span>
          <h2 className="font-display font-bold text-4xl mt-3">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map(({ label, skills }, ci) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-muted uppercase tracking-widest">{label}</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-3">
                {skills.map(({ name, icon }, si) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.07 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border bg-surface hover:border-accent/50 hover:bg-accent/5 transition-colors duration-200 cursor-default group"
                  >
                    <img
                      src={icon}
                      alt={name}
                      className="w-5 h-5 object-contain"
                      style={name === "Next.js" ? { filter: "invert(0.8)" } : {}}
                    />
                    <span className="font-mono text-sm text-muted group-hover:text-text transition-colors duration-200">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core CS bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 p-5 rounded-2xl border border-border bg-surface/50"
        >
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">Core CS</p>
          <div className="flex flex-wrap gap-2">
            {["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "DBMS", "OOP"].map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full border border-accent/20 bg-accent/5 font-mono text-xs text-accent/70"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}