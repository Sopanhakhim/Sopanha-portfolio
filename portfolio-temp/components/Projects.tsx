export default function Projects() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          What I&apos;ve Built
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          Real projects that connect business, technology, e-commerce, and AI.
        </h2>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-violet-600">
            Lucky Alanka • Founder Project
          </p>

          <h3 className="mt-4 text-3xl font-semibold text-slate-950">
            Building a jewelry brand through e-commerce, branding, and AI.
          </h3>

          <p className="mt-5 leading-7 text-slate-600">
            Lucky Alanka is my jewelry brand where I apply business, digital
            marketing, Shopify, SEO, product presentation, customer experience,
            and AI-assisted content creation in a real e-commerce environment.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="font-semibold text-slate-950">My Role</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Founder, website planner, product content creator, and digital
                marketing strategist.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-950">Tools</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Shopify, Etsy, SEO, Canva, ChatGPT, Claude, Microsoft Designer,
                product photography, and content strategy.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-950">What I Learned</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Building a business taught me how technology, branding, customer
                trust, and organization work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}