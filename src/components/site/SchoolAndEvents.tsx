import school from "@/assets/school-program.jpg";
import party from "@/assets/party.jpg";
import { Burst } from "./Blob";
import { PartyPopper, School, ArrowRight, Sparkles } from "lucide-react";

export function SchoolAndEvents() {
  return (
    <section id="events" className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 md:py-24 grid lg:grid-cols-2 gap-6">
      {/* School Programs */}
      <div className="relative rounded-[2rem] overflow-hidden border border-border/60 group hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-100/80">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50/80 to-white" />
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-emerald-200/40 blur-2xl -translate-y-1/2 translate-x-1/4" />

        <div className="relative p-8 md:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm">
            <School className="w-4 h-4" /> For Pre-Schools
          </div>
          <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy leading-tight">
            Bring our PE curriculum to{" "}
            <span className="italic text-primary">your school.</span>
          </h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Our school program partners with pre-schools across Chennai to deliver a fun,
            structured, coach-led physical education curriculum right on your campus.
          </p>
          <a href="#contact" className="btn-navy mt-6 inline-flex items-center gap-2">
            Partner With Us <ArrowRight className="w-4 h-4" />
          </a>

          <div className="relative mt-6">
            <img
              src={school}
              alt="Coach with kids"
              width={1200}
              height={800}
              loading="lazy"
              className="rounded-2xl w-full h-56 object-cover -rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-lg"
            />
            {/* Image gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy/20 to-transparent -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </div>

      {/* Parties & Events */}
      <div className="relative rounded-[2rem] overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-200/80">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary)] via-[oklch(0.65_0.22_40)] to-[oklch(0.58_0.22_30)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <Burst className="absolute top-4 right-4 w-20 opacity-80 animate-spin-slow drop-shadow-lg" color="var(--color-sun)" />
        <Burst className="absolute bottom-20 -left-4 w-14 opacity-40 rotate-45" color="oklch(1 0 0 / 0.8)" />

        <div className="relative p-8 md:p-10 text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm font-semibold text-sm">
            <PartyPopper className="w-4 h-4" /> Birthdays & Events
          </div>
          <h3 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
            The most fun birthday <br /> party in Chennai.
          </h3>
          <p className="mt-3 text-white/85 leading-relaxed">
            Games, cake, chaos, coaches. We host unforgettable birthday parties and events
            your kid (and their whole squad) will talk about for months.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-navy font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            Plan a Party
          </a>

          <div className="relative mt-6">
            <img
              src={party}
              alt="Kids birthday party"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-2xl w-full h-56 object-cover rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent rotate-1 group-hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
