const links = [
  {
    label: "Email",
    value: "Khimsopanha123@gmail.com",
    href: "mailto:Khimsopanha123@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/khim-sopanha-71a41a3a5/",
  },
  {
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/khimsopanha123-blip",
  },
  {
    label: "Resume",
    value: "View PDF",
    href: "/Sopanha-Khim-Resume.pdf",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-violet-500/20 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="premium-card rounded-[2rem] p-8 md:p-12">
          <p className="section-label accent-text">Contact</p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Let&apos;s build something meaningful together.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
            I&apos;m open to opportunities in web development, website
            coordination, e-commerce, digital technology, AI, and digital
            marketing. Feel free to connect if you&apos;d like to collaborate
            or discuss a role.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10 hover:shadow-[0_18px_50px_rgba(139,92,246,0.18)]"
              >
                <p className="text-sm font-semibold text-violet-300">
                  {link.label}
                </p>

                <p className="mt-2 text-sm text-white/65 transition group-hover:text-white">
                  {link.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
            © 2026 Sopanha Khim. Built with Next.js, React, TypeScript, and
            Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}