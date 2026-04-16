export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background -z-10" />
      
      <div className="glass px-12 py-16 rounded-3xl text-center max-w-3xl flex flex-col items-center gap-6">
        <h1 className="text-5xl md:text-7xl font-bold font-heading bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Rabka Hűtéstechnika
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 font-light">
          Professzionális hűtéstechnika és klímamegoldások hamarosan...
        </p>
      </div>
    </main>
  );
}
