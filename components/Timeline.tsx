import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

const timeline = [
  {
    year: "2026",
    title: "Centurion Intelligence",
    role: "Web Developer • Project Coordinator",
    type: "Client Website",
    description:
      "Redesigned and rebuilt the company website in Webflow, improving its information architecture, navigation, content organization, visual presentation, and overall user experience while collaborating directly with the client.",
    highlights: [
      "Webflow",
      "Website Redesign",
      "UX Planning",
      "Client Collaboration",
    ],
  },
  {
    year: "2026",
    title: "Truman Middle College",
    role: "Website Designer • Front-End Developer",
    type: "Education Website",
    description:
      "Recreated the school website with a modern design, responsive layout, clearer navigation, improved content organization, and a more accessible experience for students and families.",
    highlights: [
      "Front-End Development",
      "Responsive Design",
      "Information Architecture",
      "UI/UX",
    ],
  },
  {
    year: "2025 — Present",
    title: "Lucky Alanka",
    role: "Founder • Shopify Developer",
    type: "E-Commerce Brand",
    description:
      "Building and managing a jewelry e-commerce brand through Shopify development, product organization, SEO, storytelling, customer experience, and digital marketing.",
    highlights: ["Shopify", "E-Commerce", "SEO", "Brand Strategy"],
  },
  {
    year: "2025 — Present",
    title: "Project STELLA",
    role: "Designer • Front-End Developer",
    type: "Personal Portfolio",
    description:
      "Designing and developing a professional portfolio using Next.js, React, TypeScript, and Tailwind CSS to present my projects, technical abilities, and product thinking.",
    highlights: ["Next.js", "React", "TypeScript", "Product Design"],
  },
  {
    year: "2022 — 2023",
    title: "CNEHUB",
    role: "Digital Marketer",
    type: "Marketing Experience",
    description:
      "Planned digital content, supported marketing campaigns, coordinated with designers, contributed to video production, and strengthened customer engagement.",
    highlights: [
      "Content Strategy",
      "Campaign Support",
      "Creative Coordination",
      "Customer Engagement",
    ],
  },
  {
    year: "2019 — 2021",
    title: "Handprint School",
    role: "Teacher",
    type: "Education Experience",
    description:
      "Taught primary students, prepared learning activities, communicated with parents, and developed strong leadership, organization, patience, and communication skills.",
    highlights: ["Teaching", "Leadership", "Communication", "Organization"],
  },
];

export default function Timeline() {
  return (
    <Section
      id="experience"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <Glow position="left" />

      <div className="pointer-events-none absolute -left-40 top-36 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Experience
            </p>

            <h2 className="mt-5 max-w-lg text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Work shaped by{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                responsibility, collaboration,
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                continuous growth
              </span>
              .
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
              A chronological view of my work across web development,
              e-commerce, digital marketing, education, and independent
              projects.
            </p>
          </div>

          <div className="relative border-t border-white/10">
            <div className="pointer-events-none absolute bottom-0 left-[0.34rem] top-0 hidden w-px bg-gradient-to-b from-cyan-300/50 via-white/10 to-transparent md:block" />

            {timeline.map((item, index) => (
              <article
                key={`${item.year}-${item.title}`}
                className="group relative grid gap-5 border-b border-white/10 py-8 transition-all duration-500 hover:border-cyan-300/20 md:grid-cols-[9rem_1fr] md:gap-8 md:py-10"
              >
                <div className="relative">
                  <span className="absolute left-0 top-1 hidden h-3 w-3 rounded-full border border-cyan-200/60 bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.7)] transition duration-300 group-hover:scale-125 md:block" />

                  <div className="md:pl-8">
                    <p className="text-sm font-semibold text-cyan-300">
                      {item.year}
                    </p>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 transition-colors duration-300 group-hover:text-slate-400">
                      {item.type}
                    </p>
                  </div>
                </div>

                <div className="relative rounded-[1.5rem] border border-transparent p-0 transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/[0.025] group-hover:p-5 md:group-hover:p-6">
                  <span className="absolute right-0 top-0 text-xs font-semibold tracking-[0.2em] text-slate-700 transition-colors duration-300 group-hover:text-cyan-300/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="pr-10 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-200">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold tracking-wide text-cyan-300">
                    {item.role}
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/[0.04]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}