export default function BehindPortfolio() {
  const tech = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "GitHub",
    "Vercel",
    "Responsive Design",
    "Mobile First",
    "AI Workflow",
    "VS Code",
  ];

  return (
    <section
      id="behind-portfolio"
      className="border-t border-violet-500/20 px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="section-label accent-text">Behind This Portfolio</p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Built with modern web technologies and continuous learning.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
            This portfolio was designed and developed from scratch to showcase
            my work, technical skills, and design thinking. Every section,
            interaction, and layout was built using modern frontend tools with a
            focus on responsive design, clean structure, and professional user
            experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-md transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="premium-card rounded-3xl p-6">
          <div className="mb-5 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-white/20" />
            <span className="h-3 w-3 rounded-full bg-white/20" />
            <span className="h-3 w-3 rounded-full bg-white/20" />
          </div>

          <pre className="overflow-x-auto text-sm leading-7 text-white/70">
{`const portfolio = {
  framework: "Next.js",
  language: "TypeScript",
  styling: "Tailwind CSS",
  deployment: "Vercel",
  focus: [
    "Performance",
    "Responsive Design",
    "Modern UI",
    "Continuous Improvement"
  ]
};`}
          </pre>
        </div>
      </div>
    </section>
  );
}