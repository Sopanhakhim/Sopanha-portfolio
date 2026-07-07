type GlowProps = {
  position?: "left" | "center" | "right";
};

export default function Glow({ position = "center" }: GlowProps) {
  const positions = {
    left: "left-0 top-20",
    center: "left-1/2 -translate-x-1/2 top-20",
    right: "right-0 top-20",
  };

  return (
    <div
     className={`absolute -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] ${positions[position]}`}
    />
  );
}