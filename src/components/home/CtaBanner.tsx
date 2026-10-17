import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Calendar } from "lucide-react";

export default function CtaBanner() {
  const { contact } = siteConfig;

  return (
    <section
      className="section bg-navy"
      style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Decorative gradient orb with pulsing glow */}
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(49, 94, 247, 0.22) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <span
            className="badge"
            style={{
              backgroundColor: "rgba(49, 94, 247, 0.25)",
              color: "#93C5FD",
              border: "1px solid rgba(49, 94, 247, 0.4)",
            }}
          >
            Start Your Academic Transformation
          </span>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--white)",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
            }}
          >
            Take the First Step Toward Top Academic Marks
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#CBD5E1",
              lineHeight: 1.6,
              maxWidth: "620px",
            }}
          >
            Book a complimentary 1-on-1 diagnostic counselling session and experience a live trial class. Our educators will map out your personalized path to success.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              paddingTop: "0.5rem",
            }}
          >
            <Link href="/admissions" className="btn btn-primary btn-lg">
              <Calendar size={18} />
              Book Free Counselling Session
            </Link>

            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="btn btn-outline-white btn-lg"
            >
              <Phone size={18} />
              Call Helpline: {contact.phone}
            </a>
          </div>

          <div style={{ fontSize: "0.825rem", color: "#94A3B8", marginTop: "0.5rem" }}>
            No advance fee required • Free trial demo class included • Zero obligation
          </div>
        </div>
      </div>
    </section>
  );
}
