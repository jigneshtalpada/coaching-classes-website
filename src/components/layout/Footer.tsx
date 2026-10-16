"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const { social, contact } = siteConfig;

  return (
    <footer
      style={{
        backgroundColor: "var(--navy-950)",
        color: "#94A3B8",
        fontSize: "0.925rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
      }}
    >
      {/* Top Banner / Support Strip */}
      <div
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "2rem 0",
          backgroundColor: "rgba(255, 255, 255, 0.02)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div>
              <h3
                style={{
                  color: "var(--white)",
                  fontSize: "1.25rem",
                  marginBottom: "0.25rem",
                }}
              >
                Ready to accelerate your academic journey?
              </h3>
              <p style={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                Book a personalized academic counselling session or visit our study center.
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/admissions" className="btn btn-primary">
                Book Free Counselling
              </Link>
              {contact.whatsappNumber && (
                <a
                  href={`https://wa.me/${contact.whatsappNumber}?text=Hi%2C+I+would+like+to+enquire+about+courses+at+${encodeURIComponent(siteConfig.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{
                    color: "var(--white)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <WhatsAppIcon size={16} color="#25D366" />
                  WhatsApp Us
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container" style={{ padding: "4rem 1.25rem 3rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Brand & Mission Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "var(--white)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "var(--blue-600)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--white)",
                }}
              >
                <GraduationCap size={22} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: "var(--white)",
                  letterSpacing: "-0.02em",
                }}
              >
                {siteConfig.name}
              </span>
            </Link>

            <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.6 }}>
              {siteConfig.description}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#60A5FA",
                  backgroundColor: "rgba(49, 94, 247, 0.15)",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "999px",
                  fontWeight: 600,
                }}
              >
                Est. {siteConfig.establishedYear}
              </span>
              <span style={{ fontSize: "0.8rem", color: "#64748B" }}>
                Empowering Aspirations
              </span>
            </div>

            {/* Social Icons (Only if configured) */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#CBD5E1",
                  }}
                >
                  <FacebookIcon size={16} />
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#CBD5E1",
                  }}
                >
                  <TwitterIcon size={16} />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#CBD5E1",
                  }}
                >
                  <InstagramIcon size={16} />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#CBD5E1",
                  }}
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
              {social.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#CBD5E1",
                  }}
                >
                  <YoutubeIcon size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Configured Link Columns */}
          {siteConfig.footerLinks.map((group) => (
            <div key={group.title} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <h4
                style={{
                  color: "var(--white)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                {group.title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {group.items.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-nav-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4
              style={{
                color: "var(--white)",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              Contact & Campus
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <MapPin size={18} color="#60A5FA" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                <span>
                  {contact.address}, {contact.city}, {contact.state} - {contact.pincode}
                </span>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <Phone size={16} color="#60A5FA" style={{ flexShrink: 0 }} />
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  style={{ color: "#E2E8F0", fontWeight: 600 }}
                >
                  {contact.phone}
                </a>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <Mail size={16} color="#60A5FA" style={{ flexShrink: 0 }} />
                <a href={`mailto:${contact.email}`} style={{ color: "#CBD5E1" }}>
                  {contact.email}
                </a>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Clock size={16} color="#60A5FA" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                <span style={{ fontSize: "0.825rem", color: "#94A3B8" }}>{contact.officeHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "1.5rem 0",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.85rem",
          }}
        >
          <div style={{ color: "#94A3B8" }}>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </div>

          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.75rem 1.25rem" }}>
            <Link href="/privacy-policy" style={{ color: "#94A3B8" }}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" style={{ color: "#94A3B8" }}>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
