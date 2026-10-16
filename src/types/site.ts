export interface NavigationItem {
  label: string;
  href: string;
  badge?: string;
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  whatsapp?: string;
}

export interface ContactInfo {
  phone: string;
  alternatePhone?: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  officeHours: string;
  whatsappNumber: string;
  googleMapsEmbedUrl?: string;
  googleMapsDirectionsUrl?: string;
  isDemoDetails: boolean;
}

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string;
  duration: string;
  batchTimings: string;
  mode: "Classroom" | "Hybrid" | "Online Live";
  startingFee: number;
  feeNote: string;
  installmentsAvailable: boolean;
  featured: boolean;
  image: string;
  facultyIds: string[];
  keyOutcomes: string[];
  syllabus: CourseModule[];
  features: string[];
  seatsPerBatch?: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experienceYears: number;
  subjects: string[];
  bio: string;
  teachingApproach: string;
  image: string;
  featured: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  feeINR: number;
  period: string;
  isPopular?: boolean;
  duration: string;
  subjectsCovered: string;
  classMode: string;
  features: {
    included: boolean;
    text: string;
  }[];
  ctaText: string;
  recommendedFor: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  guardianName?: string;
  courseTaken: string;
  batchYear: string;
  quote: string;
  rating: number;
  avatar: string;
  verifiedDemo: boolean;
  achievementHighlight?: string;
}

export interface SampleResult {
  id: string;
  studentName: string;
  exam: string;
  category: "Board Exams" | "Competitive Exams" | "Foundation & Olympiad" | "Government Exams";
  scoreOrRank: string;
  percentile?: string;
  course: string;
  year: string;
  badge: string;
  quote?: string;
  image: string;
}

export interface FaqItem {
  id: string;
  category: "Admissions" | "Courses & Syllabus" | "Faculty & Teaching" | "Fees & Installments" | "Batch Timings" | "Tests & Material";
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  establishedYear: number;
  isDemoNoticeEnabled: boolean;
  announcement: {
    enabled: boolean;
    text: string;
    actionText: string;
    actionHref: string;
  };
  contact: ContactInfo;
  social: SocialLinks;
  navLinks: NavigationItem[];
  footerLinks: {
    title: string;
    items: NavigationItem[];
  }[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  methodologySteps: {
    step: string;
    title: string;
    description: string;
  }[];
  admissionSteps: {
    stepNumber: string;
    title: string;
    description: string;
    actionText?: string;
  }[];
  gallery: {
    title: string;
    category: string;
    image: string;
  }[];
}
