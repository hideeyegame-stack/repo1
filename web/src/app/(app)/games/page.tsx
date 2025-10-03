export default function GamesPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Games</h1>
        <a href="/games/create" className="px-3 py-2 rounded bg-black text-white">Create Tournament</a>
      </div>
      <p>Select a game or create a custom tournament.</p>
    </div>
  );
}
