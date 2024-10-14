import {Plus} from "lucide-react";

import TopBarLayout from "@/components/shared/top-bar-layout";

function TopBarActions() {
  return (
    <TopBarLayout>
      <span className="text-lg font-medium">Select Card</span>
      <div className="flex items-center gap-5">
        <button
          className="flex items-center justify-center gap-1 rounded-full border bg-white px-3 py-3 shadow-xl shadow-black/5 transition-all hover:bg-gray-100 active:bg-white/70"
          type="button"
        >
          <Plus className="size-5" /> New Card
        </button>
      </div>
    </TopBarLayout>
  );
}

export default TopBarActions;
