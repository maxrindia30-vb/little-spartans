import { useEffect, useRef, useState } from "react";
import { Shield, HeartHandshake, Sparkles, Users } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Safe & Clean",
    text: "Pressure-free environment where every child feels secure to try, fail, and grow.",
    gradient: "from-orange-400/20 to-red-400/10",
    iconBg: "from-orange-400 to-red-500",
    delay: 0,
  },
  {
    icon: HeartHandshake,
    title: "Certified Coaches",
    text: "Trained mentors who understand kids — not just sport, but confidence and character.",
    gradient: "from-green-400/20 to-emerald-400/10",
    iconBg: "from-green-400 to-emerald-500",
    delay: 100,
  },
  {
    icon: Sparkles,
    title: "Beyond Physical",
    text: "We build cognitive, emotional and social skills alongside strength and skill.",
    gradient: "from-yellow-400/20 to-amber-400/10",
    iconBg: "from-yellow-400 to-amber-500",
    delay: 200,
  },
  {
    icon: Users,
    title: "Small Groups",
    text: "Screen-free active play in small batches so every little Spartan gets attention.",
    gradient: "from-blue-400/20 to-indigo-400/10",
    iconBg: "from-blue-400 to-indigo-500",
    delay: 300,
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export function Why() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 md:py-28">
      {/* Header */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(28px)",
          transition: "all 0.7s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <span className="chip">Why Little Spartans?</span>
        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy leading-[1.02]">
          More than a game. <br />
          It's how kids{" "}
          <span className="relative inline-block">
            <span className="gradient-text italic">grow.</span>
          </span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
          We believe childhood belongs outside — running, laughing, tumbling, learning.
          Every session is designed to raise happier, healthier, more confident kids.
        </p>
      </div>

      {/* Cards */}
      <div ref={ref} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, title, text, gradient, iconBg, delay }) => (
          <div
            key={title}
            className={`group relative bg-gradient-to-br ${gradient} rounded-3xl p-7 border border-border/60 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-black/8 overflow-hidden`}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(36px)",
              transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, box-shadow 0.3s ease, translate 0.3s ease`,
            }}
          >
            {/* Subtle background glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/40 to-transparent rounded-3xl" />

            {/* Icon */}
            <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${iconBg} grid place-items-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-7 h-7 text-white" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>

            {/* Bottom accent line */}
            <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${iconBg} opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-full`} />
          </div>
        ))}
      </div>
    </section>
  );
}
