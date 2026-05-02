import { Bot, Search, Cog, Share2, Check } from "lucide-react";
import { PageShell } from "@/components/nexora/PageShell";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    desc: "24/7 intelligent customer support that learns from every interaction. Trained on your data, integrated with your stack.",
    features: ["GPT-class language models", "Multi-channel deployment", "Live human handoff", "Analytics dashboard"],
  },
  {
    icon: Search,
    title: "SEO Dominance",
    desc: "Technical SEO, content engines, and link strategies that put you on page one — and keep you there.",
    features: ["Technical audit & fixes", "Programmatic content", "Authority backlinks", "Rank tracking"],
  },
  {
    icon: Cog,
    title: "Custom C++ Engines",
    desc: "High-performance systems engineered for latency-critical workloads — trading, simulation, real-time analytics.",
    features: ["Sub-12ms response time", "Lock-free concurrency", "SIMD optimization", "On-prem or cloud"],
  },
  {
    icon: Share2,
    title: "Social Growth",
    desc: "Data-driven social strategies that turn followers into customers across LinkedIn, X, Instagram, and TikTok.",
    features: ["Content production", "Paid amplification", "Influencer partnerships", "Conversion tracking"],
  },
];

const Services = () => (
  <PageShell
    eyebrow="Services"
    title={<>What We <span className="text-gradient">Build</span></>}
    subtitle="Four core capabilities, one obsessive standard: ship systems that move the needle."
  >
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
      {services.map(({ icon: Icon, title, desc, features }, i) => (
        <article
          key={title}
          className="glass-card p-8 reveal"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 border border-primary/20 mb-5">
            <Icon className="text-primary" size={26} />
          </div>
          <h2 className="font-display font-semibold text-2xl mb-3">{title}</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">{desc}</p>
          <ul className="space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-secondary flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </PageShell>
);

export default Services;
