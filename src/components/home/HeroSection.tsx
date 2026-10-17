import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Sparkles,
  Calendar,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(1.25rem, 2.5vw, 2.5rem) 0 clamp(2rem, 3.5vw, 3rem)",
        backgroundColor: "var(--white)",
        overflow: "hidden",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      {/* Subtle decorative background gradient with ambient breathing glow */}
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          top: "-180px",
          right: "-120px",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(49, 94, 247, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          bottom: "-220px",
          left: "-120px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(2, 132, 199, 0.09) 0%, rgba(255, 255, 255, 0) 70%)",
          pointerEvents: "none",
          animationDelay: "3.5s",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Value Proposition & CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Pill */}
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              <span className="badge badge-blue">
                <span className="live-pulse-dot" />
                <Sparkles size={12} />
                Admissions Open 2025–26
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "var(--navy-900)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
              }}
            >
              Learn with Purpose. <br />
              <span className="text-gradient-animated">
                Achieve Beyond Limits.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "580px",
              }}
            >
              Empowering students with personalized mentorship, concept-first teaching, rigorous test series, and dedicated 1-on-1 doubt resolution for Boards, JEE, NEET &amp; competitive exams.
            </p>

            {/* Key Trust Checkmarks */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "0.6rem",
                fontSize: "0.875rem",
                color: "var(--navy-900)",
                fontWeight: 600,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--emerald-600)" style={{ flexShrink: 0 }} />
                <span>Small Batches (20-25 Students)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--emerald-600)" style={{ flexShrink: 0 }} />
                <span>Daily 1-on-1 Doubt Clinics</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--emerald-600)" style={{ flexShrink: 0 }} />
                <span>Seasoned Faculty (12+ Yrs Avg)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--emerald-600)" style={{ flexShrink: 0 }} />
                <span>CBT &amp; OMR Test Analytics</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                paddingTop: "0.5rem",
              }}
              className="hero-buttons-container"
            >
              <Link href="/courses" className="btn btn-primary btn-lg hero-btn">
                Explore Our Courses
                <ArrowRight size={18} />
              </Link>

              <Link href="/admissions" className="btn btn-outline btn-lg hero-btn">
                <Calendar size={18} />
                Book Free Counselling
              </Link>
            </div>

            {/* Metrics Banner */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid var(--border-light)",
                textAlign: "left",
              }}
              className="hero-metrics-grid"
            >
              <div>
                <div style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", fontWeight: 800, color: "var(--navy-900)", lineHeight: 1 }}>
                  10+ Years
                </div>
                <div style={{ fontSize: "0.725rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                  Academic Experience
                </div>
              </div>

              <div>
                <div style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", fontWeight: 800, color: "var(--navy-900)", lineHeight: 1 }}>
                  4,500+
                </div>
                <div style={{ fontSize: "0.725rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                  Students Guided
                </div>
              </div>

              <div>
                <div style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", fontWeight: 800, color: "var(--blue-600)", lineHeight: 1 }}>
                  96.8%
                </div>
                <div style={{ fontSize: "0.725rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                  Parent Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composed Showcase */}
          <div style={{ position: "relative", width: "100%", maxWidth: "100%", overflow: "hidden" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "0 20px 45px -10px rgba(16, 33, 58, 0.16)",
                border: "1px solid var(--border-light)",
                aspectRatio: "4/3",
                maxHeight: "460px",
                backgroundColor: "#1E293B",
                width: "100%",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=80"
                alt="Students studying collaboratively at the coaching institute"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />

              {/* Gradient Overlays */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(16, 33, 58, 0.4) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating Highlight Card 1 (Top Right, Desktop only) */}
            <div
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(8px)",
                borderRadius: "var(--radius-md)",
                padding: "0.75rem 1rem",
                boxShadow: "0 10px 25px rgba(16, 33, 58, 0.12)",
                display: "none",
                alignItems: "center",
                gap: "0.75rem",
                border: "1px solid var(--border-light)",
              }}
              className="hero-floating-top animate-float-slow"
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  backgroundColor: "var(--blue-50)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--blue-600)",
                  flexShrink: 0,
                }}
              >
                <Award size={16} />
              </div>
              <div>
                <div style={{ fontSize: "0.825rem", fontWeight: 700, color: "var(--navy-900)" }}>
                  Curriculum Aligned
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                  CBSE • State • NTA
                </div>
              </div>
            </div>

            {/* Floating Highlight Card 2 (Bottom Left, safely contained) */}
            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "12px",
                right: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.96)",
                backdropFilter: "blur(8px)",
                borderRadius: "var(--radius-md)",
                padding: "0.85rem 1rem",
                boxShadow: "0 12px 30px rgba(16, 33, 58, 0.14)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                border: "1px solid var(--border-light)",
                maxWidth: "320px",
              }}
              className="hero-floating-bottom animate-float-reverse"
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "var(--emerald-50)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--emerald-600)",
                  flexShrink: 0,
                }}
              >
                <Users size={20} />
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--navy-900)" }}>
                  Free Trial Class
                </div>
                <div style={{ fontSize: "0.775rem", color: "var(--text-secondary)" }}>
                  Experience our classroom before deciding enrolment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
