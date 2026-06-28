 export default function Home() {
  const skills = [
  {
    category: "Technical Skills",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Git & GitHub", "Responsive Web Design"],
  },
  {
    category: "Website & E-commerce",
    items: ["Shopify", "WordPress", "GoDaddy", "Bluehost", "SEO", "Content Management", "Website Planning", "UX", "Product Listing Optimization"],
  },
  {
    category: "AI & Digital Productivity",
    items: ["ChatGPT", "Claude", "GitHub Copilot", "Google Gemini", "Grok", "Microsoft Copilot", "Canva AI", "Microsoft Designer", "AI Prompt Engineering", "AI Content Creation"],
  },
  {
    category: "Business & Marketing",
    items: ["Business Analysis", "Digital Marketing", "Brand Strategy", "Google Analytics", "Customer Experience", "Content Strategy", "Email Marketing", "Market Research", "Social Media Marketing"],
  },
  {
    category: "Education & Leadership",
    items: ["Academic Tutoring", "ESL Student Support", "Math Tutoring", "Teacher Assistant", "Parent Communication", "Student Mentoring", "Cross-cultural Communication"],
  },
  {
    category: "Professional Strengths",
    items: ["Problem Solving", "Critical Thinking", "Adaptability", "Entrepreneurship", "Continuous Learning", "Communication", "Organization", "Attention to Detail"],
  },
];
  const work = [
    {
      title: "Lucky Alanka",
      label: "Founder • Shopify • AI • Branding",
      year: "2026",
      tech: "Shopify • Etsy • SEO • AI • Content Strategy",
      link: "https://luckyalanka.com",
      description:
        "Founded and built a luxury jewelry brand focused on meaningful jewelry, e-commerce, AI-assisted marketing, SEO, and customer experience.",
    },
    {
      title: "Truman Middle College High School",
      label: "Website Developer • GoDaddy • Content Strategy",
      year: "2026",
      tech: "GoDaddy • UX Planning • Content Strategy • Website Organization",
      link: "https://tmchs.org/about-us",
      description:
        "Supported the development and organization of the TMCHS website, including content planning, page structure, navigation, and user-friendly information for students, families, and the school community.",
    },
    {
      title: "Bergonzi Violins",
      label: "Website Manager • WordPress • Bluehost",
      year: "2026",
      tech: "WordPress • Bluehost • Website Maintenance • Facebook",
      link: "https://bergonziviolins.com",
      description:
        "Managed and maintained the Bergonzi Violins website using WordPress and Bluehost, including website updates, content management, troubleshooting, and improving the customer experience.",
    },
    {
      title: "The Classic Gem",
      label: "E-commerce Specialist • Shopify • Luxury Jewelry",
      year: "2025–Present",
      tech: "Shopify • Product Photography • SEO • Customer Experience",
      link: "https://theclassicgem.com",
      description:
        "Supported website management, product presentation, digital branding, and customer experience for a luxury jewelry business.",
    },
    {
      title: "Personal Portfolio",
      label: "Next.js • React • GitHub",
      year: "2026",
      tech: "Next.js • React • Tailwind CSS • GitHub • Vercel",
      link: "#",
      description:
        "Designed and developed this personal portfolio to showcase my experience in computer science, business, digital marketing, AI, and entrepreneurship.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="font-semibold tracking-tight">Sopanha Khim</p>
          <div className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-violet-600">
              About
            </a>
            <a href="#work" className="hover:text-violet-600">
              Work
            </a>
            <a href="#skills" className="hover:text-violet-600">
              Skills
            </a>
            <a href="#vision" className="hover:text-violet-600">
              Vision
            </a>
            <a href="#contact" className="hover:text-violet-600">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <section id="about" className="border-t border-slate-200 bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            About
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
  I connect computer science, business, and digital strategy to build practical solutions.
</h2>
<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
  My journey began in Cambodia and continued in the United States through UCLA Extension, UIC, and Truman College. Along the way, I developed a strong interest in computer science, digital marketing, e-commerce, AI tools, and entrepreneurship. I enjoy building websites, organizing content, improving customer experiences, and helping businesses use technology in a clear and practical way.
</p>
        </div>
      </section>

      <section id="work" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Selected Projects
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Real work across websites, e-commerce, marketing, and technology.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {work.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-violet-600">{item.label}</p>
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                    {item.year}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>

                <p className="mt-6 text-sm font-semibold text-slate-900">
                  Tools & Technology
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.tech}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm font-semibold text-violet-600 hover:text-violet-700"
                >
                  View Project →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-slate-200 bg-slate-50 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
      Technical Skills & Expertise
    </p>

    <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
      Building practical solutions by combining technology, business, AI, and communication.
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((group) => (
        <div
          key={group.category}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-950">
            {group.category}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      <section id="vision" className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-slate-950 p-10 text-white md:p-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            My Vision
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Helping small businesses use technology with confidence.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            My long-term goal is to build businesses that help small and
            medium-sized owners understand websites, digital marketing, AI, and
            technology in a practical way. I want to create tools, services, and
            learning resources that make digital growth easier and more accessible.
          </p>
        </div>
      </section>

    <section id="contact" className="border-t border-slate-200 px-6 py-24">
  <div className="mx-auto max-w-3xl text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
      Contact
    </p>

    <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
      Let's build something meaningful.
    </h2>

    <p className="mt-6 text-lg leading-8 text-slate-600">
      I'm open to opportunities in web development, business technology,
      e-commerce, AI, digital marketing, and software development. Feel free
      to connect if you'd like to collaborate or discuss new opportunities.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
      <a
        href="mailto:Khimsopanha123@gmail.com"
        className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
      >
        📧 Email Me
      </a>

      <a
        href="https://github.com/khimsopanha123-blip"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-600 hover:text-violet-600"
      >
        GitHub
      </a>

      <a
        href="#"
        className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-600 hover:text-violet-600"
      >
        LinkedIn
      </a>
    </div>
  </div>
</section>

    </main>
  );
}