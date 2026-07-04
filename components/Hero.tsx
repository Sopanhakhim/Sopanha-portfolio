export default function Hero() {
  return (
    <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 py-28 md:grid-cols-[1.15fr_0.85fr]">
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-violet-600">
          Stella Khim
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
          Turning ideas into digital products that create real business value.
        </h1>

        <p className="mt-4 text-base font-medium text-slate-500">
          Computer Science Student • Web Developer • AI Solutions • Business Technology
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Hi, I&apos;m Stella (Sopanha) Khim, a Computer Science student
          passionate about building modern websites, e-commerce experiences, and
          digital products that solve real business challenges. I combine
          software development, AI, business strategy, and digital marketing to
          create thoughtful, user-centered solutions that are both functional and
          visually engaging.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#work"
            className="rounded-full bg-violet-600 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            View Work →
          </a>

          <a
            href="/Stella-Khim-Resume.pdf"
            className="rounded-full border border-slate-300 bg-white/70 px-7 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-violet-600 hover:text-violet-600"
          >
            Resume
          </a>

          <a
            href="https://github.com/khimsopanha123-blip"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 bg-white/70 px-7 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-violet-600 hover:text-violet-600"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="relative rounded-[2rem] border border-slate-200 bg-white/75 p-8 shadow-xl shadow-slate-200/70 backdrop-blur">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet-200/50 blur-3xl" />

        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-600">
          At a Glance
        </p>

        <div className="mt-8 grid gap-6">
          <div>
            <p className="text-4xl font-semibold text-slate-950">05+</p>
            <p className="mt-1 text-slate-600">Professional projects</p>
          </div>

          <div>
            <p className="text-4xl font-semibold text-slate-950">07</p>
            <p className="mt-1 text-slate-600">
              Google digital marketing certificates
            </p>
          </div>

          <div>
            <p className="text-4xl font-semibold text-slate-950">03+</p>
            <p className="mt-1 text-slate-600">
              Shopify • WordPress • Webflow
            </p>
          </div>

          <div>
            <p className="text-4xl font-semibold text-slate-950">AI</p>
            <p className="mt-1 text-slate-600">
              Prompt engineering • Automation • Productivity workflows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}