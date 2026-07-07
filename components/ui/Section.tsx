type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-6 py-28 lg:px-10 ${className}`}
    >
      {children}
    </section>
  );
}