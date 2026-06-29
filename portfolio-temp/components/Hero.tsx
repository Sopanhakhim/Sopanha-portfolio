export default function Hero() {
  return (
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
          technologies and turning ideas into practical solutions that create real
          value.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#work"
            className="rounded-full bg-violet-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            🚀 View My Projects
          </a>

          <a
            href="https://github.com/khimsopanha123-blip"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-violet-600 hover:text-violet-600"
          >
            💻 GitHub
          </a>

          <a
            href="mailto:Khimsopanha123@gmail.com"
            className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-violet-600 hover:text-violet-600"
          >
            📧 Email Me
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
  );
}