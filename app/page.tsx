export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">MADA-261 Reinigung</h1>
        <p className="text-xl text-gray-700">
          Willkommen bei unserem professionellen Reinigungsservice
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Unsere Dienstleistungen</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Büroreinigung</li>
            <li>Wohnungsreinigung</li>
            <li>Fensterreinigung</li>
            <li>Grundreinigung</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
