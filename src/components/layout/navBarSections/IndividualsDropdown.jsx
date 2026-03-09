import {
  AcademicCapIcon,
  BanknotesIcon,
  BoltIcon,
  BuildingLibraryIcon,
  ChartBarSquareIcon,
  CreditCardIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  SparklesIcon,
  Squares2X2Icon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import navigationUpsellImage from "../../../assets/images/imgi_2_navigation-upsell.png";

const leftColumn = [
  { title: "Buy and sell", description: "Buy, sell, and use crypto", icon: BanknotesIcon },
  { title: "Base App", description: "Post, earn, trade, and chat, all in one place", icon: Squares2X2Icon },
  { title: "Coinbase One", description: "Get zero trading fees and more", icon: SparklesIcon },
  { title: "Private Client", description: "For trusts, family offices, UHNWIs", icon: BuildingLibraryIcon },
  { title: "Onchain", description: "Dive into the world of onchain apps", icon: GlobeAltIcon },
  { title: "Learn", description: "Crypto tips and guides", icon: AcademicCapIcon, to: "/learn" },
];

const rightColumn = [
  { title: "Advanced", description: "Professional-grade trading tools", icon: ChartBarSquareIcon },
  { title: "Earn", description: "Stake your crypto and earn rewards", icon: BoltIcon },
  { title: "Coinbase Wealth", description: "Institutional-grade services for UHNW", icon: RocketLaunchIcon },
  { title: "Credit Card", description: "Earn up to 4% bitcoin back", icon: CreditCardIcon },
  { title: "Debit Card", description: "Spend crypto, get crypto back", icon: WalletIcon },
];

function Entry({ title, description, icon: Icon, to }) {
  const content = (
    <>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-slate-700">
        <Icon className="h-4 w-4" />
      </span>
      <span>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{description}</p>
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className="flex w-full items-start gap-3 rounded-xl p-2 text-left hover:bg-slate-50">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className="flex w-full items-start gap-3 rounded-xl p-2 text-left hover:bg-slate-50">
      {content}
    </button>
  );
}

function IndividualsDropdown() {
  return (
    <div className="mx-auto w-full max-w-[1240px] border-x border-b border-slate-200 bg-white px-4 py-7 shadow-[0_24px_48px_rgba(2,6,23,0.12)] lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="space-y-1">
            {leftColumn.map((item) => (
              <Entry key={item.title} {...item} />
            ))}
          </div>
          <div className="space-y-1">
            {rightColumn.map((item) => (
              <Entry key={item.title} {...item} />
            ))}
          </div>
        </div>

        <aside className="grid content-start gap-5">
          <div className="overflow-hidden rounded-3xl">
            <img src={navigationUpsellImage} alt="Navigation upsell" className="h-40 w-40 object-cover" />
          </div>
          <div>
            <p className="text-5xl font-semibold leading-[1.06] tracking-tight text-slate-900">
              System Update 2025
              <br />
              The next chapter of
              <br />
              Coinbase. Live on X 12/17.
            </p>
            <button type="button" className="mt-5 text-xl font-semibold text-slate-900 underline underline-offset-2">
              Learn more
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default IndividualsDropdown;
