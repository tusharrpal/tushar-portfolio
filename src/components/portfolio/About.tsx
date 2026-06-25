import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-widest text-accent uppercase">
            01 — About
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            A student who codes like it's a craft.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {p}
            </p>
          ))}

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {about.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl text-foreground sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
