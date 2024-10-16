import {Plus} from "lucide-react";

import TopBarLayout from "@/components/shared/top-bar-layout";
import {cn} from "@/lib/utils";

function TopBarActions() {
  return (
    <TopBarLayout>
      <span className="text-lg font-medium">Select Card</span>
      <div className="flex items-center gap-5">
        <button
          className={cn(
            "flex items-center justify-center gap-1 rounded-full border bg-secondary p-2 px-3 shadow-xl shadow-black/5 transition-all",
            "hover:shadow-lg hover:shadow-black/20",
            "active:bg-secondary/80 active:shadow-lg active:shadow-black/10",
          )}
          type="button"
        >
          <Plus className="size-5" /> New Card
        </button>
      </div>
    </TopBarLayout>
  );
}

export default TopBarActions;
