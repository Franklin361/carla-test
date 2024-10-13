import {CircleHelp, Gift} from "lucide-react";

function TopBarActions() {
  return (
    <div className="relative z-20 flex items-center justify-between py-5">
      <span className="text-3xl font-semibold">Pesse</span>
      <div className="flex items-center gap-5">
        <button
          className="grid place-items-center rounded-full border bg-white p-3 shadow-xl shadow-black/5 transition-all hover:bg-gray-100 active:bg-white/70"
          type="button"
        >
          <CircleHelp className="size-5" />
        </button>
        <button
          className="relative flex items-center justify-center gap-1 rounded-full bg-black/90 px-3 py-3 text-white shadow-xl shadow-black/10 transition-all hover:bg-black active:bg-black/70"
          type="button"
        >
          <span className="absolute -right-0 -top-3 text-lg">✨</span>
          <Gift className="size-5" /> Rewards
        </button>
      </div>
    </div>
  );
}

export default TopBarActions;
