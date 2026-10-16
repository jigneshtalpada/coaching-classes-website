"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Course & Batch Timings Query",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate latency
    await new Promise((r) => setTimeout(r, 450));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div
      className="card"
      style={{
        backgroundColor: "var(--white)",
        padding: "clamp(1rem, 3vw, 2.25rem)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <h3
        style={{
          fontSize: "1.35rem",
          fontWeight: 800,
          color: "var(--navy-900)",
          marginBottom: "0.35rem",
        }}
      >
        Send Us a Message
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
        Have questions about admissions, faculty, or scheduling a visit to our center? Let us know.
      </p>

      {submitted ? (
        <div
          style={{
            backgroundColor: "var(--emerald-50)",
            border: "1px solid #A7F3D0",
            borderRadius: "var(--radius-md)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--emerald-600)" }}>
            <CheckCircle2 size={20} />
            <span style={{ fontWeight: 700, fontSize: "1rem" }}>Message Sent Successfully</span>
          </div>
          <p style={{ fontSize: "0.875rem", color: "#065F46", lineHeight: 1.5 }}>
            Thank you, {formData.name}! Your message has been received. Our academic counselling team will get in touch with you shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", phone: "", subject: "Course & Batch Timings Query", message: "" });
            }}
            className="btn btn-outline btn-sm"
            style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">
              Your Name <span className="req">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Meera Mehta"
              className="form-input"
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
              gap: "1rem",
            }}
          >
            <div className="form-group">
              <label htmlFor="contact-phone" className="form-label">
                Phone Number <span className="req">*</span>
              </label>
              <input
                type="tel"
                id="contact-phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 98765 43210"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="contact-email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. name@example.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject" className="form-label">
              Subject of Enquiry
            </label>
            <select
              id="contact-subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="form-select"
            >
              <option value="Course & Batch Timings Query">Course & Batch Timings Query</option>
              <option value="Fee Structure & Installment Options">Fee Structure & Installment Options</option>
              <option value="Schedule a Campus Visit">Schedule a Campus Visit</option>
              <option value="Scholarship Test (ETDT) Info">Scholarship Test (ETDT) Info</option>
              <option value="Other Enquiries">Other Academic Enquiries</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">
              Message <span className="req">*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can we assist you?"
              className="form-textarea"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
