import Container from "./ui/Container";

const footerLinks = [
  {
    label: "Email",
    href: "mailto:khimsopanha123@gmail.com?subject=Portfolio%20Inquiry",
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
    <footer className="border-t border-white/10 bg-slate-950">
      <Container>
        <div className="py-16 md:py-20">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Thanks for stopping by.
          </p>

          <p className="mx-auto mt-7 max-w-3xl text-center text-lg leading-9 text-slate-300 md:text-xl">
            I believe curiosity drives growth, responsibility earns trust, and
            collaboration creates meaningful solutions.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-500">
            Every project is an opportunity to learn, create, and leave
            something better than I found it.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-sm font-semibold text-slate-400 transition duration-300 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-500 md:flex-row">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Sopanha Khim. All rights reserved.
          </p>

          <p className="text-center md:text-right">
            Web Developer • Software Engineering • Digital Strategy
          </p>
        </div>
      </Container>
    </footer>
  );
}