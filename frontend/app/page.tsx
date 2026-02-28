export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-6">
      <section className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 p-10 text-center shadow-2xl shadow-black/20">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Status</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Frontend running</h1>
        <p className="mt-4 text-slate-300">Open <code className="rounded bg-slate-800 px-2 py-1">/test</code> to verify backend connectivity.</p>
      </section>
    </main>
  );
}
