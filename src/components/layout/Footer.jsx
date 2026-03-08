function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>Coinbase Clone for DCIT 323 Assignment</p>
        <p>{new Date().getFullYear()} | Built with React + Tailwind</p>
      </div>
    </footer>
  );
}

export default Footer;