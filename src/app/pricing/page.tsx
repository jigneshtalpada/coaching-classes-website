import type { Metadata } from "next";
import Link from "next/link";
import { pricingPlansData } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PricingCard from "@/components/pricing/PricingCard";
import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Check,
  X,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fee Structure & Academic Plans",
  description:
    "Review transparent tuition fees, installment plans, and scholarship opportunities for Foundation, Focus, and Advanced coaching batches.",
};

const pricingFaqs = [
  {
    id: "pfaq-1",
    category: "Fees & Installments" as const,
    question: "Can course fees be paid in installments?",
    answer:
      "Yes, for annual programs (Focus & Advanced), fees can be divided into 2 or 3 convenient installments spread across the academic calendar. The first installment is payable upon admission confirmation.",
  },
  {
    id: "pfaq-2",
    category: "Fees & Installments" as const,
    question: "Are study materials and mock tests included in these fees?",
    answer:
      "Yes, all stated plans include printed theory modules, daily practice problem (DPP) workbooks, and unlimited access to the offline and online mock testing system with zero hidden costs.",
  },
  {
    id: "pfaq-3",
    category: "Fees & Installments" as const,
    question: "What is the policy for batch or timing changes?",
    answer:
      "Students can request a shift between morning and evening batches at the end of any academic term without any penalty, subject to seat availability in the requested batch.",
  },
  {
    id: "pfaq-4",
    category: "Fees & Installments" as const,
    question: "Is there a fee refund or cancellation policy?",
    answer:
      "We offer a 14-day trial period from the commencement of regular classes. If a student discontinues within this period, tuition fees are refunded after deducting administrative material processing charges.",
  },
];

export default function PricingPage() {
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
            <Breadcrumbs items={[{ label: "Pricing & Plans" }]} />
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
                Transparent Academic Investment
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
              Academic Plans &amp; Transparent Fee Structure
            </h1>

            <p style={{ fontSize: "1.1rem", color: "#CBD5E1", lineHeight: 1.6 }}>
              All-inclusive academic plans designed to give parents full cost certainty. Every package includes printed books, chapter-wise test series, and dedicated 1-on-1 doubt clearing counters.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="section bg-warm">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: "4rem" }}>
            {pricingPlansData.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* Feature Comparison Matrix */}
          <div
            className="card"
            style={{
              backgroundColor: "var(--white)",
              padding: "clamp(1.25rem, 3vw, 2.5rem)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-light)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "var(--navy-900)",
                marginBottom: "0.5rem",
              }}
            >
              Comprehensive Plan Feature Comparison
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Compare academic resources, test frequency, and doubt clearance depth across our three core tiers.
            </p>

            <div
              className="table-scroll-container"
              style={{
                width: "100%",
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div
                className="mobile-scroll-hint"
                style={{
                  fontSize: "0.75rem",
                  color: "var(--blue-600)",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                  display: "none",
                }}
              >
                ← Swipe table sideways to compare all plans →
              </div>

            <table
              style={{
                width: "100%",
                minWidth: "650px",
                borderCollapse: "collapse",
                textAlign: "left",
                fontSize: "0.9rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border-light)" }}>
                  <th style={{ padding: "1rem", color: "var(--navy-900)", fontWeight: 700 }}>Features &amp; Deliverables</th>
                  <th style={{ padding: "1rem", color: "var(--navy-900)", fontWeight: 700 }}>Foundation</th>
                  <th style={{ padding: "1rem", color: "var(--blue-600)", fontWeight: 800 }}>Focus (Popular)</th>
                  <th style={{ padding: "1rem", color: "var(--navy-900)", fontWeight: 700 }}>Advanced</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                  <td style={{ padding: "1rem", color: "var(--text-secondary)" }}>Lecture Frequency</td>
                  <td style={{ padding: "1rem" }}>4 Days / Week</td>
                  <td style={{ padding: "1rem", fontWeight: 600 }}>5 Days / Week</td>
                  <td style={{ padding: "1rem", fontWeight: 600 }}>6 Days / Week</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                  <td style={{ padding: "1rem", color: "var(--text-secondary)" }}>Printed Study Modules &amp; Formula Books</td>
                  <td style={{ padding: "1rem" }}><Check size={18} color="var(--emerald-600)" /></td>
                  <td style={{ padding: "1rem" }}><Check size={18} color="var(--emerald-600)" /></td>
                  <td style={{ padding: "1rem" }}><Check size={18} color="var(--emerald-600)" /></td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                  <td style={{ padding: "1rem", color: "var(--text-secondary)" }}>Daily 1-on-1 Doubt Desk</td>
                  <td style={{ padding: "1rem" }}><Check size={18} color="var(--emerald-600)" /></td>
                  <td style={{ padding: "1rem" }}><Check size={18} color="var(--emerald-600)" /></td>
                  <td style={{ padding: "1rem" }}><Check size={18} color="var(--emerald-600)" /></td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                  <td style={{ padding: "1rem", color: "var(--text-secondary)" }}>Bi-Weekly Computer Based Test (CBT) &amp; OMR Drill</td>
                  <td style={{ padding: "1rem" }}><X size={18} color="#94A3B8" /></td>
                  <td style={{ padding: "1rem" }}><Check size={18} color="var(--emerald-600)" /></td>
                  <td style={{ padding: "1rem" }}><Check size={18} color="var(--emerald-600)" /></td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                  <td style={{ padding: "1rem", color: "var(--text-secondary)" }}>Digital Portal Lecture Recordings Access</td>
                  <td style={{ padding: "1rem" }}><X size={18} color="#94A3B8" /></td>
                  <td style={{ padding: "1rem" }}><Check size={18} color="var(--emerald-600)" /></td>
                  <td style={{ padding: "1rem" }}><Check size={18} color="var(--emerald-600)" /></td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                  <td style={{ padding: "1rem", color: "var(--text-secondary)" }}>Dedicated Senior Mentor Allotment</td>
                  <td style={{ padding: "1rem" }}><X size={18} color="#94A3B8" /></td>
                  <td style={{ padding: "1rem" }}><X size={18} color="#94A3B8" /></td>
                  <td style={{ padding: "1rem" }}><Check size={18} color="var(--emerald-600)" /></td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem", color: "var(--text-secondary)" }}>Interview &amp; College Choice Counselling</td>
                  <td style={{ padding: "1rem" }}><X size={18} color="#94A3B8" /></td>
                  <td style={{ padding: "1rem" }}><X size={18} color="#94A3B8" /></td>
                  <td style={{ padding: "1rem" }}><Check size={18} color="var(--emerald-600)" /></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            badge="Fee Transparency"
            title="Questions About Fees, Installments &amp; Refunds"
            subtitle="Clear policies on payments, batch modifications, and scholarship test deductions."
          />

          <div style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
            <Accordion items={pricingFaqs} allowMultiple={true} />
          </div>

          <div
            style={{
              backgroundColor: "var(--warm-bg)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              border: "1px solid var(--border-light)",
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.5rem" }}>
              Interested in a tailored corporate or school group batch?
            </h4>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Contact our academic admissions office for customized institutional packages.
            </p>
            <Link href="/admissions" className="btn btn-primary">
              Enquire for Custom Batch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
