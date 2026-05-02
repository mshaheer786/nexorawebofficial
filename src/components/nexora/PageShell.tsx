import { ReactNode } from "react";
import { Navbar } from "@/components/nexora/Navbar";
import { ArrowRight, Linkedin, Twitter, Github } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

interface PageShellProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}

export const PageShell = ({ eyebrow, title, subtitle, children }: PageShellProps) => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <section
          className="relative px-4 pt-36 pb-16"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-5xl mx-auto text-center reveal is-visible">
            {eyebrow && (
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                {eyebrow}
              </p>
            )}
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
                {subtitle}
              </p>
            )}
          </div>
        </section>

        <div className="px-4 pb-24">{children}</div>

        <section className="px-4 py-16">
          <div
            className="max-w-5xl mx-auto rounded-3xl p-10 md:p-14 text-center relative overflow-hidden glass reveal"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(190 100% 50% / 0.18), hsl(240 18% 7% / 0.8))",
            }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Let's build something <span className="text-gradient">extraordinary</span>.
            </h2>
            <p className="text-muted-foreground mb-8">
              Tell us about your project — we usually reply within a few hours.
            </p>
            <a href="/contact" className="btn-primary-glow inline-flex items-center gap-2">
              Start Your Journey <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-4 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <a href="/" className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-[0_0_18px_hsl(var(--primary)/0.6)]" />
            <span className="text-gradient">NexoraWeb</span>
          </a>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Vision", href: "/vision" },
                { label: "Sandbox", href: "/sandbox" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Github, label: "GitHub" },
            ].map(({ Icon, label }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2025 NexoraWeb. All rights reserved. | Engineered for Excellence
        </div>
      </footer>
    </div>
  );
};
