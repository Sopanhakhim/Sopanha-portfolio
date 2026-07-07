import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern, and user-friendly interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Business & E-commerce",
    description: "Connecting digital products with real customer and business needs.",
    skills: ["Shopify", "SEO", "Product Listings", "Customer Experience", "Brand Strategy"],
  },
  {
    title: "Marketing & Analytics",
    description: "Planning content, campaigns, and digital growth strategies.",
    skills: ["Digital Marketing", "Email Marketing", "Google Analytics", "Campaign Planning", "Content Strategy"],
  },
  {
    title: "AI & Productivity",
    description: "Using AI tools to support research, content, design, and development.",
    skills: ["ChatGPT", "Claude", "Prompt Writing", "VS Code", "GitHub"],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <Glow position="center" />

      <Container>
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Skills
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white md:text-5xl">
            A practical skill set across code, business, and digital strategy.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
            My strengths combine modern web development with e-commerce,
            marketing, AI tools, and customer-focused thinking.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="text-xl font-semibold text-white">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}