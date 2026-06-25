import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { TechStack } from "@/components/portfolio/TechStack";
import { Footer } from "@/components/portfolio/Footer";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — Full Stack Developer & Java Enthusiast` },
      {
        name: "description",
        content:
          "Portfolio of a Computer Engineering student and full-stack developer based in Pune, India. Selected projects, tech stack, and résumé.",
      },
      { property: "og:title", content: `${profile.name} — Portfolio` },
      {
        property: "og:description",
        content:
          "Computer Engineering student & full-stack developer building thoughtful web experiences.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Footer />
    </main>
  );
}
