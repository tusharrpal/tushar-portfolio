import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20"
    >
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[oklch(0.55_0.18_260)]/15 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Available for internships — Summer 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="font-display text-5xl leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          {profile.name}.<br />
          <span className="text-muted-foreground italic">building the web,</span>
          <br />
          <span className="text-accent italic">one commit at a time.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {profile.role}. Currently studying B.E. Computer Engineering in {profile.location},
          shipping side projects and learning in public.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            View work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
          >
            <Download className="h-4 w-4" />
            Download résumé
          </a>
        </motion.div>
      </div>
    </section>
  );
}
