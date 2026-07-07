import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

const approach = ["Understand", "Research", "Design", "Build", "Improve"];

const principles = [
  {
    title: "Think Like an Engineer",
    text: "I break complex problems into clear, practical solutions.",
  },
  {
    title: "Build With Purpose",
    text: "Every project should solve a real problem and create value.",
  },
  {
    title: "Design for People",
    text: "Technology should be intuitive, accessible, and meaningful.",
  },
  {
    title: "Never Stop Learning",
    text: "Each project is an opportunity to grow, improve, and adapt.",
  },
];

export default function About() {
  return (
    <Section id="about-story" className="py-32">
      <Glow position="left" />

      <Container>
        <div className="mb-14 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
           Technology becomes meaningful when it solves real problems.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            I believe great software begins with understanding people before
            writing code. My background in business, digital marketing, web
            development, and computer science helps me approach projects with
            both technical thinking and a clear understanding of user needs.
          </p>
        </div>

        <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            My Approach
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {approach.map((step, index) => (
              <div key={step} className="relative">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <Badge>0{index + 1}</Badge>
                  <p className="mt-4 text-lg font-semibold text-white">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item) => (
            <Card key={item.title}>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.04] p-6 backdrop-blur-xl md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            My Story
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            Originally from Cambodia, I built my journey through teaching,
            business, digital marketing, and computer science. Today, I enjoy
            creating digital products that combine technology, creativity, and
            strategy to make a meaningful impact.
          </p>
        </div>
      </Container>
    </Section>
  );
}