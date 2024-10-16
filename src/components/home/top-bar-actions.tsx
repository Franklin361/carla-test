import {CircleHelp, Gift} from "lucide-react";

import TopBarLayout from "@/components/shared/top-bar-layout";
import {cn} from "@/lib/utils";

function TopBarActions() {
  return (
    <TopBarLayout>
      <span className="text-3xl font-semibold">Pesse</span>
      <div className="flex items-center gap-5">
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
        <button
          className={cn(
            "relative flex items-center justify-center gap-1 rounded-full bg-primary p-3 text-secondary shadow-xl shadow-black/10 transition-all",
            "hover:shadow-lg hover:shadow-black/20",
            "active:bg-primary/80 active:shadow-lg active:shadow-black/10",
          )}
          type="button"
        >
          <span className="absolute -right-0 -top-3 text-lg">✨</span>
          <Gift className="size-5" /> Rewards
        </button>
      </div>
    </TopBarLayout>
  );
}

export default TopBarActions;
