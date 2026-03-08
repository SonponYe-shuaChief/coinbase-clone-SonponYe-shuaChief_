import Button from "../common/Button";

function Sidebar() {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Markets</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        <li>Top gainers</li>
        <li>Top losers</li>
        <li>Recently added</li>
        <li>Stablecoins</li>
      </ul>
      <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <p className="text-sm text-blue-900">Image Placeholder: market-banner.png</p>
      </div>
      <Button className="mt-5 w-full">Start Trading</Button>
    </aside>
  );
}

export default Sidebar;