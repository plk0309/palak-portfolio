import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Move these to .env later for better security
const SERVICE_ID = "service_spz4edm";
const TEMPLATE_ID = "template_92t9lzp";
const PUBLIC_KEY = "TsbQNNo2BEurOZ_5S";

const links = [
  {
    label: "Email",
    value: "palakverma0396@gmail.com",
    href: "mailto:palakverma0396@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "palak-verma-plk",
    href: "https://linkedin.com/in/palak-verma-plk",
    icon: "🔗",
  },
  {
    label: "GitHub",
    value: "plk0309",
    href: "https://github.com/plk0309",
    icon: "⌥",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.from_name.trim() ||
      !form.from_email.trim() ||
      !form.message.trim()
    ) {
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          message: form.message,
        },
        PUBLIC_KEY
      );

      setStatus("success");

      setForm({
        from_name: "",
        from_email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 max-w-6xl mx-auto px-6"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="font-mono text-accent text-xs tracking-widest uppercase">
          Let's talk
        </span>

        <h2 className="font-display font-bold text-4xl mt-3 mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h2>

        <p className="font-body text-muted text-lg max-w-xl mx-auto">
          I'm actively looking for SDE / AI roles. If you're hiring or want to
          collaborate, reach out!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-surface hover:border-accent/50 transition-all duration-200"
            >
              <span className="text-xl w-8 text-center">{link.icon}</span>

              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-wider">
                  {link.label}
                </p>

                <p className="font-body text-text text-sm mt-0.5 group-hover:text-accent transition-colors">
                  {link.value}
                </p>
              </div>
            </a>
          ))}

          {/* Status Card */}
          <div className="p-5 rounded-2xl border border-border bg-surface/50">
            <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">
              Status
            </p>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <span className="font-body text-sm text-text">
                Open to opportunities
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-border bg-surface p-7"
        >
          <h3 className="font-display font-semibold text-lg text-text mb-6">
            Send a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5">
                Your Name
              </label>

              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text font-body text-sm placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors duration-200"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5">
                Your Email
              </label>

              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text font-body text-sm placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors duration-200"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Palak, I'd like to..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text font-body text-sm placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-xl bg-accent text-white font-display font-semibold text-sm hover:bg-accent/80 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message →"}
            </button>

            {/* Success Message */}
            {status === "success" && (
              <p className="text-green-400 font-mono text-xs text-center">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}

            {/* Error Message */}
            {status === "error" && (
              <p className="text-red-400 font-mono text-xs text-center">
                ✗ Something went wrong. Try emailing directly.
              </p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center border-t border-border pt-8 mt-16"
      >
        <p className="font-mono text-muted text-xs">
          Built with React + Vite + Tailwind · Deployed on Vercel
        </p>

        <p className="font-mono text-muted text-xs mt-1">
          © 2026 Palak Verma ·{" "}
          <a
            href="https://github.com/plk0309"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            plk0309
          </a>
        </p>
      </motion.div>
    </section>
  );
}