import { useEffect, useRef, useState } from "react";
import { Blob } from "./Blob";
import { ArrowRight, Star, ChevronDown } from "lucide-react";

const HERO_VIDEO =
  "https://video.wixstatic.com/video/7fd8c8_6966ab8b8444442d928b2875d886ab45/720p/mp4/file.mp4";

const words = ["Big", "Adventures", "For", "Little", "People"];

export function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden">
      <div className="relative bg-primary text-primary-foreground rounded-b-[2.5rem] md:mx-4 md:mt-3 md:rounded-[2.5rem] overflow-hidden min-h-[78vh] md:min-h-[82vh] flex flex-col justify-start">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-primary/55 to-navy/40" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent" aria-hidden="true" />

        {/* Decorative blobs */}
        <Blob className="absolute -top-16 -left-16 w-72 opacity-25 z-[1]" color="var(--color-sun)" />
        <Blob className="absolute -bottom-16 -right-16 w-96 opacity-15 z-[1]" color="oklch(1 0 0)" />

        {/* Animated ring decoration */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] rounded-full border border-white/5 hidden lg:block" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[480px] h-[480px] rounded-full border border-white/8 hidden lg:block" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-16 pb-8 md:pt-24 md:pb-10 grid lg:grid-cols-12 gap-10 items-center w-full">
          {/* Left content */}
          <div className="lg:col-span-7 relative z-10">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/20"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(16px)",
                transition: "all 0.6s ease 0.1s",
              }}
            >
              <Star className="w-4 h-4 fill-current text-[color:var(--color-sun)]" />
              Chennai's playful sports academy
            </span>

            {/* Headline */}
            <h1 className="mt-5 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] leading-[0.95] tracking-tight space-y-1">
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(24px)",
                  transition: "all 0.6s cubic-bezier(0.22,1,0.36,1) 0.25s",
                }}
              >
                Big Adventures
              </div>
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(24px)",
                  transition: "all 0.6s cubic-bezier(0.22,1,0.36,1) 0.45s",
                }}
              >
                For <span className="italic text-[color:var(--color-sun)]">Little</span> People
              </div>
            </h1>

            <p
              className="mt-6 max-w-xl text-base sm:text-lg text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] leading-relaxed"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(20px)",
                transition: "all 0.6s ease 0.7s",
              }}
            >
              Holistic child development through sports and games for kids aged 1.5–10.
              We take education outside the classroom and onto the playing field.
            </p>

            {/* CTA buttons */}
            <div
              className="mt-8 flex flex-wrap gap-3 items-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(16px)",
                transition: "all 0.6s ease 0.85s",
              }}
            >
              <a href="#contact" className="btn-primary">
                Book a Free Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#programs" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm font-semibold hover:bg-white/25 border border-white/20 transition">
                Explore Programs
              </a>
            </div>

            {/* Social proof */}
            <div
              className="mt-6 flex items-center gap-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(16px)",
                transition: "all 0.6s ease 1.05s",
              }}
            >
              {/* Overlapping avatar circles */}
              <div className="flex items-center -space-x-2">
                <div className="w-9 h-9 rounded-full border-2 border-white/30 bg-[oklch(0.86_0.16_90)]" />
                <div className="w-9 h-9 rounded-full border-2 border-white/30 bg-[oklch(0.72_0.16_155)]" />
                <div className="w-9 h-9 rounded-full border-2 border-white/30 bg-[oklch(0.7_0.19_45)]" />
              </div>
              {/* Stars + label */}
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-[color:var(--color-sun)] text-[color:var(--color-sun)]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-white/85 font-medium">Loved by 2,000+ Chennai families</span>
              </div>
            </div>

          </div>
        </div>


        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 animate-bounce-slow hidden md:flex">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
