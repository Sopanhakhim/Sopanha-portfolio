import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

const timeline = [
  {
    year: "2026",
    title: "Centurion Intelligence",
    role: "Web Developer • Project Coordinator",
    type: "Client Project",
    description:
      "Supporting a website recreation project through content organization, Webflow planning, client communication, and digital strategy.",
  },
  {
    year: "2026",
    title: "Truman Middle College",
    role: "Website Designer • Front-End Developer",
    type: "Education Website",
    description:
      "Recreated the school website with improved structure, responsive layout, cleaner navigation, and stronger content presentation.",
  },
  {
    year: "2025 — Present",
    title: "Lucky Alanka",
    role: "Founder • Shopify Developer",
    type: "E-commerce Brand",
    description:
      "Building a jewelry brand through Shopify, SEO, product storytelling, AI-assisted visuals, and digital marketing strategy.",
  },
  {
    year: "2025 — Present",
    title: "Project STELLA",
    role: "Designer • Developer",
    type: "Personal Brand",
    description:
      "Creating a premium portfolio and digital identity using Next.js, TypeScript, Tailwind CSS, and product-focused storytelling.",
  },
  {
    year: "2022 — 2023",
    title: "CNEHUB",
    role: "Digital Marketing",
    type: "Marketing Experience",
    description:
      "Planned content, supported campaigns, coordinated with designers, and gained experience in digital branding and customer engagement.",
  },
  {
    year: "2019 — 2021",
    title: "Handprint School",
    role: "Teacher",
    type: "Teaching Experience",
    description:
      "Taught primary students, communicated with parents, and developed patience, leadership, and communication skills.",
  },
];

export default function Timeline() {
  return (
    <Section id="experience">
      <Glow position="left" />

      <Container>
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            A journey shaped by technology, business, teaching, and real projects.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            My experience connects different fields — from education and
            marketing to web development, e-commerce, and client projects.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/60 via-white/10 to-transparent md:block" />

          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={`${item.year}-${item.title}`} className="relative md:pl-12">
                <div className="absolute left-[9px] top-8 hidden h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.8)] md:block" />

                <Card>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge>{item.year}</Badge>
                    <Badge>{item.type}</Badge>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-cyan-300">
                    {item.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}