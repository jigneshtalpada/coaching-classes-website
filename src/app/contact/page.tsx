import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Contact Us & Campus Location | Coaching Institute",
  description:
    "Get in touch with our admissions desk. Find our campus address, phone numbers, office hours, WhatsApp enquiry, and contact form.",
};

export default function ContactPage() {
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
            <Breadcrumbs items={[{ label: "Contact Us" }]} />
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
                Helpdesk &amp; Location
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
              Get in Touch with Our Academic Advisors
            </h1>

            <p style={{ fontSize: "1.1rem", color: "#CBD5E1", lineHeight: 1.6 }}>
              Whether you have questions regarding syllabus coverage, want to schedule an in-person campus tour, or need assistance selecting the right batch, we are here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards & Form Section */}
      <section className="section bg-warm">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
            className="contact-layout-grid"
          >
            {/* Left Contact Details & Quick Channels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Info Cards Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
                  gap: "1.25rem",
                }}
              >
                {/* Phone Card */}
                <div
                  className="card"
                  style={{
                    backgroundColor: "var(--white)",
                    padding: "1.5rem",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "var(--blue-50)",
                      color: "var(--blue-600)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.35rem" }}>
                    Telephone Helpline
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                    Direct admission desk
                  </p>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    style={{ fontSize: "1rem", fontWeight: 700, color: "var(--blue-600)", display: "block" }}
                  >
                    {contact.phone}
                  </a>
                  {contact.alternatePhone && (
                    <a
                      href={`tel:${contact.alternatePhone.replace(/\s+/g, "")}`}
                      style={{ fontSize: "0.875rem", color: "var(--text-secondary)", display: "block", marginTop: "0.25rem" }}
                    >
                      {contact.alternatePhone}
                    </a>
                  )}
                </div>

                {/* Email Card */}
                <div
                  className="card"
                  style={{
                    backgroundColor: "var(--white)",
                    padding: "1.5rem",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "var(--blue-50)",
                      color: "var(--blue-600)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.35rem" }}>
                    Email Enquiries
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                    Admissions &amp; verification
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--blue-600)", wordBreak: "break-all" }}
                  >
                    {contact.email}
                  </a>
                </div>

                {/* Campus Address Card */}
                <div
                  className="card"
                  style={{
                    backgroundColor: "var(--white)",
                    padding: "1.5rem",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "var(--blue-50)",
                      color: "var(--blue-600)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.35rem" }}>
                    Campus Address
                  </h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "0.75rem" }}>
                    {contact.address}, {contact.city}, {contact.state} - {contact.pincode}
                  </p>
                  {contact.googleMapsDirectionsUrl && (
                    <a
                      href={contact.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.825rem",
                        color: "var(--blue-600)",
                        fontWeight: 700,
                      }}
                    >
                      Get Directions <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                {/* Office Hours Card */}
                <div
                  className="card"
                  style={{
                    backgroundColor: "var(--white)",
                    padding: "1.5rem",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "var(--blue-50)",
                      color: "var(--blue-600)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.35rem" }}>
                    Visiting Hours
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {contact.officeHours}
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Chat Banner */}
              {contact.whatsappNumber && (
                <div
                  style={{
                    backgroundColor: "#064E3B",
                    color: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.75rem 2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "50%",
                        backgroundColor: "#10B981",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--white)",
                        flexShrink: 0,
                      }}
                    >
                      <WhatsAppIcon size={24} color="#FFFFFF" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", marginBottom: "0.2rem" }}>
                        Instant WhatsApp Consultation
                      </h4>
                      <p style={{ fontSize: "0.85rem", color: "#A7F3D0" }}>
                        Chat with our counsellor directly on WhatsApp for batch schedules &amp; fee brochures.
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${contact.whatsappNumber}?text=Hi%2C+I+would+like+to+enquire+about+admissions+at+${encodeURIComponent(siteConfig.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-white"
                  >
                    Start WhatsApp Chat
                  </a>
                </div>
              )}

              {/* Google Maps Embed */}
              {contact.googleMapsEmbedUrl && (
                <div
                  className="card"
                  style={{
                    padding: 0,
                    overflow: "hidden",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border-light)" }}>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--navy-900)" }}>
                      Campus Interactive Map
                    </h4>
                  </div>
                  <div style={{ width: "100%", height: "280px", position: "relative" }}>
                    <iframe
                      src={contact.googleMapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Coaching Institute Location Map"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
