import Link from "next/link";

import {cn} from "@/lib/utils";
import {bottomNavbar} from "@/constants/bottom-nav";

function FixedBottomNav() {
  return (
    <div className="fixed bottom-5 left-1/2 w-[300px] -translate-x-1/2">
      <nav className="flex w-full items-center justify-between gap-4 rounded-full bg-black p-5 px-6 text-white shadow-xl shadow-black/30">
        {bottomNavbar.map(({icon: Icon, to}, i) => (
          <Link
            key={`${to + i}`}
            className={cn(
              "h-auto",
              i === 0
                ? "pointer-events-none"
                : "opacity-50 transition-all hover:opacity-100 active:opacity-80",
            )}
            href={to}
          >
            <button className="h-fit align-top" type="button">
              <Icon className="size-6" />
            </button>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default FixedBottomNav;
