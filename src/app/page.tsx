import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LearningExperience from "@/components/home/LearningExperience";
import AdmissionSteps from "@/components/home/AdmissionSteps";
import FacultyPreview from "@/components/home/FacultyPreview";
import ResultsPreview from "@/components/home/ResultsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingPreview from "@/components/home/PricingPreview";
import EnvironmentGallery from "@/components/home/EnvironmentGallery";
import FaqPreview from "@/components/home/FaqPreview";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <FeaturedCourses />
      <WhyChooseUs />
      <LearningExperience />
      <AdmissionSteps />
      <FacultyPreview />
      <ResultsPreview />
      <TestimonialsSection />
      <PricingPreview />
      <EnvironmentGallery />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
