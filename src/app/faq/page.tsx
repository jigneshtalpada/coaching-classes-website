import type { Metadata } from "next";
import Link from "next/link";
import { faqData, siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FaqFilter from "@/components/faq/FaqFilter";
import { HelpCircle, PhoneCall, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Coaching Institute",
  description:
    "Find answers to common questions about admissions, trial classes, syllabus, faculty qualifications, batch schedules, and fee installments.",
};

export default function FaqPage() {
  const { contact } = siteConfig;

  return (
    <>
      {/* Header Banner */}
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
            <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />
          </div>

          <div style={{ maxWidth: "800px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
              <span
                className="badge"
                style={{
                  backgroundColor: "rgba(49, 94, 247, 0.25)",
                  color: "#93C5FD",
                  borderColor: "rgba(49, 94, 247, 0.4)",
                }}
              >
                Help &amp; Support Knowledgebase
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                fontWeight: 800,
                color: "var(--white)",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Frequently Asked Questions
            </h1>

            <p style={{ fontSize: "1.1rem", color: "#CBD5E1", lineHeight: 1.6 }}>
              Have questions regarding admission tests, demo classes, batch shifts, or fee installment schedules? Browse our categorized answers below.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Filter & Accordion Section */}
      <section className="section bg-warm">
        <div className="container">
          <FaqFilter faqItems={faqData} />
        </div>
      </section>

      {/* Still Have Questions Banner */}
      <section className="section bg-white">
        <div className="container">
          <div
            style={{
              backgroundColor: "var(--warm-bg)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(2rem, 4vw, 3.5rem)",
              border: "1px solid var(--border-light)",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
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
                margin: "0 auto 1.25rem",
              }}
            >
              <HelpCircle size={26} />
            </div>

            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "var(--navy-900)",
                marginBottom: "0.75rem",
              }}
            >
              Didn&apos;t Find Your Answer?
            </h2>

            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "2rem",
                maxWidth: "580px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Our academic counsellors are glad to assist you with specific questions regarding syllabus, personalized batch accommodations, or diagnostic tests.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/admissions" className="btn btn-primary btn-lg">
                Book a Free Counselling Session
                <ArrowRight size={18} />
              </Link>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="btn btn-outline btn-lg"
              >
                <PhoneCall size={18} />
                Call Helpline: {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
