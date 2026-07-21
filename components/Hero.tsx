import Image from "next/image";
import PremiumBackground from "./ui/PremiumBackground";
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
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-32 lg:px-10"
    >
<Container>
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
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
              </span>
              ,{" "}
              <span className="font-semibold text-sky-300">
                web development
              </span>
              ,{" "}
              <span className="font-semibold text-violet-300">
                artificial intelligence
              </span>
              , and{" "}
              <span className="font-semibold text-emerald-300">
                business strategy
              </span>{" "}
              to build practical digital solutions that improve user
              experiences, support business goals, and create lasting value.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#work">Explore Projects</Button>

              <Button
                href="/images/Sopanha-Khim-Resume.pdf"
                variant="secondary"
                download
              >
                Download Resume
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-7 flex items-center gap-4 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.04] p-4 shadow-lg shadow-cyan-500/10">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-900">
                  <Image
                    src="/images/profile.jpg"
                    alt="Sopanha Khim"
                    fill
                    sizes="80px"
                    priority
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    Meet Stella
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-white">
                    Sopanha Khim
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Web Development • Digital Products • AI
                  </p>
                </div>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Stella Dashboard
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white">
                Digital Product Builder
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Focused on building practical websites, AI-assisted workflows,
                and user-centered digital experiences that support real business
                needs.
              </p>

              <div className="mt-7 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Currently Building
                </p>

                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <p>● Centurion Intelligence Website</p>
                  <p>● Lucky Alanka E-commerce Brand</p>
                  <p>● Portfolio Version 3.0</p>
                  <p>● AI-assisted Web Experiences</p>
                </div>
              </div>

              <div className="mt-7 rounded-3xl border border-cyan-300/20 bg-slate-950/80 p-5 font-mono text-sm">
                <p className="text-slate-500">// stella.ts</p>

                <div className="mt-4 space-y-2">
                  <p>
                    <span className="text-violet-300">const</span>{" "}
                    <span className="text-cyan-300">stella</span>{" "}
                    <span className="text-slate-400">=</span>{" "}
                    <span className="text-white">{"{"}</span>
                  </p>

                  <p className="pl-5 text-slate-300">
                    path:{" "}
                    <span className="text-cyan-200">
                      &quot;Computer Science&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-5 text-slate-300">
                    focus:{" "}
                    <span className="text-violet-300">
                      [&quot;Web&quot;, &quot;AI&quot;, &quot;Business&quot;]
                    </span>
                    ,
                  </p>

                  <p className="pl-5 text-slate-300">
                    mindset:{" "}
                    <span className="text-emerald-300">
                      &quot;Learn, adapt, create value&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-5 text-slate-300">
                    location:{" "}
                    <span className="text-sky-300">&quot;Chicago&quot;</span>,
                  </p>

                  <p className="text-white">{"}"}</p>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4 text-emerald-300">
                  <p>&gt; npm run build</p>
                  <p className="mt-2">✓ Portfolio compiled</p>
                  <p>✓ Ready for opportunities</p>
                </div>
              </div>

              <div className="mt-7 rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-5">
                <p className="text-sm font-semibold text-cyan-200">
                  Open to Growth Opportunities
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Seeking opportunities in web development, digital products,
                  AI-assisted workflows, and technology roles where I can keep
                  learning, contribute value, and support real business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}