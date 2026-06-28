 export default function Home() {
  const skills = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "GitHub",
    "Shopify",
    "Etsy",
    "WordPress",
    "SEO",
    "Google Analytics",
    "AI Prompting",
    "ChatGPT",
    "Claude",
    "Content Strategy",
    "Digital Marketing",
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

      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            COMPUTER SCIENCE • BUSINESS • AI • ENTREPRENEURSHIP
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Building technology that helps businesses grow with confidence.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I combine computer science, business strategy, digital marketing, AI,
            and entrepreneurship to build websites, e-commerce experiences, and
            digital solutions that help businesses grow. I enjoy exploring new
            technologies and turning ideas into practical solutions that create
            real value.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="rounded-full bg-violet-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-violet-600 hover:text-violet-600"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Quick Highlights
          </p>

          <div className="mt-8 grid gap-5">
            <div>
              <p className="text-4xl font-semibold">5+</p>
              <p className="mt-1 text-slate-600">Real website and business projects</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">3+</p>
              <p className="mt-1 text-slate-600">Platforms: Shopify, Etsy, WordPress</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">7</p>
              <p className="mt-1 text-slate-600">Google digital marketing certificates</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">AI</p>
              <p className="mt-1 text-slate-600">Exploring AI tools and prompt engineering</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            About
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            I bridge business and technology through real digital projects.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            My journey connects Cambodia, business, digital marketing, and
            computer science in the United States. I am passionate about building
            websites, improving customer experiences, exploring AI, and helping
            businesses use technology in a clear and practical way.
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
            Skills
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Tools I use and skills I’m building.
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {skill}
              </span>
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
            Let’s connect.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            I’m open to opportunities in website coordination, e-commerce,
            digital marketing, business technology, and AI-assisted digital work.
          </p>
          <a
            href="mailto:hello@sopanhakhim.com"
            className="mt-8 inline-flex rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}