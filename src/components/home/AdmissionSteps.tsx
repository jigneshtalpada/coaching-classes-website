import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { ArrowRight, BookOpen, Calendar, Presentation, UserCheck } from "lucide-react";

const stepIcons = [BookOpen, Calendar, Presentation, UserCheck];

export default function AdmissionSteps() {
  const { admissionSteps } = siteConfig;

  return (
    <section className="section bg-warm" id="admissions-process">
      <div className="container">
        <SectionHeading
          badge="Seamless Enrolment"
          title="Simple 4-Step Pathway to Enrol in Our Coaching Programs"
          subtitle="We encourage parents and students to evaluate our teaching firsthand through a trial class before committing to full enrolment."
        />

        <div className="grid-4" style={{ marginBottom: "3rem" }}>
          {admissionSteps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <div
                key={step.stepNumber}
                className="card card-hover step-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  padding: "2rem 1.5rem",
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--border-light)",
                  height: "100%",
                }}
              >
                {/* Step Number Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      backgroundColor: "var(--blue-50)",
                      color: "var(--blue-600)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <span
                    className="step-number"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "#CBD5E1",
                      lineHeight: 1,
                    }}
                  >
                    {step.stepNumber}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--navy-900)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    flex: 1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {step.description}
                </p>

                {step.actionText && (
                  <div style={{ marginTop: "auto" }}>
                    <Link
                      href="/admissions"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "var(--blue-600)",
                      }}
                    >
                      {step.actionText}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{
            backgroundColor: "var(--white)",
            borderRadius: "var(--radius-lg)",
            padding: "1.75rem 2rem",
            border: "1px solid var(--border-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.25rem",
          }}
        >
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.25rem" }}>
              Looking for a custom batch schedule or scholarship test?
            </h4>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
              Take the Talent Diagnostic Scholarship Test for merit fee concessions up to 40%.
            </p>
          </div>

          <Link href="/admissions" className="btn btn-primary">
            Register for Trial Class
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
