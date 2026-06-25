import { Mail, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.19-3.08-.12-.3-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.77.11 3.07.74.8 1.19 1.82 1.19 3.08 0 4.43-2.69 5.4-5.26 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function GmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457Z" />
    </svg>
  );
}

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
              { href: profile.github, Icon: GithubIcon, label: "GitHub" },
              { href: profile.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
              { href: profile.twitter, Icon: TwitterIcon, label: "Twitter" },
              { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
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
