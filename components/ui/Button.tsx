type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  download?: boolean;
  target?: "_blank";
};

export default function Button({
  children,
  href,
  variant = "primary",
  download = false,
  target,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
      : "border border-white/15 bg-white/[0.04] text-white hover:border-cyan-300/40 hover:bg-white/[0.08]";

  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-flex rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${styles}`}
    >
      {children}
    </a>
  );
}