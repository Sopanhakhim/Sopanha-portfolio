type PremiumBackgroundProps = {
  variant?: "hero" | "soft" | "projects" | "timeline" | "contact";
};

export default function PremiumBackground({
  variant = "soft",
}: PremiumBackgroundProps) {
  const glow =
    variant === "hero"
      ? "bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.12),transparent_36%)]"
      : variant === "projects"
      ? "bg-[radial-gradient(circle_at_50%_18%,rgba(34,211,238,0.13),transparent_32%),radial-gradient(circle_at_12%_75%,rgba(168,85,247,0.10),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(14,165,233,0.10),transparent_34%)]"
      : variant === "timeline"
      ? "bg-[radial-gradient(circle_at_18%_50%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_30%)]"
      : variant === "contact"
      ? "bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_80%_45%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.14),transparent_35%)]"
      : "bg-[radial-gradient(circle_at_18%_25%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_82%_60%,rgba(168,85,247,0.08),transparent_30%)]";

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />

      <div className={`absolute inset-0 ${glow}`} />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
    </div>
  );
}