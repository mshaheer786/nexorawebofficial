import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/nexora/PageShell";

const projects = [
  {
    client: "Vertex Logistics",
    tag: "C++ Engine",
    title: "Real-time routing engine",
    result: "92% latency reduction, $4.2M annual savings",
  },
  {
    client: "Lumen Retail",
    tag: "AI Chatbot",
    title: "Autonomous support system",
    result: "80% ticket deflection, 4.8★ CSAT",
  },
  {
    client: "Northwind AI",
    tag: "SEO + Social",
    title: "Organic growth program",
    result: "12x organic traffic in 9 months",
  },
  {
    client: "Helix Trading",
    tag: "C++ Engine",
    title: "Low-latency execution layer",
    result: "Sub-8ms order roundtrip",
  },
  {
    client: "Aurora Health",
    tag: "AI Chatbot",
    title: "Patient triage assistant",
    result: "50% reduction in call center load",
  },
  {
    client: "Stratos Media",
    tag: "Social Growth",
    title: "Cross-platform content engine",
    result: "+2.1M followers, 340% ROI",
  },
];

const Portfolio = () => (
  <PageShell
    eyebrow="Portfolio"
    title={<>Work That <span className="text-gradient">Delivers</span></>}
    subtitle="A selection of recent engagements with enterprise teams across industries."
  >
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <article
          key={p.title}
          className="glass-card p-7 group reveal cursor-pointer"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-medium uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              {p.tag}
            </span>
            <ArrowUpRight
              size={20}
              className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
            />
          </div>
          <p className="text-sm text-muted-foreground mb-1">{p.client}</p>
          <h2 className="font-display font-semibold text-xl mb-4">{p.title}</h2>
          <p className="text-sm text-secondary font-medium">{p.result}</p>
        </article>
      ))}
    </div>
  </PageShell>
);

export default Portfolio;
