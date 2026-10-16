export interface EnquiryFormData {
  studentName: string;
  parentName?: string;
  phone: string;
  email?: string;
  currentClass: string;
  courseInterested: string;
  preferredBatch: string;
  preferredMode: string;
  message?: string;
  consent: boolean;
}

export interface EnquirySubmissionResult {
  success: boolean;
  message: string;
  isDemoSubmission: boolean;
  timestamp: string;
  submissionId?: string;
  errors?: Partial<Record<keyof EnquiryFormData, string>>;
}

export function validateEnquiryForm(data: EnquiryFormData): Partial<Record<keyof EnquiryFormData, string>> {
  const errors: Partial<Record<keyof EnquiryFormData, string>> = {};

  if (!data.studentName || data.studentName.trim().length < 2) {
    errors.studentName = "Please enter the student's full name (at least 2 characters).";
  }

  const phoneClean = (data.phone || "").replace(/[\s\-()]/g, "");
  if (!phoneClean || phoneClean.length < 10) {
    errors.phone = "Please enter a valid contact phone number (at least 10 digits).";
  }

  if (data.email && data.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
  }

  if (!data.currentClass || data.currentClass.trim().length === 0) {
    errors.currentClass = "Please select the current grade or qualification.";
  }

  if (!data.courseInterested || data.courseInterested.trim().length === 0) {
    errors.courseInterested = "Please select the program or course of interest.";
  }

  if (!data.consent) {
    errors.consent = "Please agree to be contacted regarding admission details.";
  }

  return errors;
}

export async function submitEnquiry(data: EnquiryFormData): Promise<EnquirySubmissionResult> {
  const errors = validateEnquiryForm(data);
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields before submitting.",
      isDemoSubmission: true,
      timestamp: new Date().toISOString(),
      errors,
    };
  }

  // Simulate network latency (400ms) for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 400));

  const submissionId = "ADM-" + Math.floor(100000 + Math.random() * 900000);

  // In production, integrate this with your backend API, CRM, or email service.
  // Example: await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(data) })

  return {
    success: true,
    message: `Thank you, ${data.studentName}! Your admission enquiry (Ref: #${submissionId}) has been received. Our counsellors will reach out to you within 24 hours.`,
    isDemoSubmission: true,
    timestamp: new Date().toISOString(),
    submissionId,
  };
}
