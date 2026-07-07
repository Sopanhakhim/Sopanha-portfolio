type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="relative px-6 py-28 lg:px-10">
      {children}
    </section>
  );
}