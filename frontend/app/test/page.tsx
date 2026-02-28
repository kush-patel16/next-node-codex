const backendBaseUrl = process.env.BACKEND_URL ?? 'http://localhost:5000';

async function getHealth() {
  const response = await fetch(`${backendBaseUrl}/api/health`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Backend request failed with status ${response.status}`);
  }

  return response.json() as Promise<{ status: string; message: string }>;
}

export default async function TestPage() {
  const health = await getHealth();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-6">
      <section className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 p-10 shadow-2xl shadow-black/20">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">Backend Health</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">/api/health response</h1>
        <pre className="mt-6 overflow-auto rounded-xl bg-slate-950 p-4 text-sm text-slate-200">
          {JSON.stringify(health, null, 2)}
        </pre>
      </section>
    </main>
  );
}
