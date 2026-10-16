import Image from "next/image";
import Link from "next/link";
import { FacultyMember } from "@/types/site";
import { Award, BookOpen, Quote, Calendar } from "lucide-react";

interface FacultyCardProps {
  faculty: FacultyMember;
}

export default function FacultyCard({ faculty }: FacultyCardProps) {
  return (
    <article
      className="card card-hover"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        overflow: "hidden",
        backgroundColor: "var(--white)",
        height: "100%",
      }}
    >
      {/* Faculty Photo Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "260px",
          backgroundColor: "#0F172A",
          overflow: "hidden",
        }}
      >
        <Image
          src={faculty.image}
          alt={faculty.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "top center" }}
          loading="lazy"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(16, 33, 58, 0.85) 0%, transparent 50%)",
          }}
        />

        {/* Experience Pill */}
        <div
          style={{
            position: "absolute",
            bottom: "0.85rem",
            left: "1rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            backgroundColor: "rgba(49, 94, 247, 0.9)",
            color: "#FFFFFF",
            fontSize: "0.75rem",
            fontWeight: 700,
            padding: "0.25rem 0.65rem",
            borderRadius: "4px",
          }}
        >
          <Award size={13} />
          <span>{faculty.experienceYears}+ Years Teaching</span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div style={{ marginBottom: "0.75rem" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              color: "var(--navy-900)",
              marginBottom: "0.25rem",
            }}
          >
            {faculty.name}
          </h3>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--blue-600)",
            }}
          >
            {faculty.role}
          </p>
        </div>

        {/* Qualification */}
        <div
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "0.4rem",
          }}
        >
          <BookOpen size={14} color="var(--navy-700)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
          <span>{faculty.qualification}</span>
        </div>

        {/* Subjects tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.35rem",
            marginBottom: "1.25rem",
          }}
        >
          {faculty.subjects.map((sub) => (
            <span
              key={sub}
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                backgroundColor: "var(--blue-50)",
                color: "var(--blue-700)",
                padding: "0.2rem 0.55rem",
                borderRadius: "4px",
              }}
            >
              {sub}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            lineHeight: 1.5,
            marginBottom: "1.25rem",
            flex: 1,
          }}
        >
          {faculty.bio}
        </p>

        {/* Teaching Philosophy Quote */}
        {faculty.teachingApproach && (
          <div
            style={{
              backgroundColor: "var(--warm-bg)",
              borderLeft: "3px solid var(--blue-600)",
              padding: "0.75rem 1rem",
              borderRadius: "0 6px 6px 0",
              fontSize: "0.8rem",
              fontStyle: "italic",
              color: "var(--navy-800)",
              marginBottom: "1.5rem",
              display: "flex",
              gap: "0.4rem",
            }}
          >
            <Quote size={14} color="var(--blue-600)" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
            <span>&ldquo;{faculty.teachingApproach}&rdquo;</span>
          </div>
        )}

        {/* Action Link */}
        <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
          <Link
            href="/admissions"
            className="btn btn-outline btn-sm"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <Calendar size={14} />
            Book Mentorship Session
          </Link>
        </div>
      </div>
    </article>
  );
}
