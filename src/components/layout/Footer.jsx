import coinbaseLogo from "../../assets/images/coinbase logo.png";
import DisclaimerFooter from "../common/DisclaimerFooter";

function Footer() {
  const columns = [
    {
      title: "Company",
      links: ["About", "Careers", "Affiliates", "Blog", "Press", "Security", "Investors", "Vendors", "Legal & privacy"],
    },
    {
      title: "Individuals",
      links: ["Buy & sell", "Earn free crypto", "Base App", "Coinbase One", "Debit Card"],
    },
    {
      title: "Businesses",
      links: ["Asset Listings", "Coinbase Business", "Payments", "Commerce", "Prime"],
    },
    {
      title: "Developers",
      links: ["Developer Platform", "Base", "Server Wallets", "Wallet SDK", "Onramp & Offramp", "Node"],
    },
    {
      title: "Support",
      links: ["Help center", "Contact us", "Create account", "ID verification", "Account information", "Status"],
    },
    {
      title: "Learn",
      links: ["Explore", "Market statistics", "Crypto basics", "Tips & tutorials", "Market updates", "What is Bitcoin?"],
    },
  ];

  return (
    <>
      <footer className="border-t border-slate-200 bg-[#e5e8ed]">
        <div className="mx-auto w-full max-w-[1240px] px-4 py-10 lg:px-8">
          <img src={coinbaseLogo} alt="Coinbase" className="mb-8 h-10 w-10 object-contain" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold text-slate-900">{column.title}</p>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                  {column.links.map((link) => (
                    <li key={link} className="hover:text-slate-800">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-500">
            <span className="text-xs">X</span>
            <span className="text-xs">in</span>
            <span className="text-xs">IG</span>
            <span className="text-xs">t</span>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-300 bg-white/40 px-4 py-3 text-xs text-slate-600">
            <p className="font-semibold text-slate-700">Educational project notice</p>
            <p className="mt-1 leading-5">
              This site is a student-built clone for coursework and portfolio demonstration only. It is not
              affiliated with, endorsed by, or operated by Coinbase Global, Inc. No user data, credentials, or
              funds on this site should be treated as official Coinbase services.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-300 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Student Project • Privacy • Terms & Conditions</p>
            <p>Global • English</p>
          </div>
        </div>
      </footer>
      <DisclaimerFooter />
    </>
  );
}

export default Footer;