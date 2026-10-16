"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/config/site";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 240);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello, I would like to enquire about coaching batches and admissions at ${siteConfig.name}.`
  )}`;

  return (
    <aside
      aria-label="Quick Action Controls"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 85,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
      className="floating-actions-container"
    >
      {/* Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          backgroundColor: "var(--navy-900)",
          color: "var(--white)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(16, 33, 58, 0.3)",
          opacity: showTop ? 1 : 0,
          transform: showTop ? "scale(1) translateY(0)" : "scale(0.8) translateY(12px)",
          pointerEvents: showTop ? "auto" : "none",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="floating-btn floating-top-btn"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>

      {/* WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(37, 211, 102, 0.45)",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          textDecoration: "none",
          position: "relative",
        }}
        className="floating-btn floating-whatsapp-btn"
      >
        <WhatsAppIcon size={28} color="#FFFFFF" />
        <span className="sr-only">Chat with us on WhatsApp</span>
      </a>
    </aside>
  );
}
