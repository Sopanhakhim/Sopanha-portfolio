
type Project = {
  name: string;
  role: string;
  category: string;
  platform: string;
  description: string;
  contribution: string;
  tools: string[];
  url?: string;
  address: string;
  color: "cyan" | "violet" | "blue" | "emerald" | "amber";
};

const projects: Project[] = [
  {
    name: "Truman Middle College",
    role: "Web Developer & Digital Content Support",
    category: "Paid On-Campus Employment",
    platform: "GoDaddy",
    description:
      "I designed and built the school's website and continue to manage its pages, content, and updates. I also create posters and social media content for school programs and events. Beyond the website, I tutor students in ESL, math, and science, and work with Principal Gershon Jackson and school staff to support students and families.",
    contribution:
      "School website development, ongoing updates, digital communication, and student support.",
    tools: [
      "GoDaddy",
      "Website Management",
      "Canva",
      "Social Media",
      "Tutoring",
    ],
    url: "https://tmchs.org/",
    address: "tmchs.org",
    color: "cyan",
  },
  {
    name: "Avant Symphony Orchestra",
    role: "Volunteer Website & Graphic Designer",
    category: "Volunteer Experience",
    platform: "Wix",
    description:
      "I volunteer with Avant Symphony Orchestra, working closely with conductor and music director Mina Zikri. I help manage and update the orchestra's Wix website, create concert posters and postcards, and prepare content for events and social media. My goal is to make concert information clear, welcoming, and easy for audiences to find.",
    contribution:
      "Concert website updates, promotional posters, postcards, and event communication.",
    tools: [
      "Wix",
      "Canva",
      "Poster Design",
      "Event Content",
      "Social Media",
    ],
    url: "https://www.avantsymphony.org/",
    address: "avantsymphony.org",
    color: "violet",
  },
  {
    name: "Bergonzi Violins",
    role: "Volunteer Website Content & Maintenance",
    category: "Volunteer Experience",
    platform: "Bluehost / WordPress",
    description:
      "I help Bergonzi Violins maintain its Bluehost-hosted WordPress website. The business specializes in fine violins, violas, cellos, and bows, including historically significant instruments. I support website updates, product presentation, and content organization so musicians and collectors can explore the instruments and learn about their craftsmanship and history.",
    contribution:
      "Ongoing WordPress support and presentation of instrument information.",
    tools: [
      "WordPress",
      "Bluehost",
      "Website Maintenance",
      "Product Content",
    ],
    url: "https://bergonziviolins.com/",
    address: "bergonziviolins.com",
    color: "blue",
  },
  {
    name: "The Classic Gem",
    role: "Volunteer Shopify & Product Content Support",
    category: "Volunteer Experience",
    platform: "Shopify",
    description:
      "I volunteer with The Classic Gem, supporting its Shopify store and online product content. I help manage listings, organize product information, and present jewelry in a clear and attractive way. My background in jewelry also helps me understand the differences between precious metals, diamonds, gemstones, and custom designs.",
    contribution:
      "Shopify store management, product information, and jewelry content presentation.",
    tools: [
      "Shopify",
      "E-commerce",
      "Product Listings",
      "Jewelry Knowledge",
      "Content Management",
    ],
    url: "https://www.theclassicgem.com/",
    address: "theclassicgem.com",
    color: "emerald",
  },
  {
    name: "Centurion Intelligence",
    role: "Volunteer Web Developer",
    category: "Volunteer Experience · In Progress",
    platform: "Webflow",
    description:
      "I'm working with the Centurion team on a new website in Webflow. The organization was founded by Joseph DeVuono, a retired FBI special agent, and focuses on security consulting, investigations, and intelligence services. My work involves organizing the website's pages, improving the layout, and presenting technical services in a way that visitors can understand.",
    contribution:
      "New Webflow website in development. My version has not launched yet.",
    tools: [
      "Webflow",
      "Website Design",
      "Page Layouts",
      "Content Organization",
    ],
    address: "Webflow project in progress",
    color: "amber",
  },
];

const themes = {
  cyan: {
    text: "text-cyan-300",
    background: "bg-cyan-300/10",
    border: "hover:border-cyan-300/40",
    gradient: "from-cyan-400/15 to-transparent",
  },
  violet: {
    text: "text-violet-300",
    background: "bg-violet-300/10",
    border: "hover:border-violet-300/40",
    gradient: "from-violet-400/15 to-transparent",
  },
  blue: {
    text: "text-sky-300",
    background: "bg-sky-300/10",
    border: "hover:border-sky-300/40",
    gradient: "from-sky-400/15 to-transparent",
  },
  emerald: {
    text: "text-emerald-300",
    background: "bg-emerald-300/10",
    border: "hover:border-emerald-300/40",
    gradient: "from-emerald-400/15 to-transparent",
  },
  amber: {
    text: "text-amber-300",
    background: "bg-amber-300/10",
    border: "hover:border-amber-300/40",
    gradient: "from-amber-400/15 to-transparent",
  },
};

export default function Projects() {
  return (
    <section
      id="work"
      className="relative scroll-mt-28 overflow-hidden px-6 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16"
    >
      {/* BACKGROUND LIGHTING */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />
      </div>

      {/* CENTERED CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Selected Work
          </p>

          <h2 className="mt-5 font-[Sora] text-4xl font-bold tracking-tight text-white md:text-5xl">
            Projects I&apos;ve{" "}
            <span className="text-cyan-300">
              worked on.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
            These are some of the websites and digital projects
            I&apos;ve helped build and maintain. They include
            my paid work at Truman Middle College and volunteer
            projects with businesses and organizations in
            different fields.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Each one has given me a chance to work with
            different people, learn new tools, and put my
            skills to use.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8">
          {projects.map((project) => {
            const theme = themes[project.color];

            return (
              <article
                key={project.name}
                className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 shadow-xl backdrop-blur-xl transition-all duration-300 motion-safe:hover:-translate-y-1.5 ${theme.border}`}
              >
                {/* COLORFUL CARD GLOW */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative flex h-full flex-col">

                  {/* BROWSER WINDOW HEADER */}
                  <div className="flex items-center gap-3 border-b border-white/10 bg-slate-900/70 px-5 py-4">

                    <div className="flex shrink-0 items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>

                    <div className="min-w-0 flex-1 rounded-lg border border-white/10 bg-slate-950/80 px-3 py-2">
                      <p className="truncate font-mono text-xs text-slate-400">
                        {project.address}
                      </p>
                    </div>
                  </div>

                  {/* PROJECT INFORMATION */}
                  <div className="flex flex-1 flex-col p-6 md:p-8">

                    {/* CATEGORY AND PLATFORM */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full border border-white/10 ${theme.background} px-3 py-1.5 text-xs font-semibold ${theme.text}`}
                      >
                        {project.category}
                      </span>

                      <span className="text-xs font-medium text-slate-400">
                        {project.platform}
                      </span>
                    </div>

                    {/* PROJECT NAME */}
                    <h3 className="mt-7 font-[Sora] text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {project.name}
                    </h3>

                    {/* YOUR ROLE */}
                    <p className={`mt-3 text-sm font-semibold ${theme.text}`}>
                      {project.role}
                    </p>

                    {/* DESCRIPTION */}
                    <p className="mt-6 text-base leading-8 text-slate-300">
                      {project.description}
                    </p>

                    {/* CONTRIBUTION */}
                    <div className="mt-7 border-l-2 border-white/15 pl-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.17em] text-slate-400">
                        My Contribution
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-200">
                        {project.contribution}
                      </p>
                    </div>

                    {/* TOOLS */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* WEBSITE LINK */}
                    <div className="mt-auto pt-9">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.name} website (opens in a new tab)`}
                          className={`inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 ${theme.border}`}
                        >
                          Visit Live Website

                          <span
                            aria-hidden="true"
                            className={theme.text}
                          >
                            ↗
                          </span>
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-3 rounded-xl border border-amber-300/20 bg-amber-300/[0.05] px-4 py-3 text-sm text-amber-200">
                          <span className="h-2 w-2 rounded-full bg-amber-300" />
                          Webflow Project In Progress
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CLOSING MESSAGE */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-base leading-8 text-slate-400">
            I enjoy projects where I can combine website work,
            design, and communication to make information clearer
            and easier for people to access.
          </p>
        </div>
      </div>
    </section>
  );
}
