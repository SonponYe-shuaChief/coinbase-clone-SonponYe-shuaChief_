import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../common/Button";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Cryptocurrencies", to: "/explore" },
    { label: "Individuals", to: "/learn" },
    { label: "Businesses", to: "/learn" },
    { label: "Institutions", to: "/learn" },
    { label: "Developers", to: "/learn" },
    { label: "Company", to: "/learn" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-4 py-2.5 lg:px-8">
        <Link to="/" className="flex items-center gap-2" aria-label="Coinbase home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1652f0] text-xl font-black text-white">
            C
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-[16px] font-semibold tracking-tight ${
                  isActive ? "text-slate-950" : "text-slate-900 hover:text-[#1652f0]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700"
            aria-label="Search"
          >
            ?
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700"
            aria-label="Language"
          >
            o
          </button>
          <Link to="/signin">
            <Button variant="ghost" className="rounded-full border-0 bg-slate-100 px-5 py-2.5 text-slate-900 hover:bg-slate-200">
              Sign in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="rounded-full bg-[#1652f0] px-5 py-2.5 hover:bg-[#1346ce]">Sign up</Button>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 lg:hidden"
          aria-label="Toggle mobile menu"
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={`${link.label}-${link.to}`}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive ? "bg-blue-50 text-[#1652f0]" : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/signin" onClick={() => setOpen(false)}>
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setOpen(false)}>
              <Button className="w-full bg-[#1652f0] hover:bg-[#1346ce]">Sign Up</Button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;