"use client";

import { useState, useMemo } from "react";
import { FacultyMember } from "@/types/site";
import FacultyCard from "@/components/faculty/FacultyCard";
import { Filter } from "lucide-react";

interface FacultyFilterProps {
  facultyList: FacultyMember[];
}

export default function FacultyFilter({ facultyList }: FacultyFilterProps) {
  const [selectedSubject, setSelectedSubject] = useState("All");

  const subjectList = useMemo(() => {
    const set = new Set<string>();
    facultyList.forEach((f) => f.subjects.forEach((s) => set.add(s)));
    return ["All", ...Array.from(set)];
  }, [facultyList]);

  const filtered = useMemo(() => {
    if (selectedSubject === "All") return facultyList;
    return facultyList.filter((f) => f.subjects.includes(selectedSubject));
  }, [facultyList, selectedSubject]);

  return (
    <div>
      {/* Subject Filter Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          backgroundColor: "var(--white)",
          padding: "1rem 1.5rem",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border-light)",
          marginBottom: "2.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Filter size={15} color="var(--blue-600)" />
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--navy-900)" }}>
            Filter by Subject Specialization:
          </span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {subjectList.map((subject) => {
            const isSelected = selectedSubject === subject;
            return (
              <button
                key={subject}
                type="button"
                onClick={() => setSelectedSubject(subject)}
                style={{
                  padding: "0.35rem 0.75rem",
                  borderRadius: "999px",
                  border: isSelected
                    ? "1px solid var(--blue-600)"
                    : "1px solid var(--border-subtle)",
                  backgroundColor: isSelected ? "var(--blue-600)" : "var(--warm-bg)",
                  color: isSelected ? "#FFFFFF" : "var(--navy-900)",
                  fontSize: "0.8rem",
                  fontWeight: isSelected ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {subject}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="grid-3">
        {filtered.map((faculty) => (
          <FacultyCard key={faculty.id} faculty={faculty} />
        ))}
      </div>
    </div>
  );
}
