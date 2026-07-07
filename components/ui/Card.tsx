export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-cyan-500/10">
      {children}
    </div>
  );
}