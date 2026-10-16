"use client";

import { useState, useMemo } from "react";
import { SampleResult } from "@/types/site";
import SampleScorecard from "@/components/results/SampleScorecard";

interface ResultsFilterProps {
  results: SampleResult[];
}

export default function ResultsFilter({ results }: ResultsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(results.map((r) => r.category));
    return ["All", ...Array.from(set)];
  }, [results]);

  const filtered = useMemo(() => {
    if (selectedCategory === "All") return results;
    return results.filter((r) => r.category === selectedCategory);
  }, [results, selectedCategory]);

  return (
    <div>
      {/* Category Tabs */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "2.5rem",
        }}
      >
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "0.5rem 1.15rem",
                borderRadius: "999px",
                border: isSelected ? "1px solid var(--blue-600)" : "1px solid var(--border-subtle)",
                backgroundColor: isSelected ? "var(--blue-600)" : "var(--white)",
                color: isSelected ? "#FFFFFF" : "var(--navy-900)",
                fontSize: "0.875rem",
                fontWeight: isSelected ? 700 : 500,
                cursor: "pointer",
                boxShadow: isSelected ? "0 2px 8px rgba(49, 94, 247, 0.25)" : "var(--shadow-subtle)",
                transition: "all 0.15s ease",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid-3">
        {filtered.map((result) => (
          <SampleScorecard key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}
