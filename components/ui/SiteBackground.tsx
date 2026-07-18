export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.32),transparent_32%),radial-gradient(circle_at_55%_35%,rgba(37,99,235,0.28),transparent_34%),radial-gradient(circle_at_80%_55%,rgba(20,184,166,0.24),transparent_32%),radial-gradient(circle_at_65%_90%,rgba(16,185,129,0.18),transparent_35%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950" />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,6,23,.82)_100%)]" />
    </div>
  );
}