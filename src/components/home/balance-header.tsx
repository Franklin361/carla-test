import {ArrowDownLeft, ArrowUpRight, ChevronDown} from "lucide-react";

import {formatCurrency} from "@/utils/format";

interface Props {
  name: string;
  amount: number;
  amountOnHold: number;
}

function BalanceHeader({name, amount, amountOnHold}: Props) {
  return (
    <header className="relative z-20 my-5 text-center">
      <div className="flex items-center justify-center gap-2">
        <span className="leading-normal"> {name}&lsquo;s card balance</span>
        <button
          className="flex items-center gap-2 rounded p-1 transition-all hover:bg-gray-200 active:bg-gray-200/50"
          type="button"
        >
          <div className="h-5 w-8 rounded bg-lime-500" />
          <ChevronDown className="size-5" />
        </button>
      </div>
      <span className="my-4 inline-block text-5xl font-semibold">{formatCurrency(amount)}</span>

      <div className="mx-auto w-fit rounded-full bg-gray-400/20 px-4 py-2 text-black/50">
        Money hold <span className="font-medium text-black">{formatCurrency(amountOnHold)}</span>{" "}
      </div>
      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          className="flex flex-1 items-center justify-center gap-1 rounded-full border bg-white p-4 text-center text-lg shadow-xl shadow-black/5 transition-all hover:bg-gray-100 active:bg-white/70"
          type="button"
        >
          {" "}
          <ArrowUpRight className="size-6" /> Send{" "}
        </button>
        <button
          className="flex flex-1 items-center justify-center gap-1 rounded-full border bg-white p-4 text-center text-lg shadow-xl shadow-black/5 transition-all hover:bg-gray-100 active:bg-white/70"
          type="button"
        >
          {" "}
          <ArrowDownLeft className="size-6" /> Receive
        </button>
      </div>
    </header>
  );
}

export default BalanceHeader;
