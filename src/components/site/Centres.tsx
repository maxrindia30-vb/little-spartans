import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";

const centres = [
  { name: "KK Nagar", tag: "Head Office", num: "01" },
  { name: "Anna Nagar", num: "02" },
  { name: "Kilpauk", num: "03" },
  { name: "Mahalingapuram", num: "04" },
  { name: "Kolathur", num: "05" },
  { name: "T Nagar", num: "06" },
];

export function Centres() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="relative overflow-hidden mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 md:py-24">
      {/* Decorative background map circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-dashed border-primary/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/8 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-primary/5 pointer-events-none" />

      {/* Header */}
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: "all 0.7s ease",
        }}
      >
        <div>
          <span className="chip">Our Centres</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy leading-[1.02]">
            Six places to <span className="gradient-text italic">play</span>{" "}
            across Chennai.
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Find your nearest Little Spartans playground and drop in for a free demo class.
        </p>
      </div>

      {/* Centres grid */}
      <div ref={ref} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        {centres.map((c, i) => (
          <div
            key={c.name}
            className="group relative flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden cursor-pointer"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(28px)",
              transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms, box-shadow 0.3s ease, border-color 0.3s ease, translate 0.3s ease`,
            }}
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

            {/* Gradient number */}
            <span className="absolute top-3 right-4 text-5xl font-extrabold text-navy/5 group-hover:text-primary/10 transition-colors duration-300 select-none leading-none">
              {c.num}
            </span>

            {/* Pulsing map pin */}
            <div className="relative shrink-0">
              <div className="relative w-12 h-12 rounded-full bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10">
                <MapPin className="w-5 h-5" />
              </div>
              {/* Pulse ring */}
              <div
                className="absolute inset-0 rounded-full bg-primary/20 group-hover:animate-ping"
                style={{ animationDuration: "1.5s" }}
              />
            </div>

            <div className="relative">
              <p className="font-bold text-navy text-lg group-hover:text-primary transition-colors duration-200">
                {c.name}
              </p>
              {c.tag && (
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mt-0.5">
                  {c.tag}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div
        className="mt-12 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-navy to-[oklch(0.2_0.06_280)] text-white overflow-hidden"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease 500ms",
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div>
          <p className="font-bold text-xl">Ready to visit your nearest centre?</p>
          <p className="text-white/70 text-sm mt-1">Drop in for a free demo — no booking needed.</p>
        </div>
        <a href="#contact" className="btn-primary whitespace-nowrap">
          Book a Demo <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
