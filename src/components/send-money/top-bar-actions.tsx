import Link from "next/link";
import {ArrowLeft, CircleHelp} from "lucide-react";

import TopBarLayout from "../shared/top-bar-layout";

import {cn} from "@/lib/utils";

function TopBarActions() {
  return (
    <TopBarLayout>
      <Link href="/">
        <button
          className={cn(
            "grid place-items-center rounded-full border bg-secondary p-3 shadow-xl shadow-black/5 transition-all",
            "hover:shadow-lg hover:shadow-black/20",
            "active:bg-secondary/80 active:shadow-lg active:shadow-black/10",
          )}
          type="button"
        >
          <ArrowLeft className="size-5" />
        </button>
      </Link>
      <span className="text-lg font-medium">Send money</span>
      <button
        className={cn(
          "grid place-items-center rounded-full border bg-secondary p-3 shadow-xl shadow-black/5 transition-all",
          "hover:shadow-lg hover:shadow-black/20",
          "active:bg-secondary/80 active:shadow-lg active:shadow-black/10",
        )}
        type="button"
      >
        <CircleHelp className="size-5" />
      </button>
    </TopBarLayout>
  );
}

export default TopBarActions;
