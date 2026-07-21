import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Highlight from "./ui/Highlight";
import Section from "./ui/Section";

const principles = [
  {
    number: "01",
    title: "Think",
    highlight: "Clearly",
    text: "I break complex ideas into practical, organized solutions that are easier to understand and use.",
  },
  {
    number: "02",
    title: "Build With",
    highlight: "Purpose",
    text: "I believe every digital product should solve a meaningful problem and support a clear goal.",
  },
  {
    number: "03",
    title: "Design for",
    highlight: "People",
    text: "Technology should feel intuitive, accessible, and useful to the people it is created to serve.",
  },
  {
    number: "04",
    title: "Keep",
    highlight: "Growing",
    text: "Every project is an opportunity to learn, adapt, strengthen my skills, and create better work.",
  },
];

const storyChapters = [
  {
    label: "Foundation",
    title: "Teaching, business, customer service, and digital marketing",
    text: "I began my professional journey through teaching, business, customer service, and digital marketing. Those experiences taught me how to communicate clearly, understand people, organize information, and approach challenges from different perspectives.",
  },
  {
    label: "Expansion",
    title: "Computer science, web development, and artificial intelligence",
    text: "After moving to the United States, I continued my education and expanded that foundation into computer science, web development, artificial intelligence, and digital product thinking.",
  },
  {
    label: "Today",
    title: "Connecting technology with people and business goals",
    text: "Today, I bring these areas together to create practical websites and digital experiences that support real users, communicate clearly, and contribute to business goals.",
  },
];

const backgroundAreas = [
  "Education",
  "Business",
  "Digital Marketing",
  "Computer Science",
];

const philosophyValues = [
  "Empathy",
  "Strategy",
  "Creativity",
  "Communication",
];

export default function About() {
  return (
    <Section
      id="about-story"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <Glow position="left" />

      <div className="pointer-events-none absolute right-[-12rem] top-32 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          {/* Left introduction */}
          <div className="relative lg:sticky lg:top-28 lg:self-start">
            <div className="absolute -left-8 top-0 hidden h-32 w-px bg-gradient-to-b from-cyan-300/70 to-transparent lg:block" />

            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              About Me
            </p>

            <h2 className="mt-6 max-w-xl font-[Sora] text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-5xl xl:text-6xl">
              Technology is the tool.
              <span className="mt-2 block">
                <Highlight>People are the reason.</Highlight>
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
              My background across <Highlight>education</Highlight>,{" "}
              <Highlight>business</Highlight>,{" "}
              <Highlight>digital marketing</Highlight>, and{" "}
              <Highlight>computer science</Highlight> helps me understand both
              how digital products are built and why they matter.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {backgroundAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 backdrop-blur-xl transition duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.05] hover:text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                What Connects My Work
              </p>

              <p className="mt-4 text-lg font-medium leading-8 text-white">
                <Highlight>Clear thinking</Highlight>, thoughtful execution,
                and technology designed around{" "}
                <Highlight>real human needs</Highlight>.
              </p>
            </div>
          </div>

          {/* Right story content */}
          <div className="relative">
            <div className="absolute bottom-10 left-[1.35rem] top-10 hidden w-px bg-gradient-to-b from-cyan-300/60 via-white/10 to-transparent sm:block" />

            <div className="space-y-6">
              {/* Story */}
              <div className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/55 p-7 shadow-2xl shadow-black/20 backdrop-blur-2xl md:p-10">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/[0.07] via-transparent to-violet-400/[0.05]" />

                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl transition duration-500 group-hover:bg-cyan-300/15" />

                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    My Story
                  </p>

                  <h3 className="mt-5 max-w-3xl font-[Sora] text-2xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-4xl">
                    From <Highlight>Cambodia</Highlight> to{" "}
                    <Highlight>Chicago</Highlight>, my journey has always been
                    shaped by learning, adaptation, and meaningful work.
                  </h3>

                  <div className="mt-10 space-y-8">
                    {storyChapters.map((chapter, index) => (
                      <div
                        key={chapter.label}
                        className="relative grid gap-4 sm:grid-cols-[2.75rem_1fr]"
                      >
                        <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950 text-xs font-bold text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04]">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                            {chapter.label}
                          </p>

                          <h4 className="mt-3 font-[Sora] text-lg font-semibold leading-7 text-white">
                            {chapter.title}
                          </h4>

                          <p className="mt-3 text-base leading-8 text-slate-300">
                            {chapter.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="group relative overflow-hidden rounded-[2.25rem] border border-cyan-300/20 bg-cyan-300/[0.035] p-7 backdrop-blur-2xl md:p-10">
                <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl transition duration-500 group-hover:bg-cyan-300/15" />

                <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyan-300/60 via-violet-300/30 to-transparent" />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                      <span className="text-xl text-cyan-200">✦</span>
                    </div>

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                      My Philosophy
                    </p>
                  </div>

                  <h3 className="mt-7 max-w-3xl font-[Sora] text-2xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-4xl">
                    Great digital products begin with{" "}
                    <Highlight>understanding people</Highlight> before writing
                    code.
                  </h3>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                    I believe technology should be{" "}
                    <Highlight>purposeful</Highlight>,{" "}
                    <Highlight>accessible</Highlight>, and{" "}
                    <Highlight>useful</Highlight>. Strong products are not
                    created with code alone. They require empathy, strategy,
                    creativity, communication, and a clear understanding of the
                    people and organizations they serve.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {philosophyValues.map((value) => (
                      <span
                        key={value}
                        className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.1]"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-20 md:mt-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Core Principles
              </p>

              <h3 className="mt-4 font-[Sora] text-3xl font-semibold tracking-[-0.025em] text-white md:text-4xl">
                The values that guide how I <Highlight>learn</Highlight>,{" "}
                <Highlight>create</Highlight>, and{" "}
                <Highlight>contribute</Highlight>.
              </h3>
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-500">
              These principles shape the way I approach projects, collaborate
              with others, and continue developing as a digital professional.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle) => (
              <div
                key={`${principle.title}-${principle.highlight}`}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/25 hover:bg-white/[0.055]"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-300/0 blur-3xl transition duration-500 group-hover:bg-cyan-300/10" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
                      {principle.number}
                    </p>

                    <span className="text-xl text-slate-700 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                      ↗
                    </span>
                  </div>

                  <div className="mt-8 h-px w-12 bg-gradient-to-r from-cyan-300 to-transparent transition-all duration-500 group-hover:w-20" />

                  <h4 className="mt-6 font-[Sora] text-xl font-semibold text-white">
                    {principle.title}{" "}
                    <Highlight>{principle.highlight}</Highlight>
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {principle.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}