import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cryptoApi } from "../api/client";
import Button from "../components/common/Button";

function AddCrypto() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    price: "",
    image: "",
    change24h: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Validation
    if (!formData.name.trim()) {
      setError("Cryptocurrency name is required");
      setLoading(false);
      return;
    }
    if (!formData.symbol.trim()) {
      setError("Symbol is required");
      setLoading(false);
      return;
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      setError("Price must be greater than 0");
      setLoading(false);
      return;
    }
    if (formData.change24h === "") {
      setError("24h change percentage is required");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        name: formData.name.trim(),
        symbol: formData.symbol.trim().toUpperCase(),
        price: parseFloat(formData.price),
        image: formData.image.trim() || "default-image.png",
        change24h: parseFloat(formData.change24h),
      };

      await cryptoApi.create(payload);

      setSuccess("Cryptocurrency added successfully!");
      setFormData({
        name: "",
        symbol: "",
        price: "",
        image: "",
        change24h: "",
      });

      // Redirect to explore page after 2 seconds
      setTimeout(() => {
        navigate("/explore");
      }, 2000);
    } catch (err) {
      setError(err.message || "Failed to add cryptocurrency. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 py-10 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-semibold tracking-tight text-slate-950">
          Add New Cryptocurrency
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          Add a new cryptocurrency to the market
        </p>

        <form className="mt-10 rounded-2xl border border-slate-200 bg-white p-8" onSubmit={handleSubmit}>
          {error && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-700">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-700">{success}</p>
              <p className="mt-1 text-xs text-emerald-600">
                Redirecting to Explore page...
              </p>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                Cryptocurrency Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Bitcoin"
                required
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="symbol" className="block text-sm font-semibold text-slate-700">
                Symbol *
              </label>
              <input
                id="symbol"
                type="text"
                name="symbol"
                value={formData.symbol}
                onChange={handleChange}
                placeholder="e.g., BTC"
                maxLength="10"
                required
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 uppercase text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-semibold text-slate-700">
                Price (USD) *
              </label>
              <input
                id="price"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g., 45000"
                step="0.01"
                min="0"
                required
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-semibold text-slate-700">
                Image URL (Optional)
              </label>
              <input
                id="image"
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="e.g., https://example.com/bitcoin.png"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-1 text-xs text-slate-500">
                Leave blank to use a default image
              </p>
            </div>

            <div>
              <label htmlFor="change24h" className="block text-sm font-semibold text-slate-700">
                24h Change (%) *
              </label>
              <input
                id="change24h"
                type="number"
                name="change24h"
                value={formData.change24h}
                onChange={handleChange}
                placeholder="e.g., 2.5 or -1.2"
                step="0.01"
                required
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-1 text-xs text-slate-500">
                Use positive numbers for gains, negative for losses
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Adding..." : "Add Cryptocurrency"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/explore")}
              className="flex-1 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Cancel
            </button>
          </div>

          <div className="mt-4 border-t border-slate-200 pt-4">
            <p className="text-xs leading-5 text-slate-500">
              <strong>Note:</strong> This is a student project demo. All data is simulated and for educational purposes only.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddCrypto;
