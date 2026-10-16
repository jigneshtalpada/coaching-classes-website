"use client";

import { useState, useMemo } from "react";
import { Course } from "@/types/site";
import CourseCard from "@/components/courses/CourseCard";
import { Search, Filter, RefreshCw } from "lucide-react";

interface CourseFilterProps {
  courses: Course[];
}

export default function CourseFilter({ courses }: CourseFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Derive unique categories from courses list
  const categories = useMemo(() => {
    const cats = Array.from(new Set(courses.map((c) => c.category)));
    return ["All", ...cats];
  }, [courses]);

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [courses, selectedCategory, searchQuery]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div>
      {/* Search and Category Filter Bar */}
      <div
        style={{
          backgroundColor: "var(--white)",
          padding: "1.5rem",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border-light)",
          boxShadow: "var(--shadow-subtle)",
          marginBottom: "2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        {/* Search Input Bar */}
        <div style={{ position: "relative", width: "100%" }}>
          <Search
            size={18}
            color="#94A3B8"
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
          <input
            type="text"
            placeholder="Search by course name, subject, entrance exam (e.g., JEE, NEET, Class 10)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "0.85rem 1rem 0.85rem 2.85rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-subtle)",
              fontSize: "0.95rem",
              outline: "none",
            }}
            aria-label="Search courses"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              style={{
                position: "absolute",
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "#94A3B8",
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
            }}
          >
            <Filter size={14} />
            <span>Filter by Category:</span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
            role="tablist"
            aria-label="Course categories"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "0.4rem 0.85rem",
                    borderRadius: "999px",
                    border: isSelected
                      ? "1px solid var(--blue-600)"
                      : "1px solid var(--border-subtle)",
                    backgroundColor: isSelected ? "var(--blue-600)" : "var(--warm-bg)",
                    color: isSelected ? "#FFFFFF" : "var(--navy-900)",
                    fontSize: "0.85rem",
                    fontWeight: isSelected ? 700 : 500,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            paddingTop: "0.75rem",
            borderTop: "1px solid var(--border-light)",
          }}
        >
          <span>
            Showing <strong>{filteredCourses.length}</strong> of {courses.length} courses
          </span>

          {(searchQuery || selectedCategory !== "All") && (
            <button
              type="button"
              onClick={handleReset}
              style={{
                background: "none",
                border: "none",
                color: "var(--blue-600)",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.85rem",
              }}
            >
              <RefreshCw size={12} />
              Reset All Filters
            </button>
          )}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div
          style={{
            backgroundColor: "var(--white)",
            borderRadius: "var(--radius-lg)",
            padding: "4rem 2rem",
            textAlign: "center",
            border: "1px dashed var(--border-subtle)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            maxWidth: "540px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "var(--blue-50)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--blue-600)",
            }}
          >
            <Search size={24} />
          </div>
          <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--navy-900)" }}>
            No Matching Courses Found
          </h3>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
            We could not find any program matching &ldquo;{searchQuery || selectedCategory}&rdquo;. Try another keyword, select another stream, or reset your filters.
          </p>
          <button type="button" onClick={handleReset} className="btn btn-primary btn-sm">
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
