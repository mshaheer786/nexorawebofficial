import {
  Zap,
  Brain,
  ShieldCheck,
  TrendingUp,
  Bot,
  Search,
  Cog,
  Share2,
  ArrowRight,
  Star,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import { Navbar } from "@/components/nexora/Navbar";
import { Counter } from "@/components/nexora/Counter";
import { TypingSubtitle } from "@/components/nexora/TypingSubtitle";
import { useReveal } from "@/hooks/useReveal";

const whyCards = [
  { icon: Zap, title: "Lightning Fast", desc: "Sub-12ms response times via optimized C++ infrastructure." },
  { icon: Brain, title: "AI-Powered", desc: "Machine learning solutions that adapt and scale." },
  { icon: ShieldCheck, title: "Enterprise Grade", desc: "Military-grade security with a 99.9% uptime SLA." },
  { icon: TrendingUp, title: "Proven Results", desc: "Average 340% ROI improvement across all clients." },
];

const services = [
  { icon: Bot, title: "AI Chatbots", desc: "24/7 intelligent customer support systems." },
  { icon: Search, title: "SEO Dominance", desc: "Rank #1 and outperform every competitor." },
  { icon: Cog, title: "Custom Engines", desc: "Tailor-made C++ solutions for unique operations." },
  { icon: Share2, title: "Social Growth", desc: "Data-driven strategies for exponential engagement." },
];

const steps = [
  { n: "01", title: "Discovery", desc: "We analyze your business goals and infrastructure." },
  { n: "02", title: "Strategy", desc: "Custom roadmap tailored to your industry." },
  { n: "03", title: "Build", desc: "Our engineers execute with precision and speed." },
  { n: "04", title: "Scale", desc: "We optimize and grow your system continuously." },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "Vertex Logistics",
    quote:
      "NexoraWeb rebuilt our routing engine in C++ and cut latency by 92%. The team operates at a level I've never seen before.",
  },
  {
    name: "Marcus Hale",
    role: "VP Marketing",
    company: "Lumen Retail",
    quote:
      "Their AI chatbot handles 80% of our support tickets autonomously. Customer satisfaction is up, costs are down. Unreal ROI.",
  },
  {
    name: "Priya Raman",
    role: "Founder",
    company: "Northwind AI",
    quote:
      "From SEO to social, NexoraWeb is the only agency that actually delivered on every promise. They're our long-term partner.",
  },
];

const Index = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />
          <div
            className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float-slow pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float-slow pointer-events-none"
            aria-hidden="true"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative max-w-5xl mx-auto text-center reveal is-visible">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_hsl(var(--secondary))]" />
              Trusted by 200+ enterprise teams
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
              <span className="text-gradient">Engineering</span>
              <br />
              the Future
            </h1>
            <TypingSubtitle />
            <p className="max-w-2xl mx-auto text-muted-foreground mt-6 text-base md:text-lg">
              We build AI-powered systems, custom C++ infrastructure, and growth engines
              for ambitious companies that refuse to settle for average.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="btn-primary-glow inline-flex items-center gap-2">
                Start Your Journey <ArrowRight size={18} />
              </a>
              <a href="/portfolio" className="btn-ghost-glow">
                View Our Work
              </a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section id="stats" aria-label="Company statistics" className="px-4 py-16">
          <div className="max-w-6xl mx-auto glass-card p-8 md:p-10 reveal">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-border">
              {[
                { n: 200, suffix: "+", label: "Enterprise Clients" },
                { n: 500, suffix: "+", label: "Successful Projects" },
                { n: 8, suffix: "+", label: "Years Experience" },
                { n: 99.9, suffix: "%", label: "System Uptime", decimals: 1 },
              ].map((s, i) => (
                <li key={i} className="text-center md:px-4">
                  <div
                    className="font-display font-bold text-4xl md:text-5xl text-gradient"
                    style={{ textShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
                  >
                    <Counter end={s.n} suffix={s.suffix} decimals={s.decimals ?? 0} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHY US */}
        <section id="about" aria-labelledby="why-heading" className="px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Why NexoraWeb
              </p>
              <h2 id="why-heading" className="font-display font-bold text-4xl md:text-5xl">
                Why Industry Leaders Choose Us
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyCards.map(({ icon: Icon, title, desc }, i) => (
                <article
                  key={title}
                  className="glass-card p-7 reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/20 mb-5">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" aria-labelledby="services-heading" className="px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Capabilities
              </p>
              <h2 id="services-heading" className="font-display font-bold text-4xl md:text-5xl">
                What We Build
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(({ icon: Icon, title, desc }, i) => (
                <article
                  key={title}
                  className="glass-card p-7 group reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary/10 border border-secondary/20 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="text-secondary" size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{desc}</p>
                  <a
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" aria-labelledby="process-heading" className="px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Process
              </p>
              <h2 id="process-heading" className="font-display font-bold text-4xl md:text-5xl">
                How We Work
              </h2>
            </div>
            <ol className="grid md:grid-cols-4 gap-6 relative">
              <div
                className="hidden md:block absolute top-8 left-12 right-12 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0"
                aria-hidden="true"
              />
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  className="glass-card p-6 relative reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="font-display font-bold text-3xl text-gradient mb-3">{s.n}</div>
                  <h3 className="font-display font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" aria-labelledby="testimonials-heading" className="px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Testimonials
              </p>
              <h2 id="testimonials-heading" className="font-display font-bold text-4xl md:text-5xl">
                What Our Clients Say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <article
                  key={t.name}
                  className="glass-card p-7 flex flex-col reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex gap-1 mb-4" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 italic leading-relaxed mb-6 flex-1">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="font-display font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section id="cta" aria-labelledby="cta-heading" className="px-4 py-20">
          <div
            className="max-w-6xl mx-auto rounded-3xl p-12 md:p-20 text-center relative overflow-hidden glass reveal"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(190 100% 50% / 0.18), hsl(240 18% 7% / 0.8))",
            }}
          >
            <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden="true" />
            <div className="relative">
              <h2 id="cta-heading" className="font-display font-bold text-4xl md:text-6xl mb-5">
                Ready to <span className="text-gradient">Transform</span> Your Business?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Join hundreds of enterprise clients experiencing the NexoraWeb advantage.
              </p>
              <a
                href="/contact"
                className="btn-primary-glow inline-flex items-center gap-2 text-base !py-4 !px-8"
              >
                Start Your Journey <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border px-4 py-12 mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <a href="#home" className="flex items-center gap-2 font-display font-bold text-xl">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-[0_0_18px_hsl(var(--primary)/0.6)]" />
              <span className="text-gradient">NexoraWeb</span>
            </a>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Services", href: "#services" },
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
          <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            © 2025 NexoraWeb. All rights reserved. | Engineered for Excellence
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
