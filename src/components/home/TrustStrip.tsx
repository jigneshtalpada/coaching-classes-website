import {
  BookOpen,
  HelpCircle,
  BarChart3,
  Users2,
  FileCheck2,
} from "lucide-react";

const benefits = [
  {
    icon: Users2,
    title: "1-on-1 Mentorship",
    desc: "Individual guidance & weekly review",
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    desc: "NCERT & exam-focused printed modules",
  },
  {
    icon: HelpCircle,
    title: "Daily Doubt Counters",
    desc: "Zero backlog before you head home",
  },
  {
    icon: FileCheck2,
    title: "Weekly Practice Tests",
    desc: "CBT & OMR realistic simulation",
  },
  {
    icon: BarChart3,
    title: "Micro-Analytics Reports",
    desc: "Parent updates & performance tracking",
  },
];

export default function TrustStrip() {
  return (
    <section
      style={{
        backgroundColor: "var(--navy-900)",
        color: "var(--white)",
        padding: "2.5rem 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.75rem",
            alignItems: "center",
          }}
        >
          {benefits.map((b, i) => {
            const IconComponent = b.icon;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.85rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(49, 94, 247, 0.2)",
                    color: "#93C5FD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <IconComponent size={20} />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      marginBottom: "0.15rem",
                    }}
                  >
                    {b.title}
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "#94A3B8", lineHeight: 1.4 }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
