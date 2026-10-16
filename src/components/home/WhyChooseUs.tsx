import SectionHeading from "@/components/ui/SectionHeading";
import {
  Compass,
  GraduationCap,
  ClipboardCheck,
  MessageSquare,
  Users,
  Clock3,
} from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Personalized Learning Plans",
    description:
      "Every student has unique strengths and pace. We adapt homework workloads, diagnostic drills, and revision modules to target individual weaknesses.",
  },
  {
    icon: GraduationCap,
    title: "Experienced Subject Masters",
    description:
      "Our faculty comprises senior educators from premier engineering and medical backgrounds with over a decade of classroom mentorship experience.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Assessments & Analytics",
    description:
      "Weekly chapter-wise tests and monthly grand simulations with computer-based analytics reveal time management, negative marking, and topic mastery.",
  },
  {
    icon: MessageSquare,
    title: "Dedicated Daily Doubt Clinics",
    description:
      "Structured 1-on-1 doubt clearing counters after every lecture ensure questions are resolved immediately without piling up into backlogs.",
  },
  {
    icon: Users,
    title: "Parent & Student Communication",
    description:
      "Transparent monthly report cards, attendance alerts, and quarterly parent-teacher meetings ensure complete alignment on academic progress.",
  },
  {
    icon: Clock3,
    title: "Flexible Batch Timings",
    description:
      "Choose between early morning or late evening slots designed to harmonize with regular school schedules and extracurricular commitments.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          badge="Our Pedagogy"
          title="Why Serious Aspirants Choose Our Coaching Classes"
          subtitle="A systematic coaching ecosystem designed to eliminate exam anxiety through concept mastery, discipline, and compassionate mentorship."
        />

        <div className="grid-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="card card-hover"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  padding: "2rem",
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--warm-bg)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "var(--blue-50)",
                    color: "var(--blue-600)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={24} />
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--navy-900)",
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
