export default async function ApiTest() {
  const res = await fetch("http://localhost:5000/api/health", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Backend Connection Test</h1>
      <pre className="mt-4 bg-gray-700 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}