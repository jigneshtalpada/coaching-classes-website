import Image from "next/image";
import { testimonialsData } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="section bg-white" id="testimonials">
      <div className="container">
        <SectionHeading
          badge="Student & Parent Voices"
          title="What Our Learners Say About Their Experience"
          subtitle="Real perspectives on doubt resolution, faculty dedication, and personal academic growth from our coaching batches."
        />

        <div className="grid-3" style={{ marginBottom: "2rem" }}>
          {testimonialsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="card card-hover"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                backgroundColor: "var(--warm-bg)",
                border: "1px solid var(--border-light)",
                position: "relative",
              }}
            >
              {/* Demo Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                {/* 5-Star Rating */}
                <div style={{ display: "flex", gap: "0.2rem" }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      color="#F59E0B"
                      fill="#F59E0B"
                    />
                  ))}
                </div>

                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "var(--emerald-600)",
                    backgroundColor: "var(--emerald-50)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                  }}
                >
                  Verified Student
                </span>
              </div>

              {/* Quote text */}
              <div style={{ flex: 1, marginBottom: "1.5rem" }}>
                <p
                  style={{
                    fontSize: "0.925rem",
                    color: "var(--navy-900)",
                    lineHeight: 1.6,
                    fontStyle: "normal",
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Score Highlight Pill if present */}
              {item.achievementHighlight && (
                <div
                  style={{
                    backgroundColor: "var(--blue-50)",
                    color: "var(--blue-700)",
                    fontSize: "0.775rem",
                    fontWeight: 700,
                    padding: "0.3rem 0.65rem",
                    borderRadius: "4px",
                    marginBottom: "1.25rem",
                    alignSelf: "flex-start",
                  }}
                >
                  {item.achievementHighlight}
                </div>
              )}

              {/* Author Info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border-light)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "#CBD5E1",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={item.avatar}
                    alt={item.studentName}
                    fill
                    sizes="46px"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                    }}
                  >
                    {item.studentName}
                  </h4>
                  <div style={{ fontSize: "0.775rem", color: "var(--text-muted)" }}>
                    {item.courseTaken} • {item.batchYear}
                  </div>
                  {item.guardianName && (
                    <div style={{ fontSize: "0.725rem", color: "var(--text-light)" }}>
                      {item.guardianName}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
