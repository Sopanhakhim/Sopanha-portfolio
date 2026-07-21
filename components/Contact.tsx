import Button from "./ui/Button";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden pb-36 pt-20 md:pt-28"
    >
      <Glow position="center" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-violet-500/[0.06] blur-[110px]" />

      <Container>
        <Card>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Left side */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Let&apos;s Connect
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Let&apos;s build{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                  technology that makes an impact
                </span>
                .
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                I&apos;m passionate about building websites and digital products
                that combine clean design, modern technology, business
                awareness, and thoughtful problem-solving. Whether you&apos;re
                looking for a developer, collaborator, or someone eager to learn
                and contribute, I&apos;d love to connect.
              </p>

              <div className="mt-8 space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.65)]" />

                  <p className="text-sm font-medium leading-6 text-slate-300">
                    Available for internships, entry-level positions, freelance
                    projects, and collaborative opportunities.
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-cyan-300/15 via-white/10 to-transparent" />

                <p className="text-sm leading-7 text-slate-400">
                  <span className="font-semibold text-white">
                    Chicago, Illinois
                  </span>
                  <br />
                  Open to Software Engineering, Front-End Development, Web
                  Development, Website Coordination, Digital Product, and
                  Marketing Technology roles.
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 md:p-8">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/[0.03] via-transparent to-violet-300/[0.025]" />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />

              <div className="relative flex flex-col gap-4">
                <Button href="mailto:khimsopanha123@gmail.com?subject=Portfolio%20Inquiry">
                  Get in Touch
                </Button>

                <Button
                  href="/images/Sopanha-Khim-Resume.pdf"
                  variant="secondary"
                  download
                >
                  Download Resume
                </Button>

                <Button
                  href="https://www.linkedin.com/in/khim-sopanha-71a41a3a5/"
                  variant="secondary"
                >
                  LinkedIn
                </Button>

                <Button
                  href="https://github.com/Sopanhakhim/Sopanhakhim"
                  variant="secondary"
                >
                  GitHub
                </Button>

                <div className="mt-2 border-t border-white/10 pt-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Response Time
                  </p>

                  <p className="mt-2 text-sm text-slate-300">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}