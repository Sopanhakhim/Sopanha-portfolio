export default function Certifications() {
  const certificates = [
    "Foundations of Digital Marketing and E-commerce",
    "Attract and Engage Customers with Digital Marketing",
    "From Likes to Leads: Interact with Customers Online",
    "Think Outside the Inbox: Email Marketing",
    "Assess for Success: Marketing Analytics and Measurement",
    "Make the Sale: Build, Launch, and Manage E-commerce Stores",
    "Satisfaction Guaranteed: Develop Customer Loyalty Online",
  ];

  return (
    <section id="certifications" className="border-t border-slate-200 bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          Certifications
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          Google Digital Marketing & E-commerce Certificates
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Completed seven Google/Coursera certificates focused on digital marketing,
          e-commerce, customer engagement, email marketing, marketing analytics,
          online store management, and customer loyalty.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={certificate}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-medium text-slate-700"
            >
              {certificate}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}