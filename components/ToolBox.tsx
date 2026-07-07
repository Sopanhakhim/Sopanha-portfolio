import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

const toolbox = [
  {
    title: "Frontend Engineering",
    note: "Building modern, responsive interfaces.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Programming & Data",
    note: "Solving problems with code and structured thinking.",
    tools: ["JavaScript", "SQL", "Python Learning"],
  },
  {
    title: "Web Platforms",
    note: "Creating real websites for business and client needs.",
    tools: ["Shopify", "WordPress", "Webflow"],
  },
  {
    title: "AI Workflow",
    note: "Using AI tools to support research, content, and development.",
    tools: ["ChatGPT", "Claude", "Cursor", "GitHub Copilot"],
  },
  {
    title: "Business & Marketing",
    note: "Connecting technology with customer experience and growth.",
    tools: ["SEO", "Google Analytics", "Content Strategy", "Digital Marketing"],
  },
  {
    title: "Developer Tools",
    note: "Organizing, building, and improving projects professionally.",
    tools: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

export default function Toolbox() {
  return (
    <Section id="toolbox">
      <Glow position="right" />

      <Container>
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            My Toolbox
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            The right tool depends on the problem I&apos;m solving.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            My skill set combines software engineering, web platforms, AI
            workflows, business strategy, and digital marketing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {toolbox.map((group) => (
            <Card key={group.title}>
              <h3 className="text-2xl font-bold text-white">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {group.note}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}