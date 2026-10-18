
import Image from "next/image";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Container from "./ui/Container";

export default function Hero() {
  const stack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shopify",
    "AI Tools",
    "SQL",
    "Digital Marketing",
  ];

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center px-6 pb-24 pt-32 lg:px-10"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT SIDE - ORIGINAL INTRODUCTION */}
          <div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Computer Science • Web Development • AI • Business Strategy
            </p>

            <h1 className="mt-8 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Building digital experiences that connect{" "}
              <span className="text-cyan-300">technology</span>,{" "}
              <span className="text-emerald-300">businesses</span>, and{" "}
              <span className="text-violet-300">people</span>.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              I believe great technology is not defined by how complex it is,
              but by the value it creates for people. My journey has taught me
              to adapt, keep learning, and turn challenges into opportunities
              for growth. Today, I combine{" "}
              <span className="font-semibold text-cyan-300">
                computer science
              </span>,{" "}
              <span className="font-semibold text-sky-300">
                web development
              </span>,{" "}
              <span className="font-semibold text-violet-300">
                artificial intelligence
              </span>, and{" "}
              <span className="font-semibold text-emerald-300">
                business strategy
              </span>{" "}
              to build practical digital solutions that improve user
              experiences, support business goals, and create lasting value.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#work">
                Explore Projects
              </Button>

              <Button
                href="/images/Sopanha-Khim-Resume.pdf"
                variant="secondary"
                download
              >
                Download Resume
              </Button>
            </div>

            {/* SKILLS */}
            <div className="mt-10 flex flex-wrap gap-2">
              {stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - ONE PHOTO + CODE */}
          <div className="relative mx-auto w-full max-w-lg">

            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-xl sm:p-7">

              {/* ONLY ONE PROFILE PHOTO */}
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-slate-900 shadow-xl shadow-cyan-500/10">
                <Image
                  src="/images/stella image.jpg"
                  alt="Sopanha Khim"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="object-cover object-[center_25%]"
                />
              </div>

              {/* CODE TERMINAL */}
              <div className="mt-7 overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-950 shadow-lg">

                {/* TERMINAL HEADER */}
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <span className="font-mono text-xs text-slate-500">
                    sopanha.ts
                  </span>
                </div>

                {/* CODE CONTENT */}
                <div className="space-y-3 p-5 font-mono text-xs leading-6 sm:text-sm">

                  <p>
                    <span className="text-violet-300">const</span>{" "}
                    <span className="text-cyan-300">sopanha</span>{" "}
                    <span className="text-slate-400">=</span>{" "}
                    <span className="text-white">{"{"}</span>
                  </p>

                  <p className="pl-4 text-slate-300">
                    path:{" "}
                    <span className="text-cyan-200">
                      &quot;Computer Science&quot;
                    </span>,
                  </p>

                  <p className="pl-4 text-slate-300">
                    focus:{" "}
                    <span className="text-violet-300">
                      [&quot;Web&quot;, &quot;Design&quot;, &quot;Business&quot;]
                    </span>,
                  </p>

                  <p className="pl-4 text-slate-300">
                    mindset:{" "}
                    <span className="text-emerald-300">
                      &quot;Learn, adapt, create value&quot;
                    </span>,
                  </p>

                  <p className="pl-4 text-slate-300">
                    location:{" "}
                    <span className="text-sky-300">
                      &quot;Chicago&quot;
                    </span>
                  </p>

                  <p className="text-white">{"}"}</p>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-slate-400">
                      <span className="text-emerald-300">$</span>{" "}
                      npm run build
                    </p>

                    <p className="mt-2 text-emerald-300">
                      ✓ Portfolio compiled
                    </p>

                    <p className="text-emerald-300">
                      ✓ Always learning, always building
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
