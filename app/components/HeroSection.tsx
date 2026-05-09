import Link from "next/link";

const ExpenseCard = ({
  name,
  amount,
  paid,
  color,
  delay,
}: {
  name: string;
  amount: string;
  paid: string;
  color: string;
  delay: string;
}) => (
  <div
    className="glass animate-float"
    style={{
      padding: "1rem 1.25rem",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      gap: "0.875rem",
      animationDelay: delay,
      minWidth: "200px",
    }}
  >
    <div
      style={{
        width: "38px",
        height: "38px",
        borderRadius: "10px",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: "1.1rem",
      }}
    >
      {name === "Dinner" ? "🍕" : name === "Hotel" ? "🏨" : "🚕"}
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <p style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.875rem" }}>{name}</p>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.75rem" }}>{paid}</p>
    </div>
    <span style={{ color: "#00c896", fontWeight: 700, fontSize: "0.9rem" }}>{amount}</span>
  </div>
);

const AvatarStack = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    {["#6366f1", "#f59e0b", "#ec4899", "#00c896"].map((color, i) => (
      <div
        key={i}
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: color,
          border: "2px solid var(--bg-primary)",
          marginLeft: i === 0 ? 0 : "-8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.7rem",
          fontWeight: 600,
          color: "white",
        }}
      >
        {["A", "B", "J", "S"][i]}
      </div>
    ))}
    <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginLeft: "0.6rem" }}>+12 members</span>
  </div>
);

const StatBadge = ({ value, label }: { value: string; label: string }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ color: "var(--accent)", fontWeight: 800, fontSize: "1.5rem", lineHeight: 1 }}>{value}</div>
    <div style={{ color: "var(--text-muted)", fontSize: "0.72rem", marginTop: "0.2rem" }}>{label}</div>
  </div>
);

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "8rem 1.5rem 5rem",
        background: "var(--gradient-hero)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Background orbs ── */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,200,150,0.08) 0%, transparent 70%)",
          animation: "orb-drift 12s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-8%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          animation: "orb-drift 16s ease-in-out infinite reverse",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* ── Left: Text ── */}
        <div>
          {/* Label */}
          <div className="section-label animate-fade-up" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Now in public beta
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
            }}
          >
            Split expenses.
            <br />
            <span className="accent-text">Not friendships.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="animate-fade-up delay-200"
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: "460px",
              marginBottom: "2.5rem",
            }}
          >
            Track shared expenses, split bills effortlessly, and settle debts instantly — so you can focus on making memories, not math.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <Link href="/signup" className="btn-primary" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              Start for Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a href="#how-it-works" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
              </svg>
              See how it works
            </a>
          </div>

          {/* Social proof */}
          <div className="animate-fade-up delay-400" style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <AvatarStack />
            <div style={{ width: "1px", height: "32px", background: "var(--border)" }} />
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <StatBadge value="50K+" label="Active users" />
              <StatBadge value="₹2M+" label="Settled" />
            </div>
          </div>
        </div>

        {/* ── Right: Floating UI Mockup ── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "520px",
          }}
          className="hero-visual"
        >
          {/* Main Dashboard Card */}
          <div
            className="glass animate-pulse-glow"
            style={{
              width: "320px",
              borderRadius: "24px",
              padding: "1.75rem",
              position: "relative",
              zIndex: 3,
            }}
          >
            {/* Card header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>Total to settle</p>
                <p style={{ color: "var(--text-primary)", fontSize: "1.9rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>₹4,250</p>
              </div>
              <div style={{ display: "flex", gap: "0.35rem" }}>
                {["#00c896", "#f59e0b", "#6366f1"].map((c) => (
                  <div key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c, opacity: 0.8 }} />
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ height: "5px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", marginBottom: "1.5rem", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: "62%",
                  borderRadius: "3px",
                  background: "linear-gradient(90deg, #00c896, #00e5b4)",
                  boxShadow: "0 0 10px rgba(0,200,150,0.5)",
                }}
              />
            </div>

            {/* Members */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { name: "Ayush", owes: "owes you", amount: "+₹1,200", color: "#00c896" },
                { name: "Priya", owes: "owes you", amount: "+₹850", color: "#00c896" },
                { name: "Rahul", owes: "you owe", amount: "-₹400", color: "#f87171" },
              ].map((m) => (
                <div
                  key={m.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.6rem 0.75rem",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${m.color}40, ${m.color}20)`,
                      border: `1px solid ${m.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      color: m.color,
                    }}
                  >
                    {m.name[0]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "var(--text-primary)", fontSize: "0.85rem", fontWeight: 600 }}>{m.name}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.7rem" }}>{m.owes}</p>
                  </div>
                  <span style={{ color: m.color, fontWeight: 700, fontSize: "0.875rem" }}>{m.amount}</span>
                </div>
              ))}
            </div>

            {/* Settle button */}
            <button
              className="btn-primary"
              style={{ width: "100%", marginTop: "1.25rem", justifyContent: "center", borderRadius: "12px" }}
            >
              Settle Up All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Floating expense cards */}
          <div style={{ position: "absolute", top: "4%", right: "-2%", zIndex: 4 }}>
            <ExpenseCard name="Dinner" amount="₹1,800" paid="Paid by Ayush" color="rgba(99,102,241,0.25)" delay="0s" />
          </div>
          <div style={{ position: "absolute", bottom: "8%", left: "-5%", zIndex: 4 }}>
            <ExpenseCard name="Hotel" amount="₹6,000" paid="Paid by Priya" color="rgba(245,158,11,0.2)" delay="2s" />
          </div>
          <div style={{ position: "absolute", bottom: "30%", right: "-8%", zIndex: 2 }}>
            <ExpenseCard name="Taxi" amount="₹350" paid="Paid by Rahul" color="rgba(0,200,150,0.2)" delay="4s" />
          </div>

          {/* Notification bubble */}
          <div
            className="glass animate-float-alt"
            style={{
              position: "absolute",
              top: "20%",
              left: "-8%",
              padding: "0.75rem 1rem",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              zIndex: 5,
              minWidth: "175px",
            }}
          >
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(0,200,150,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00c896" strokeWidth="2.5" strokeLinecap="round">
                <path d="M20 12V22H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
              </svg>
            </div>
            <div>
              <p style={{ color: "var(--text-primary)", fontSize: "0.8rem", fontWeight: 600 }}>Priya settled!</p>
              <p style={{ color: "var(--accent)", fontSize: "0.72rem" }}>₹850 received 🎉</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
