"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProfilePage() {
  const [file, setFile] = useState<File | null>(null);
  const [amount, setAmount] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  async function onUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();
    setUploading(false);
    if (!res.ok) alert(data.error || "Upload failed");
    else setUploadedUrl(data.url);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <div>Points: 0</div>
      </div>
      <div className="grid gap-4">
        <h2 className="text-xl font-semibold">Top up points</h2>
        <div className="grid gap-2">
          <div>
            <div className="text-sm">Owner eSewa QR</div>
            <Image src="/qr-placeholder.svg" alt="eSewa QR" width={160} height={160} className="bg-gray-100" />
          </div>
          <label className="grid">
            <span className="text-sm">Points to add</span>
            <input type="number" min={0} className="border rounded p-2" value={amount} onChange={(e)=>setAmount(Number(e.target.value))} />
          </label>
          <form onSubmit={onUpload} className="flex items-center gap-3">
            <input type="file" onChange={(e)=>setFile(e.target.files?.[0] ?? null)} />
            <button disabled={uploading || !file} className="px-3 py-2 bg-black text-white rounded">{uploading ? "Uploading..." : "Upload payment screenshot"}</button>
          </form>
          {uploadedUrl ? (
            <div className="text-sm">Uploaded: <a className="underline" href={uploadedUrl} target="_blank">{uploadedUrl}</a></div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
