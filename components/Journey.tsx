import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

const influences = [
  {
    number: "01",
    label: "Education",
    title: "Learning how to think, communicate, and keep growing",
    text: "My academic journey taught me to stay curious, adapt to new environments, and approach unfamiliar challenges with patience and discipline.",
    takeaway: "Curiosity",
  },
  {
    number: "02",
    label: "Teaching & Service",
    title: "Understanding people before offering solutions",
    text: "Teaching and customer-facing work strengthened my ability to listen, explain ideas clearly, recognize different needs, and build trust through communication.",
    takeaway: "Empathy",
  },
  {
    number: "03",
    label: "Business & Marketing",
    title: "Connecting creative work with real goals",
    text: "Business and digital marketing taught me that strong ideas must also communicate value, support customers, and contribute to measurable outcomes.",
    takeaway: "Strategy",
  },
  {
    number: "04",
    label: "Computer Science",
    title: "Turning complex problems into structured systems",
    text: "Computer science developed my technical thinking and taught me how to break larger challenges into smaller, logical, and practical steps.",
    takeaway: "Problem Solving",
  },
  {
    number: "05",
    label: "Building Products",
    title: "Bringing people, technology, and business together",
    text: "Working on websites, e-commerce experiences, client projects, and digital workflows showed me how thoughtful execution can turn an idea into something useful.",
    takeaway: "Value Creation",
  },
];

export default function Journey() {
  return (
    <Section
      id="journey"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <Glow position="center" />

      <div className="pointer-events-none absolute left-[-10rem] top-24 h-[24rem] w-[24rem] rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-[-10rem] h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-[140px]" />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            What Shaped Me
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl xl:text-6xl">
            Different experiences shaped the way I think, build, and contribute.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            My perspective comes from more than one field. Education, service,
            business, marketing, and computer science each strengthened a
            different part of how I approach digital work today.
          </p>
        </div>

        <div className="relative mt-16 md:mt-20">
          <div className="pointer-events-none absolute bottom-10 left-6 top-10 hidden w-px bg-gradient-to-b from-cyan-300/70 via-white/10 to-violet-300/50 md:block md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-7 md:space-y-10">
            {influences.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.label}
                  className="relative grid items-center gap-6 md:grid-cols-[1fr_5rem_1fr]"
                >
                  <div
                    className={`${
                      isEven
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-3 md:text-left"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.05] md:p-8">
                      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-300/0 blur-3xl transition duration-500 group-hover:bg-cyan-300/10" />

                      <div className="relative">
                        <div
                          className={`flex flex-wrap items-center gap-3 ${
                            isEven
                              ? "md:justify-end"
                              : "md:justify-start"
                          }`}
                        >
                          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                            {item.label}
                          </span>

                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                            {item.takeaway}
                          </span>
                        </div>

                        <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 hidden items-center justify-center md:col-start-2 md:flex">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950 text-sm font-bold text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.14)]">
                      {item.number}
                    </div>
                  </div>

                  <div className="absolute left-0 top-7 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/25 bg-slate-950 text-xs font-bold text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.12)] md:hidden">
                    {item.number}
                  </div>

                  <div className="pl-16 md:hidden">
                    <div className="h-px w-12 bg-gradient-to-r from-cyan-300/70 to-transparent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.06] via-white/[0.025] to-violet-300/[0.05] p-7 text-center backdrop-blur-xl md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            The Result
          </p>

          <p className="mt-5 text-2xl font-bold leading-tight text-white md:text-3xl">
            I approach technology with the mindset of a developer, the
            perspective of a business thinker, and the empathy of someone who
            understands people.
          </p>
        </div>
      </Container>
    </Section>
  );
}