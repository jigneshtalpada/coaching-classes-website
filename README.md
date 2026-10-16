# Coaching Classes & Institute Demo Website Template

A premium, conversion-focused, multi-page website template built with **Next.js (App Router)**, **TypeScript**, and **Vanilla CSS**. Engineered specifically for web agencies to pitch and deliver modern websites to coaching classes, tuition centers, competitive entrance exam institutes (JEE / NEET / GUJCET / GPSC / UPSC), and educational academies.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (Generates 22 static pages)
npm run build

# 4. Code quality & linting
npm run lint
```

---

## 🎨 Centralized Client Configuration

**To adapt this template for any client without modifying page code, edit a single configuration file:**

### 👉 [`src/config/site.ts`](file:///c:/Users/Jignesh/client-demo-websites/coaching-classes-website/src/config/site.ts)

You can customize:
1. **Institute Identity**: Name, short name, tagline, description, established year, and logo.
2. **Contact & Campus Details**: Phone, alternate phone, email, full address, city, state, office hours, WhatsApp enquiry number, and Google Maps embed / directions links.
3. **Announcement Bar**: Enable/disable top banner, change announcement text and link.
4. **Courses Catalog (`coursesData`)**: Add, edit, or remove programs with category, duration, mode (Classroom / Hybrid / Online), fee notes, seats per batch, syllabus breakdown, and outcomes.
5. **Faculty Team (`facultyData`)**: Names, designations, qualifications, subject chips, bios, and portraits.
6. **Pricing Plans (`pricingPlansData`)**: Foundation, Focus, and Advanced plans with fees in INR, durations, and checklist features.
7. **Testimonials (`testimonialsData`)**: Parent and student demo profiles with ratings, batch year, and feedback.
8. **Sample Results (`sampleResultsData`)**: Board and competitive entrance exam scorecards clearly marked with demo disclosures.
9. **FAQs (`faqData`)**: Categorized questions across Admissions, Syllabus, Fees, Batch Timings, and Tests.
10. **Demo Notice Banner**: Set `isDemoNoticeEnabled: false` when going live for an actual client.

---

## 📄 Pages & Routes Included

| Route | Page | Key Features |
|---|---|---|
| `/` | **Homepage** | Announcement bar, Hero with demo metrics, Trust benefits strip, Featured courses, Why Choose Us, Learning experience split, 4-step admission journey, Faculty preview, Results preview, Testimonials, Pricing preview, Campus photo gallery, FAQ preview, High-converting CTA banner, Full responsive footer. |
| `/about` | **About Us** | Educational philosophy, Mission & Vision, 3 core teaching principles, Campus infrastructure highlights, Metric counters, Orientation CTA. |
| `/courses` | **Courses Catalog** | Real-time keyword search, Category filter tabs (School Tuition, Science 11-12, JEE, NEET, GUJCET, GPSC/UPSC, Banking, Spoken English), Friendly empty state, Responsive cards. |
| `/courses/[slug]` | **Course Details** | Dynamic SSG routes generated via `generateStaticParams`, Subject syllabus breakdown, Duration, Batch timings, Mode, Learning outcomes, Assigned faculty profiles, Transparent fee note, Related courses, Sticky admission enquiry form pre-filled with the course title. |
| `/faculty` | **Faculty Directory** | Faculty portrait cards, Subject specialization filter, Qualifications, Teaching approach quotes, 1-on-1 mentorship section. |
| `/results` | **Results & Achievements** | Category filter (Board, Competitive, Government), Sample scorecards, Transparent demo disclosure banner, 3-tier testing methodology explanation. |
| `/pricing` | **Pricing & Plans** | Foundation, Focus (Popular), and Advanced plans in INR, Full feature comparison matrix table, Payment/Installment FAQs, Custom batch enquiry. |
| `/admissions` | **Admissions & Enquiry** | Multi-field admission form with client-side validation, Trial class booking, Batch preferences, Isolated service layer (`src/lib/enquiry-service.ts`), Next-steps guide, Direct helpline. |
| `/contact` | **Contact Us** | Direct campus address, Phone/Email cards, Office hours, Instant WhatsApp button, Interactive Google Maps iframe, Direct inquiry form. |
| `/faq` | **Frequently Asked Questions** | Searchable keywords filter, Category tabs, Smooth accessible accordions, Helpdesk helpline. |
| `/privacy-policy` | **Privacy Policy** | Student data privacy, Zero third-party sharing commitment, Data security. |
| `/terms-and-conditions` | **Terms & Conditions** | Enrolment rules, Attendance guidelines, Study material intellectual property, Fee and cancellation terms. |
| `/_not-found` | **Custom 404** | Branded error page with recovery navigation and helpline. |

---

## 🛠️ Architecture & Folder Structure

```
src/
├── app/
│   ├── about/page.tsx
│   ├── admissions/page.tsx
│   ├── contact/page.tsx
│   ├── courses/
│   │   ├── [slug]/page.tsx       # Dynamic course details (SSG)
│   │   └── page.tsx              # Searchable course catalog
│   ├── faculty/page.tsx
│   ├── faq/page.tsx
│   ├── pricing/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── results/page.tsx
│   ├── terms-and-conditions/page.tsx
│   ├── globals.css               # Design system tokens & responsive layouts
│   ├── layout.tsx                # Root layout with Header, Footer & Notice
│   ├── not-found.tsx             # Custom 404 error page
│   └── page.tsx                  # Complete homepage experience
├── components/
│   ├── courses/
│   │   ├── CourseCard.tsx
│   │   └── CourseFilter.tsx      # Client-side course search & filter
│   ├── faculty/
│   │   ├── FacultyCard.tsx
│   │   └── FacultyFilter.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── EnquiryForm.tsx       # Working validation & demo submission
│   │   └── EnquiryFormWrapper.tsx# Suspense query param loader
│   ├── home/                     # Modular homepage components
│   │   ├── AdmissionSteps.tsx
│   │   ├── CtaBanner.tsx
│   │   ├── EnvironmentGallery.tsx
│   │   ├── FacultyPreview.tsx
│   │   ├── FaqPreview.tsx
│   │   ├── FeaturedCourses.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LearningExperience.tsx
│   │   ├── PricingPreview.tsx
│   │   ├── ResultsPreview.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── TrustStrip.tsx
│   │   └── WhyChooseUs.tsx
│   ├── layout/
│   │   ├── Breadcrumbs.tsx
│   │   ├── DemoNotice.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx            # Sticky bar & animated mobile drawer
│   ├── pricing/
│   │   └── PricingCard.tsx
│   ├── results/
│   │   ├── ResultsFilter.tsx
│   │   └── SampleScorecard.tsx
│   └── ui/
│       ├── Accordion.tsx         # Accessible ARIA accordion
│       ├── SectionHeading.tsx
│       └── SocialIcons.tsx       # Inline SVG social icons
├── config/
│   └── site.ts                   # ⭐ Centralized client configuration
├── lib/
│   └── enquiry-service.ts        # Modular form submission & validation service
└── types/
    └── site.ts                   # Strict TypeScript definitions
```

---

## 🎨 Color Palette & Design System

The styling is managed with Vanilla CSS custom properties in [`src/app/globals.css`](file:///c:/Users/Jignesh/client-demo-websites/coaching-classes-website/src/app/globals.css):

- **Deep Navy (`--navy-900`)**: `#10213A`
- **Royal Blue (`--blue-600`)**: `#315EF7`
- **Royal Blue Hover (`--blue-700`)**: `#2248D8`
- **Soft Blue Light (`--blue-50`)**: `#EAF0FF`
- **Warm Off-White (`--warm-bg`)**: `#F8FAFC`
- **Pure White (`--white`)**: `#FFFFFF`
- **Dark Text (`--text-primary`)**: `#172033`
- **Muted Slate (`--text-muted`)**: `#667085`
- **Emerald Green (`--emerald-600`)**: `#059669`

---

## 🔌 Connecting Live Form Submissions in Production

The enquiry form uses [`src/lib/enquiry-service.ts`](file:///c:/Users/Jignesh/client-demo-websites/coaching-classes-website/src/lib/enquiry-service.ts). To connect it to your live backend, simply replace the mock return with an API call:

```ts
// Example: Connect to your Next.js API route or CRM:
export async function submitEnquiry(data: EnquiryFormData) {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
}
```
