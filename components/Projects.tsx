import Image from "next/image";
import type { ReactNode } from "react";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import PremiumBackground from "./ui/PremiumBackground";
import Section from "./ui/Section";

function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

type FeaturedProject = {
  title: string;
  image: string;
  category: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  tech: string[];
};

type Project = {
  title: string;
  image: string;
  category: string;
  description: string;
  tech: string[];
};

const featuredProjects: FeaturedProject[] = [
  {
    title: "Centurion Intelligence",
    image: "/images/centurion-intelligence.png",
    category: "Client Website",
    role: "Web Developer • UX Planning • Content Strategy",
    description:
      "A professional website recreation project focused on improving structure, credibility, content flow, and digital presence.",
    challenge:
      "The company needed a clearer website experience that communicated its services, partnerships, and brand credibility more effectively.",
    solution:
      "I rebuilt the company's website in Webflow, reorganized the content architecture, refined the user experience, established the visual direction, and collaborated closely with the client throughout the planning and development process.",
    impact:
      "Created a stronger digital foundation while gaining practical experience working with real business requirements, feedback, and project priorities.",
    tech: ["Webflow", "UX Planning", "Content Strategy", "Client Work"],
  },
  {
    title: "Truman Middle College",
    image: "/images/truman-middle-college.png",
    category: "Education Website",
    role: "Website Designer • Front-End Developer",
    description:
      "A complete school website recreation focused on modern design, better navigation, responsive layout, and accessible information.",
    challenge:
      "The original website needed a clearer structure, a more modern presentation, and a better experience for students, families, and visitors.",
    solution:
      "I redesigned the layout, reorganized important information, improved navigation, and created a responsive interface for different screen sizes.",
    impact:
      "Made school information easier to find and created a more welcoming, organized, and usable digital experience.",
    tech: ["Web Design", "Responsive Design", "UI/UX", "Content Organization"],
  },
];

const projects: Project[] = [
  {
    title: "Lucky Alanka",
    image: "/images/lucky-alanka.png",
    category: "Founder Project",
    description:
      "A jewelry e-commerce brand I am building from the ground up, including Shopify setup, product organization, storytelling, SEO, and customer experience.",
    tech: ["Shopify", "Branding", "SEO", "E-Commerce"],
  },
  {
    title: "Bergonzi Violins",
    image: "/images/bergonzi-violins.png",
    category: "Website Maintenance",
    description:
      "Supporting an established violin business through WordPress, Bluehost staging, content updates, product presentation, and ongoing website improvements.",
    tech: ["WordPress", "Bluehost", "Content Updates"],
  },
  {
    title: "The Classic Gem",
    image: "/images/classic-gem.png",
    category: "Luxury Product Content",
    description:
      "Creating refined product presentation and digital content focused on trust, clarity, storytelling, and the customer experience.",
    tech: ["Product Content", "Luxury Branding", "Customer Trust"],
  },
  {
    title: "Project STELLA",
    image: "/images/project-stella.png",
    category: "Developer Portfolio",
    description:
      "My personal portfolio system showcasing web development, software engineering, AI, digital strategy, and continuous professional growth.",
    tech: ["Next.js", "React", "TypeScript"],
  },
];

export default function Projects() {
  return (
    <Section id="work" className="relative overflow-hidden py-28 md:py-36">
      <PremiumBackground variant="projects" />
      <Glow position="right" />

      <div className="pointer-events-none absolute left-[-12rem] top-40 h-[26rem] w-[26rem] rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-24 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[150px]" />

      <Container>
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Featured Work
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl xl:text-6xl">
              Building digital experiences with{" "}
              <Highlight>purpose, structure, and measurable value.</Highlight>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-400 lg:justify-self-end">
            These projects show how I connect web development, design thinking,
            content strategy, business goals, and user needs to create practical
            digital solutions.
          </p>
        </div>

        {/* Featured case studies */}
        <div className="mt-16 space-y-10 md:mt-20">
          {featuredProjects.map((project, index) => {
            const imageOnRight = index % 2 !== 0;

            return (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/55 shadow-2xl shadow-black/20 backdrop-blur-2xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/[0.05] via-transparent to-violet-400/[0.04]" />

                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

                <div className="relative grid lg:grid-cols-2">
                  {/* Project image */}
                  <div
                    className={`relative min-h-[340px] overflow-hidden sm:min-h-[440px] lg:min-h-[680px] ${
                      imageOnRight ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-1000 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent lg:bg-gradient-to-r" />

                    <div className="absolute left-6 top-6 flex items-center gap-3 md:left-8 md:top-8">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-950/75 text-xs font-bold text-cyan-200 backdrop-blur-xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <Badge>{project.category}</Badge>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                        Featured Case Study
                      </p>

                      <h3 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-slate-300">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  {/* Project information */}
                  <div
                    className={`flex flex-col justify-center p-7 md:p-10 xl:p-12 ${
                      imageOnRight ? "lg:order-1" : ""
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Project Overview
                    </p>

                    <h3 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm font-semibold leading-6 text-cyan-300">
                      {project.role}
                    </p>

                    <p className="mt-6 text-base leading-8 text-slate-300">
                      {project.description}
                    </p>

                    <div className="mt-8 space-y-4">
                      <div className="group/item rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-cyan-300/20 hover:bg-white/[0.04]">
                        <div className="flex gap-4">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] text-xs font-bold text-cyan-200">
                            01
                          </span>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                              The Challenge
                            </p>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                              {project.challenge}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group/item rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-violet-300/20 hover:bg-white/[0.04]">
                        <div className="flex gap-4">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-300/20 bg-violet-300/[0.07] text-xs font-bold text-violet-200">
                            02
                          </span>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                              My Contribution
                            </p>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                              {project.solution}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group/item rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-emerald-300/20 hover:bg-white/[0.04]">
                        <div className="flex gap-4">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] text-xs font-bold text-emerald-200">
                            03
                          </span>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                              The Outcome
                            </p>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                              {project.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                        Tools & Capabilities
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <Badge key={item}>{item}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Additional work */}
        <div className="mt-24 md:mt-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Additional Work
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Projects across{" "}
                <Highlight>
                  e-commerce, business websites, content, and personal
                  development.
                </Highlight>
              </h3>
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-500">
              Each project has strengthened a different part of my technical,
              creative, strategic, and problem-solving experience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/25 hover:bg-white/[0.05]"
              >
                <div className="relative h-52 overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-contain p-4 transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/75 text-xs font-bold text-cyan-200 backdrop-blur-xl">
                    {String(index + 3).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-2 pb-3 pt-6">
                  <div>
                    <Badge>{project.category}</Badge>
                  </div>

                  <h4 className="mt-5 text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Section closing */}
        <div className="relative mt-20 overflow-hidden rounded-[2.25rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.07] via-white/[0.025] to-violet-300/[0.06] p-8 backdrop-blur-2xl md:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Work With Me
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                I bring{" "}
                <Highlight>
                  technical thinking, business awareness, and care for the user
                  experience
                </Highlight>{" "}
                into every project.
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                I enjoy contributing to websites and digital products that need
                thoughtful structure, clear communication, and practical
                execution.
              </p>
            </div>

            <div className="shrink-0">
              <Button href="#contact">Start a Conversation</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}