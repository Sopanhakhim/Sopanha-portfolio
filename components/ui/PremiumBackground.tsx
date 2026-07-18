type PremiumBackgroundProps = {
  variant?: "hero" | "section" | "projects" | "contact";
};

export default function PremiumBackground({
  variant = "section",
}: PremiumBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950/20" />
      <div className="absolute right-[-220px] top-28 h-[560px] w-[560px] rounded-full border border-cyan-300/10 bg-cyan-500/5" />
      <div className="absolute left-[-180px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-3xl" />
    </div>
  );
}