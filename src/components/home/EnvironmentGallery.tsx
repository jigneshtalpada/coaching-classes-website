import Image from "next/image";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EnvironmentGallery() {
  const { gallery } = siteConfig;

  return (
    <section className="section bg-white" id="campus-life">
      <div className="container">
        <SectionHeading
          badge="Learning Environment"
          title="Designed for Deep Focus and Academic Growth"
          subtitle="Take a look inside our modern classrooms, fully equipped reference library, science lab, and dedicated 1-on-1 mentorship stations."
        />

        <div className="grid-3" style={{ gap: "1.5rem" }}>
          {gallery.map((item, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                height: "250px",
                backgroundColor: "#1E293B",
                boxShadow: "var(--shadow-subtle)",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(16, 33, 58, 0.85) 0%, rgba(16, 33, 58, 0.1) 60%, transparent 100%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                  right: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.2rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#93C5FD",
                  }}
                >
                  {item.category}
                </span>
                <h4
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
