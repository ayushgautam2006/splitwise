const steps = [
  {
    number: "01",
    color: "#6366f1",
    emoji: "👥",
    title: "Create a Group",
    desc: "Set up a group for your trip, household, or any shared expense. Invite members via link or email in seconds.",
    detail: "Supports unlimited members, custom group icons, and categories.",
  },
  {
    number: "02",
    color: "#00c896",
    emoji: "🧾",
    title: "Add Expenses",
    desc: "Log any expense and choose who paid and who owes what. Split equally, by percentage, or enter custom amounts.",
    detail: "Attach receipts, add notes, and categorize automatically.",
  },
  {
    number: "03",
    color: "#f59e0b",
    emoji: "✅",
    title: "Settle Up",
    desc: "SplitWise calculates the simplest way to settle all debts. Pay directly through the app with one tap.",
    detail: "Debt simplification reduces the total number of transactions.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "7rem 1.5rem",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(0,200,150,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="section-label" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
            ✦ How It Works
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
            Three steps to{" "}
            <span className="accent-text">financial clarity</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Getting started is simple. Have your first expense split in under a minute.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            position: "relative",
          }}
          className="steps-grid"
        >
          {/* Connecting line (desktop) */}
          <div
            className="connector-line"
            style={{
              position: "absolute",
              top: "52px",
              left: "calc(16.67% + 28px)",
              right: "calc(16.67% + 28px)",
              height: "1px",
              background: "linear-gradient(90deg, #6366f1, #00c896, #f59e0b)",
              opacity: 0.4,
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              {/* Step number circle */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: `${step.color}15`,
                  border: `2px solid ${step.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2rem",
                  position: "relative",
                  flexShrink: 0,
                  boxShadow: `0 0 30px ${step.color}20`,
                }}
              >
                {/* Inner circle */}
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    background: `${step.color}20`,
                    border: `1px solid ${step.color}50`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  {step.emoji}
                </div>

                {/* Step number badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: "-4px",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    color: "white",
                    border: "2px solid var(--bg-primary)",
                  }}
                >
                  {i + 1}
                </div>
              </div>

              {/* Content card */}
              <div
                className="glass glass-hover"
                style={{
                  borderRadius: "18px",
                  padding: "1.75rem",
                  width: "100%",
                }}
              >
                <h3
                  style={{
                    color: "var(--text-primary)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                  {step.desc}
                </p>
                <p
                  style={{
                    color: step.color,
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    padding: "0.5rem 0.75rem",
                    background: `${step.color}10`,
                    borderRadius: "8px",
                    border: `1px solid ${step.color}20`,
                  }}
                >
                  💡 {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .connector-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
