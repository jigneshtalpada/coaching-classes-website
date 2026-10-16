import Link from "next/link";
import { faqData } from "@/config/site";
import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

export default function FaqPreview() {
  const previewFaqs = faqData.slice(0, 5);

  return (
    <section className="section bg-warm" id="faq-preview">
      <div className="container">
        <SectionHeading
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Answers to common parent and student queries regarding batches, demo classes, fee installments, and doubt clinics."
        />

        <div style={{ maxWidth: "840px", margin: "0 auto 2.5rem" }}>
          <Accordion items={previewFaqs} />
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/faq" className="btn btn-outline btn-lg">
            View All Frequently Asked Questions
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
