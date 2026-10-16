"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import EnquiryForm from "./EnquiryForm";

function FormWithParams() {
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get("course") || undefined;
  const initialPlan = searchParams.get("plan") || undefined;

  return <EnquiryForm initialCourse={initialCourse} initialPlan={initialPlan} />;
}

export default function EnquiryFormWrapper() {
  return (
    <Suspense fallback={<div className="card" style={{ padding: "3rem", textAlign: "center" }}>Loading admission form...</div>}>
      <FormWithParams />
    </Suspense>
  );
}
