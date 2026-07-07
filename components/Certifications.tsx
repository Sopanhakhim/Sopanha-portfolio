import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Container from "./ui/Container";
import Glow from "./ui/Glow";
import Section from "./ui/Section";
import { certificates } from "./data/portfolio";

export default function Certifications() {
  return (
    <Section id="certifications">
      <Glow position="right" />

      <Container>
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Certifications
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white md:text-5xl">
            Learning that supports real digital work.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
            My Google Digital Marketing & E-commerce certificates strengthen my
            ability to connect web development with business, customer
            experience, marketing, and online growth.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <Card key={certificate}>
              <Badge>Google / Coursera</Badge>

              <h3 className="mt-5 text-lg font-semibold leading-7 text-white">
                {certificate}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Part of my foundation in digital marketing, e-commerce,
                customer engagement, and online business strategy.
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}