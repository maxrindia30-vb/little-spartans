import { Instagram, Facebook, MessageCircle, Zap, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Events & Parties", href: "#events" },
  { label: "Centres", href: "#gallery" },
  { label: "Careers", href: "#contact" },
  { label: "Blog", href: "#contact" },
];

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: MessageCircle, href: "https://wa.me/919176902919", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground md:mx-4 md:mb-4 md:rounded-[2.5rem]">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute top-0 right-1/4 w-96 h-64 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      {/* Newsletter teaser strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-bold text-lg">Stay in the loop 🎉</p>
            <p className="text-white/60 text-sm mt-0.5">Get updates on events, schedules and free demo classes.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 hover:bg-primary border border-primary/30 hover:border-primary text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            Book a Free Demo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="relative grid place-items-center w-11 h-11 rounded-2xl overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)] to-[oklch(0.62_0.21_35)] rounded-2xl" />
                <Zap className="relative w-5 h-5 text-white fill-white z-10" />
              </span>
              <div>
                <span className="font-display font-extrabold text-xl block leading-none">Little Spartans</span>
                <span className="text-[10px] text-white/50 tracking-wider uppercase">Sports Academy</span>
              </div>
            </div>
            <p className="mt-4 text-white/70 max-w-sm leading-relaxed text-sm">
              Big adventures for little people. Chennai's playful sports and physical development academy for ages 1.5 – 10.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group w-11 h-11 rounded-full bg-white/10 hover:bg-primary border border-white/10 hover:border-primary hover:-translate-y-1 grid place-items-center transition-all duration-200 hover:shadow-lg hover:shadow-primary/30"
                >
                  <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[color:var(--color-sun)] font-bold mb-4">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 hover:text-primary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-150 font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[color:var(--color-sun)] font-bold mb-4">Reach Us</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="font-semibold text-white/90">+91 91769 02919</li>
              <li>+91 91769 02918</li>
              <li className="break-all">hello@littlespartans.co.in</li>
              <li className="pt-3 border-t border-white/10">
                <span className="text-white/50 text-xs uppercase tracking-wide">Hours</span>
                <p className="mt-1">Mon–Sat · 9am–8pm</p>
                <p>Sun · 9am–12pm</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Little Spartans Academy. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Head Office · KK Nagar, Chennai
            <span className="text-white/30">·</span>
            Made with <a href="https://revateai.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-150 font-medium">Revate AI</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
