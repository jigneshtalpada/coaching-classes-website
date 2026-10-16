"use client";

import { useState, useMemo } from "react";
import { FaqItem } from "@/types/site";
import Accordion from "@/components/ui/Accordion";
import { Search, HelpCircle } from "lucide-react";

interface FaqFilterProps {
  faqItems: FaqItem[];
}

export default function FaqFilter({ faqItems }: FaqFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = useMemo(() => {
    const set = new Set(faqItems.map((item) => item.category));
    return ["All", ...Array.from(set)];
  }, [faqItems]);

  const filteredItems = useMemo(() => {
    return faqItems.filter((item) => {
      const matchCat = activeCategory === "All" || item.category === activeCategory;
      const matchSearch =
        searchTerm.trim() === "" ||
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [faqItems, activeCategory, searchTerm]);

  return (
    <div>
      {/* Search Input */}
      <div style={{ maxWidth: "600px", margin: "0 auto 2rem", position: "relative" }}>
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
          placeholder="Search question keywords (e.g. fees, demo class, doubt solving)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "0.85rem 1rem 0.85rem 2.85rem",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-subtle)",
            fontSize: "0.95rem",
            backgroundColor: "var(--white)",
            outline: "none",
          }}
          aria-label="Search frequently asked questions"
        />
      </div>

      {/* Category Pills */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "2.5rem",
        }}
      >
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.45rem 1rem",
                borderRadius: "999px",
                border: isSelected ? "1px solid var(--blue-600)" : "1px solid var(--border-subtle)",
                backgroundColor: isSelected ? "var(--blue-600)" : "var(--white)",
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

      {/* Accordion or Empty State */}
      {filteredItems.length > 0 ? (
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Accordion items={filteredItems} allowMultiple={true} />
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "3rem 1rem",
            backgroundColor: "var(--white)",
            borderRadius: "var(--radius-lg)",
            border: "1px dashed var(--border-subtle)",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <HelpCircle size={32} color="#94A3B8" style={{ margin: "0 auto 0.75rem" }} />
          <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy-900)", marginBottom: "0.25rem" }}>
            No Questions Found
          </h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
            We couldn&apos;t find an answer matching &ldquo;{searchTerm}&rdquo;. Feel free to contact our counsellors directly.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setActiveCategory("All");
            }}
            className="btn btn-primary btn-sm"
          >
            Reset FAQ Filter
          </button>
        </div>
      )}
    </div>
  );
}
