function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-4 py-12 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-base font-semibold text-slate-900">Coinbase</p>
          <p className="mt-2">{new Date().getFullYear()} Coinbase clone.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Company</p>
          <ul className="mt-2 space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Products</p>
          <ul className="mt-2 space-y-1">
            <li>Exchange</li>
            <li>Wallet</li>
            <li>Learn</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Support</p>
          <ul className="mt-2 space-y-1">
            <li>Help center</li>
            <li>Contact us</li>
            <li>Status</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;