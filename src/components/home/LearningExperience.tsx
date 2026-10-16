import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export default function LearningExperience() {
  const { methodologySteps } = siteConfig;

  return (
    <section className="section bg-navy" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="learning-grid"
        >
          {/* Left Column: Methodology Description & Steps */}
          <div>
            <span
              className="badge"
              style={{
                backgroundColor: "rgba(49, 94, 247, 0.2)",
                color: "#93C5FD",
                borderColor: "rgba(49, 94, 247, 0.4)",
                marginBottom: "1rem",
              }}
            >
              Proven Academic Pedagogy
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "var(--white)",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              How Our Teaching Methodology Ensures Lasting Concept Clarity
            </h2>

            <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "2.5rem" }}>
              We do not believe in superficial memorization or exam panic. Our 4-tier structured learning framework transitions every student from basic understanding to advanced multi-concept mastery.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {methodologySteps.map((step) => (
                <div
                  key={step.step}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.25rem",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "var(--blue-600)",
                      color: "var(--white)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.9rem",
                      flexShrink: 0,
                    }}
                  >
                    {step.step}
                  </div>

                  <div>
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--white)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {step.title}
                    </h4>
                    <p style={{ fontSize: "0.875rem", color: "#94A3B8", lineHeight: 1.5 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <Link href="/about" className="btn btn-primary btn-lg">
                Discover Our Full Academic Approach
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composite Grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                height: "320px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80"
                alt="Teacher explaining complex concept on board"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  right: "1rem",
                  backgroundColor: "rgba(16, 33, 58, 0.85)",
                  backdropFilter: "blur(6px)",
                  padding: "0.85rem 1.25rem",
                  borderRadius: "8px",
                  color: "#FFFFFF",
                  fontSize: "0.85rem",
                }}
              >
                <strong>Interactive Smart Boards:</strong> Visualizing abstract physics &amp; chemical mechanisms with live demonstrations.
              </div>
            </div>

            {/* Sub-grid of two photos */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  height: "200px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80"
                  alt="Student study classroom"
                  fill
                  sizes="25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  height: "200px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80"
                  alt="Students taking mock examination"
                  fill
                  sizes="25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
