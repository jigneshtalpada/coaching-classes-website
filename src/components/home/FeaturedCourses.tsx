import Link from "next/link";
import { coursesData } from "@/config/site";
import CourseCard from "@/components/courses/CourseCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

export default function FeaturedCourses() {
  const featuredCourses = coursesData.filter((c) => c.featured).slice(0, 4);

  return (
    <section className="section bg-warm" id="featured-courses">
      <div className="container">
        <SectionHeading
          badge="Structured Programs"
          title="Courses Engineered for Top Academic Ranks"
          subtitle="Explore our comprehensive curriculum across school tuition, board exams, engineering, medical, and administrative entrance coaching."
        />

        <div className="grid-2" style={{ marginBottom: "3rem" }}>
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/courses" className="btn btn-outline btn-lg">
            View Complete Course Catalog (8+ Programs)
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
