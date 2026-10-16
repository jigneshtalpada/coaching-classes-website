import type { Metadata } from "next";
import Link from "next/link";
import { facultyData, siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FacultyFilter from "@/components/faculty/FacultyFilter";
import { Award, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Faculty & Mentors | Academic Experts",
  description:
    "Meet our seasoned subject masters and academic directors with decades of teaching experience across Physics, Chemistry, Mathematics, and Biology.",
};

export default function FacultyPage() {
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
            <Breadcrumbs items={[{ label: "Faculty & Mentors" }]} />
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
                Academic Leadership
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
              Learn Directly from Master Teachers &amp; Subject Specialists
            </h1>

            <p style={{ fontSize: "1.1rem", color: "#CBD5E1", lineHeight: 1.6 }}>
              At {siteConfig.name}, lectures are delivered exclusively by senior faculty members with proven classroom track records. We do not delegate core topics to novice tutors.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Directory Section with Subject Filter */}
      <section className="section bg-warm">
        <div className="container">
          <FacultyFilter facultyList={facultyData} />
        </div>
      </section>

      {/* Faculty Mentorship Philosophy */}
      <section className="section bg-white">
        <div className="container">
          <div
            style={{
              backgroundColor: "var(--warm-bg)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(2rem, 4vw, 3.5rem)",
              border: "1px solid var(--border-light)",
            }}
          >
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  backgroundColor: "var(--blue-50)",
                  color: "var(--blue-600)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                }}
              >
                <Award size={26} />
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  fontWeight: 800,
                  color: "var(--navy-900)",
                  marginBottom: "1rem",
                }}
              >
                Our 1-on-1 Mentorship Commitment
              </h2>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                Great coaching is about empathy as much as expertise. Each enrolled batch has an assigned senior mentor who regularly meets with students to assess test analytics, remove mental roadblocks, and adjust revision schedules before final exams.
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/admissions" className="btn btn-primary btn-lg">
                  <Calendar size={18} />
                  Book Mentorship &amp; Trial Class
                </Link>
                <Link href="/courses" className="btn btn-outline btn-lg">
                  Explore Courses
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
