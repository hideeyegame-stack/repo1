"use client";
import { useState } from "react";

export default function CreateTournamentPage() {
  const [title, setTitle] = useState("");
  const [mode, setMode] = useState("ONE_VS_ONE");
  const [entryPoints, setEntryPoints] = useState(0);
  const [startAt, setStartAt] = useState("");
  const [gameUsername, setGameUsername] = useState("");
  const [limitedAmmo, setLimitedAmmo] = useState(false);
  const [rounds, setRounds] = useState(1);
  const [characterSkills, setCharacterSkills] = useState(false);
  const [coinInGame, setCoinInGame] = useState(false);
  const [gunAttributes, setGunAttributes] = useState(false);
  const [headshot, setHeadshot] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch("/api/tournaments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        mode,
        entryPoints: Number(entryPoints),
        startAt: new Date(startAt).toISOString(),
        game: "FREE_FIRE",
        settings: {
          gameUsername,
          limitedAmmo,
          rounds: Number(rounds),
          characterSkills,
          coinInGame,
          gunAttributes,
          headshot,
        },
      }),
    });
    const data = await res.json();
    setSubmitting(false);
    if (!res.ok) alert(data.error || "Failed");
    else window.location.href = "/games";
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Create Tournament</h1>
      <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
        <input className="border p-2 rounded" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <label className="grid">
          <span className="text-sm">Start time</span>
          <input className="border p-2 rounded" type="datetime-local" value={startAt} onChange={(e)=>setStartAt(e.target.value)} />
        </label>
        <label className="grid">
          <span className="text-sm">Mode</span>
          <select className="border p-2 rounded" value={mode} onChange={(e)=>setMode(e.target.value)}>
            <option value="ONE_VS_ONE">1v1</option>
            <option value="TWO_VS_TWO">2v2</option>
            <option value="THREE_VS_THREE">3v3</option>
            <option value="FOUR_VS_FOUR">4v4</option>
          </select>
        </label>
        <label className="grid">
          <span className="text-sm">Entry points</span>
          <input className="border p-2 rounded" type="number" min={0} value={entryPoints} onChange={(e)=>setEntryPoints(Number(e.target.value))} />
        </label>
        <input className="border p-2 rounded" placeholder="Game username" value={gameUsername} onChange={(e)=>setGameUsername(e.target.value)} />
        <label className="inline-flex gap-2 items-center"><input type="checkbox" checked={limitedAmmo} onChange={(e)=>setLimitedAmmo(e.target.checked)} /> Limited ammo</label>
        <label className="grid">
          <span className="text-sm">Rounds</span>
          <input className="border p-2 rounded" type="number" min={1} value={rounds} onChange={(e)=>setRounds(Number(e.target.value))} />
        </label>
        <label className="inline-flex gap-2 items-center"><input type="checkbox" checked={characterSkills} onChange={(e)=>setCharacterSkills(e.target.checked)} /> Character skills</label>
        <label className="inline-flex gap-2 items-center"><input type="checkbox" checked={coinInGame} onChange={(e)=>setCoinInGame(e.target.checked)} /> Coin in-game</label>
        <label className="inline-flex gap-2 items-center"><input type="checkbox" checked={gunAttributes} onChange={(e)=>setGunAttributes(e.target.checked)} /> Gun attributes</label>
        <label className="inline-flex gap-2 items-center"><input type="checkbox" checked={headshot} onChange={(e)=>setHeadshot(e.target.checked)} /> Headshot</label>
        <button disabled={submitting} className="px-3 py-2 bg-black text-white rounded">{submitting ? "Creating..." : "Create"}</button>
      </form>
    </div>
  );
}
