export default function StorePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border rounded p-4">
          <h3 className="font-medium">Free Fire Diamonds</h3>
          <button className="mt-2 px-3 py-2 bg-black text-white rounded">Purchase</button>
        </div>
        <div className="border rounded p-4">
          <h3 className="font-medium">Google Play Gift Card</h3>
          <button className="mt-2 px-3 py-2 bg-black text-white rounded">Purchase</button>
        </div>
      </div>
    </div>
  );
}
