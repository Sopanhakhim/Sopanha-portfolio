
import Container from "./ui/Container";
import Section from "./ui/Section";
import ScrollReveal from "./ScrollReveal";

const workAreas = [
  {
    number: "01",
    title: "Websites & Content",
    color: "text-cyan-300",
    border: "hover:border-cyan-300/40",
    description:
      "I work with websites built on WordPress, Wix, GoDaddy, Shopify, and Webflow. I help with page layouts, content updates, navigation, and keeping information organized.",
  },
  {
    number: "02",
    title: "Design & Creative Work",
    color: "text-violet-300",
    border: "hover:border-violet-300/40",
    description:
      "I use Canva to design concert posters, flyers, social media graphics, and event materials. I enjoy finding the right balance between colors, images, and clear information.",
  },
  {
    number: "03",
    title: "Technology & Helping People",
    color: "text-emerald-300",
    border: "hover:border-emerald-300/40",
    description:
      "I enjoy figuring out technical problems and helping people understand how to use digital tools. My tutoring and customer service experience has also taught me to be patient and explain things clearly.",
  },
];

const qualities = [
  "Creative",
  "Curious",
  "Detail-Oriented",
  "Problem Solver",
];

export default function About() {
  return (
    <Section
      id="about-story"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* BACKGROUND LIGHTING */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-violet-500/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />
      </div>

      {/* TOP GRADIENT LINE */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-violet-400/40"
      />

      <Container>
        <div className="relative z-10">

          {/* SECTION HEADING */}
          <div className="mb-12 max-w-4xl">

            <ScrollReveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-violet-400" />

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  About Me
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <h2 className="font-[Sora] text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl xl:text-6xl">
                Technology is the{" "}
                <span className="text-cyan-300">
                  tool.
                </span>

                <span className="mt-3 block">
                  <span className="text-violet-300">
                    People
                  </span>{" "}
                  are the{" "}
                  <span className="text-sky-300">
                    reason.
                  </span>
                </span>
              </h2>
            </ScrollReveal>

          </div>

          {/* MAIN CONTENT GRID */}
          <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

            {/* LEFT SIDE: PERSONAL INTRODUCTION */}
            <div className="relative min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-7 backdrop-blur-xl md:p-10">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-violet-400/[0.07]"
              />

              <div className="relative">

                <ScrollReveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                    A Little About Me
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.05}>
                  <h3 className="mt-6 font-[Sora] text-2xl font-semibold leading-snug text-white md:text-3xl">
                    I enjoy bringing{" "}
                    <span className="text-cyan-300">
                      ideas
                    </span>{" "}
                    to life through{" "}
                    <span className="text-violet-300">
                      websites
                    </span>{" "}
                    and{" "}
                    <span className="text-sky-300">
                      design.
                    </span>
                  </h3>
                </ScrollReveal>

                {/* INTRO PARAGRAPHS */}
                <ScrollReveal delay={0.06}>
                  <p className="mt-7 text-base leading-8 text-slate-300">
                    Hi, I&apos;m Sopanha! I enjoy working on
                    websites, creating digital content, and
                    finding ways to make information easier
                    for people to understand.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.08}>
                  <p className="mt-5 text-base leading-8 text-slate-300">
                    I&apos;ve worked on websites and digital
                    materials for schools, small businesses,
                    and nonprofit organizations. Some days
                    that means updating a website or fixing
                    a layout. Other times, it&apos;s designing
                    a poster, organizing content, or helping
                    someone solve a technical problem.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <p className="mt-5 text-base leading-8 text-slate-300">
                    I like paying attention to the details,
                    especially the things that make a
                    website easier to use: clear navigation,
                    readable content, and a design that
                    feels welcoming.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.12}>
                  <p className="mt-5 text-base leading-8 text-slate-300">
                    I&apos;m still learning and improving
                    my skills, but I enjoy the process.
                    Every project gives me a chance to
                    try something new and make the next
                    one a little better.
                  </p>
                </ScrollReveal>

                {/* DIVIDER */}
                <ScrollReveal>
                  <div className="my-8 h-px bg-gradient-to-r from-cyan-400/50 via-violet-400/40 to-transparent" />
                </ScrollReveal>

                {/* PERSONAL QUALITIES */}
                <div className="flex flex-wrap gap-3">
                  {qualities.map((item, index) => (
                    <ScrollReveal
                      key={item}
                      delay={index * 0.05}
                    >
                      <span className="inline-block rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-4 py-2 text-xs font-medium text-cyan-100 transition-[background-color,border-color,color] duration-300 hover:border-violet-300/40 hover:bg-violet-400/10 hover:text-violet-200">
                        {item}
                      </span>
                    </ScrollReveal>
                  ))}
                </div>

              </div>
            </div>

            {/* RIGHT SIDE: AREAS OF WORK */}
            <div className="min-w-0">

              <div className="mb-6">

                <ScrollReveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                    What I Work On
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.05}>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    These are the kinds of projects and
                    everyday tasks I enjoy working on.
                  </p>
                </ScrollReveal>

              </div>

              {/* WORK AREA CARDS */}
              <div className="space-y-4">
                {workAreas.map((item, index) => (
                  <div
                    key={item.number}
                    className={`group relative min-w-0 rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-6 backdrop-blur-xl transition-[border-color,background-color] duration-300 ${item.border}`}
                  >
                    <div className="flex items-start gap-5">

                      {/* NUMBER */}
                      <ScrollReveal delay={index * 0.04}>
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] font-mono text-sm font-bold ${item.color}`}
                        >
                          {item.number}
                        </div>
                      </ScrollReveal>

                      {/* CARD TEXT */}
                      <div className="min-w-0 flex-1">

                        <ScrollReveal delay={0.06}>
                          <h4 className={`text-xl font-semibold ${item.color}`}>
                            {item.title}
                          </h4>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                          <p className="mt-3 text-sm leading-7 text-slate-300">
                            {item.description}
                          </p>
                        </ScrollReveal>

                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PERSONAL NOTE */}
              <div className="mt-6 rounded-[1.5rem] border border-violet-300/15 bg-violet-400/[0.05] p-6">

                <ScrollReveal>
                  <p className="text-sm leading-7 text-slate-300">
                    <span className="font-semibold text-violet-300">
                      What I enjoy most:
                    </span>{" "}
                    seeing something I&apos;ve worked on
                    actually being used, whether it&apos;s
                    a website, an event poster, or a
                    small improvement that makes
                    someone&apos;s day easier.
                  </p>
                </ScrollReveal>

              </div>
            </div>
          </div>

          {/* BOTTOM DECORATIVE ACCENT */}
          <ScrollReveal>
            <div
              aria-hidden="true"
              className="mt-16 flex items-center justify-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <div className="h-px w-20 bg-gradient-to-r from-cyan-400/50 to-violet-400/50" />

              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            </div>
          </ScrollReveal>

        </div>
      </Container>
    </Section>
  );
}
