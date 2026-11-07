import { useState, useRef, useEffect, useCallback } from "react";
import {
  Bot,
  X,
  Send,
  Phone,
  MessageCircle,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { startRetellChat, sendRetellMessage } from "../../lib/retell";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function formatText(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

function detectActionFromText(text: string): string | undefined {
  const lower = text.toLowerCase();
  if (lower.includes("book a free demo") || lower.includes("demo class") || lower.includes("free demo")) {
    return "contact";
  }
  if (lower.includes("our programs") || lower.includes("multi-sports") || lower.includes("gymnastics") || lower.includes("yoga") || lower.includes("judo")) {
    return "programs";
  }
  if (lower.includes("centres") || lower.includes("locations") || lower.includes("chennai")) {
    return "centres";
  }
  if (lower.includes("contact us") || lower.includes("call us") || lower.includes("+91")) {
    return "callcard";
  }
  return undefined;
}

type Msg = { id: number; role: "user" | "bot"; text: string; action?: string };

const QUICK_CHIPS = [
  { label: "🏃 Our Programs", msg: "What programs do you offer?" },
  { label: "🗺️ Find a Centre", msg: "Where are your centres located?" },
  { label: "🎉 Book Free Demo", msg: "How do I book a free demo?" },
  { label: "💰 Fees", msg: "What are the fees?" },
  { label: "👶 Age Groups", msg: "What age groups do you accept?" },
  { label: "📞 Contact", msg: "How do I contact you?" },
];

export function AiCopilot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      id: 0,
      role: "bot",
      text: "👋 Hi! I'm your **Little Spartans Copilot**!\n\nI can help you explore programs, find a centre near you, book a **free demo**, or connect you with our team. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [chatId, setChatId] = useState<string | null>(null);
  const [loadingChat, setLoadingChat] = useState(false);
  const [showCallCard, setShowCallCard] = useState(false);
  const [typing, setTyping] = useState(false);
  const [pulse, setPulse] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(1);

  useEffect(() => {
    if (open) return;
    const t = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1200);
    }, 8000);
    return () => clearInterval(t);
  }, [open]);

  useEffect(() => {
    if (open && !chatId && !loadingChat) {
      const initRetellChat = async () => {
        setLoadingChat(true);
        try {
          const res = await startRetellChat();
          setChatId(res.chatId);
        } catch (err) {
          console.error("Retell Chat Init Error:", err);
        } finally {
          setLoadingChat(false);
        }
      };
      initRetellChat();
    }
  }, [open, chatId, loadingChat]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  const handleAction = useCallback((action?: string) => {
    if (!action) return;
    setTimeout(() => {
      if (action === "contact") scrollTo("contact");
      else if (action === "programs") scrollTo("programs");
      else if (action === "centres") scrollTo("centres");
      else if (action === "callcard") setShowCallCard(true);
    }, 800);
  }, []);
  const send = useCallback(
    async (text: string) => {
      if (!text.trim()) return;
      setInput("");
      setShowCallCard(false);

      // Add user message
      setMsgs((prev) => [...prev, { id: idRef.current++, role: "user", text: text.trim() }]);

      // Show typing indicator
      setTyping(true);

      try {
        let activeChatId = chatId;

        // Lazy load the session on the fly if it hasn't loaded yet
        if (!activeChatId) {
          const res = await startRetellChat();
          activeChatId = res.chatId;
          setChatId(activeChatId);
        }

        // Call Retell Chat Completion API
        const response = await sendRetellMessage({ data: { chatId: activeChatId, message: text.trim() } });

        // Find if we should execute navigation actions
        const action = detectActionFromText(response.content);

        // Add bot message response
        setMsgs((prev) => [
          ...prev,
          { id: idRef.current++, role: "bot", text: response.content, action },
        ]);

        if (action) {
          handleAction(action);
        }
      } catch (err) {
        console.error("Retell Chat Message Send Error:", err);
        setMsgs((prev) => [
          ...prev,
          {
            id: idRef.current++,
            role: "bot",
            text: "⚠️ Sorry, I'm having trouble connecting to my brain right now. Please try again or reach out to us directly! 📞 +91 91769 02919",
            action: "callcard",
          },
        ]);
      } finally {
        setTyping(false);
      }
    },
    [chatId, handleAction],
  );

  return (
    <>
      {/* FAB */}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 10,
        }}
      >
        {!open && (
          <div
            style={{
              background: "var(--color-navy)",
              color: "var(--color-navy-foreground)",
              padding: "0.45rem 0.9rem",
              borderRadius: 9999,
              fontSize: "0.78rem",
              fontWeight: 600,
              boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
              whiteSpace: "nowrap",
              animation: "ai-fadeIn 0.3s ease",
              pointerEvents: "none",
            }}
          >
            Ask me anything! ✨
          </div>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle AI Copilot"
          style={{
            width: 62,
            height: 62,
            borderRadius: "50%",
            background: open
              ? "var(--color-navy)"
              : "linear-gradient(135deg, var(--color-primary) 0%, oklch(0.62 0.22 22) 100%)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: pulse
              ? "0 0 0 14px color-mix(in oklab,var(--color-primary) 18%,transparent),0 8px 28px -4px color-mix(in oklab,var(--color-primary) 55%,transparent)"
              : "0 8px 28px -4px color-mix(in oklab,var(--color-primary) 55%,transparent)",
            transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            transform: pulse && !open ? "scale(1.12)" : "scale(1)",
          }}
        >
          {open ? <X size={24} /> : <Bot size={24} />}
        </button>
      </div>

      {/* Chat Panel */}
      <div
        style={{
          position: "fixed",
          bottom: 100,
          right: 24,
          width: "min(420px, calc(100vw - 32px))",
          height: "min(620px, calc(100dvh - 130px))",
          zIndex: 9998,
          display: "flex",
          flexDirection: "column",
          borderRadius: "1.75rem",
          overflow: "hidden",
          boxShadow: "0 32px 80px -16px rgba(28,35,80,0.3),0 0 0 1px rgba(255,255,255,0.1)",
          transform: open ? "scale(1) translateY(0)" : "scale(0.85) translateY(24px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1),opacity 0.25s ease",
          transformOrigin: "bottom right",
          background: "oklch(0.985 0.01 75)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg,var(--color-navy) 0%,oklch(0.22 0.09 270) 100%)",
            padding: "1.1rem 1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "linear-gradient(135deg,var(--color-primary) 0%,oklch(0.62 0.22 22) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              animation: "ai-fadeIn 0.3s ease",
            }}
          >
            <Sparkles size={20} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>Little Spartans Copilot</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.73rem", display: "flex", alignItems: "center", gap: 5 }}>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "oklch(0.72 0.16 155)",
                  display: "inline-block",
                  boxShadow: "0 0 6px oklch(0.72 0.16 155)",
                }}
              />
              Online · Replies instantly
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "none",
              borderRadius: "50%",
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <X size={16} />
          </button>
        </div>


        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.7rem",
            scrollbarWidth: "thin",
            scrollbarColor: "var(--color-border) transparent",
          }}
        >
          {msgs.map((m) => (
            <div
              key={m.id}
              style={{
                display: "flex",
                flexDirection: m.role === "user" ? "row-reverse" : "row",
                gap: "0.45rem",
                alignItems: "flex-end",
                animation: "ai-slideUp 0.28s ease",
              }}
            >
              {m.role === "bot" && (
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,var(--color-primary) 0%,oklch(0.62 0.22 22) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Bot size={14} color="#fff" />
                </div>
              )}
              <div
                style={{
                  maxWidth: "80%",
                  padding: "0.6rem 0.85rem",
                  borderRadius:
                    m.role === "user"
                      ? "1.2rem 1.2rem 0.25rem 1.2rem"
                      : "1.2rem 1.2rem 1.2rem 0.25rem",
                  background:
                    m.role === "user"
                      ? "linear-gradient(135deg,var(--color-primary) 0%,oklch(0.62 0.22 22) 100%)"
                      : "#fff",
                  color: m.role === "user" ? "#fff" : "var(--color-navy)",
                  fontSize: "0.84rem",
                  lineHeight: 1.55,
                  boxShadow:
                    m.role === "user"
                      ? "0 4px 12px color-mix(in oklab,var(--color-primary) 40%,transparent)"
                      : "0 2px 8px rgba(0,0,0,0.07)",
                  border: m.role === "bot" ? "1px solid var(--color-border)" : "none",
                }}
              >
                {formatText(m.text)}
                {m.action && m.action !== "callcard" && (
                  <button
                    onClick={() => {
                      if (m.action === "contact") scrollTo("contact");
                      else if (m.action === "programs") scrollTo("programs");
                      else if (m.action === "centres") scrollTo("centres");
                      setOpen(false);
                    }}
                    style={{
                      marginTop: "0.55rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      background: "var(--color-primary)",
                      color: "#fff",
                      border: "none",
                      borderRadius: 9999,
                      padding: "0.38rem 0.85rem",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    Go there <ChevronRight size={12} />
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div style={{ display: "flex", gap: "0.45rem", alignItems: "flex-end", animation: "ai-slideUp 0.28s ease" }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,var(--color-primary) 0%,oklch(0.62 0.22 22) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Bot size={14} color="#fff" />
              </div>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-border)",
                  borderRadius: "1.2rem 1.2rem 1.2rem 0.25rem",
                  padding: "0.7rem 1rem",
                  display: "flex",
                  gap: "0.3rem",
                  alignItems: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--color-primary)",
                      display: "inline-block",
                      animation: `ai-bounce 1.2s ${i * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Call card */}
          {showCallCard && (
            <div
              style={{
                background: "linear-gradient(135deg,var(--color-navy) 0%,oklch(0.22 0.09 270) 100%)",
                borderRadius: "1.25rem",
                padding: "1rem",
                color: "#fff",
                animation: "ai-slideUp 0.3s ease",
              }}
            >
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--color-sun)", marginBottom: "0.55rem" }}>
                ✨ Connect with our team
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                <a
                  href="tel:+919176902919"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.55rem",
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: "0.75rem",
                    padding: "0.55rem 0.85rem",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                >
                  <Phone size={15} color="var(--color-sun)" />
                  Call +91 91769 02919
                </a>
                <a
                  href="https://wa.me/919176902919?text=Hi%20Little%20Spartans!%20I%20am%20interested%20in%20a%20free%20demo%20class."
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.55rem",
                    background: "rgba(37,211,102,0.18)",
                    borderRadius: "0.75rem",
                    padding: "0.55rem 0.85rem",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    border: "1px solid rgba(37,211,102,0.3)",
                    transition: "all 0.2s",
                  }}
                >
                  <MessageCircle size={15} color="#25d366" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          )}

          {/* Quick chips — show on first load */}
          {msgs.length <= 1 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.38rem", marginTop: "0.2rem", animation: "ai-slideUp 0.4s ease" }}>
              {QUICK_CHIPS.map((c) => (
                <button
                  key={c.label}
                  onClick={() => send(c.msg)}
                  style={{
                    background: "#fff",
                    border: "1.5px solid var(--color-border)",
                    borderRadius: 9999,
                    padding: "0.38rem 0.8rem",
                    fontSize: "0.76rem",
                    fontWeight: 600,
                    color: "var(--color-navy)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <div
          style={{
            padding: "0.7rem 0.9rem",
            background: "#fff",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            gap: "0.45rem",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            placeholder="Ask me anything…"
            style={{
              flex: 1,
              border: "1.5px solid var(--color-border)",
              borderRadius: 9999,
              padding: "0.55rem 1rem",
              fontSize: "0.85rem",
              outline: "none",
              background: "var(--color-secondary)",
              color: "var(--color-foreground)",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--color-primary)")}
            onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--color-border)")}
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim()}
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: "none",
              background: input.trim()
                ? "linear-gradient(135deg,var(--color-primary) 0%,oklch(0.62 0.22 22) 100%)"
                : "var(--color-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: input.trim() ? "pointer" : "default",
              flexShrink: 0,
              transition: "all 0.2s",
              color: input.trim() ? "#fff" : "var(--color-muted-foreground)",
              boxShadow: input.trim() ? "0 4px 12px color-mix(in oklab,var(--color-primary) 40%,transparent)" : "none",
            }}
          >
            <Send size={15} />
          </button>
        </div>
      </div>

      {/* Global animations */}
      <style>{`
        @keyframes ai-bounce {
          0%,80%,100%{transform:translateY(0);opacity:.4}
          40%{transform:translateY(-6px);opacity:1}
        }
        @keyframes ai-slideUp {
          from{opacity:0;transform:translateY(10px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes ai-fadeIn {
          from{opacity:0}to{opacity:1}
        }
        @keyframes ai-pulse {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:.5;transform:scale(1.4)}
        }
      `}</style>
    </>
  );
}
