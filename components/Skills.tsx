
import Section from "./ui/Section";
import ScrollReveal from "./ScrollReveal";

type SkillGroup = {
  number: string;
  title: string;
  description: string;
  skills: string[];
  color: string;
  background: string;
  border: string;
  glow: string;
  learning?: boolean;
};

const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Websites & CMS",
    description:
      "These are the platforms I use to manage websites, update pages, organize content, and work with online stores.",
    skills: [
      "WordPress",
      "Shopify",
      "Webflow",
      "Wix",
      "GoDaddy",
      "Content Updates",
      "Product Listings",
    ],
    color: "text-cyan-300",
    background: "bg-cyan-300/10",
    border: "hover:border-cyan-300/40",
    glow: "from-cyan-400/10",
  },
  {
    number: "02",
    title: "Front-End & Development",
    description:
      "I use these languages and tools to build websites, work on layouts, and improve how pages look and function.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
    ],
    color: "text-sky-300",
    background: "bg-sky-300/10",
    border: "hover:border-sky-300/40",
    glow: "from-sky-400/10",
  },
  {
    number: "03",
    title: "Design & Graphics",
    description:
      "I enjoy creating visuals for events, websites, and social media. I focus on layouts, color, and making information easy to read.",
    skills: [
      "Canva",
      "Posters & Flyers",
      "Social Media Graphics",
      "Page Layouts",
      "Typography",
      "Color",
      "Brand Consistency",
      "Promotional Materials",
    ],
    color: "text-violet-300",
    background: "bg-violet-300/10",
    border: "hover:border-violet-300/40",
    glow: "from-violet-400/10",
  },
  {
    number: "04",
    title: "Digital Content & Support",
    description:
      "I help keep digital content organized, support online communication, and assist people with everyday technology questions.",
    skills: [
      "Basic SEO",
      "Digital Marketing",
      "Social Media Updates",
      "Email Marketing",
      "Content Planning",
      "Troubleshooting",
      "Customer Support",
      "Tutoring",
      "ChatGPT",
      "Claude",
    ],
    color: "text-emerald-300",
    background: "bg-emerald-300/10",
    border: "hover:border-emerald-300/40",
    glow: "from-emerald-400/10",
  },
  {
    number: "05",
    title: "Currently Learning",
    description:
      "I'm building my data and analytics skills through coursework and practice. These are tools I'm still getting more comfortable with.",
    skills: [
      "SQL",
      "Python",
      "Google Analytics",
      "Excel",
      "Power BI",
      "Data Analysis",
    ],
    color: "text-amber-300",
    background: "bg-amber-300/10",
    border: "hover:border-amber-300/40",
    glow: "from-amber-400/10",
    learning: true,
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      className="relative scroll-mt-28 overflow-hidden py-24 md:py-32"
    >
      {/* BACKGROUND COLORS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-violet-500/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />
      </div>

      {/* TOP ACCENT LINE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-violet-400/40"
      />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* LEFT: INTRODUCTION */}
          <div className="lg:sticky lg:top-32 lg:self-start">

            <ScrollReveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-violet-400" />

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Skills &amp; Tools
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <h2 className="font-[Sora] text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                The tools behind{" "}
                <span className="text-violet-300">
                  my work.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-300">
                I use a mix of website platforms,
                front-end technologies, and design
                tools. Some are part of my everyday
                projects, while others are skills
                I&apos;m continuing to develop.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                I enjoy trying different tools and
                learning which ones work best for
                the project I&apos;m working on.
              </p>
            </ScrollReveal>

            {/* INTERACTIVE NOTE */}
            <div className="mt-8 rounded-2xl border border-violet-300/20 bg-violet-400/[0.05] p-5">

              <ScrollReveal>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-violet-300" />

                  <p className="text-sm font-semibold text-violet-200">
                    Explore My Skills
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.06}>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Click a category to see the tools
                  and skills I use or am currently learning.
                </p>
              </ScrollReveal>

            </div>
          </div>

          {/* RIGHT: INTERACTIVE SKILL CARDS */}
          <div className="space-y-4">

            {skillGroups.map((group, index) => (
              <ScrollReveal
                key={group.number}
                delay={Math.min(index * 0.04, 0.16)}
              >
                <details
                  open={index === 0}
                  className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 shadow-lg backdrop-blur-xl transition-[border-color,background-color] duration-300 ${group.border}`}
                >

                  {/* CARD GLOW */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${group.glow} to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  {/* CLICKABLE HEADING */}
                  <summary className="relative flex cursor-pointer list-none items-center justify-between gap-4 p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-cyan-300 [&::-webkit-details-marker]:hidden">

                    <div className="flex min-w-0 items-start gap-4">

                      {/* NUMBER */}
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 ${group.background} font-mono text-sm font-bold ${group.color}`}
                      >
                        {group.number}
                      </div>

                      {/* TITLE AND DESCRIPTION */}
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className={`text-xl font-bold ${group.color}`}>
                            {group.title}
                          </h3>

                          {group.learning && (
                            <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-200">
                              In Progress
                            </span>
                          )}
                        </div>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    {/* EXPAND / COLLAPSE ICON */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-colors group-hover:border-white/25">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-5 w-5 transition-transform duration-300 group-open:rotate-180"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>

                  {/* EXPANDED SKILLS */}
                  <div className="relative px-6 pb-6">
                    <div className="mb-5 h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent" />

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-full border border-white/10 ${group.background} px-4 py-2 text-xs font-medium ${group.color} transition-[border-color,background-color] duration-300 hover:border-white/25 hover:bg-white/10`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </details>
              </ScrollReveal>
            ))}

          </div>
        </div>

        {/* BOTTOM GRADIENT ACCENT */}
        <ScrollReveal>
          <div
            aria-hidden="true"
            className="mt-20 flex items-center justify-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

            <div className="h-px w-20 bg-gradient-to-r from-cyan-400/60 to-violet-400/60" />

            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          </div>
        </ScrollReveal>

      </div>
    </Section>
  );
}
