import type { Metadata } from "next";
import Link from "next/link";
import { sampleResultsData } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ResultsFilter from "@/components/results/ResultsFilter";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, CheckCircle2, ArrowRight, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Results & Student Achievements",
  description:
    "Explore sample academic track records, board exam percentiles, and competitive entrance exam qualifications.",
};

export default function ResultsPage() {
  return (
    <>
      {/* Header Banner */}
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
            <Breadcrumbs items={[{ label: "Results & Achievements" }]} />
          </div>

          <div style={{ maxWidth: "800px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
              <span
                className="badge"
                style={{
                  backgroundColor: "rgba(49, 94, 247, 0.25)",
                  color: "#93C5FD",
                  borderColor: "rgba(49, 94, 247, 0.4)",
                }}
              >
                Academic Milestone Showcase
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                fontWeight: 800,
                color: "var(--white)",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Academic Results &amp; Student Achievements
            </h1>

            <p style={{ fontSize: "1.1rem", color: "#CBD5E1", lineHeight: 1.6 }}>
              A preview of how consistent problem solving, weekly mock test analytics, and personalized doubt clearance reflect in competitive scores across Board exams, JEE, NEET, and State Entrances.
            </p>
          </div>
        </div>
      </section>

      {/* Results Directory & Interactive Filter */}
      <section className="section bg-warm">
        <div className="container">
          <ResultsFilter results={sampleResultsData} />
        </div>
      </section>

      {/* Preparation Milestones / Analytics Approach */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            badge="The Metric System"
            title="How We Measure and Accelerate Student Progress"
            subtitle="Success in high-stakes examinations is not an accident. It is the calculated result of structured diagnostic testing and incremental error eradication."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "2rem",
            }}
          >
            <div
              className="card"
              style={{
                backgroundColor: "var(--warm-bg)",
                border: "1px solid var(--border-light)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "var(--blue-50)",
                  color: "var(--blue-600)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <BarChart2 size={22} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                1. Micro-Topic Diagnostics
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Every weekly test generates a breakdown distinguishing between conceptual errors, calculation slips, and unattempted questions due to time deficit.
              </p>
            </div>

            <div
              className="card"
              style={{
                backgroundColor: "var(--warm-bg)",
                border: "1px solid var(--border-light)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "var(--blue-50)",
                  color: "var(--blue-600)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <CheckCircle2 size={22} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                2. Negative-Marking Control Log
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Students maintain a physical Error Logbook. Before sitting for a new test, they must review their previous mistake diary with their mentor.
              </p>
            </div>

            <div
              className="card"
              style={{
                backgroundColor: "var(--warm-bg)",
                border: "1px solid var(--border-light)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "var(--blue-50)",
                  color: "var(--blue-600)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                3. Simulation Under Real Conditions
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Full-syllabus grand mock tests are strictly conducted at the identical examination timings (e.g. 2:00 PM – 5:20 PM for NEET) to align biological clocks.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/admissions" className="btn btn-primary btn-lg">
              Begin Your Academic Preparation with Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
