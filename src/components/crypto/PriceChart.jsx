function PriceChart({ points = [] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">Price Trend (7 days)</h3>
      <div className="mt-4 flex h-40 items-end gap-2 rounded-xl bg-gradient-to-t from-blue-50 to-white p-3">
        {points.map((point, index) => (
          <div
            // Scales bars so relative movement is visible without a full chart library.
            key={`${point}-${index}`}
            className="flex-1 rounded-t bg-blue-600/80"
            style={{ height: `${Math.max(15, (point / 100) * 100)}%` }}
            title={`Day ${index + 1}: ${point}`}
          />
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500">Image Placeholder: full-candlestick-chart.png</p>
    </div>
  );
}

export default PriceChart;