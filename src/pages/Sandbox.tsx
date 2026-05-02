import { useState } from "react";
import { Play, Sparkles } from "lucide-react";
import { PageShell } from "@/components/nexora/PageShell";

const demos = [
  {
    title: "AI Chatbot Demo",
    desc: "Chat with a sample assistant trained on a fictional SaaS knowledge base.",
    badge: "Live",
  },
  {
    title: "Latency Benchmark",
    desc: "Measure our C++ engine response time against the public internet.",
    badge: "Live",
  },
  {
    title: "SEO Auditor",
    desc: "Run a 30-second audit on any URL and get a prioritized fix list.",
    badge: "Beta",
  },
  {
    title: "Social Insights",
    desc: "Paste a brand handle to preview engagement scoring and content ideas.",
    badge: "Beta",
  },
];

const Sandbox = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const handleRun = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setResponse(
      `NexoraBot: Thanks for trying the sandbox! In production, your prompt "${prompt.trim()}" would be processed by our fine-tuned model in under 200ms.`
    );
  };

  return (
    <PageShell
      eyebrow="Sandbox"
      title={<>Try It <span className="text-gradient">Live</span></>}
      subtitle="Interactive demos of what NexoraWeb ships. No signup required."
    >
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-10 mb-12 reveal">
        <div className="flex items-center gap-2 mb-4 text-primary">
          <Sparkles size={18} />
          <span className="text-sm font-semibold uppercase tracking-wider">
            AI Chatbot Playground
          </span>
        </div>
        <h2 className="font-display font-bold text-2xl mb-5">Ask anything</h2>
        <form onSubmit={handleRun} className="flex flex-col sm:flex-row gap-3">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. How do I integrate your chatbot with Slack?"
            className="flex-1 bg-muted/50 border border-border rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
          />
          <button type="submit" className="btn-primary-glow inline-flex items-center gap-2 justify-center">
            <Play size={16} /> Run
          </button>
        </form>
        {response && (
          <div className="mt-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 text-sm leading-relaxed">
            {response}
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
        {demos.map((d, i) => (
          <article
            key={d.title}
            className="glass-card p-7 reveal"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-xl">{d.title}</h3>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                  d.badge === "Live"
                    ? "text-secondary border-secondary/30 bg-secondary/10"
                    : "text-primary border-primary/30 bg-primary/10"
                }`}
              >
                {d.badge}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-5">{d.desc}</p>
            <button className="btn-ghost-glow text-sm !py-2 !px-5 inline-flex items-center gap-2">
              <Play size={14} /> Launch demo
            </button>
          </article>
        ))}
      </div>
    </PageShell>
  );
};

export default Sandbox;
