"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/types/site";

interface AccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
        width: "100%",
      }}
    >
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const headingId = `faq-heading-${item.id}`;
        const contentId = `faq-content-${item.id}`;

        return (
          <div
            key={item.id}
            style={{
              backgroundColor: "var(--white)",
              borderRadius: "var(--radius-md)",
              border: isOpen ? "1px solid var(--blue-100)" : "1px solid var(--border-light)",
              boxShadow: isOpen ? "var(--shadow-card)" : "var(--shadow-subtle)",
              transition: "all 0.2s ease",
              overflow: "hidden",
            }}
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleIndex(index)}
                style={{
                  width: "100%",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  textAlign: "left",
                  background: isOpen ? "var(--blue-50)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: isOpen ? "var(--blue-700)" : "var(--navy-900)",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                }}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={18}
                  style={{
                    flexShrink: 0,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    color: isOpen ? "var(--blue-600)" : "var(--text-muted)",
                  }}
                />
              </button>
            </h3>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={headingId}
                style={{
                  padding: "1.25rem 1.5rem 1.5rem",
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  borderTop: "1px solid var(--border-light)",
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
