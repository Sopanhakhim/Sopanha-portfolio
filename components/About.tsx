export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-32">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-violet-600">
        About
      </p>

      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Building technology that creates meaningful experiences.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            I believe technology is at its best when it solves real problems,
            empowers people, and creates lasting value for businesses and
            communities.
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-7 text-lg leading-8 text-slate-600">
          <p>
            Hi, I&apos;m{" "}
            <span className="font-semibold text-slate-900">
              Stella (Sopanha) Khim
            </span>
            , a Computer Science student passionate about building modern
            websites, digital products, and user-centered experiences.
          </p>

          <p>
            Originally from Cambodia and now studying in the United States, my
            journey through UCLA Extension, UIC, and Harry S Truman College has
            shaped both my technical skills and my perspective. Living and
            learning in different environments has taught me to approach
            challenges with curiosity, adaptability, and a commitment to
            continuous growth.
          </p>

          <p>
            My interests extend beyond software development. I enjoy combining
            technology, business strategy, artificial intelligence, digital
            marketing, and design to create solutions that are not only
            functional but also intuitive, engaging, and impactful.
          </p>

          <p>
            Throughout my projects, I have built e-commerce experiences,
            business websites, branding systems, AI-assisted workflows, and
            digital marketing solutions. These experiences have strengthened my
            ability to bridge technical development with real business
            objectives.
          </p>

          <p>
            Whether I&apos;m developing a website, improving an online shopping
            experience, or exploring emerging AI technologies, my goal remains
            the same: to build thoughtful digital products that solve meaningful
            problems and create lasting value for the people who use them.
          </p>
        </div>
      </div>
    </section>
  );
}