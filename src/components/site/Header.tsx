import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Events", href: "#events" },
  { label: "Centres", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[color:var(--color-cream)]/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border/50"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Little Spartans brand logo */}
        <a href="#home" aria-label="Little Spartans home" className="flex items-center shrink-0">
          <img src={logo} alt="Little Spartans" className="h-12 md:h-14 w-auto max-w-[190px] object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-md shadow-black/5 border border-border/60">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${active === n.href
                  ? "text-primary-foreground font-bold"
                  : "text-navy hover:text-primary hover:bg-slate-100/60"
                }`}
            >
              {active === n.href && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[oklch(0.62_0.21_35)] shadow-md shadow-primary/25 -z-[1]" style={{ zIndex: -1 }} />
              )}
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5 shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]">
            Book a Free Demo
          </a>
          {/* <Link to="/login" className="hidden sm:inline-flex btn-navy text-sm py-2.5 px-4 items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]">
            <LogIn className="w-4 h-4" /> Login
          </Link> */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden grid place-items-center w-10 h-10 rounded-xl bg-navy text-navy-foreground hover:scale-105 transition shadow-sm"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-border/60 bg-[color:var(--color-cream)]/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-1">
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-navy font-semibold hover:bg-primary/10 hover:text-primary transition"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {n.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-3 sm:hidden">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary"
            >
              Book a Free Demo
            </a>
            {/* <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="btn-navy flex items-center justify-center gap-1.5"
            >
              <LogIn className="w-4 h-4" /> Login
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
}
