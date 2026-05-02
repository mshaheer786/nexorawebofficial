import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/nexora/PageShell";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/nexorawebofficial@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          _subject: "New contact request from Nexoraweb",
          _captcha: "false",
          _template: "table",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <PageShell
      eyebrow="Contact"
      title={<>Let's <span className="text-gradient">Talk</span></>}
      subtitle="Tell us about your project. We typically respond within a few hours during business days."
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
        <aside className="lg:col-span-1 space-y-4 reveal">
          {[
            {
              Icon: Mail,
              label: "Email",
              value: "nexorawebofficial@gmail.com",
              href: "mailto:nexorawebofficial@gmail.com",
            },
            { Icon: MapPin, label: "Headquarters", value: "Remote-first, global team" },
            { Icon: Clock, label: "Response time", value: "Under 4 hours" },
          ].map(({ Icon, label, value, href }) => (
            <div key={label} className="glass-card p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/20 flex-shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {label}
                </p>
                {href ? (
                  <a href={href} className="font-medium text-primary hover:underline">
                    {value}
                  </a>
                ) : (
                  <p className="font-medium">{value}</p>
                )}
              </div>
            </div>
          ))}
        </aside>

        <div className="lg:col-span-2 glass-card p-8 md:p-10 reveal">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-secondary/10 border border-secondary/30 mb-5">
                <CheckCircle2 size={30} className="text-secondary" />
              </div>
              <h2 className="font-display font-bold text-2xl mb-2">Message received</h2>
              <p className="text-muted-foreground">
                Thanks {form.name.split(" ")[0]} — your message has been sent to nexorawebofficial@gmail.com and we&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
              </div>
              <Field label="Company" name="company" value={form.company} onChange={handleChange} />
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Project details *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted/50 border border-border rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
                  placeholder="Tell us what you're building, your timeline, and any constraints…"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <button
                type="submit"
                disabled={loading || !form.name || !form.email || !form.message}
                className="btn-primary-glow inline-flex items-center gap-2"
              >
                {loading ? "Sending..." : "Send message"} <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </PageShell>
  );
};

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}
const Field = ({ label, name, value, onChange, type = "text", required }: FieldProps) => (
  <div>
    <label className="block text-sm font-medium mb-2 text-muted-foreground">
      {label}
      {required && " *"}
    </label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-muted/50 border border-border rounded-full px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
    />
  </div>
);

export default Contact;
