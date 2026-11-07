import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya R.",
    role: "Mom of Aarav, 6",
    text: "My son used to be glued to screens. Six months at Little Spartans and he's out the door before I've even packed his bag. The coaches are magic with kids.",
    gradient: "from-orange-400 to-red-500",
    initials: "PR",
  },
  {
    name: "Karthik S.",
    role: "Dad of Meera, 4",
    text: "It's not just sport — it's confidence. Meera walks taller now. The pressure-free vibe is exactly what we were looking for.",
    gradient: "from-emerald-400 to-green-600",
    initials: "KS",
  },
  {
    name: "Divya M.",
    role: "Mom of twins, 8",
    text: "Small groups, real attention, and genuine care. Best decision we made this year. Both kids ask to go every single day.",
    gradient: "from-violet-400 to-indigo-600",
    initials: "DM",
  },
];

export function Testimonials() {
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
    <section className="relative overflow-hidden py-16 md:py-28 bg-gradient-to-b from-transparent via-[color:var(--color-cream)] to-transparent">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(24px)",
            transition: "all 0.7s ease",
          }}
        >
          <span className="chip">Parent Talk</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy leading-[1.05]">
            Loved by the parents <br />
            <span className="gradient-text italic">who matter most.</span>
          </h2>
        </div>

        {/* 3-card grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="relative bg-card rounded-[2rem] p-7 border border-border shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(36px)",
                transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 120}ms, box-shadow 0.3s ease, translate 0.3s ease`,
              }}
            >
              {/* Decorative quote mark */}
              <Quote className="absolute top-5 right-5 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 fill-current text-[color:var(--color-sun)]"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-navy leading-relaxed font-medium text-[0.95rem]">
                "{r.text}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${r.gradient} grid place-items-center text-white font-bold text-sm shadow-md shrink-0`}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>

              {/* Bottom gradient accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${r.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div
          className="mt-12 flex justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 500ms",
          }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border shadow-sm">
            <div className="flex -space-x-2">
              {["from-orange-400 to-red-500", "from-emerald-400 to-green-600", "from-violet-400 to-indigo-600"].map((g, i) => (
                <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-white`} />
              ))}
            </div>
            <p className="text-sm text-navy font-semibold">
              <span className="text-primary font-bold">2,000+</span> happy families across Chennai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
