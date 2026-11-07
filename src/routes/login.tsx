import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Star, Shield, Users } from "lucide-react";
import kidsImg from "@/assets/hero-kids.jpg";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Login · Little Spartans Sports Academy" },
      { name: "description", content: "Login to your Little Spartans account." },
    ],
  }),
});

export function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState<"coach" | "parent" | "admin">("coach");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("coach@gmail.com");
  const [password, setPassword] = useState("12345");
  const [remember, setRemember] = useState(true);
  const [status, setStatus] = useState<string | null>(null);

  const handleRoleSelect = (selectedRole: "coach" | "parent" | "admin") => {
    setRole(selectedRole);
    if (selectedRole === "coach") {
      setEmail("coach@gmail.com");
      setPassword("12345");
    } else if (selectedRole === "parent") {
      setEmail("parent@gmail.com");
      setPassword("12345");
    } else if (selectedRole === "admin") {
      setEmail("admin@gmail.com");
      setPassword("12345");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(`Logging in as ${role.toUpperCase()}...`);
    setTimeout(() => {
      if (role === "coach") {
        navigate({ to: "/coach" });
      } else if (role === "parent") {
        navigate({ to: "/parent" });
      } else if (role === "admin") {
        navigate({ to: "/admin" });
      }
    }, 600);
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-between text-slate-800 font-sans overflow-x-hidden">
      {/* LEFT SIDE (40% Desktop) - PURE WHITE BACKGROUND (#FFFFFF) */}
      <div className="w-full lg:w-[42%] xl:w-[38%] min-h-screen p-6 sm:p-8 lg:p-10 flex flex-col justify-between z-10 bg-white shrink-0">
        <div className="w-full max-w-[380px] mx-auto my-auto">
          {/* LOGO: Top Left (Compact) */}
          <Link to="/" className="inline-flex items-center gap-2.5 group mb-6 transition-transform duration-300 hover:scale-105">
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 drop-shadow-sm">
                <path
                  d="M32 4C20 4 10 14 8 26C14 20 22 18 32 18C42 18 50 20 56 26C54 14 44 4 32 4Z"
                  fill="#F05023"
                />
                <path
                  d="M12 28C12 42 20 54 32 60C44 54 52 42 52 28C42 24 32 24 12 28Z"
                  fill="#0F172A"
                />
                <path d="M18 34H46V38H34V50H30V38H18V34Z" fill="#F05023" />
              </svg>
            </div>
            <div className="flex flex-col justify-center -space-y-1">
              <span className="text-[14px] font-semibold text-[#F05023] lowercase leading-none font-sans">
                little
              </span>
              <span className="text-xl font-black text-[#F05023] uppercase tracking-tight leading-none font-sans">
                SPARTANS
              </span>
            </div>
          </Link>

          {/* HEADINGS (Compact) */}
          <div className="mt-1 mb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#13254C] tracking-tight leading-tight">
              Welcome Back!
            </h1>
            <p className="text-[#68778D] text-xs sm:text-sm font-medium mt-0.5">
              Login to your account
            </p>
          </div>

          {/* LOGIN TYPE CARDS (Compact) */}
          <div className="mb-5">
            <label className="block text-[11px] font-bold text-[#13254C] mb-2.5 uppercase tracking-wider">
              Choose your login type
            </label>

            <div className="grid grid-cols-3 gap-2.5 w-full">
              {/* Coach Card */}
              <button
                type="button"
                onClick={() => handleRoleSelect("coach")}
                className={`w-full h-[95px] sm:h-[105px] rounded-[16px] bg-white p-2.5 flex flex-col items-center justify-center gap-1.5 border-2 transition-all duration-200 cursor-pointer ${
                  role === "coach"
                    ? "border-[#0B63F6] bg-blue-50/40 shadow-md shadow-blue-500/15"
                    : "border-slate-100 shadow-sm hover:border-slate-200"
                }`}
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[#0B63F6]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="font-bold text-xs sm:text-sm text-[#0B63F6]">
                  Coach
                </span>
              </button>

              {/* Parent Card */}
              <button
                type="button"
                onClick={() => handleRoleSelect("parent")}
                className={`w-full h-[95px] sm:h-[105px] rounded-[16px] bg-white p-2.5 flex flex-col items-center justify-center gap-1.5 border-2 transition-all duration-200 cursor-pointer ${
                  role === "parent"
                    ? "border-[#16A34A] bg-emerald-50/40 shadow-md shadow-emerald-500/15"
                    : "border-slate-100 shadow-sm hover:border-slate-200"
                }`}
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[#16A34A]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M9 21v-2a4 4 0 0 0-4-4H3a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <circle cx="19" cy="11" r="3" />
                  </svg>
                </div>
                <span className="font-bold text-xs sm:text-sm text-[#16A34A]">
                  Parent
                </span>
              </button>

              {/* Admin Card */}
              <button
                type="button"
                onClick={() => handleRoleSelect("admin")}
                className={`w-full h-[95px] sm:h-[105px] rounded-[16px] bg-white p-2.5 flex flex-col items-center justify-center gap-1.5 border-2 transition-all duration-200 cursor-pointer ${
                  role === "admin"
                    ? "border-[#F97316] bg-orange-50/40 shadow-md shadow-orange-500/15"
                    : "border-slate-100 shadow-sm hover:border-slate-200"
                }`}
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[#F97316]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.832 2.849" />
                  </svg>
                </div>
                <span className="font-bold text-xs sm:text-sm text-[#F97316]">
                  Admin
                </span>
              </button>
            </div>
          </div>

          {/* INPUT FIELDS (Compact) */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email / Phone Number"
                className="w-full h-[48px] rounded-[14px] bg-white border border-[#E7ECF5] px-4 text-slate-800 placeholder-[#A0AEC0] text-xs sm:text-sm font-medium focus:outline-none focus:border-[#0B63F6] focus:ring-2 focus:ring-[#0B63F6]/20 transition-all duration-200"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full h-[48px] rounded-[14px] bg-white border border-[#E7ECF5] px-4 text-slate-800 placeholder-[#A0AEC0] text-xs sm:text-sm font-medium focus:outline-none focus:border-[#0B63F6] focus:ring-2 focus:ring-[#0B63F6]/20 transition-all duration-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0AEC0] hover:text-[#0B63F6] transition-colors duration-200 p-1 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* REMEMBER ME & FORGOT PASSWORD */}
            <div className="flex items-center justify-between text-xs pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer select-none text-[#13254C] font-semibold">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded text-[#0B63F6] border-[#E7ECF5] focus:ring-[#0B63F6] accent-[#0B63F6] cursor-pointer"
                />
                Remember me
              </label>
              <a
                href="#forgot"
                className="font-bold text-[#0B63F6] hover:underline transition-all duration-200"
              >
                Forgot Password?
              </a>
            </div>

            {/* LOGIN BUTTON (Compact) */}
            <button
              type="submit"
              className="w-full h-[48px] rounded-[14px] text-white font-bold text-sm cursor-pointer transition-all duration-200 hover:opacity-95 active:scale-[0.99] shadow-md shadow-blue-500/20"
              style={{
                background: "linear-gradient(90deg, #0057D9, #0B63F6)",
              }}
            >
              Login
            </button>

            {status && (
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#0B63F6] text-xs font-bold text-center border border-blue-200">
                {status}
              </div>
            )}
          </form>
        </div>

        {/* FOOTER */}
        <div className="mt-4 text-center text-xs text-[#68778D] font-normal">
          © 2025 Little Spartans. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE (58% Desktop) - SCALED DOWN COMPACT HERO SECTION */}
      <div className="hidden lg:flex lg:w-[58%] relative min-h-screen overflow-hidden select-none bg-[#0057D9] flex-col justify-between p-8 xl:p-12">
        {/* Background Blue Gradient & Silhouettes */}
        <div
          className="absolute inset-0 z-0 opacity-90"
          style={{
            background: "linear-gradient(135deg, #0057D9 0%, #0B63F6 50%, #1976FF 100%)",
          }}
        />

        {/* Smooth SVG Curved Divider on Left Edge */}
        <div className="absolute top-0 bottom-0 left-0 w-24 xl:w-28 pointer-events-none z-20">
          <svg className="w-full h-full" viewBox="0 0 100 1000" preserveAspectRatio="none">
            <path
              d="M0,0 L0,1000 C45,800 95,620 55,420 C25,220 65,60 100,0 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>

        {/* Hero Background Kids Photo (Scaled Down with Soft Mask) */}
        <div className="absolute inset-0 z-10 flex items-center justify-end pointer-events-none opacity-40 mix-blend-overlay">
          <img
            src={kidsImg}
            alt="Little Spartans Sports Kids"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Compact Right Content Overlay */}
        <div className="relative z-20 my-auto text-left text-white max-w-md ml-auto pr-6 xl:pr-12 space-y-4">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-white drop-shadow-lg tracking-tight font-display">
            Building <br />
            <span className="text-[#FFC107] font-black underline decoration-[#FFC107]/40">
              Stronger Kids
            </span> <br />
            for a Better Tomorrow
          </h2>
          <p className="text-blue-100 text-sm lg:text-base font-medium max-w-sm drop-shadow-sm">
            Multi-sports, fitness & character building programs empowering 2,000+ kids across Chennai.
          </p>
        </div>

        {/* Compact Bottom Features (Scaled Down) */}
        <div className="relative z-20 w-full max-w-lg ml-auto pr-6 xl:pr-12 pt-6 border-t border-white/20 grid grid-cols-4 gap-4 text-center text-white">
          {/* ⚽ Sports */}
          <div className="flex flex-col items-center justify-center gap-1.5 group cursor-pointer transition-transform duration-200 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/35 transition-all shadow-md border border-white/20">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <span className="text-xs font-bold text-white group-hover:text-[#FFC107] transition-colors">
              Sports
            </span>
          </div>

          {/* ⭐ Discipline */}
          <div className="flex flex-col items-center justify-center gap-1.5 group cursor-pointer transition-transform duration-200 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/35 transition-all shadow-md border border-white/20">
              <Star className="w-5 h-5 text-white fill-white/20" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-[#FFC107] transition-colors">
              Discipline
            </span>
          </div>

          {/* 🛡 Confidence */}
          <div className="flex flex-col items-center justify-center gap-1.5 group cursor-pointer transition-transform duration-200 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/35 transition-all shadow-md border border-white/20">
              <Shield className="w-5 h-5 text-white fill-white/20" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-[#FFC107] transition-colors">
              Confidence
            </span>
          </div>

          {/* 👥 Teamwork */}
          <div className="flex flex-col items-center justify-center gap-1.5 group cursor-pointer transition-transform duration-200 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/35 transition-all shadow-md border border-white/20">
              <Users className="w-5 h-5 text-white fill-white/20" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-[#FFC107] transition-colors">
              Teamwork
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
