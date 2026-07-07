import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

export default function Philosophy() {
  return (
    <Section id="philosophy">
      <Glow position="left" />

      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Philosophy
          </p>

          <h2 className="mt-5 max-w-5xl text-3xl font-bold leading-tight text-white md:text-5xl">
            Great software begins with understanding people.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            I believe technology should be purposeful, accessible, and useful.
            Great products are not built only with code. They are built with
            empathy, strategy, creativity, and a clear understanding of the
            people they serve.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {["Purpose", "Growth", "Impact", "Human-Centered"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm font-semibold text-cyan-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}