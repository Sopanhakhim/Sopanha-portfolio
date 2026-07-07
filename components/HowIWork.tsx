import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

const steps = [
  {
    title: "Understand",
    text: "I start by understanding the goal, audience, problem, and business context before jumping into design or code.",
  },
  {
    title: "Organize",
    text: "I turn messy ideas, content, and requirements into a clear structure that users can easily understand.",
  },
  {
    title: "Design",
    text: "I focus on clean layouts, intuitive experiences, responsive design, and brand consistency.",
  },
  {
    title: "Build",
    text: "I use modern web tools to create practical, scalable, and maintainable digital solutions.",
  },
  {
    title: "Improve",
    text: "I review feedback, test the experience, and keep refining until the product feels useful and polished.",
  },
];

export default function HowIWork() {
  return (
    <Section id="process" className="py-32">
      <Glow position="right" />

      <Container>
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            How I Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            I don&apos;t just build pages — I build clear digital experiences.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            My process combines engineering thinking, user experience,
            communication, and business strategy so each project has a clear
            purpose.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => (
            <Card key={step.title}>
              <Badge>0{index + 1}</Badge>

              <h3 className="mt-5 text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {step.text}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}