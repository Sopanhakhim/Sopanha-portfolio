const projects = [
  {
    number: "01",
    title: "Lucky Alanka",
    type: "E-commerce Brand",
    role: "Founder • Web Designer • Digital Marketer",
    year: "2026",
    description:
      "Building a luxury jewelry e-commerce brand focused on meaningful jewelry, premium product presentation, Shopify store design, SEO copywriting, AI-assisted product visuals, and customer experience.",
    impact: [
      "Created brand direction and product storytelling",
      "Built Shopify structure, collections, and product content",
      "Used AI tools to support product photography and marketing",
    ],
    tech: ["Shopify", "SEO", "AI Content", "Branding", "E-commerce"],
    live: "#",
    github: null,
  },
  {
    number: "02",
    title: "Centurion Intelligence",
    type: "Business Website Redesign",
    role: "Web Developer • UX Support • Content Strategy",
    year: "2026",
    description:
      "Supporting the redesign of a professional company website with a focus on modern layout, clear navigation, responsive design, content organization, and a more polished business presence.",
    impact: [
      "Helped organize website structure and content flow",
      "Supported design direction and user experience planning",
      "Focused on a clean, credible, business-focused presentation",
    ],
    tech: ["Webflow", "UX", "Responsive Design", "Content Strategy"],
    live: "#",
    github: null,
  },
  {
    number: "03",
    title: "TMCHS Website",
    type: "School Website Support",
    role: "Website Assistant • Content Organizer",
    year: "2025–2026",
    description:
      "Worked on website updates and content organization for Truman Middle College High School, helping improve information clarity for students, families, staff, and visitors.",
    impact: [
      "Organized website information for better readability",
      "Supported updates for school-related content",
      "Improved digital communication and user access",
    ],
    tech: ["GoDaddy", "Website Management", "Content", "Communication"],
    live: "#",
    github: null,
  },
  {
    number: "04",
    title: "Bergonzi Violins",
    type: "WordPress Website Management",
    role: "Website & Digital Content Support",
    year: "2026",
    description:
      "Supported website and digital content work for a fine instrument business, including WordPress updates, product content organization, and customer-facing digital presentation.",
    impact: [
      "Managed website content updates",
      "Supported product and service presentation",
      "Helped improve the digital customer experience",
    ],
    tech: ["WordPress", "Bluehost", "Content Updates", "Digital Marketing"],
    live: "#",
    github: null,
  },
  {
    number: "05",
    title: "Personal Portfolio",
    type: "Developer Portfolio",
    role: "Designer • Developer",
    year: "2026",
    description:
      "Designed and built this portfolio to present my work, technical growth, business background, and preparation for web development and OPT-related opportunities.",
    impact: [
      "Built with a modern frontend stack",
      "Connected GitHub and Vercel deployment workflow",
      "Created a professional brand system around Stella Khim",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub", "Vercel"],
    live: "#",
    github: "https://github.com/khimsopanha123-blip/Sopanha-portfolio",
  },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16 max-w-3xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-violet-600">
          Featured Work
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
          Real projects shaped by technology, business, and design.
        </h2><p className="mt-6 text-lg leading-8 text-slate-600">
          A selection of websites, e-commerce projects, and digital experiences
          I have worked on across business, education, marketing, and personal
          branding.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-[0.75fr_1.25fr] md:p-8"
          >
            <div className="flex min-h-[220px] flex-col justify-between rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <div>
                <p className="text-sm text-violet-300">{project.number}</p>
                <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                  {project.title}
                </h3>
              </div>

              <div>
                <p className="text-sm text-slate-400">{project.type}</p>
                <p className="mt-1 text-sm text-slate-500">{project.year}</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-600">
                {project.role}
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 grid gap-3">
                {project.impact.map((item) => (
                  <p key={item} className="text-sm leading-6 text-slate-600">
                    <span className="mr-2 text-violet-600">—</span>
                    {item}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
                <a href={project.live} className="text-violet-600">
                  View Project →
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 transition hover:text-violet-600"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}