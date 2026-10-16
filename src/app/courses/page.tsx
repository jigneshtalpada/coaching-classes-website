import type { Metadata } from "next";
import { coursesData } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CourseFilter from "@/components/courses/CourseFilter";

export const metadata: Metadata = {
  title: "Programs & Courses | Coaching Institute",
  description:
    "Explore our complete curriculum: School Tuition (Class 9-10), Class 11-12 Science, JEE Main & Advanced, NEET-UG, GUJCET, GPSC & UPSC Foundation.",
};

export default function CoursesPage() {
  return (
    <>
      {/* Page Header Banner */}
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
            <Breadcrumbs items={[{ label: "Courses" }]} />
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
                Comprehensive Academic Catalog
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
              Academic Programs &amp; Competitive Entrance Coaching
            </h1>

            <p style={{ fontSize: "1.1rem", color: "#CBD5E1", lineHeight: 1.6 }}>
              Whether you are reinforcing foundational math and science concepts in school, aiming for 95%+ in Board exams, or targeting premier national institutes, our tailored batches provide the right balance of concept clarity and speed drills.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Catalog & Interactive Filter */}
      <section className="section bg-warm">
        <div className="container">
          <CourseFilter courses={coursesData} />
        </div>
      </section>
    </>
  );
}
