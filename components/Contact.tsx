import Button from "./ui/Button";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";

export default function Contact() {
  return (
    <Section id="contact" className="pb-36">
      <Glow position="center" />

      <Container>
        <Card>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Contact
              </p>

              <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                Let&apos;s build technology that makes a difference.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                I&apos;m seeking software engineering, web development, and
                digital product opportunities where I can continue learning,
                solving meaningful problems, and contributing to real-world
                products.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button href="mailto:your-email@example.com">Email Me</Button>
<Button href="/images/Sopanha-Khim-Resume.pdf" variant="secondary" download>
  Download Resume
</Button>
              <Button href="https://www.linkedin.com/in/khim-sopanha-71a41a3a5/" variant="secondary">
                LinkedIn
              </Button>

              <Button href="https://github.com/Sopanhakhim/Sopanhakhim" variant="secondary">
                GitHub
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}