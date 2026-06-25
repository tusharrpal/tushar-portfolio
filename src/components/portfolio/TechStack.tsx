import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";

export function TechStack() {
  return (
    <section id="stack" className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="font-mono text-xs tracking-widest text-accent uppercase">
            03 — Tech stack
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            Tools I reach for.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {techStack.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: gi * 0.08 }}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <div className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                {group.group}
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
