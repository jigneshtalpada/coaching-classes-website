import Image from "next/image";
import { SampleResult } from "@/types/site";
import { CheckCircle } from "lucide-react";

interface SampleScorecardProps {
  result: SampleResult;
}

export default function SampleScorecard({ result }: SampleScorecardProps) {
  return (
    <div
      className="card card-hover"
      style={{
        position: "relative",
        padding: "1.5rem",
        backgroundColor: "var(--white)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid var(--border-light)",
      }}
    >
      {/* Top Demo Disclosure Tag */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--blue-700)",
            backgroundColor: "var(--blue-50)",
            padding: "0.2rem 0.5rem",
            borderRadius: "4px",
          }}
        >
          {result.exam}
        </span>

        <span
          style={{
            fontSize: "0.725rem",
            fontWeight: 600,
            color: "var(--navy-700)",
            backgroundColor: "var(--border-light)",
            padding: "0.2rem 0.5rem",
            borderRadius: "4px",
          }}
        >
          Batch {result.year}
        </span>
      </div>

      {/* Student Profile & Result Highlight */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div
          style={{
            position: "relative",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "#E2E8F0",
            flexShrink: 0,
            border: "2px solid var(--blue-100)",
          }}
        >
          <Image
            src={result.image}
            alt={result.studentName}
            fill
            sizes="60px"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>

        <div>
          <h4
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--navy-900)",
              lineHeight: 1.2,
            }}
          >
            {result.studentName}
          </h4>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            {result.course} • {result.year}
          </span>
        </div>
      </div>

      {/* Big Score Display */}
      <div
        style={{
          backgroundColor: "var(--warm-bg)",
          borderRadius: "var(--radius-md)",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          border: "1px solid var(--border-light)",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
            Performance Metric
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
              fontSize: "0.725rem",
              color: "var(--emerald-600)",
              fontWeight: 700,
            }}
          >
            <CheckCircle size={12} />
            {result.badge}
          </span>
        </div>

        <div
          style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "var(--navy-900)",
            letterSpacing: "-0.02em",
          }}
        >
          {result.scoreOrRank}
        </div>

        {result.percentile && (
          <div style={{ fontSize: "0.825rem", color: "var(--blue-600)", fontWeight: 600 }}>
            {result.percentile}
          </div>
        )}
      </div>

      {/* Quote */}
      {result.quote && (
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          &ldquo;{result.quote}&rdquo;
        </p>
      )}
    </div>
  );
}
