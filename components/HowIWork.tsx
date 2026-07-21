import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Highlight from "./ui/Highlight";
import Section from "./ui/Section";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "I begin by understanding the goal, audience, challenge, and business context before making design or technical decisions.",
  },
  {
    number: "02",
    title: "Plan",
    text: "I organize ideas, content, and requirements into a clear structure that supports both users and project goals.",
  },
  {
    number: "03",
    title: "Design",
    text: "I create clean, responsive, and intuitive experiences with strong visual hierarchy and consistent branding.",
  },
  {
    number: "04",
    title: "Develop",
    text: "I use modern web tools to turn the strategy and design into practical, scalable, and maintainable solutions.",
  },
  {
    number: "05",
    title: "Refine",
    text: "I test the experience, review feedback, and continue improving until the final product feels useful and polished.",
  },
];

export default function HowIWork() {
  return (
    <Section id="process" className="relative overflow-hidden py-28 md:py-36">
      <Glow position="right" />

      <div className="pointer-events-none absolute left-[-12rem] top-40 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          {/* Section introduction */}
          <div className="relative lg:sticky lg:top-28 lg:self-start">
            <div className="absolute -left-8 top-0 hidden h-32 w-px bg-gradient-to-b from-cyan-300/70 to-transparent lg:block" />

            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              How I Work
            </p>

            <h2 className="mt-6 max-w-xl font-[Sora] text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-5xl xl:text-6xl">
              From strategy to execution, I build{" "}
              <Highlight>thoughtful digital solutions.</Highlight>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
              Every project begins with understanding the problem before
              writing a single line of code. My process combines{" "}
              <Highlight>technology</Highlight>,{" "}
              <Highlight>user experience</Highlight>, and{" "}
              <Highlight>business strategy</Highlight> to create practical
              solutions with clear purpose.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "Strategy",
                "User Experience",
                "Development",
                "Iteration",
              ].map((item) => (
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
                My Approach
              </p>

              <p className="mt-4 text-lg font-medium leading-8 text-white">
                Understand first. Build with intention.{" "}
                <Highlight>Improve through feedback.</Highlight>
              </p>
            </div>
          </div>

          {/* Process timeline */}
          <div className="relative">
            <div className="absolute bottom-12 left-[1.5rem] top-12 hidden w-px bg-gradient-to-b from-cyan-300/60 via-white/10 to-transparent sm:block" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="group relative grid gap-4 sm:grid-cols-[3rem_1fr]"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950 text-xs font-bold tracking-[0.12em] text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.12)] transition duration-500 group-hover:border-cyan-300/60 group-hover:bg-cyan-300/10 group-hover:shadow-[0_0_38px_rgba(34,211,238,0.2)]">
                    {step.number}
                  </div>

                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 shadow-2xl shadow-black/10 backdrop-blur-2xl transition duration-500 group-hover:-translate-y-1 group-hover:border-cyan-300/25 group-hover:bg-white/[0.045] md:p-8">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/[0.055] via-transparent to-violet-400/[0.035]" />

                    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-300/0 blur-3xl transition duration-500 group-hover:bg-cyan-300/10" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Step {step.number}
                          </p>

                          <h3 className="mt-3 font-[Sora] text-2xl font-semibold tracking-[-0.02em] text-white md:text-3xl">
                            <Highlight>{step.title}</Highlight>
                          </h3>
                        </div>

                        <span className="text-xl text-slate-700 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                          ↗
                        </span>
                      </div>

                      <div className="mt-6 h-px w-14 bg-gradient-to-r from-cyan-300 to-transparent transition-all duration-500 group-hover:w-24" />

                      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                        {step.text}
                      </p>

                      {index < steps.length - 1 && (
                        <div className="mt-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 sm:hidden">
                          <span>Next Step</span>
                          <span className="text-cyan-300">↓</span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Closing principle */}
        <div className="mt-20 md:mt-28">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-cyan-300/20 bg-cyan-300/[0.035] px-7 py-10 backdrop-blur-2xl md:px-10 md:py-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyan-300/60 via-violet-300/30 to-transparent" />

            <div className="relative grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  The Goal
                </p>

                <h3 className="mt-4 font-[Sora] text-3xl font-semibold tracking-[-0.025em] text-white md:text-4xl">
                  Build something that is not only functional, but{" "}
                  <Highlight>meaningful.</Highlight>
                </h3>
              </div>

              <p className="max-w-2xl text-base leading-8 text-slate-300 md:justify-self-end md:text-lg">
                I aim to create work that is clear, useful, maintainable, and
                aligned with the people and organizations it is designed to
                support.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}