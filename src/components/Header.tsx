import { ChevronDown, Globe } from "lucide-react";

const MainNavItems = [
  "Explore",
  "Services",
  "Nightlife",
  "Travel",
  "Accommodation",
  "Spaces",
  "Subscriptions",
  "Vouchers",
  "Rentals",
  "Voting",
  "Shop",
  "Essentials",
  "Healthcare",
  "Jobs",
  "Marketplace",
];

const SubNavItems = [
  "Home",
  "Events",
  "Tours",
  "Activities",
  "Indulge",
  "Places",
  "Movies",
  "Sports",
  "Restaurants",
  "Find a table",
  "Conferences",
  "Workshops",
  "Auditions",
  "People",
  "World Famous",
  "Social Buddies",
  "Virtual Experiences",
];

export function Header() {
  return (
    <header className="mx-4 mt-4 bg-white overflow-hidden">
      <div className="flex items-center justify-end px-6 py-2 border-b border-gray-100">
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-[#6A6A6A] text-xs transition-colors ">
            Events Calendar
          </a>
          <a
            href="#"
            className="hover:text-gray-900 transition-colors text-[#6A6A6A] text-xs "
          >
            Blog
          </a>
          <a
            href="#"
            className="hover:text-gray-900 transition-colors text-[#6A6A6A] text-xs "
          >
            Limelight
          </a>
          <button className="flex items-center gap-1 hover:text-gray-900 transition-colors text-[#6A6A6A] text-xs">
            <span className="w-5 h-4 bg-[#4883F9] rounded-sm flex items-center justify-center text-white text-xs">
              <Globe className="w-5 h-5" />
            </span>
            EN(US)
            <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1 hover:text-gray-900 transition-colors text-[#6A6A6A] text-xs">
            <span className="text-[21px]">🇺🇸</span>
            United States
            <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1 hover:text-gray-900 transition-colors text-[#6A6A6A] text-xs">
            California
            <ChevronDown className="w-3 h-3" />
          </button>
          <a
            href="#"
            className="text-[#6A6A6A] text-xs hover:text-gray-900 transition-colors"
          >
            Sign In | Up
          </a>
          <a
            href="#"
            className="text-amber-700 font-medium hover:text-amber-800 transition-colors"
          >
            Business
          </a>
          <a
            href="#"
            className="font-semibold text-gray-900 hover:text-gray-700 transition-colors text-xs"
          >
            Create Event
          </a>
        </div>
      </div>

      <div className="flex items-center gap-6 px-6 py-3 bg-[#2F251D] text-white">
        <div className="flex items-center gap-2 mr-4">
          <img src="/logo.png" alt="Hexallo Logo" className="w-6 h-6" />
          <span className="font-semibold text-lg">Hexallo</span>
        </div>
        <nav className="flex items-center gap-1">
          {MainNavItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`px-3 py-3 text-xs transition-colors ${
                index === 0
                  ? "font-medium border-b-4 border-[#EFC96D] pb-2"
                  : "text-gray-200 hover:bg-white/10"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6 px-6 text-sm border-t border-gray-100 overflow-x-auto bg-[#F2F2F2]">
        {SubNavItems.map((item, index) => (
          <a
            key={item}
            href="#"
            className={`whitespace-nowrap transition-colors py-2 text-[#6A6A6A] text-xs ${
              index === 0 ? "font-medium border-b-3 border-[#AE6F28] pb-1" : ""
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
}
