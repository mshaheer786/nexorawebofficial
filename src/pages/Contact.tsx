import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/nexora/PageShell";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.message) return;

    setLoading(true);
    
    // Submit directly to FormSubmit endpoint
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("service", form.service);
    formData.append("message", form.message);
    formData.append("_subject", "New contact request from Nexoraweb");
    formData.append("_captcha", "false");

    fetch("https://formsubmit.co/nexorawebofficial@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", service: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
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
              <h2 className="font-display font-bold text-2xl mb-2">Message received!</h2>
              <p className="text-muted-foreground">
                Thanks for reaching out. We've received your message and will respond within 4 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Select Service *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-muted/50 border border-border rounded-full px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                >
                  <option value="">Choose a service...</option>
                  <option value="AI Chatbots">AI Chatbots</option>
                  <option value="SEO Dominance">SEO Dominance</option>
                  <option value="Custom C++ Engines">Custom C++ Engines</option>
                  <option value="Social Growth">Social Growth</option>
                  <option value="Other">Other</option>
                </select>
              </div>
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
              <button
                type="submit"
                disabled={loading || !form.name || !form.email || !form.service || !form.message}
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
