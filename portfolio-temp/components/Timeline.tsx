export default function Timeline() {
  const timeline = [
    {
      period: "Cambodia",
      title: "Early Education & Curiosity",
      details:
        "Built a strong foundation in learning, communication, and responsibility while exploring different academic and career interests.",
    },
    {
      period: "Royal University of Phnom Penh",
      title: "Chemistry Studies",
      details:
        "Studied Chemistry before transitioning toward language, communication, business, and technology interests.",
    },
    {
      period: "Pannasastra University of Cambodia",
      title: "TESOL Major",
      details:
        "Studied Teaching English to Speakers of Other Languages, strengthening communication, education, and cross-cultural skills.",
    },
    {
      period: "Cambodia Business Experience",
      title: "Online Business & SBIG Donut Cambodia",
      details:
        "Managed online selling of cosmetics, clothing, and accessories, and supported operations at SBIG Donut Cambodia, gaining experience in customer service, organization, sales, and business responsibility.",
    },
    {
      period: "UCLA Extension",
      title: "Business & Digital Marketing",
      details:
        "Studied business, digital marketing, and public relations writing, building a stronger foundation in branding, marketing strategy, and professional communication.",
    },
    {
      period: "UIC Tutorium",
      title: "English & Academic Growth",
      details:
        "Continued developing English, academic communication, and confidence while adapting to the U.S. education system.",
    },
    {
      period: "Truman College",
      title: "Computer Science & Student Support",
      details:
        "Studying Computer Science while working as a tutor and teacher assistant, supporting ESL and math students, communicating with parents, and helping diverse learners succeed.",
    },
    {
      period: "Lucky Alanka",
      title: "Founder & E-commerce Builder",
      details:
        "Building a jewelry brand through Shopify, Etsy, branding, SEO, AI-assisted content, product presentation, and customer experience.",
    },
    {
      period: "Future Vision",
      title: "Business Technology & AI Solutions",
      details:
        "Working toward a future where I help small and medium-sized businesses use websites, digital marketing, AI, and technology with confidence.",
    },
  ];

  return (
    <section id="timeline" className="border-t border-slate-200 bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          My Journey
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          From Cambodia to business, technology, and AI.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          My path combines education, entrepreneurship, customer service, digital marketing,
          computer science, and AI. Each step helped me understand how technology can solve
          practical problems and support people, businesses, and communities.
        </p>

        <div className="mt-12 grid gap-6">
          {timeline.map((item) => (
            <div
              key={`${item.period}-${item.title}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-violet-600">
                {item.period}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}