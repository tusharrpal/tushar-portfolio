import { Github, Linkedin, Mail, Twitter, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">
          04 — Get in touch
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-foreground sm:text-6xl">
          Let's build something.
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block font-display text-2xl text-muted-foreground underline decoration-accent/40 decoration-2 underline-offset-8 transition-colors hover:text-accent sm:text-3xl"
        >
          {profile.email}
        </a>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
          <div className="flex items-center gap-1">
            {[
              { href: profile.github, icon: Github, label: "GitHub" },
              { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: profile.twitter, icon: Twitter, label: "Twitter" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="ml-3 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-foreground hover:border-accent/50 hover:text-accent"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name} — Made in {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
