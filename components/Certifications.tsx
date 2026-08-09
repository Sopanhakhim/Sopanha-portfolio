import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";
import { certificates } from "./data/portfolio";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <Glow position="right" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Certifications
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              Learning applied to real digital work.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              I completed seven Google and Coursera certificates focused on
              digital marketing, e-commerce, customer engagement, analytics,
              and online business strategy.
            </p>

            <div className="mt-8 border-l border-cyan-300/30 pl-5">
              <p className="text-sm leading-7 text-slate-500">
                These programs support the work I now apply across Shopify,
                content strategy, SEO, customer experience, and digital
                projects.
              </p>
            </div>

            <div className="mt-8 border-l border-violet-300/30 pl-5">
              <p className="text-sm leading-7 text-slate-500">
                I am also expanding my technical foundation through ongoing
                study in information security and cybersecurity.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Completed Certificates */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl md:p-10">
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Google / Coursera
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    Digital Marketing & E-Commerce
                  </h3>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-4xl font-bold text-cyan-300">
                    {certificates.length}
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Certificates Completed
                  </p>
                </div>
              </div>

              <div className="mt-4">
                {certificates.map((certificate, index) => (
                  <div
                    key={certificate}
                    className="grid gap-4 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[3rem_1fr]"
                  >
                    <span className="text-sm font-semibold text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h4 className="text-base font-semibold leading-7 text-slate-200">
                      {certificate}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.06] via-white/[0.025] to-violet-300/[0.05] p-7 backdrop-blur-xl md:p-10">
              <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan-300/10 blur-[80px]" />

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                      Currently Learning
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                      Information Security Analyst Professional Certificate
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Coursera
                    </p>
                  </div>

                  <span className="rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    In Progress
                  </span>
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-400 md:text-base">
                  Building a stronger foundation in information security
                  through coursework covering cybersecurity concepts,
                  threats, vulnerabilities, security assessment, and
                  defensive practices.
                </p>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Current Progress
                  </p>

                  <div className="mt-4 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] text-sm font-bold text-emerald-200">
                      ✓
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-200">
                        First course completed
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Earned the first course certificate and continuing
                        through the remaining courses in the professional
                        certificate pathway.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Areas I&apos;m Developing
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Information Security",
                      "Cybersecurity",
                      "Threat Analysis",
                      "Vulnerability Assessment",
                      "Security Fundamentals",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
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