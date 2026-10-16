import Link from "next/link";
import { siteConfig } from "@/config/site";
import { GraduationCap, Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        backgroundColor: "var(--warm-bg)",
        textAlign: "center",
      }}
    >
      <div
        className="card"
        style={{
          maxWidth: "600px",
          width: "100%",
          padding: "clamp(2rem, 5vw, 3.5rem)",
          backgroundColor: "var(--white)",
          border: "1px solid var(--border-light)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            backgroundColor: "var(--blue-50)",
            color: "var(--blue-600)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GraduationCap size={32} />
        </div>

        <span
          className="badge badge-blue"
          style={{ fontSize: "0.8rem", padding: "0.25rem 0.75rem" }}
        >
          Error 404
        </span>

        <h1
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
            fontWeight: 800,
            color: "var(--navy-900)",
            lineHeight: 1.25,
          }}
        >
          Academic Resource Not Found
        </h1>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          The page or course link you are looking for might have been updated, rescheduled, or temporarily relocated.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "center",
            width: "100%",
            marginTop: "0.5rem",
          }}
        >
          <Link href="/" className="btn btn-primary" style={{ flex: "1 1 180px", justifyContent: "center" }}>
            <Home size={16} />
            Back to Home
          </Link>

          <Link href="/courses" className="btn btn-outline" style={{ flex: "1 1 180px", justifyContent: "center" }}>
            <BookOpen size={16} />
            Browse Courses
          </Link>
        </div>

        <div style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Need urgent help? Call our front desk at{" "}
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
            style={{ color: "var(--blue-600)", fontWeight: 700 }}
          >
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
