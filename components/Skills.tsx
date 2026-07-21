import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

const skillGroups = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Building responsive, maintainable, and user-focused web interfaces with modern front-end technologies.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "CMS & E-Commerce",
    description:
      "Creating and managing digital experiences that connect products, content, and customer needs.",
    skills: [
      "Shopify",
      "WordPress",
      "Webflow",
      "Product Listings",
      "E-Commerce",
      "Customer Experience",
    ],
  },
  {
    number: "03",
    title: "Digital Strategy",
    description:
      "Supporting business growth through content, search visibility, brand communication, and campaign planning.",
    skills: [
      "SEO",
      "Digital Marketing",
      "Email Marketing",
      "Content Strategy",
      "Campaign Planning",
      "Brand Strategy",
    ],
  },
  {
    number: "04",
    title: "AI-Assisted Workflows",
    description:
      "Using AI thoughtfully to improve research, planning, content creation, design exploration, and development workflows.",
    skills: [
      "ChatGPT",
      "Claude",
      "Prompt Design",
      "AI Research",
      "AI-Assisted Development",
      "Workflow Optimization",
    ],
  },
  {
    number: "05",
    title: "Development Tools",
    description:
      "Using modern tools to organize projects, manage code, collaborate, test ideas, and deploy digital products.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Responsive Testing",
      "Version Control",
    ],
  },
  {
    number: "06",
    title: "Currently Developing",
    description:
      "Strengthening my technical and analytical foundation through continued study and hands-on practice.",
    skills: [
      "SQL",
      "Python",
      "Google Analytics",
      "Excel",
      "Power BI",
      "Data Analysis",
    ],
    learning: true,
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <Glow position="center" />

      <div className="pointer-events-none absolute left-[-12rem] top-24 h-[24rem] w-[24rem] rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-10rem] h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-[140px]" />

      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Section introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Skills & Capabilities
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              A multidisciplinary skill set built around technology, business,
              and people.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              I combine front-end development, digital platforms, marketing,
              artificial intelligence, and customer-focused thinking to create
              practical digital experiences.
            </p>

            <div className="mt-8 border-l border-cyan-300/30 pl-5">
              <p className="text-sm leading-7 text-slate-500">
                My strongest value comes from understanding both how digital
                products are built and how they support real business and user
                needs.
              </p>
            </div>
          </div>

          {/* Capability list */}
          <div className="border-t border-white/10">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="group grid gap-5 border-b border-white/10 py-8 md:grid-cols-[4rem_1fr] md:gap-7 md:py-10"
              >
                <div>
                  <span className="text-sm font-semibold text-cyan-300">
                    {group.number}
                  </span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {group.title}
                    </h3>

                    {group.learning && (
                      <span className="rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-200">
                        In Progress
                      </span>
                    )}
                  </div>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
                    {group.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition duration-300 ${
                          group.learning
                            ? "border-violet-300/15 bg-violet-300/[0.04] text-violet-100/80"
                            : "border-white/10 bg-white/[0.03] text-slate-300 group-hover:border-cyan-300/15"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}