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
          </div>

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
        </div>
      </Container>
    </Section>
  );
}