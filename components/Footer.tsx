import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <Container>
        <div className="py-12">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Thank you for visiting.
          </p>
 <p className="mx-auto max-w-3xl text-center text-lg italic leading-9 text-slate-300">
            I believe curiosity fuels growth, responsibility builds trust, and
            collaboration creates meaningful solutions.
            <br />
            <br />
            Every project is an opportunity to learn, contribute, and build
            something we&apos;re proud of.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Sopanha Khim. All rights reserved.</p>

          <p className="text-center md:text-right">
            Computer Science Student • Web Developer • Digital Product Builder
          </p>
        </div>
      </Container>
    </footer>
  );
}