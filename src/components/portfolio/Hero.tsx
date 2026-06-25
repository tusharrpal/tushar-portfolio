import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import portraitAsset from "@/assets/portrait-tushar.png.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[oklch(0.55_0.18_260)]/15 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            OPEN TO INTERNSHIPS & FULL-TIME OPPORTUNITIES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            className="font-display text-5xl leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            {profile.name}.<br />
            <span className="text-muted-foreground italic">code. create.</span>
            <br />
            <span className="text-accent italic">Continue learning.&nbsp;</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            {profile.role}<br />
            Computer Engineering student from Pune, India, focused on building scalable web applications, exploring Java, and continuously learning.
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
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="group relative mx-auto w-full max-w-sm md:max-w-none"
        >
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/3 rounded-full bg-accent/15 blur-3xl transition-all duration-500 group-hover:bg-accent/30 group-hover:blur-[80px]" />
          <img
            src={portraitAsset.url}
            alt={`Portrait of ${profile.name}`}
            width={614}
            height={1007}
            className="relative h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03] [mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
