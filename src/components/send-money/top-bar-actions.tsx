import Link from "next/link";
import {ArrowLeft, CircleHelp} from "lucide-react";

import TopBarLayout from "../shared/top-bar-layout";

function TopBarActions() {
  return (
    <TopBarLayout>
      <Link href="/">
        <button
          className="grid place-items-center rounded-full border bg-white p-3 shadow-xl shadow-black/5 transition-all hover:bg-gray-100 active:bg-white/70"
          type="button"
        >
          <ArrowLeft className="size-5" />
        </button>
      </Link>
      <span className="text-lg font-medium">Send money</span>
      <button
        className="grid place-items-center rounded-full border bg-white p-3 shadow-xl shadow-black/5 transition-all hover:bg-gray-100 active:bg-white/70"
        type="button"
      >
        <CircleHelp className="size-5" />
      </button>
    </TopBarLayout>
  );
}

export default TopBarActions;
