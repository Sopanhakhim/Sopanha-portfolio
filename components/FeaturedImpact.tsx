import Card from "./ui/Card";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

const impact = [
  {
    number: "06+",
    label: "Projects Built",
    text: "Real-world work across client websites, e-commerce, education, and personal branding.",
  },
  {
    number: "07",
    label: "Google Certificates",
    text: "Digital marketing and e-commerce training that supports my product-thinking approach.",
  },
  {
    number: "4.0",
    label: "GPA",
    text: "Strong academic performance while building practical digital projects and technical skills.",
  },
  {
    number: "Chicago",
    label: "Based In",
    text: "Preparing for OPT opportunities in software engineering, web development, and digital product roles.",
  },
];

export default function FeaturedImpact() {
  return (
    <Section id="impact" className="pt-10">
      <Glow position="left" />

      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Featured Impact
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Building with purpose, learning through real projects.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            My work connects technical learning with practical execution, combining web development, AI tools, business strategy, and
            user-centered thinking.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {impact.map((item) => (
            <Card key={item.label}>
              <p className="text-4xl font-bold text-cyan-300">
                {item.number}
              </p>

              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.label}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}