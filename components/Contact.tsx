
import Button from "./ui/Button";
import Container from "./ui/Container";
import Section from "./ui/Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden py-24 md:py-32"
    >
      {/* BACKGROUND COLOR EFFECTS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-violet-500/15 blur-[130px]" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />
      </div>

      {/* TOP GRADIENT LINE */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-violet-400/40" />

      {/* MAIN CONTAINER */}
      <Container>
        <div className="relative z-10 mx-auto w-full max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/65 p-7 shadow-2xl backdrop-blur-xl md:p-12">

            {/* SOFT INNER GLOW */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.05] via-transparent to-violet-400/[0.07]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

              {/* LEFT SIDE - INTRODUCTION */}
              <div>

                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-violet-400" />

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    Let&apos;s Connect
                  </p>
                </div>

                <h2 className="font-[Sora] text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">

                  Have something{" "}
                  <span className="text-cyan-300">
                    in mind?
                  </span>

                  <span className="mt-3 block">
                    Let&apos;s{" "}
                    <span className="text-violet-300">
                      talk.
                    </span>
                  </span>

                </h2>

                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  I enjoy connecting with people who
                  are working on interesting ideas,
                  websites, and digital projects.
                </p>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Whether you have a project in mind,
                  would like to collaborate, or simply
                  want to connect, I&apos;d be happy
                  to hear from you.
                </p>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                  I&apos;m always interested in
                  opportunities where I can use my
                  website, design, and technical skills
                  while continuing to learn.
                </p>

                {/* AVAILABILITY CARD */}
                <div className="mt-9 rounded-[1.5rem] border border-cyan-300/15 bg-cyan-300/[0.04] p-6">

                  <div className="flex items-start gap-4">

                    <span className="relative mt-2 flex h-3 w-3 shrink-0">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/40 motion-safe:animate-ping" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-cyan-200">
                        Open to Opportunities
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        I&apos;m interested in website
                        coordination, web content,
                        IT support, web development,
                        and digital projects.
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        Anticipated employment availability:
                        January 2027, pending OPT
                        authorization.
                      </p>
                    </div>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="mt-7 flex flex-wrap items-center gap-3">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 10C20 15 12 22 12 22S4 15 4 10A8 8 0 0120 10Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>

                  <span className="text-sm text-slate-400">
                    Based in Chicago, Illinois
                  </span>
                </div>
              </div>

              {/* RIGHT SIDE - CONTACT CARD */}
              <div className="relative">

                {/* BACKGROUND GLOW */}
                <div className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-violet-500/15 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-xl backdrop-blur-xl sm:p-8">

                  {/* COLORFUL TOP BORDER */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400" />

                  {/* CARD HEADER */}
                  <div className="mb-8">

                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                      Get in Touch
                    </p>

                    <h3 className="mt-4 font-[Sora] text-2xl font-bold text-white">
                      Say hello!
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      Feel free to reach out through
                      email or connect with me online.
                    </p>
                  </div>

                  {/* CONTACT BUTTONS */}
                  <div className="flex flex-col gap-4">

                    {/* EMAIL */}
                    <Button
                      href="mailto:stellakhim3@gmail.com?subject=Portfolio%20Inquiry"
                    >
                      Email Me ↗
                    </Button>

                    {/* LINKEDIN */}
                    <Button
                      href="https://www.linkedin.com/in/khim-sopanha-71a41a3a5/"
                      variant="secondary"
                    >
                      LinkedIn ↗
                    </Button>

                    {/* GITHUB */}
                    <Button
                      href="https://github.com/Sopanhakhim/Sopanhakhim"
                      variant="secondary"
                    >
                      GitHub ↗
                    </Button>

                    {/* RESUME */}
                    <Button
                      href="/images/Sopanha-Khim-Resume.pdf"
                      variant="secondary"
                      download
                    >
                      Download Résumé ↓
                    </Button>

                  </div>

                  {/* EMAIL DISPLAY */}
                  <div className="mt-8 border-t border-white/10 pt-7">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Email Address
                    </p>

                    <a
                      href="mailto:stellakhim3@gmail.com"
                      className="mt-3 inline-block break-all text-sm font-medium text-cyan-300 transition-colors duration-300 hover:text-violet-300"
                    >
                      stellakhim3@gmail.com
                    </a>

                  </div>

                  {/* CLOSING NOTE */}
                  <div className="mt-7 rounded-xl border border-violet-300/15 bg-violet-300/[0.04] p-4">

                    <p className="text-center text-sm leading-7 text-slate-300">
                      Looking forward to connecting
                      and hearing about your ideas!
                    </p>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
