const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: "#6366f1",
    title: "Smart Splitting",
    desc: "Split by exact amount, percentage, or shares. Our algorithm finds the minimum number of transactions to clear all debts efficiently.",
    bullets: ["Equal, percentage, or exact split", "Debt simplification", "Multi-currency support"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: "#00c896",
    title: "Instant Settlements",
    desc: "Send and receive money in seconds with integrated UPI, bank transfer, and wallet support. One tap to clear your dues.",
    bullets: ["UPI & bank transfers", "Real-time notifications", "Transaction history"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    color: "#f59e0b",
    title: "Group Management",
    desc: "Create groups for trips, households, or events. Invite members, assign roles, and keep everyone in sync effortlessly.",
    bullets: ["Unlimited groups & members", "Activity feed per group", "Roles & permissions"],
  },
];

const FeatureCard = ({
  icon,
  color,
  title,
  desc,
  bullets,
  index,
}: (typeof features)[0] & { index: number }) => (
  <div
    className="glass glass-hover"
    style={{
      borderRadius: "20px",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem",
      animationDelay: `${index * 0.15}s`,
    }}
  >
    {/* Icon */}
    <div
      style={{
        width: "56px",
        height: "56px",
        borderRadius: "14px",
        background: `${color}18`,
        border: `1px solid ${color}30`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color,
      }}
    >
      {icon}
    </div>

    {/* Title */}
    <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.15rem", letterSpacing: "-0.02em" }}>
      {title}
    </h3>

    {/* Description */}
    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>{desc}</p>

    {/* Bullets */}
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {bullets.map((b) => (
        <li
          key={b}
          style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--text-secondary)", fontSize: "0.84rem" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          {b}
        </li>
      ))}
    </ul>
  </div>
);

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        padding: "7rem 1.5rem",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
            ✦ Features
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Everything you need to{" "}
            <span className="accent-text">split smarter</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            From group trips to monthly bills — SplitWise handles every scenario with precision and ease.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="features-grid"
        >
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
