import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

const building = [
  {
    title: "Centurion Intelligence Website",
    status: "Client project",
    description: "Recreating a professional business website with stronger structure, content flow, and digital presence.",
  },
  {
    title: "Lucky Alanka",
    status: "E-commerce brand",
    description: "Building a jewelry brand with Shopify, SEO, product storytelling, and AI-assisted visual direction.",
  },
  {
    title: "Portfolio V3",
    status: "Personal brand",
    description: "Designing Project STELLA as a premium digital identity for OPT, freelance, and developer opportunities.",
  },
  {
    title: "AI-Assisted Web Experiences",
    status: "Learning path",
    description: "Exploring how AI can support research, design, content strategy, and web development workflows.",
  },
];

export default function CurrentlyBuilding() {
  return (
    <Section id="building">
      <Glow position="center" />

      <Container>
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Currently Building
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Active work that keeps me learning, improving, and shipping.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            I believe growth comes from building consistently. These are the projects and skills I am actively developing right now.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {building.map((item) => (
            <Card key={item.title}>
              <Badge>{item.status}</Badge>

              <h3 className="mt-5 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}