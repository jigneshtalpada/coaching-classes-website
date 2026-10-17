"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import {
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Menu,
  X,
  GraduationCap,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Monitor scroll for smart auto-hide on scroll down & show on scroll up
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (mobileMenuOpen) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Sticky shadow
          setScrolled(currentScrollY > 15);

          const diff = currentScrollY - lastScrollYRef.current;

          // Always show header near top of page
          if (currentScrollY < 60) {
            setHeaderVisible(true);
          } else if (diff > 8 && currentScrollY > 90) {
            // Scrolling down -> hide header
            setHeaderVisible(false);
          } else if (diff < -8) {
            // Scrolling up -> show header
            setHeaderVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Auto-close drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change during render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Handle ESC key to close drawer and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-active");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-active");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-active");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navItems = siteConfig.navLinks;

  return (
    <>
      <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: mobileMenuOpen ? 99999 : 50,
        backgroundColor: "var(--white)",
        boxShadow: scrolled ? "0 4px 20px -2px rgba(16, 33, 58, 0.08)" : "none",
        borderBottom: "1px solid var(--border-light)",
        transform: !headerVisible && !mobileMenuOpen ? "translateY(-100%)" : "none",
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease",
      }}
    >
      {/* Top Announcement Bar */}
      {siteConfig.announcement.enabled && (
        <div
          style={{
            backgroundColor: "var(--navy-900)",
            color: "#E2E8F0",
            fontSize: "0.825rem",
            padding: "0.45rem 0",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                overflow: "hidden",
                flex: 1,
                minWidth: 0,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  backgroundColor: "rgba(49, 94, 247, 0.35)",
                  color: "#93C5FD",
                  padding: "0.15rem 0.45rem",
                  borderRadius: "4px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  flexShrink: 0,
                }}
              >
                <Sparkles size={11} />
                Notice
              </span>

              {/* Scrollable & Animated Notice Track for Mobile */}
              <div
                className="header-notice-scroll-track"
                style={{
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                  minWidth: 0,
                  scrollbarWidth: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <div className="header-notice-inner">
                  <span style={{ fontSize: "0.825rem", color: "#F1F5F9" }}>
                    {siteConfig.announcement.text}
                  </span>
                  <Link
                    href={siteConfig.announcement.actionHref}
                    style={{
                      color: "#60A5FA",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      marginLeft: "0.5rem",
                    }}
                  >
                    {siteConfig.announcement.actionText}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "none",
                alignItems: "center",
                gap: "1.25rem",
                color: "#CBD5E1",
                flexShrink: 0,
              }}
              className="top-bar-contact"
            >
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  color: "#CBD5E1",
                }}
              >
                <Phone size={13} color="#60A5FA" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <span style={{ opacity: 0.3 }}>|</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Clock size={13} color="#60A5FA" />
                <span style={{ fontSize: "0.775rem" }}>8 AM – 7:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo & Wordmark */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(0.4rem, 2vw, 0.75rem)",
              textDecoration: "none",
              minWidth: 0,
            }}
            aria-label={`${siteConfig.name} - Home`}
          >
            <div
              style={{
                width: "clamp(36px, 9vw, 42px)",
                height: "clamp(36px, 9vw, 42px)",
                borderRadius: "10px",
                backgroundColor: "var(--navy-900)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--white)",
                boxShadow: "0 2px 8px rgba(16, 33, 58, 0.2)",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "16px",
                  height: "16px",
                  backgroundColor: "var(--blue-600)",
                  borderBottomLeftRadius: "10px",
                }}
              />
              <GraduationCap size={20} color="#FFFFFF" style={{ position: "relative", zIndex: 1 }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "clamp(0.95rem, 3.8vw, 1.25rem)",
                  letterSpacing: "-0.03em",
                  color: "var(--navy-900)",
                  lineHeight: 1.1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {siteConfig.name}
              </span>
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Coaching Institute
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            style={{
              display: "none",
              alignItems: "center",
              gap: "0.25rem",
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: "0.5rem 0.85rem",
                    fontSize: "0.925rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "var(--blue-600)" : "var(--navy-900)",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: isActive ? "var(--blue-50)" : "transparent",
                    transition: "all 0.15s ease",
                    position: "relative",
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {item.badge && (
                    <span
                      style={{
                        marginLeft: "0.35rem",
                        fontSize: "0.65rem",
                        padding: "0.1rem 0.35rem",
                        backgroundColor: "var(--blue-600)",
                        color: "var(--white)",
                        borderRadius: "999px",
                        fontWeight: 700,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <Link
              href="/admissions"
              className="btn btn-primary"
              style={{
                display: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
              id="header-enquire-desktop"
            >
              Enquire Now
              <ArrowRight size={15} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className="mobile-hamburger-btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "42px",
                height: "42px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)",
                backgroundColor: mobileMenuOpen ? "var(--blue-50)" : "var(--white)",
                color: mobileMenuOpen ? "var(--blue-600)" : "var(--navy-900)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Portaled Mobile Navigation Drawer & Backdrop */}
    {mounted &&
      typeof document !== "undefined" &&
      createPortal(
        <>
          {/* Mobile Drawer Overlay */}
          {mobileMenuOpen && (
            <div
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100vw",
                height: "100dvh",
                backgroundColor: "rgba(16, 33, 58, 0.65)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                zIndex: 99998,
                transition: "opacity 0.25s ease",
              }}
              aria-hidden="true"
            />
          )}

          {/* Mobile Drawer Menu */}
          <div
            id="mobile-navigation-drawer"
            aria-label="Mobile Navigation"
            role="dialog"
            aria-modal="true"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: "min(320px, 86vw)",
              height: "100dvh",
              backgroundColor: "var(--white)",
              boxShadow: "-8px 0 32px rgba(16, 33, 58, 0.25)",
              zIndex: 99999,
              display: "flex",
              flexDirection: "column",
              transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.3s ease",
              overflowY: "auto",
              visibility: mobileMenuOpen ? "visible" : "hidden",
              pointerEvents: mobileMenuOpen ? "auto" : "none",
            }}
          >
            {/* Drawer Header */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid var(--border-light)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    backgroundColor: "var(--navy-900)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--white)",
                  }}
                >
                  <GraduationCap size={18} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "var(--navy-900)",
                  }}
                >
                  {siteConfig.name}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "#F8FAFC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--navy-900)",
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Notice Card for Mobile View */}
            {siteConfig.announcement.enabled && (
              <div
                style={{
                  margin: "1rem 1rem 0.25rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--navy-900)",
                  color: "var(--white)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.35rem" }}>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#93C5FD",
                      backgroundColor: "rgba(49, 94, 247, 0.35)",
                      padding: "0.1rem 0.4rem",
                      borderRadius: "4px",
                    }}
                  >
                    Notice
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#94A3B8" }}>Admissions 2025–26</span>
                </div>
                <p style={{ fontSize: "0.825rem", color: "#E2E8F0", lineHeight: 1.45, marginBottom: "0.5rem" }}>
                  {siteConfig.announcement.text}
                </p>
                <Link
                  href={siteConfig.announcement.actionHref}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "0.8rem",
                    color: "#60A5FA",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  {siteConfig.announcement.actionText}
                  <ArrowRight size={13} />
                </Link>
              </div>
            )}

            {/* Drawer Navigation Links */}
            <div style={{ padding: "1.25rem 1rem", flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(item.href + "/");

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.85rem 1rem",
                        borderRadius: "var(--radius-md)",
                        fontSize: "1rem",
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "var(--blue-600)" : "var(--navy-900)",
                        backgroundColor: isActive ? "var(--blue-50)" : "transparent",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={16} color={isActive ? "var(--blue-600)" : "#94A3B8"} />
                    </Link>
                  );
                })}
              </div>

              {/* Quick Enquire Button in Drawer */}
              <div style={{ marginTop: "1.5rem", padding: "0 0.5rem" }}>
                <Link
                  href="/admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "0.85rem" }}
                >
                  Enquire Now for Admissions
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Drawer Footer Contact */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                backgroundColor: "var(--warm-bg)",
                borderTop: "1px solid var(--border-light)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontSize: "0.85rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--navy-900)" }}>
                <Phone size={14} color="var(--blue-600)" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} style={{ fontWeight: 600 }}>
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)" }}>
                <Mail size={14} color="var(--blue-600)" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.775rem" }}>
                <Clock size={14} />
                <span>{siteConfig.contact.officeHours.split("|")[0]}</span>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
  </>
);
}
