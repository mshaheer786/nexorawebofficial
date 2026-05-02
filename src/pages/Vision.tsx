import { Target, Compass, Sparkles } from "lucide-react";
import { PageShell } from "@/components/nexora/PageShell";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    body: "To engineer software systems that compound value — fast, secure, and built to outlast trends.",
  },
  {
    icon: Compass,
    title: "Vision",
    body: "A world where every ambitious company has access to performance-grade AI and infrastructure.",
  },
  {
    icon: Sparkles,
    title: "Values",
    body: "Craft over speed. Substance over hype. Outcomes over output. Always engineering, never improvising.",
  },
];

const Vision = () => (
  <PageShell
    eyebrow="Our Vision"
    title={<>Engineering the <span className="text-gradient">Next Decade</span></>}
    subtitle="We exist to make exceptional engineering accessible to companies that refuse to ship mediocrity."
  >
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
      {pillars.map(({ icon: Icon, title, body }, i) => (
        <article
          key={title}
          className="glass-card p-7 reveal"
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary/10 border border-secondary/20 mb-5">
            <Icon className="text-secondary" size={22} />
          </div>
          <h2 className="font-display font-semibold text-xl mb-3">{title}</h2>
          <p className="text-muted-foreground leading-relaxed">{body}</p>
        </article>
      ))}
    </div>

    <div className="max-w-4xl mx-auto glass-card p-10 md:p-14 reveal">
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
        The <span className="text-gradient">NexoraWeb</span> Standard
      </h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
        <p>
          Founded in 2017, NexoraWeb began with a single belief: software is leverage,
          and most teams aren't using nearly enough of it.
        </p>
        <p>
          Eight years later, we've shipped systems that move billions in transactions,
          handle millions of daily users, and respond in under twelve milliseconds.
        </p>
        <p>
          We don't chase trends. We engineer outcomes — and we hold ourselves to a
          standard most agencies don't even acknowledge exists.
        </p>
      </div>
    </div>
  </PageShell>
);

export default Vision;
