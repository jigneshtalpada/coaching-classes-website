import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions | Enrolment & Academic Guidelines",
  description:
    "Review institutional enrolment terms, code of conduct, batch rules, and study material policies.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
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
            <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
          </div>

          <div style={{ maxWidth: "800px" }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                color: "var(--white)",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              Terms &amp; Conditions
            </h1>
            <p style={{ fontSize: "1rem", color: "#CBD5E1" }}>
              Academic guidelines, enrolment terms, and campus rules for {siteConfig.name}.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              fontSize: "0.975rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.75rem" }}>
                1. Enrolment &amp; Admission Confirmation
              </h2>
              <p>
                Admission into any academic batch is finalized only upon verification of previous academic transcripts, completion of enrolment paperwork, and settlement of the initial tuition installment. Submission of an online enquiry does not automatically guarantee batch allocation.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.75rem" }}>
                2. Classroom Discipline &amp; Attendance Policy
              </h2>
              <p>
                Students are expected to maintain minimum 85% attendance across all scheduled lectures and mandatory mock assessments. Punctuality is strictly enforced. Absence without prior written parental notification will be automatically flagged to registered guardians.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.75rem" }}>
                3. Intellectual Property of Study Material
              </h2>
              <p>
                All printed theory booklets, formula sheets, mock test questions, and digital video recordings provided by {siteConfig.name} are the proprietary educational intellectual property of the institute. Unauthorized reproduction, commercial redistribution, or public online dissemination is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.75rem" }}>
                4. Batch Scheduling &amp; Faculty Allocation
              </h2>
              <p>
                While the institute strives to maintain consistent batch timetables and designated faculty mentors, {siteConfig.name} reserves the right to alter schedules, conduct revision sessions on weekends, or allocate substitute expert mentors where necessary to ensure optimal syllabus pacing.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.75rem" }}>
                5. Fee Payment &amp; Cancellation
              </h2>
              <p>
                Course fees are payable as per the installment calendar agreed upon during admission. A 14-day grace period is provided from session commencement, after which fees paid are non-refundable except under special medical or relocation circumstances reviewed by the Academic Director.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
