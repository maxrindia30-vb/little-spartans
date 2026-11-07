import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Settings,
  Bell,
  ArrowUpRight,
  Play,
  Pause,
  Clock,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  Users,
  UserCheck,
  FolderKanban,
  FileText,
  Briefcase,
  Target,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/coach/")({
  component: CoachDashboard,
  head: () => ({
    meta: [
      { title: "Coach Dashboard · Little Spartans" },
      { name: "description", content: "Little Spartans Coach Portal & Dashboard" },
    ],
  }),
});

export function CoachDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [devicesOpen, setDevicesOpen] = useState(true);
  const [pensionOpen, setPensionOpen] = useState(false);
  const [compensationOpen, setCompensationOpen] = useState(false);
  const [benefitsOpen, setBenefitsOpen] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const navItems = [
    "Dashboard",
    "People",
    "Hiring",
    "Devices",
    "Apps",
    "Salary",
    "Calendar",
    "Reviews",
  ];

  return (
    <div className="min-h-screen w-full bg-[#ECE9FA] p-2 sm:p-4 lg:p-8 font-sans text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      {/* MAIN CONTAINER matching img1 rounded card frame */}
      <div className="max-w-[1550px] mx-auto bg-white rounded-2xl sm:rounded-[32px] shadow-xl shadow-indigo-900/10 border border-purple-100/60 p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 animate-fade-in">
        
        {/* TOP HEADER NAV (Fully Responsive Mobile & Desktop) */}
        <header className="flex flex-col lg:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-5">
          {/* Logo & Utility Buttons Row on Mobile */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
                C
              </div>
              <span className="text-xl sm:text-2xl font-bold text-[#2A2368] tracking-tight font-display">
                Craftive Labs
              </span>
            </Link>

            {/* Utility Icons for Mobile View */}
            <div className="flex lg:hidden items-center gap-2">
              <button className="w-9 h-9 rounded-full bg-[#F4F2FF] border border-purple-100 flex items-center justify-center text-slate-600">
                <Settings className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-[#F4F2FF] border border-purple-100 flex items-center justify-center text-slate-600 relative">
                <Bell className="w-4 h-4" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-600 rounded-full ring-2 ring-white" />
              </button>
              <div className="w-9 h-9 rounded-full ring-2 ring-indigo-500/30 overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
                  alt="Coach Jhon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Horizontally Scrollable Nav Pills */}
          <div className="w-full lg:w-auto overflow-x-auto scrollbar-none py-1">
            <div className="bg-[#F4F2FF] p-1.5 rounded-full inline-flex items-center gap-1 border border-purple-100/80 shrink-0">
              {navItems.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-[#5046E5] text-white shadow-md shadow-indigo-500/25 flex items-center gap-1.5"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-white/60"
                  }`}
                >
                  {activeTab === tab && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Utility Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-[#F4F2FF] border border-purple-100 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer">
              <Settings className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#F4F2FF] border border-purple-100 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-indigo-600 rounded-full ring-2 ring-white" />
            </button>
            {/* User Profile Avatar */}
            <div className="w-10 h-10 rounded-full ring-2 ring-indigo-500/30 overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
                alt="Coach Jhon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* GREETING & TOP STATS BAR */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5">
          {/* Greeting */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E1B4B] tracking-tight font-display">
              Welcome Back, Jhon
            </h1>
          </div>

          {/* Top Stats Breakdown Strip */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full xl:w-auto">
            {/* Progress Segmented Bar Pill */}
            <div className="bg-[#F4F2FF] border border-purple-100/80 p-1.5 rounded-2xl flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold overflow-x-auto scrollbar-none">
              <span className="bg-[#5046E5] text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-bold shadow-sm whitespace-nowrap">
                Interviews 15%
              </span>
              <span className="bg-white text-slate-700 px-2.5 py-1 sm:py-1.5 rounded-lg shadow-25 font-bold">
                15%
              </span>
              <span className="text-slate-600 px-1 sm:px-2 font-medium whitespace-nowrap">
                Project Time <strong className="text-slate-900">60%</strong>
              </span>
              <span className="bg-indigo-100 text-indigo-700 px-2.5 py-1 sm:py-1.5 rounded-lg font-bold">
                10%
              </span>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full md:w-auto">
              {/* Stat 1 */}
              <div className="bg-[#F8F7FF] border border-purple-100/60 rounded-2xl p-2.5 sm:p-3 sm:px-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#5046E5] text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/20">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Employe</div>
                  <div className="text-base sm:text-xl font-black text-[#1E1B4B]">68</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#F8F7FF] border border-purple-100/60 rounded-2xl p-2.5 sm:p-3 sm:px-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#5046E5] text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/20">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Hirings</div>
                  <div className="text-base sm:text-xl font-black text-[#1E1B4B]">53</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#F8F7FF] border border-purple-100/60 rounded-2xl p-2.5 sm:p-3 sm:px-4 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#5046E5] text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/20">
                  <FolderKanban className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Projects</div>
                  <div className="text-base sm:text-xl font-black text-[#1E1B4B]">68</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN 3-COLUMN DASHBOARD CONTENT (Responsive Stacking) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* COLUMN 1: LEFT PROFILE & ACCORDIONS (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-5">
            {/* Profile Image Card */}
            <div className="relative rounded-2xl sm:rounded-[28px] overflow-hidden h-[240px] sm:h-[280px] lg:h-[300px] shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
                alt="Lara Piarson"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 sm:p-5 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      Lara Piarson
                    </h3>
                    <p className="text-xs font-medium text-slate-300">
                      UI/UX Designer
                    </p>
                  </div>
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    $1,500
                  </span>
                </div>
              </div>
            </div>

            {/* Accordions List */}
            <div className="space-y-2.5 sm:space-y-3">
              {/* Pension contributions */}
              <div className="bg-[#F8F7FF] border border-purple-100/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-4">
                <button
                  onClick={() => setPensionOpen(!pensionOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#1E1B4B] cursor-pointer"
                >
                  <span>Pension contributions</span>
                  {pensionOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>
              </div>

              {/* Devices (Expanded) */}
              <div className="bg-[#F8F7FF] border border-purple-100/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 space-y-3">
                <button
                  onClick={() => setDevicesOpen(!devicesOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#1E1B4B] cursor-pointer"
                >
                  <span>Devices</span>
                  {devicesOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>

                {devicesOpen && (
                  <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex items-center gap-3 shadow-sm animate-fade-in">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-slate-900 overflow-hidden flex items-center justify-center shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=200"
                        alt="MacBook Air"
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1E1B4B]">MacBook Air</h4>
                      <p className="text-[11px] font-medium text-slate-500">Version M1</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Compensation Summary */}
              <div className="bg-[#F8F7FF] border border-purple-100/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-4">
                <button
                  onClick={() => setCompensationOpen(!compensationOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#1E1B4B] cursor-pointer"
                >
                  <span>Compensation Summary</span>
                  {compensationOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>
              </div>

              {/* Employee Benefits */}
              <div className="bg-[#F8F7FF] border border-purple-100/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-4">
                <button
                  onClick={() => setBenefitsOpen(!benefitsOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#1E1B4B] cursor-pointer"
                >
                  <span>Employee Benefits</span>
                  {benefitsOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CENTER MIDDLE PROGRESS & CALENDAR (6 Cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Top 2 Side-by-Side Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Card 1: Progress Chart */}
              <div className="bg-[#F8F7FF] border border-purple-100/80 rounded-2xl sm:rounded-[24px] p-4 sm:p-5 space-y-4 relative">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1E1B4B]">Progress</h3>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xl sm:text-2xl font-black text-[#1E1B4B]">5.1 h</span>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Work Time This Week</span>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-[#5046E5] text-white flex items-center justify-center shadow-md shadow-indigo-500/25 hover:scale-105 transition-transform cursor-pointer shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Vertical Bar Chart (S M T W T F S) */}
                <div className="pt-6 flex items-end justify-between gap-1.5 sm:gap-2 h-[120px]">
                  {[
                    { day: "S", h: "30%" },
                    { day: "M", h: "45%" },
                    { day: "T", h: "35%" },
                    { day: "W", h: "50%" },
                    { day: "T", h: "40%" },
                    { day: "F", h: "85%", active: true, label: "5h 25m" },
                    { day: "S", h: "25%" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 group relative">
                      {item.active && (
                        <div className="absolute -top-7 bg-[#5046E5] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md animate-bounce whitespace-nowrap">
                          {item.label}
                        </div>
                      )}
                      <div className="w-full bg-slate-200/60 rounded-t-lg h-[80px] flex items-end overflow-hidden">
                        <div
                          className={`w-full rounded-t-lg transition-all duration-500 ${
                            item.active ? "bg-[#5046E5] shadow-lg shadow-indigo-500/30" : "bg-purple-200/70 group-hover:bg-purple-300"
                          }`}
                          style={{ height: item.h }}
                        />
                      </div>
                      <span className={`text-[10px] sm:text-[11px] font-bold ${item.active ? "text-[#5046E5]" : "text-slate-400"}`}>
                        {item.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Time Tracker */}
              <div className="bg-[#F8F7FF] border border-purple-100/80 rounded-2xl sm:rounded-[24px] p-4 sm:p-5 space-y-4 relative">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1E1B4B]">Time tracker</h3>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xl sm:text-2xl font-black text-[#1E1B4B]">02:35</span>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">Work Time</span>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-[#5046E5] text-white flex items-center justify-center shadow-md shadow-indigo-500/25 hover:scale-105 transition-transform cursor-pointer shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Circular Donut Ring Chart */}
                <div className="flex items-center justify-center py-2 relative">
                  <svg className="w-20 h-20 sm:w-24 sm:h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="36"
                      stroke="#E2E8F0"
                      strokeWidth="7"
                      fill="transparent"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="36"
                      stroke="#5046E5"
                      strokeWidth="7"
                      strokeDasharray="226"
                      strokeDashoffset="65"
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                </div>

                {/* Bottom Player Controls */}
                <div className="flex items-center justify-center gap-3 pt-1">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 rounded-full bg-[#5046E5] text-white flex items-center justify-center shadow-md shadow-indigo-500/20 hover:scale-105 transition-transform cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
                  </button>
                  <button className="w-8 h-8 rounded-full bg-slate-200/80 text-slate-700 flex items-center justify-center hover:bg-slate-300 transition-colors cursor-pointer">
                    <Pause className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-slate-200/80 text-slate-700 flex items-center justify-center hover:bg-slate-300 transition-colors cursor-pointer">
                    <Clock className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Card: September 2025 Calendar Schedule */}
            <div className="bg-[#F8F7FF] border border-purple-100/80 rounded-2xl sm:rounded-[24px] p-4 sm:p-5 space-y-4">
              {/* Calendar Header */}
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer">
                  <ChevronLeft className="w-4 h-4" /> August
                </button>
                <h3 className="text-sm sm:text-base font-extrabold text-[#1E1B4B]">September 2025</h3>
                <button className="bg-[#5046E5] text-white px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center gap-1 cursor-pointer">
                  October <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Days of Week Header */}
              <div className="grid grid-cols-6 gap-1.5 sm:gap-2 text-center text-xs pt-1 overflow-x-auto">
                {[
                  { day: "Mon", date: "23" },
                  { day: "Tue", date: "23" },
                  { day: "Wed", date: "24", active: true },
                  { day: "Thu", date: "25" },
                  { day: "Fri", date: "26" },
                  { day: "Sat", date: "27" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-1.5 sm:p-2 rounded-xl flex flex-col items-center gap-0.5 sm:gap-1 ${
                      item.active ? "bg-white shadow-sm font-bold border border-purple-200" : "text-slate-500 font-medium"
                    }`}
                  >
                    <span className="text-[10px] sm:text-[11px] text-slate-400">{item.day}</span>
                    <span className={`text-xs ${item.active ? "text-[#5046E5] font-extrabold" : "text-slate-700"}`}>
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>

              {/* Time Slots & Schedule Items */}
              <div className="space-y-3 pt-2 text-xs">
                {/* 8:00 am */}
                <div className="flex items-start gap-2.5 sm:gap-4">
                  <span className="text-slate-400 font-medium w-14 sm:w-16 pt-2 shrink-0 text-[11px] sm:text-xs">8:00 am</span>
                  <div className="flex-1 bg-[#5046E5] text-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-md shadow-indigo-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2 shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                          alt="Avatar 1"
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full ring-2 ring-white"
                        />
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                          alt="Avatar 2"
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full ring-2 ring-white"
                        />
                      </div>
                      <span className="bg-white/20 px-1 py-0.5 rounded text-[10px] font-bold">2+</span>
                      <span className="font-bold text-[11px] sm:text-xs truncate">Vendor Risk Assessment</span>
                    </div>
                  </div>
                </div>

                {/* 9:00 am */}
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <span className="text-slate-400 font-medium w-14 sm:w-16 shrink-0 text-[11px] sm:text-xs">9:00 am</span>
                  <div className="flex-1 border-b border-dashed border-slate-200" />
                </div>

                {/* 10:00 am */}
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <span className="text-slate-400 font-medium w-14 sm:w-16 shrink-0 text-[11px] sm:text-xs">10:00 am</span>
                  <div className="flex-1 border-b border-dashed border-slate-200" />
                </div>

                {/* 11:00 am */}
                <div className="flex items-start gap-2.5 sm:gap-4">
                  <span className="text-slate-400 font-medium w-14 sm:w-16 pt-2 shrink-0 text-[11px] sm:text-xs">11:00 am</span>
                  <div className="flex-1 bg-purple-200/60 border border-purple-300/80 text-purple-900 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2 shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                          alt="Avatar 3"
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full ring-2 ring-white"
                        />
                        <img
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
                          alt="Avatar 4"
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full ring-2 ring-white"
                        />
                      </div>
                      <span className="bg-purple-300/60 text-purple-950 px-1 py-0.5 rounded text-[10px] font-bold">2+</span>
                      <span className="font-bold text-[11px] sm:text-xs truncate">Discuss Q3 Goals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: RIGHT ONBOARDING & ONBOARDING TASKS (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-5">
            {/* Onboarding Progress Card */}
            <div className="bg-[#F8F7FF] border border-purple-100/80 rounded-2xl sm:rounded-[24px] p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-[#1E1B4B]">Onboarding</h3>
                <span className="text-base sm:text-lg font-black text-[#1E1B4B]">18%</span>
              </div>

              {/* Progress Pill Bar */}
              <div className="bg-slate-200/70 p-1 rounded-2xl flex items-center gap-1 text-xs font-semibold">
                <span className="bg-[#5046E5] text-white px-2.5 sm:px-3 py-1.5 rounded-xl font-bold text-[10px] sm:text-[11px] shadow-sm flex-1 text-center whitespace-nowrap">
                  30% Task
                </span>
                <span className="bg-purple-200/80 text-purple-900 px-2.5 sm:px-3 py-1.5 rounded-xl font-bold text-[10px] sm:text-[11px] flex-1 text-center">
                  25%
                </span>
                <span className="bg-slate-100 text-slate-500 px-2 py-1.5 rounded-xl text-[10px] sm:text-[11px] text-center">
                  0%
                </span>
              </div>
            </div>

            {/* Onboarding Task Solid Deep Purple Card */}
            <div className="bg-[#3B30C8] text-white rounded-2xl sm:rounded-[28px] p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-xl shadow-indigo-900/20 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Onboarding Task
                </h3>
                <span className="text-xs sm:text-sm font-black text-indigo-200">
                  2/5
                </span>
              </div>

              {/* Checklist Items */}
              <div className="space-y-3">
                {[
                  { title: "Interview", date: "Sep 13, 08:30", completed: true, icon: Briefcase },
                  { title: "Team Meeting", date: "Sep 13, 08:30", completed: true, icon: Users },
                  { title: "Project Update", date: "Sep 13, 08:30", completed: false, icon: Target },
                  { title: "Discuss Q3 Goals", date: "Sep 13, 08:30", completed: false, icon: Award },
                  { title: "HR Policy Riview", date: "Sep 13, 08:30", completed: false, icon: FileText },
                ].map((task, idx) => {
                  const IconComp = task.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl flex items-center justify-between border transition-all ${
                        task.completed
                          ? "bg-white/10 border-white/20 text-white"
                          : "bg-white/5 border-white/10 text-indigo-100/90 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                          <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-snug">{task.title}</div>
                          <div className="text-[10px] font-medium text-indigo-200/80">{task.date}</div>
                        </div>
                      </div>

                      {task.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-white fill-white/20 shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-indigo-300/60 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
