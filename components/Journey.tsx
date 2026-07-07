import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

const journey = [
  ["Cambodia", "Built my foundation through education, teaching, and early business experiences."],
  ["Digital Marketing", "Learned content strategy, campaigns, customer engagement, and e-commerce."],
  ["United States", "Continued my education journey through UCLA Extension, UIC, and Truman College."],
  ["Computer Science", "Focused on software engineering, web development, problem solving, and technology."],
  ["Building Products", "Creating real projects across websites, e-commerce, AI workflows, and digital strategy."],
];

export default function Journey() {
  return (
    <Section id="journey">
      <Glow position="center" />

      <Container>
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            My Journey
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            From learning, teaching, and marketing to building digital products.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            My path has shaped how I think as a developer, with curiosity,
            adaptability, communication, and a strong connection between
            technology and real human needs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-5">
          {journey.map(([title, description], index) => (
            <Card key={title}>
              <Badge>0{index + 1}</Badge>

              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}