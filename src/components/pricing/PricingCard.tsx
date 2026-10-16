import Link from "next/link";
import { PricingPlan } from "@/types/site";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  const isPopular = plan.isPopular;

  return (
    <div
      className="card card-hover pricing-card"
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        padding: "clamp(1.5rem, 3vw, 2.25rem) clamp(1.2rem, 2.5vw, 2rem)",
        backgroundColor: "var(--white)",
        borderColor: isPopular ? "var(--blue-600)" : "var(--border-light)",
        borderWidth: isPopular ? "2px" : "1px",
        boxShadow: isPopular
          ? "0 12px 30px -4px rgba(49, 94, 247, 0.15), 0 4px 12px -2px rgba(16, 33, 58, 0.05)"
          : "var(--shadow-subtle)",
        height: "100%",
      }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div
          style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "var(--blue-600)",
            color: "#FFFFFF",
            padding: "0.25rem 1rem",
            borderRadius: "999px",
            fontSize: "0.75rem",
            fontWeight: 800,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            boxShadow: "0 4px 12px rgba(49, 94, 247, 0.35)",
            whiteSpace: "nowrap",
          }}
        >
          <Sparkles size={12} />
          Most Popular Choice
        </div>
      )}

      {/* Plan Header */}
      <div style={{ marginBottom: "1.25rem" }}>
        <h3
          className="pricing-card-title"
          style={{
            fontSize: "1.35rem",
            fontWeight: 800,
            color: "var(--navy-900)",
            marginBottom: "0.35rem",
          }}
        >
          {plan.name}
        </h3>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
          {plan.tagline}
        </p>
      </div>

      {/* Pricing Amount */}
      <div
        style={{
          paddingBottom: "1.25rem",
          marginBottom: "1.25rem",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "0.35rem" }}>
          <span
            className="pricing-card-amount"
            style={{
              fontSize: "clamp(1.6rem, 3.2vw, 2.15rem)",
              fontWeight: 800,
              color: "var(--navy-900)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            ₹{plan.feeINR.toLocaleString("en-IN")}
          </span>
          <span
            className="pricing-card-period"
            style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}
          >
            / {plan.period}
          </span>
        </div>

        <div style={{ marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--navy-700)",
              backgroundColor: "var(--border-light)",
              padding: "0.2rem 0.55rem",
              borderRadius: "4px",
            }}
          >
            Duration: {plan.duration}
          </span>
        </div>
      </div>

      {/* Target Audience / Recommendation */}
      <div
        style={{
          backgroundColor: isPopular ? "var(--blue-50)" : "var(--warm-bg)",
          padding: "0.75rem 1rem",
          borderRadius: "var(--radius-md)",
          fontSize: "0.825rem",
          color: isPopular ? "var(--blue-700)" : "var(--text-secondary)",
          fontWeight: 500,
          marginBottom: "1.75rem",
        }}
      >
        <strong>Recommended for:</strong> {plan.recommendedFor}
      </div>

      {/* Features List */}
      <div style={{ flex: 1, marginBottom: "2rem" }}>
        <div
          style={{
            fontSize: "0.775rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--navy-900)",
            marginBottom: "0.85rem",
          }}
        >
          What is included:
        </div>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {plan.features.map((item, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.6rem",
                fontSize: "0.875rem",
                color: item.included ? "var(--navy-900)" : "#94A3B8",
                lineHeight: 1.4,
              }}
            >
              {item.included ? (
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    backgroundColor: "var(--emerald-50)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  <Check size={12} color="var(--emerald-600)" strokeWidth={3} />
                </div>
              ) : (
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    backgroundColor: "#F1F5F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  <X size={12} color="#94A3B8" strokeWidth={2.5} />
                </div>
              )}
              <span style={{ textDecoration: item.included ? "none" : "line-through" }}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div style={{ marginTop: "auto" }}>
        <Link
          href={`/admissions?plan=${encodeURIComponent(plan.name)}`}
          className={isPopular ? "btn btn-primary" : "btn btn-outline"}
          style={{ width: "100%", justifyContent: "center" }}
        >
          {plan.ctaText}
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
