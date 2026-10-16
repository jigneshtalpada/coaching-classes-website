import Link from "next/link";
import { pricingPlansData } from "@/config/site";
import PricingCard from "@/components/pricing/PricingCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function PricingPreview() {
  return (
    <section className="section bg-warm" id="pricing-plans">
      <div className="container">
        <SectionHeading
          badge="Transparent Fee Structure"
          title="Predictable, All-Inclusive Course Investment"
          subtitle="Clear academic plans with no hidden material fees. Installment options and merit scholarships up to 40% available."
        />

        <div className="grid-3" style={{ marginBottom: "3rem" }}>
          {pricingPlansData.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <HelpCircle size={14} />
            <span>Need full subject comparison charts or installment breakdowns?</span>
          </div>

          <Link href="/pricing" className="btn btn-outline btn-lg">
            Compare All Plans &amp; View Installment Policies
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
