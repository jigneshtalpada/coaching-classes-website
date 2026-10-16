import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Student Data & Information Handling",
  description:
    "Review our privacy practices regarding student admission enquiries, contact confidentiality, and communication.",
};

export default function PrivacyPolicyPage() {
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
            <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
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
              Privacy Policy
            </h1>
            <p style={{ fontSize: "1rem", color: "#CBD5E1" }}>
              Last updated: January 2025 • Policy applicable to {siteConfig.name} digital platforms &amp; admissions desk.
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
                1. Information We Collect
              </h2>
              <p>
                When you submit an enquiry form, schedule a trial demo class, or register for the scholarship test on our website, we may collect the student&apos;s full name, parent/guardian contact details, phone number, email address, current school grade, and course of interest.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.75rem" }}>
                2. How We Use Your Academic Enquiry Data
              </h2>
              <p>
                The information you provide is utilized solely to:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                <li>Coordinate your complimentary academic orientation and demo lecture.</li>
                <li>Communicate batch timetables, scholarship eligibility, and fee structure details.</li>
                <li>Send test result analytics and progress notifications to registered parents.</li>
                <li>Respond to specific curricular or examination counselling queries.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.75rem" }}>
                3. Zero Third-Party Commercial Sale
              </h2>
              <p>
                {siteConfig.name} does not sell, rent, lease, or distribute student or parent contact lists to third-party telemarketers or external commercial advertisers under any circumstance.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.75rem" }}>
                4. Data Protection &amp; Security
              </h2>
              <p>
                All electronic admission submissions are handled over encrypted HTTPS transport. Access to student contact records is restricted to authorized academic counsellors and administrative staff members.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.75rem" }}>
                5. Contact &amp; Opt-Out Requests
              </h2>
              <p>
                If at any point you wish to update your contact preferences or request the removal of your enquiry record from our database, please reach out to us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} style={{ color: "var(--blue-600)", fontWeight: 600 }}>
                  {siteConfig.contact.email}
                </a>{" "}
                or call our helpline at {siteConfig.contact.phone}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
