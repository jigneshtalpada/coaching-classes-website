import Link from "next/link";
import { sampleResultsData } from "@/config/site";
import SampleScorecard from "@/components/results/SampleScorecard";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

export default function ResultsPreview() {
  const previewResults = sampleResultsData.slice(0, 3);

  return (
    <section className="section bg-warm" id="results-achievements">
      <div className="container">
        <SectionHeading
          badge="Student Achievements"
          title="Track Record of Conceptual Excellence"
          subtitle="A preview of how consistent testing and personal mentoring translate into high percentiles and competitive exam qualifications."
        />

        <div className="grid-3" style={{ marginBottom: "3rem" }}>
          {previewResults.map((result) => (
            <SampleScorecard key={result.id} result={result} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/results" className="btn btn-outline btn-lg">
            View All Student Achievements &amp; Exam Breakdowns
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
