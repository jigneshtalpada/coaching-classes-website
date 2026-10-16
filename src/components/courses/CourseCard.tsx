import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types/site";
import { Clock, Users, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article
      className="card card-hover"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        overflow: "hidden",
        height: "100%",
        border: "1px solid var(--border-light)",
        backgroundColor: "var(--white)",
      }}
    >
      {/* Course Image & Badges */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          backgroundColor: "#1E293B",
          overflow: "hidden",
        }}
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(16, 33, 58, 0.75) 0%, transparent 60%)",
          }}
        />

        {/* Top Badges */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            right: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              backgroundColor: "rgba(16, 33, 58, 0.85)",
              backdropFilter: "blur(4px)",
              color: "#FFFFFF",
              fontSize: "0.75rem",
              fontWeight: 700,
              padding: "0.25rem 0.65rem",
              borderRadius: "4px",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            {course.category}
          </span>

          {course.badge && (
            <span
              style={{
                backgroundColor: "var(--blue-600)",
                color: "#FFFFFF",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.25rem 0.65rem",
                borderRadius: "4px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              {course.badge}
            </span>
          )}
        </div>

        {/* Bottom Mode Indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "0.75rem",
            left: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "#E2E8F0",
            fontSize: "0.775rem",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#10B981",
              display: "inline-block",
            }}
          />
          <span>{course.mode} Mode</span>
        </div>
      </div>

      {/* Course Details Content */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div style={{ marginBottom: "0.85rem" }}>
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "var(--navy-900)",
              lineHeight: 1.3,
              marginBottom: "0.35rem",
            }}
          >
            <Link
              href={`/courses/${course.slug}`}
              className="course-link-title"
            >
              {course.title}
            </Link>
          </h3>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {course.shortDescription}
          </p>
        </div>

        {/* Meta Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "0.85rem 0",
            borderTop: "1px solid var(--border-light)",
            borderBottom: "1px solid var(--border-light)",
            marginBottom: "1.25rem",
            fontSize: "0.825rem",
            color: "var(--text-secondary)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Clock size={14} color="var(--blue-600)" />
            <span>Duration: {course.duration}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Users size={14} color="var(--blue-600)" />
            <span>Target: {course.targetAudience.slice(0, 48)}...</span>
          </div>
        </div>

        {/* Key Features Bullet List */}
        <div style={{ marginBottom: "1.5rem", flex: 1 }}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
            {course.features.slice(0, 3).map((feat, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.45rem",
                  fontSize: "0.825rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.4,
                }}
              >
                <CheckCircle2
                  size={14}
                  color="#059669"
                  style={{ flexShrink: 0, marginTop: "0.15rem" }}
                />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Pricing & CTA Buttons */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
            paddingTop: "1rem",
            borderTop: "1px solid var(--border-light)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>
                Starting From
              </span>
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "var(--navy-900)",
                }}
              >
                ₹{course.startingFee.toLocaleString("en-IN")}
              </span>
            </div>
            {course.installmentsAvailable && (
              <span
                style={{
                  fontSize: "0.725rem",
                  color: "var(--emerald-600)",
                  backgroundColor: "var(--emerald-50)",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "4px",
                  fontWeight: 600,
                }}
              >
                Installments Available
              </span>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.5rem",
            }}
          >
            <Link
              href={`/courses/${course.slug}`}
              className="btn btn-outline btn-sm"
              style={{ justifyContent: "center" }}
            >
              <BookOpen size={14} />
              Details
            </Link>

            <Link
              href={`/admissions?course=${encodeURIComponent(course.title)}`}
              className="btn btn-primary btn-sm"
              style={{ justifyContent: "center" }}
            >
              Enquire
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
