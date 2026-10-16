import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { coursesData, facultyData, siteConfig } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EnquiryForm from "@/components/forms/EnquiryForm";
import CourseCard from "@/components/courses/CourseCard";
import {
  Clock,
  Users,
  CheckCircle2,
  Calendar,
  BookOpen,
  Layers,
  CreditCard,
  MessageSquare,
  PhoneCall,
} from "lucide-react";

interface CourseDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);
  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: `${course.title} | ${siteConfig.name}`,
    description: course.shortDescription,
    openGraph: {
      title: `${course.title} — ${siteConfig.name}`,
      description: course.shortDescription,
    },
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  // Assigned faculty members
  const assignedFaculty = facultyData.filter((f) => course.facultyIds.includes(f.id));

  // Related courses in similar category or general
  const relatedCourses = coursesData
    .filter((c) => c.id !== course.id)
    .slice(0, 2);

  return (
    <>
      {/* Course Detail Hero */}
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
            <Breadcrumbs
              items={[
                { label: "Courses", href: "/courses" },
                { label: course.title },
              ]}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
              alignItems: "center",
            }}
            className="course-hero-grid"
          >
            {/* Left Info */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
                <span
                  style={{
                    backgroundColor: "rgba(49, 94, 247, 0.3)",
                    color: "#93C5FD",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "4px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {course.category}
                </span>

                {course.badge && (
                  <span
                    style={{
                      backgroundColor: "var(--blue-600)",
                      color: "#FFFFFF",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.65rem",
                      borderRadius: "4px",
                    }}
                  >
                    {course.badge}
                  </span>
                )}
              </div>

              <h1
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3rem)",
                  fontWeight: 800,
                  color: "var(--white)",
                  lineHeight: 1.2,
                  marginBottom: "0.75rem",
                }}
              >
                {course.title}
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#93C5FD",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                {course.subtitle}
              </p>

              <p style={{ fontSize: "1.05rem", color: "#CBD5E1", lineHeight: 1.6, marginBottom: "2rem" }}>
                {course.shortDescription}
              </p>

              {/* Meta Chips */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  padding: "1.25rem 0",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "0.9rem",
                  color: "#E2E8F0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Clock size={16} color="#60A5FA" />
                  <span>Duration: <strong>{course.duration}</strong></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Layers size={16} color="#60A5FA" />
                  <span>Mode: <strong>{course.mode}</strong></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Users size={16} color="#60A5FA" />
                  <span>Max Batch Size: <strong>{course.seatsPerBatch || 25} Students</strong></span>
                </div>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  height: "320px",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(16, 33, 58, 0.9) 0%, transparent 60%)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                    right: "1.5rem",
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                    color: "var(--white)",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "#94A3B8", display: "block" }}>
                      Tuition Fee
                    </span>
                    <span style={{ fontSize: "1.75rem", fontWeight: 800 }}>
                      ₹{course.startingFee.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <a
                    href="#enrol-form"
                    className="btn btn-primary btn-sm"
                  >
                    Enrol / Enquire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Content & Sidebar Form */}
      <section className="section bg-warm">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
            className="course-layout-grid"
          >
            {/* Left Detailed Information */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* Detailed Overview */}
              <div
                className="card"
                style={{ backgroundColor: "var(--white)", padding: "2rem" }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  Program Comprehensive Overview
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {course.fullDescription}
                </p>

                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--navy-900)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Who Should Enrol:
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {course.targetAudience}
                </p>
              </div>

              {/* Key Learning Outcomes */}
              <div
                className="card"
                style={{ backgroundColor: "var(--white)", padding: "2rem" }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--navy-900)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Measurable Learning Outcomes
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                    gap: "1rem",
                  }}
                >
                  {course.keyOutcomes.map((outcome, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        backgroundColor: "var(--warm-bg)",
                        padding: "1rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        color="var(--emerald-600)"
                        style={{ flexShrink: 0, marginTop: "0.15rem" }}
                      />
                      <span style={{ fontSize: "0.9rem", color: "var(--navy-900)", lineHeight: 1.4, fontWeight: 500 }}>
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Syllabus Breakdown */}
              <div
                className="card"
                style={{ backgroundColor: "var(--white)", padding: "2rem" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <BookOpen size={20} color="var(--blue-600)" />
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "var(--navy-900)",
                    }}
                  >
                    Curriculum &amp; Syllabus Structure
                  </h2>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  Every module is paced to finish the comprehensive syllabus 6 weeks ahead of Board/Entrance exams for extensive mock revision.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {course.syllabus.map((mod, idx) => (
                    <div
                      key={idx}
                      style={{
                        border: "1px solid var(--border-light)",
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "var(--blue-50)",
                          padding: "0.85rem 1.25rem",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "var(--blue-700)",
                        }}
                      >
                        Module {idx + 1}: {mod.title}
                      </div>
                      <div style={{ padding: "1.25rem" }}>
                        <ul
                          style={{
                            listStyle: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                          }}
                        >
                          {mod.topics.map((t, ti) => (
                            <li
                              key={ti}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                fontSize: "0.875rem",
                                color: "var(--text-secondary)",
                              }}
                            >
                              <div
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  backgroundColor: "var(--blue-600)",
                                }}
                              />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule, Timings & Doubt Clearing Methodology */}
              <div
                className="card"
                style={{ backgroundColor: "var(--white)", padding: "2rem" }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--navy-900)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Schedule, Timings &amp; Doubt Clearing Setup
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.85rem",
                      alignItems: "flex-start",
                      padding: "1rem",
                      backgroundColor: "var(--warm-bg)",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    <Calendar size={20} color="var(--blue-600)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--navy-900)", fontSize: "0.95rem" }}>
                        Batch Timings (Illustrative Demo Schedule):
                      </div>
                      <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                        {course.batchTimings}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.85rem",
                      alignItems: "flex-start",
                      padding: "1rem",
                      backgroundColor: "var(--warm-bg)",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    <MessageSquare size={20} color="var(--blue-600)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--navy-900)", fontSize: "0.95rem" }}>
                        Dedicated Daily Doubt Desk:
                      </div>
                      <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                        Our subject mentors remain available 45 minutes prior to lectures and 60 minutes after class for one-on-one personal guidance.
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.85rem",
                      alignItems: "flex-start",
                      padding: "1rem",
                      backgroundColor: "var(--warm-bg)",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    <CreditCard size={20} color="var(--emerald-600)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--navy-900)", fontSize: "0.95rem" }}>
                        Transparent Fee Policy:
                      </div>
                      <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                        {course.feeNote}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mentors for this course */}
              {assignedFaculty.length > 0 && (
                <div
                  className="card"
                  style={{ backgroundColor: "var(--white)", padding: "2rem" }}
                >
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "var(--navy-900)",
                      marginBottom: "1rem",
                    }}
                  >
                    Core Subject Faculty for this Program
                  </h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                      gap: "1.25rem",
                    }}
                  >
                    {assignedFaculty.map((f) => (
                      <div
                        key={f.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          padding: "1rem",
                          borderRadius: "var(--radius-md)",
                          backgroundColor: "var(--warm-bg)",
                          border: "1px solid var(--border-light)",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "56px",
                            height: "56px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            backgroundColor: "#CBD5E1",
                            flexShrink: 0,
                          }}
                        >
                          <Image
                            src={f.image}
                            alt={f.name}
                            fill
                            sizes="56px"
                            style={{ objectFit: "cover" }}
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy-900)" }}>
                            {f.name}
                          </h4>
                          <div style={{ fontSize: "0.8rem", color: "var(--blue-600)", fontWeight: 600 }}>
                            {f.role}
                          </div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                            {f.experienceYears}+ Yrs Experience
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar: Direct Admission Form */}
            <div id="enrol-form">
              <div style={{ position: "sticky", top: "90px" }}>
                <EnquiryForm initialCourse={course.title} />

                {/* Helpline Box */}
                <div
                  className="card"
                  style={{
                    marginTop: "1.5rem",
                    padding: "1.5rem",
                    backgroundColor: "var(--white)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.5rem" }}>
                    Have Questions Before Applying?
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                    Our academic advisors are available Mon–Sat (8:00 AM – 7:30 PM) to discuss batch timings and scholarship eligibility.
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="btn btn-outline btn-sm"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <PhoneCall size={14} />
                    Call {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--navy-900)" }}>
                Other Recommended Programs
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
                Explore related streams or subsequent preparation batches.
              </p>
            </div>
            <Link href="/courses" className="btn btn-outline btn-sm">
              All Courses
            </Link>
          </div>

          <div className="grid-2">
            {relatedCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
