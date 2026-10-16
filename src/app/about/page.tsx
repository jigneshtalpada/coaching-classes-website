import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Educational Philosophy & Mentorship",
  description:
    "Learn about our coaching institute's teaching methodology, educational mission, experienced faculty, and commitment to concept clarity.",
};

export default function AboutPage() {
  const { stats } = siteConfig;

  return (
    <>
      {/* Hero Banner */}
      <section
        style={{
          backgroundColor: "var(--navy-900)",
          color: "var(--white)",
          padding: "3.5rem 0 3rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="container">
          <div style={{ color: "#CBD5E1", marginBottom: "1rem" }}>
            <Breadcrumbs items={[{ label: "About Us" }]} />
          </div>

          <div style={{ maxWidth: "800px" }}>
            <span
              className="badge"
              style={{
                backgroundColor: "rgba(49, 94, 247, 0.25)",
                color: "#93C5FD",
                borderColor: "rgba(49, 94, 247, 0.4)",
                marginBottom: "1rem",
              }}
            >
              Academic Pedagogy &amp; Values
            </span>

            <h1
              style={{
                fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                fontWeight: 800,
                color: "var(--white)",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Dedicated to Academic Discipline, Deep Understanding, and Student Potential
            </h1>

            <p style={{ fontSize: "1.1rem", color: "#CBD5E1", lineHeight: 1.6 }}>
              Founded in {siteConfig.establishedYear}, {siteConfig.name} was established with a clear mandate: to move beyond rote learning and provide students with the conceptual bedrock, continuous guidance, and confidence necessary to excel in school, board examinations, and national competitive tests.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section
        style={{
          backgroundColor: "var(--white)",
          padding: "2.5rem 0",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
              gap: "2rem",
            }}
          >
            {stats.map((s, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "var(--navy-900)",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--blue-600)" }}>
                  {s.label}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {s.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section bg-warm">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "2rem",
            }}
          >
            {/* Mission */}
            <div
              className="card"
              style={{
                padding: "clamp(1.25rem, 3vw, 2.5rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                backgroundColor: "var(--white)",
                borderLeft: "4px solid var(--blue-600)",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "var(--blue-50)",
                  color: "var(--blue-600)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Target size={24} />
              </div>

              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--navy-900)" }}>
                Our Mission
              </h3>

              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                To cultivate an inspiring, rigorous, and student-centered learning environment where abstract concepts become intuitive, doubts are resolved without hesitation, and every learner builds the stamina and discipline needed for top-tier academic careers.
              </p>
            </div>

            {/* Vision */}
            <div
              className="card"
              style={{
                padding: "clamp(1.25rem, 3vw, 2.5rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                backgroundColor: "var(--white)",
                borderLeft: "4px solid var(--navy-900)",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "var(--warm-bg)",
                  color: "var(--navy-900)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Eye size={24} />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--navy-900)" }}>
                Our Vision
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                To be the most trustworthy, transparent, and academically responsible coaching benchmark—where quality of teaching is prioritized over overcrowded classrooms, and every student receives the individual respect and academic attention they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles & Teaching Methodology */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            badge="The Foundation"
            title="Core Academic Principles that Drive Our Classroom"
            subtitle="How we structure our daily interactions, lectures, practice problem sets, and student progress reviews."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                padding: "2rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--warm-bg)",
                border: "1px solid var(--border-light)",
              }}
            >
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.75rem" }}>
                1. Concept First, Formulae Second
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Students who memorize formulas without understanding their physical or mathematical derivations crumble under unexpected question patterns. We teach the origin and logic of every equation.
              </p>
            </div>

            <div
              style={{
                padding: "2rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--warm-bg)",
                border: "1px solid var(--border-light)",
              }}
            >
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.75rem" }}>
                2. Deliberate Daily Practice (DPP)
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Daily homework is not busywork. Our Daily Practice Problems are graded in 3 tiers: Foundation (NCERT level), Application (Board &amp; State level), and Advanced (Olympiad &amp; JEE/NEET level).
              </p>
            </div>

            <div
              style={{
                padding: "2rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--warm-bg)",
                border: "1px solid var(--border-light)",
              }}
            >
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.75rem" }}>
                3. Compassionate, Accessible Mentors
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Fear of appearing uninformed stops students from asking questions. Our faculty actively encourages classroom questions and stays after class for dedicated one-on-one doubt clinics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Environment Split */}
      <section className="section bg-warm">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="about-split"
          >
            <div>
              <span className="badge badge-blue" style={{ marginBottom: "0.75rem" }}>
                Infrastructure &amp; Focus
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "var(--navy-900)",
                  lineHeight: 1.25,
                  marginBottom: "1rem",
                }}
              >
                An Environment Engineered Specifically for Scholastic Focus
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                From acoustically treated, air-conditioned lecture halls equipped with digital presentation panels to quiet, distraction-free library spaces with reference textbooks, every corner of our campus supports learning productivity.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--navy-900)", fontWeight: 600 }}>
                  <CheckCircle2 size={16} color="var(--emerald-600)" />
                  <span>Maximum 24 students per classroom for personal eye contact</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--navy-900)", fontWeight: 600 }}>
                  <CheckCircle2 size={16} color="var(--emerald-600)" />
                  <span>Fully equipped physics and chemistry demonstration laboratory</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--navy-900)", fontWeight: 600 }}>
                  <CheckCircle2 size={16} color="var(--emerald-600)" />
                  <span>Computer-Based Testing (CBT) lab simulating NTA exam hall</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--navy-900)", fontWeight: 600 }}>
                  <CheckCircle2 size={16} color="var(--emerald-600)" />
                  <span>Dedicated silent reading room open from 7:30 AM to 8:30 PM</span>
                </div>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <Link href="/admissions" className="btn btn-primary">
                  Book a Campus Visit &amp; Orientation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                height: "380px",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=80"
                alt="Students studying inside campus library"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Action Banner */}
      <section
        style={{
          backgroundColor: "var(--navy-900)",
          color: "var(--white)",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--white)", marginBottom: "1rem" }}>
            Ready to Experience the Difference?
          </h2>
          <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "2rem" }}>
            Join hundreds of ambitious students preparing for Board exams and competitive entrances under expert mentorship.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/courses" className="btn btn-primary btn-lg">
              Explore Our Courses
              <ArrowRight size={18} />
            </Link>
            <Link href="/admissions" className="btn btn-outline btn-lg" style={{ color: "var(--white)", borderColor: "rgba(255, 255, 255, 0.25)" }}>
              Schedule Free Counselling
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
