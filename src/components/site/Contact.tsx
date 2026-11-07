import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MessageCircle, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  age: z.string().trim().min(1, "Child's age required").max(20),
  program: z.string().min(1, "Pick a program"),
  message: z.string().trim().max(500).optional(),
});

const contactItems = [
  { icon: Phone,         label: "Call us",      value: "+91 91769 02919 · 91769 02918", href: "tel:+919176902919" },
  { icon: Mail,          label: "Email",         value: "hello@littlespartans.co.in",   href: "mailto:hello@littlespartans.co.in" },
  { icon: MessageCircle, label: "WhatsApp",      value: "Send us a message",            href: "https://wa.me/919176902919" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const iss of parsed.error.issues) errs[String(iss.path[0])] = iss.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 md:py-24">
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Info panel */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-[2rem] p-8 md:p-10 text-white">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-[oklch(0.24_0.07_265)] to-[oklch(0.2_0.06_280)]" />
          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
          />
          {/* Radial glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative z-10">
            <span className="chip !bg-white/10 !text-[color:var(--color-sun)] !border-white/20">Get in touch</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.02]">
              Book a{" "}
              <span className="italic text-[color:var(--color-sun)]">free</span>{" "}
              demo class.
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed">
              Come try a session on us. No pressure, no commitment — just fun.
            </p>

            {/* Contact items */}
            <div className="mt-8 space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/8 hover:bg-white/15 border border-white/10 hover:border-white/25 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-primary/80 grid place-items-center transition-colors duration-200 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-white/90">{value}</p>
                  </div>
                </a>
              ))}

              {/* Hours */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/8 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-white/10 grid place-items-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium">Opening Hours</p>
                  <p className="text-sm font-semibold text-white/90">Mon–Sat · 9am to 8pm</p>
                  <p className="text-sm text-white/70">Sun · 9am to 12pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 bg-card rounded-[2rem] p-8 md:p-10 border border-border shadow-sm space-y-5"
        >
          <div>
            <h3 className="text-2xl font-bold text-navy">Send an Enquiry</h3>
            <p className="text-sm text-muted-foreground mt-1">We'll be in touch within one business day.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FloatField name="name" label="Parent name" placeholder="Your name" err={errors.name} />
            <FloatField name="phone" label="Phone" placeholder="+91..." err={errors.phone} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FloatField name="age" label="Child's age" placeholder="e.g. 5" err={errors.age} />
            <div className="relative">
              <label className="block text-sm font-semibold text-navy mb-1.5">
                Program of interest
              </label>
              <select
                name="program"
                defaultValue=""
                className="w-full px-4 py-3 rounded-2xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-navy transition-all duration-200 cursor-pointer appearance-none"
              >
                <option value="" disabled>Choose one…</option>
                <option>Little Spartans Multi-Sports</option>
                <option>Little Yogis (Yoga)</option>
                <option>Little Flippers (Gymnastics)</option>
                <option>The Art of Falling (Judo)</option>
                <option>School Program</option>
                <option>Birthday / Event</option>
              </select>
              {errors.program && <p className="mt-1 text-xs text-red-500">{errors.program}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">
              Message <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <textarea
              name="message"
              rows={4}
              maxLength={500}
              placeholder="Tell us anything else..."
              className="w-full px-4 py-3 rounded-2xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-white transition-all duration-300 ${
              status === "success"
                ? "bg-gradient-to-r from-emerald-500 to-green-600 shadow-lg shadow-emerald-200"
                : "bg-gradient-to-r from-[color:var(--color-primary)] to-[oklch(0.62_0.21_35)] hover:-translate-y-0.5 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
            } disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
            {status === "success" && <CheckCircle2 className="w-4 h-4" />}
            {status === "idle" && <Send className="w-4 h-4" />}
            {status === "idle" && "Send Enquiry"}
            {status === "loading" && "Sending…"}
            {status === "success" && "We'll be in touch soon!"}
          </button>
        </form>
      </div>
    </section>
  );
}

function FloatField({ name, label, placeholder, err }: { name: string; label: string; placeholder?: string; err?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-2xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
      />
      {err && <p className="mt-1 text-xs text-red-500">{err}</p>}
    </div>
  );
}
