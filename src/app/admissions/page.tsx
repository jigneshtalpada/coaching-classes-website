import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EnquiryFormWrapper from "@/components/forms/EnquiryFormWrapper";
import {
  Clock,
  Phone,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions & Online Enquiry | Book Free Trial Class",
  description:
    "Apply for admissions. Book a complimentary 1-on-1 academic counselling session and trial class for your preferred batch.",
};

export default function AdmissionsPage() {
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
            <Breadcrumbs items={[{ label: "Admissions & Enquiry" }]} />
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
                2025–26 Academic Sessions
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
              Take the Next Step Toward Your Academic Ambitions
            </h1>

            <p style={{ fontSize: "1.1rem", color: "#CBD5E1", lineHeight: 1.6 }}>
              Submit your enquiry below to schedule a free 45-minute orientation, diagnostic roadmap, and classroom trial session with our senior faculty.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section bg-warm">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "flex-start",
            }}
            className="admission-layout-grid"
          >
            {/* Form Column */}
            <div>
              <EnquiryFormWrapper />
            </div>

            {/* Sidebar Guidelines & Help Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {/* What Happens Next Card */}
              <div
                className="card"
                style={{
                  backgroundColor: "var(--white)",
                  padding: "1.75rem",
                  border: "1px solid var(--border-light)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  What Happens After You Enquire?
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        backgroundColor: "var(--blue-50)",
                        color: "var(--blue-600)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        flexShrink: 0,
                      }}
                    >
                      1
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy-900)" }}>
                        Counsellor Call within 24 Hours
                      </h4>
                      <p style={{ fontSize: "0.825rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
                        Our academic director reviews your query and connects to understand your target goals and schedule preferences.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        backgroundColor: "var(--blue-50)",
                        color: "var(--blue-600)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        flexShrink: 0,
                      }}
                    >
                      2
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy-900)" }}>
                        Free Live Trial Class
                      </h4>
                      <p style={{ fontSize: "0.825rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
                        Attend a complimentary subject session to observe our teaching style, student interaction, and doubt handling.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        backgroundColor: "var(--blue-50)",
                        color: "var(--blue-600)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        flexShrink: 0,
                      }}
                    >
                      3
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy-900)" }}>
                        Batch Allocation &amp; Welcome Kit
                      </h4>
                      <p style={{ fontSize: "0.825rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
                        Confirm your morning or evening batch, receive printed course workbooks, and begin classes immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Contact Quick Box */}
              <div
                className="card"
                style={{
                  backgroundColor: "var(--navy-900)",
                  color: "var(--white)",
                  padding: "1.75rem",
                }}
              >
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", marginBottom: "0.5rem" }}>
                  Prefer Walking In Directly?
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#CBD5E1", marginBottom: "1.25rem" }}>
                  Visit our admissions reception for on-the-spot counselling, curriculum handbook pickup, and center tour.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.85rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <MapPin size={16} color="#60A5FA" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                    <span>{contact.address}, {contact.city}</span>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <Phone size={15} color="#60A5FA" style={{ flexShrink: 0 }} />
                    <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} style={{ color: "var(--white)", fontWeight: 700 }}>
                      {contact.phone}
                    </a>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <Clock size={15} color="#60A5FA" style={{ flexShrink: 0 }} />
                    <span style={{ color: "#94A3B8" }}>{contact.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
