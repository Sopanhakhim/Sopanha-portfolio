import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

const educationJourney = [
  {
    number: "01",
    label: "2018 · Cambodia",
    title: "Prek Eng High School",
    text: "Completed my secondary education with a science-focused foundation that strengthened my analytical thinking, curiosity, and approach to problem-solving.",
    takeaway: "Science",
  },
  {
    number: "02",
    label: "2019 — 2020 · Cambodia",
    title: "Royal University of Phnom Penh",
    text: "Began my university studies in Chemistry, developing a stronger foundation in scientific reasoning, observation, attention to detail, and structured analysis.",
    takeaway: "Chemistry",
  },
  {
    number: "03",
    label: "2020 — 2023 · Cambodia",
    title: "Paññāsāstra University of Cambodia",
    text: "Studied Teaching English to Speakers of Other Languages, strengthening my communication, presentation, collaboration, and teaching skills while also gaining early professional experience in education, sales, and digital marketing.",
    takeaway: "TESOL",
  },
  {
    number: "04",
    label: "2023 — 2024 · Los Angeles",
    title: "UCLA Extension",
    text: "Expanded my business and digital foundation through coursework in Fundamentals of Business, Digital Marketing, and Writing for Public Relations, helping me better understand customers, communication, branding, and digital strategy.",
    takeaway: "Business & Marketing",
  },
  {
    number: "05",
    label: "2024 — 2025 · Chicago",
    title: "University of Illinois Chicago",
    text: "Continued developing academic English and professional communication through the Tutorium in Intensive English while adapting to a new academic environment and building confidence in a professional setting.",
    takeaway: "Communication",
  },
  {
    number: "06",
    label: "2025 — Present · Chicago",
    title: "Harry S. Truman College",
    text: "Currently pursuing an Associate in Science in Computer Science while building practical experience through web development, client projects, digital products, and independent technical learning.",
    takeaway: "Computer Science",
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
        {/* Section Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            My Education Journey
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl xl:text-6xl">
            From Cambodia to the United States.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            My academic journey has taken me across countries and disciplines —
            from science and language studies in Cambodia to business,
            communication, and Computer Science in the United States. Each
            stage has shaped the way I think, adapt, communicate, and build
            today.
          </p>
        </div>

        {/* Country Transition */}
        <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-4 text-center">
          <div className="rounded-full border border-white/10 bg-white/[0.035] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Cambodia
          </div>

          <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/50 via-white/20 to-violet-300/50" />

          <div className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            United States
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 md:mt-20">
          <div className="pointer-events-none absolute bottom-10 left-6 top-10 hidden w-px bg-gradient-to-b from-cyan-300/70 via-white/10 to-violet-300/50 md:block md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-7 md:space-y-10">
            {educationJourney.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={`${item.title}-${item.label}`}
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

                  {/* Desktop Timeline Number */}
                  <div className="relative z-10 hidden items-center justify-center md:col-start-2 md:flex">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950 text-sm font-bold text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.14)]">
                      {item.number}
                    </div>
                  </div>

                  {/* Mobile Timeline Number */}
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

        {/* Closing Summary */}
        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.06] via-white/[0.025] to-violet-300/[0.05] p-7 text-center backdrop-blur-xl md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Where It Led Me
          </p>

          <p className="mt-5 text-2xl font-bold leading-tight text-white md:text-3xl">
            Science taught me to analyze. Teaching taught me to communicate.
            Business taught me to understand value. Computer Science brought
            those experiences together through technology.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Today, I use that multidisciplinary perspective to build digital
            experiences that consider technology, people, and business
            together.
          </p>

          <div className="mt-8 inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-5 py-2.5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Current Focus · Computer Science · Chicago
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}