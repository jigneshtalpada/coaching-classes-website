import Link from "next/link";
import { facultyData } from "@/config/site";
import FacultyCard from "@/components/faculty/FacultyCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

export default function FacultyPreview() {
  const previewFaculty = facultyData.slice(0, 3);

  return (
    <section className="section bg-white" id="faculty-team">
      <div className="container">
        <SectionHeading
          badge="Distinguished Educators"
          title="Learn from Seasoned Academic Mentors"
          subtitle="Our core faculty brings an average of 12+ years of teaching experience from premier institutions, dedicated to student concept clarity."
        />

        <div className="grid-3" style={{ marginBottom: "3rem" }}>
          {previewFaculty.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/faculty" className="btn btn-outline btn-lg">
            Meet Our Complete Faculty Team ({facultyData.length}+ Mentors)
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
