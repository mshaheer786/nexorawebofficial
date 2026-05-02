import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Vision", href: "/vision" },
  { label: "Sandbox", href: "/sandbox" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav
        aria-label="Primary"
        className={`mx-auto max-w-6xl glass rounded-full px-5 md:px-7 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "shadow-[0_8px_40px_rgba(0,212,255,0.15)]" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-[0_0_18px_hsl(var(--primary)/0.6)]" />
          <span className="text-gradient">NexoraWeb</span>
        </Link>

        <ul className="hidden md:flex items-center gap-7 text-sm">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="hidden md:inline-block btn-primary-glow text-sm !py-2 !px-5">
          Get Started
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-auto max-w-6xl mt-2 glass rounded-2xl p-5 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary-glow inline-block text-sm !py-2 !px-5 mt-2"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
