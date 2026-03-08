function Input({ label, id, className = "", ...props }) {
  return (
    <label className="block">
      {label ? <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span> : null}
      <input
        id={id}
        className={`w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-600 placeholder:text-slate-400 focus:ring-2 ${className}`}
        {...props}
      />
    </label>
  );
}

export default Input;