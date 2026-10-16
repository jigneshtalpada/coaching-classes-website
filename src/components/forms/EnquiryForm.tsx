"use client";

import { useState } from "react";
import { coursesData, siteConfig } from "@/config/site";
import {
  submitEnquiry,
  EnquiryFormData,
  EnquirySubmissionResult,
} from "@/lib/enquiry-service";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  Sparkles,
  PhoneCall,
} from "lucide-react";

interface EnquiryFormProps {
  initialCourse?: string;
  initialPlan?: string;
  className?: string;
}

export default function EnquiryForm({
  initialCourse,
  initialPlan,
  className = "",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    currentClass: "Class 10",
    courseInterested: initialCourse || "",
    preferredBatch: "Evening Batch (4:30 PM - 7:30 PM)",
    preferredMode: "Classroom",
    message: initialPlan ? `I am interested in applying for the ${initialPlan}.` : "",
    consent: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<EnquirySubmissionResult | null>(null);

  // Remove redundant useEffect to avoid cascading render lint rule
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for that field
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const res = await submitEnquiry(formData);
      if (!res.success && res.errors) {
        setErrors(res.errors);
      } else {
        setSubmissionResult(res);
        setErrors({});
      }
    } catch {
      setSubmissionResult({
        success: false,
        message: "An unexpected error occurred. Please try again or call our helpline.",
        isDemoSubmission: true,
        timestamp: new Date().toISOString(),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFormData({
      studentName: "",
      parentName: "",
      phone: "",
      email: "",
      currentClass: "Class 10",
      courseInterested: "",
      preferredBatch: "Evening Batch (4:30 PM - 7:30 PM)",
      preferredMode: "Classroom",
      message: "",
      consent: true,
    });
  };

  return (
    <div
      className={`card ${className}`}
      style={{
        backgroundColor: "var(--white)",
        padding: "clamp(1rem, 3vw, 2.5rem)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--border-light)",
        boxShadow: "0 10px 30px -5px rgba(16, 33, 58, 0.08)",
      }}
    >
      {/* Form Header */}
      <div style={{ marginBottom: "1.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <span
            className="badge badge-blue"
            style={{ fontSize: "0.725rem", padding: "0.25rem 0.6rem" }}
          >
            Admission Counselling 2025–26
          </span>
        </div>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "var(--navy-900)",
            lineHeight: 1.25,
            marginBottom: "0.35rem",
          }}
        >
          Book Your Free Demo &amp; Orientation
        </h3>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
          Fill in your academic details below. Our senior counsellor will coordinate a 1-on-1 trial class
          and personalized study roadmap.
        </p>
      </div>

      {/* Submission Feedback Message */}
      {submissionResult && (
        <div
          role="alert"
          style={{
            backgroundColor: submissionResult.success ? "var(--emerald-50)" : "#FEF2F2",
            border: `1px solid ${submissionResult.success ? "#A7F3D0" : "#FECACA"}`,
            borderRadius: "var(--radius-md)",
            padding: "1.25rem",
            marginBottom: "1.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
            {submissionResult.success ? (
              <CheckCircle2 size={22} color="var(--emerald-600)" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
            ) : (
              <AlertCircle size={22} color="#DC2626" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
            )}
            <div>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: submissionResult.success ? "var(--emerald-600)" : "#991B1B",
                  marginBottom: "0.25rem",
                }}
              >
                {submissionResult.success ? "Enquiry Successfully Submitted!" : "Submission Failed"}
              </h4>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: submissionResult.success ? "#065F46" : "#7F1D1D",
                  lineHeight: 1.5,
                }}
              >
                {submissionResult.message}
              </p>
            </div>
          </div>

          {submissionResult.success && (
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: "6px",
                padding: "0.75rem 1rem",
                fontSize: "0.8rem",
                color: "#065F46",
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: 700 }}>
                <Sparkles size={13} />
                Client Presentation Note:
              </div>
              <div>
                This form uses an isolated service handler (<code>src/lib/enquiry-service.ts</code>). For live deployment, easily hook it into WhatsApp notifications, EmailJS, Formspree, or your coaching CRM without frontend refactoring.
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-outline btn-sm"
                style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
              >
                Submit Another Enquiry
              </button>
            </div>
          )}
        </div>
      )}

      {/* Main Form */}
      {(!submissionResult || !submissionResult.success) && (
        <form onSubmit={handleSubmit} noValidate>
          {/* Row 1: Student Name & Parent Name */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
              gap: "1rem",
            }}
          >
            <div className="form-group">
              <label htmlFor="studentName" className="form-label">
                Student&apos;s Full Name <span className="req">*</span>
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="e.g. Aryan Sharma"
                className={`form-input ${errors.studentName ? "is-invalid" : ""}`}
                required
                aria-invalid={!!errors.studentName}
                aria-describedby={errors.studentName ? "studentName-error" : undefined}
              />
              {errors.studentName && (
                <span id="studentName-error" className="form-error">
                  {errors.studentName}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="parentName" className="form-label">
                Parent / Guardian Name <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(Optional)</span>
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="e.g. Sunil Sharma"
                className="form-input"
              />
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
              gap: "1rem",
            }}
          >
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Contact Phone / WhatsApp <span className="req">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 98765 43210"
                className={`form-input ${errors.phone ? "is-invalid" : ""}`}
                required
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <span id="phone-error" className="form-error">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. student@example.com"
                className={`form-input ${errors.email ? "is-invalid" : ""}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <span id="email-error" className="form-error">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Row 3: Current Class & Course of Interest */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
              gap: "1rem",
            }}
          >
            <div className="form-group">
              <label htmlFor="currentClass" className="form-label">
                Current Class / Qualification <span className="req">*</span>
              </label>
              <select
                id="currentClass"
                name="currentClass"
                value={formData.currentClass}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11 Science">Class 11 Science</option>
                <option value="Class 12 Science">Class 12 Science</option>
                <option value="12th Passed / Dropper">12th Passed / Repeater</option>
                <option value="Undergraduate College">Undergraduate College</option>
                <option value="Graduate / Job Seeker">Graduate / Job Seeker</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="courseInterested" className="form-label">
                Course of Interest <span className="req">*</span>
              </label>
              <select
                id="courseInterested"
                name="courseInterested"
                value={formData.courseInterested}
                onChange={handleChange}
                className={`form-select ${errors.courseInterested ? "is-invalid" : ""}`}
                required
              >
                <option value="">Select a Course...</option>
                {coursesData.map((course) => (
                  <option key={course.id} value={course.title}>
                    {course.title} ({course.category})
                  </option>
                ))}
                <option value="General Counselling / Unsure">General Counselling / Not Decided Yet</option>
              </select>
              {errors.courseInterested && (
                <span className="form-error">{errors.courseInterested}</span>
              )}
            </div>
          </div>

          {/* Row 4: Preferred Batch & Mode */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
              gap: "1rem",
            }}
          >
            <div className="form-group">
              <label htmlFor="preferredBatch" className="form-label">
                Preferred Batch Timing
              </label>
              <select
                id="preferredBatch"
                name="preferredBatch"
                value={formData.preferredBatch}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Morning Batch (7:00 AM - 10:30 AM)">Morning Batch (7:00 AM - 10:30 AM)</option>
                <option value="Evening Batch (4:30 PM - 7:30 PM)">Evening Batch (4:30 PM - 7:30 PM)</option>
                <option value="Late Evening (6:30 PM - 9:00 PM)">Late Evening (6:30 PM - 9:00 PM)</option>
                <option value="Weekend Intensive Batch">Weekend Intensive Batch (Sat & Sun)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="preferredMode" className="form-label">
                Preferred Learning Mode
              </label>
              <select
                id="preferredMode"
                name="preferredMode"
                value={formData.preferredMode}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Classroom">Offline Classroom (Center)</option>
                <option value="Hybrid">Hybrid (Classroom + Online Portal)</option>
                <option value="Online Live">100% Online Live Interactive</option>
              </select>
            </div>
          </div>

          {/* Message / Goals */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Questions or Academic Goals <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(Optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about previous marks, specific subjects you need help with, or scholarship test queries..."
              className="form-textarea"
            />
          </div>

          {/* Consent Checkbox */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.6rem",
                cursor: "pointer",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                lineHeight: 1.4,
              }}
            >
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                style={{
                  marginTop: "0.2rem",
                  width: "16px",
                  height: "16px",
                  accentColor: "var(--blue-600)",
                }}
              />
              <span>
                I agree to be contacted by {siteConfig.name} academic counsellors via phone or WhatsApp regarding admission, batches, and demo classes.
              </span>
            </label>
            {errors.consent && <div className="form-error">{errors.consent}</div>}
          </div>

          {/* Submit Button */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-lg"
              style={{
                width: "100%",
                justifyContent: "center",
                opacity: isSubmitting ? 0.75 : 1,
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Processing Admission Request...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Submit Admission Enquiry
                </>
              )}
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.4rem",
                fontSize: "0.775rem",
                color: "var(--text-muted)",
              }}
            >
              <Lock size={12} />
              <span>Your contact information is strictly confidential. No spam guaranteed.</span>
            </div>
          </div>
        </form>
      )}

      {/* Immediate Assistance Helpline */}
      <div
        style={{
          marginTop: "1.75rem",
          paddingTop: "1.25rem",
          borderTop: "1px solid var(--border-light)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
          fontSize: "0.85rem",
        }}
      >
        <span style={{ color: "var(--text-secondary)" }}>Need urgent counsel? Call our helpdesk:</span>
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            color: "var(--blue-600)",
            fontWeight: 700,
          }}
        >
          <PhoneCall size={14} />
          {siteConfig.contact.phone}
        </a>
      </div>
    </div>
  );
}
