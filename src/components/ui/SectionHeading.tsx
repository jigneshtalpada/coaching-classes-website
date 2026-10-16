import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === "center" ? "760px" : "100%",
        marginLeft: align === "center" ? "auto" : undefined,
        marginRight: align === "center" ? "auto" : undefined,
        marginBottom: "3rem",
      }}
      className={className}
    >
      {badge && (
        <div style={{ marginBottom: "0.85rem" }}>
          <span
            className={isDark ? "badge badge-blue" : "badge badge-blue"}
            style={{
              backgroundColor: isDark ? "rgba(49, 94, 247, 0.2)" : undefined,
              color: isDark ? "#93C5FD" : undefined,
              borderColor: isDark ? "rgba(49, 94, 247, 0.4)" : undefined,
            }}
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        style={{
          fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
          fontWeight: 800,
          color: isDark ? "var(--white)" : "var(--navy-900)",
          letterSpacing: "-0.025em",
          marginBottom: subtitle ? "1rem" : 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
            color: isDark ? "#94A3B8" : "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
