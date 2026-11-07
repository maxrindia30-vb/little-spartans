import { useEffect, useRef, useState } from "react";
import multi from "@/assets/prog-multisports.jpg";
import yoga from "@/assets/prog-yoga.jpg";
import gym from "@/assets/prog-gym.jpg";
import judo from "@/assets/prog-judo.jpg";
import { ArrowUpRight } from "lucide-react";

const programs = [
  {
    title: "Little Spartans Multi-Sports",
    age: "Ages 1.5 – 10",
    desc: "A rotating buffet of sports and games that build all-round athletic ability.",
    img: multi,
    tint: "from-orange-500 to-red-500",
    badgeColor: "var(--color-primary)",
  },
  {
    title: "Little Yogis",
    age: "Ages 3.5+",
    desc: "Playful yoga to build focus, flexibility and calm from the earliest years.",
    img: yoga,
    tint: "from-emerald-500 to-green-600",
    badgeColor: "var(--color-grass)",
  },
  {
    title: "Little Flippers",
    age: "Ages 5+",
    desc: "Gymnastics fundamentals: tumbles, rolls, balance and body awareness.",
    img: gym,
    tint: "from-yellow-400 to-amber-500",
    badgeColor: "var(--color-sun)",
  },
  {
    title: "The Art of Falling",
    age: "Ages 5+",
    desc: "Judo for kids — safe technique, discipline and quiet confidence.",
    img: judo,
    tint: "from-indigo-600 to-navy",
    badgeColor: "var(--color-navy)",
  },
];

export function Programs() {
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
    <section
      id="programs"
      className="relative overflow-hidden py-20 md:py-28 md:mx-4 md:rounded-[2.5rem]"
    >
      {/* Animated gradient mesh background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, oklch(0.28 0.07 260), oklch(0.2 0.06 280) 40%, oklch(0.25 0.08 250) 70%, oklch(0.3 0.07 260))",
          backgroundSize: "200% 200%",
          animation: "gradient-shift 8s ease infinite",
        }}
      />
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      {/* Decorative radial glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(24px)",
            transition: "all 0.7s ease",
          }}
        >
          <div>
            <span className="chip !bg-white/10 !text-[color:var(--color-sun)] !border-white/20">Our Programs</span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.02]">
              Pick a path. <br /> Let them <span className="italic text-[color:var(--color-sun)]">fly.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/70 text-lg">
            Four purpose-built programs for every stage — from wobbly first steps to confident young athletes.
          </p>
        </div>

        {/* Program cards */}
        <div ref={ref} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <a
              href="#contact"
              key={p.title}
              className="group block bg-white text-navy rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition-all duration-400 hover:shadow-2xl"
              style={{
                transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)`,
                opacity: visible ? 1 : 0,
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 100}ms, box-shadow 0.4s ease, translate 0.4s ease`,
              }}
            >
              {/* Image with shimmer overlay on hover */}
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${p.tint} opacity-0 group-hover:opacity-25 transition-opacity duration-300`} />
                {/* Age badge */}
                <span
                  className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${p.badgeColor}, color-mix(in oklab, ${p.badgeColor} 70%, black))` }}
                >
                  {p.age}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold leading-tight">{p.title}</h3>
                  <span className="shrink-0 w-9 h-9 grid place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-45 transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
