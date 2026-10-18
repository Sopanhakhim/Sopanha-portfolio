
const marketingCourses = [
  "Foundations of Digital Marketing and E-commerce",
  "Attract and Engage Customers with Digital Marketing",
  "From Likes to Leads: Interact with Customers Online",
  "Think Outside the Inbox: Email Marketing",
  "Assess for Success: Marketing Analytics and Measurement",
  "Make the Sale: Build, Launch, and Manage E-commerce Stores",
  "Satisfaction Guaranteed: Develop Customer Loyalty Online",
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative scroll-mt-28 overflow-hidden py-24 md:py-32"
    >
      {/* BACKGROUND COLORS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-violet-500/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-[110px]" />
      </div>

      {/* TOP GRADIENT LINE */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-violet-400/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-violet-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Certifications & Learning
              </p>
            </div>

            <h2 className="mt-6 font-[Sora] text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Learning that supports{" "}
              <span className="text-violet-300">
                my work.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-300">
              Alongside my computer science studies,
              I've taken online courses to learn more
              about digital marketing, e-commerce,
              and information security.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-300">
              I've completed seven Google digital
              marketing and e-commerce courses,
              along with two individual cybersecurity
              courses from EC-Council on Coursera.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              I enjoy learning skills I can apply
              to real projects, whether that's
              managing websites, improving content,
              or understanding how to protect
              digital information.
            </p>

            <div className="mt-9 h-px w-36 bg-gradient-to-r from-cyan-400 via-violet-400 to-transparent" />
          </div>

          {/* RIGHT SIDE - CERTIFICATE CARDS */}
          <div className="space-y-7">

            {/* DIGITAL MARKETING CARD */}
            <article className="group relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-slate-950/75 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/35 sm:p-8">

              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-2xl text-cyan-300">
                  ✦
                </div>

                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-4 py-2 text-xs font-semibold text-emerald-300">
                  ✓ Completed
                </span>
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Google / Coursera
              </p>

              <h3 className="mt-4 font-[Sora] text-2xl font-bold text-white sm:text-3xl">
                Digital Marketing{" "}
                <span className="text-cyan-300">&</span>{" "}
                <span className="text-violet-300">
                  E-commerce
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Seven completed courses covering online
                marketing, customer engagement, analytics,
                email marketing, and e-commerce.
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-medium text-cyan-200">
                  7 individual courses completed
                </p>
              </div>

              {/* EXPANDABLE COURSES */}
              <details className="group/list mt-6 rounded-2xl border border-white/10 bg-white/[0.035]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-white hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 [&::-webkit-details-marker]:hidden">
                  View completed courses

                  <span className="text-cyan-300 transition-transform duration-300 group-open/list:rotate-180">
                    ▾
                  </span>
                </summary>

                <div className="border-t border-white/10 px-5 pb-5 pt-3">
                  <ol className="space-y-2">
                    {marketingCourses.map((course, index) => (
                      <li
                        key={course}
                        className="flex items-start gap-4 rounded-xl px-2 py-3 transition-colors hover:bg-white/[0.04]"
                      >
                        <span className="shrink-0 font-mono text-xs font-semibold text-cyan-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm leading-6 text-slate-300">
                          {course}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
            </article>

            {/* CYBERSECURITY CARD */}
            <article className="group relative overflow-hidden rounded-[2rem] border border-violet-300/20 bg-slate-950/75 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-violet-300/40 sm:p-8">

              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400" />

              {/* CARD HEADER */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-300/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-7 w-7 text-violet-300"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2L20 5V11C20 16 17 20 12 22C7 20 4 16 4 11V5L12 2Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <span className="rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-4 py-2 text-xs font-semibold text-violet-200">
                  2 Courses Completed
                </span>
              </div>

              {/* CERTIFICATE INFORMATION */}
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                EC-Council / Coursera
              </p>

              <h3 className="mt-4 font-[Sora] text-2xl font-bold text-white sm:text-3xl">
                Cybersecurity{" "}
                <span className="text-violet-300">&</span>{" "}
                <span className="text-emerald-300">
                  Information Security
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                I completed two individual course
                certificates from EC-Council's
                Information Security Analyst series
                on Coursera.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                These courses have helped me start
                building a foundation in information
                security. I have not yet completed
                the full five-course program.
              </p>

              {/* COURSE PROGRESS */}
              <div className="mt-7 rounded-2xl border border-violet-300/15 bg-violet-300/[0.04] p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-violet-200">
                    Information Security Analyst Series
                  </p>

                  <span className="font-mono text-sm text-emerald-300">
                    2 / 5
                  </span>
                </div>

                <div
                  className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"
                  role="progressbar"
                  aria-label="EC-Council series progress"
                  aria-valuenow={2}
                  aria-valuemin={0}
                  aria-valuemax={5}
                >
                  <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-violet-400 to-emerald-400" />
                </div>

                <p className="mt-3 text-xs leading-6 text-slate-400">
                  Two individual course certificates earned.
                  Full program not yet completed.
                </p>
              </div>

              {/* VERIFIED COURSE DETAIL */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-5">

                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-violet-300">
                  Completed Coursework
                </p>

                <div className="mt-5 flex items-start gap-4">
                  <span className="font-mono text-xs font-semibold text-emerald-300">
                    01
                  </span>

                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Information Security Fundamentals
                    </h4>

                    <p className="mt-2 text-sm text-slate-400">
                      EC-Council · Completed July 31, 2026
                    </p>

                    <p className="mt-2 text-sm font-medium text-emerald-300">
                      Grade: 100%
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm leading-7 text-slate-300">
                    A second individual course in the
                    series has also been completed.
                  </p>
                </div>
              </div>

              {/* BOTTOM NOTE */}
              <p className="mt-6 text-xs leading-6 text-slate-400">
                Continuing to strengthen my understanding
                of cybersecurity alongside my computer
                science studies.
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}
