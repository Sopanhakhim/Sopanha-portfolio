
import Container from "./ui/Container";
import ScrollReveal from "./ScrollReveal";

const footerLinks = [
  {
    label: "Email",
    href: "mailto:stellakhim3@gmail.com?subject=Portfolio%20Inquiry",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khim-sopanha-71a41a3a5/",
  },
  {
    label: "GitHub",
    href: "https://github.com/Sopanhakhim/Sopanhakhim",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">

      {/* SOFT BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/[0.05] blur-[110px]" />

        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-500/[0.06] blur-[110px]" />
      </div>

      <Container>
        <div className="relative z-10 py-16 md:py-20">

          {/* FOOTER HEADING */}
          <ScrollReveal>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Thanks for stopping by.
            </p>
          </ScrollReveal>

          {/* MAIN MESSAGE */}
          <ScrollReveal delay={0.06}>
            <p className="mx-auto mt-7 max-w-3xl text-center text-lg leading-9 text-slate-300 md:text-xl">
              I believe curiosity drives growth, responsibility earns trust, and
              collaboration creates meaningful solutions.
            </p>
          </ScrollReveal>

          {/* SECONDARY MESSAGE */}
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-500">
              Every project is an opportunity to learn, create, and leave
              something better than I found it.
            </p>
          </ScrollReveal>

          {/* SOCIAL LINKS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link, index) => (
              <ScrollReveal
                key={link.label}
                delay={0.06 + index * 0.06}
                className="w-auto"
              >
                <a
                  href={link.href}
                  target={
                    link.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-block text-sm font-semibold text-slate-400 transition-colors duration-300 hover:text-cyan-300 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  {link.label}
                </a>
              </ScrollReveal>
            ))}
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="relative z-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-500 md:flex-row">

          <ScrollReveal className="w-auto max-w-full">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Sopanha Khim. All rights reserved.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={0.08}
            className="w-auto max-w-full"
          >
            <p className="text-center md:text-right">
              Web Developer • Software Engineering • Digital Strategy
            </p>
          </ScrollReveal>

        </div>
      </Container>
    </footer>
  );
}
