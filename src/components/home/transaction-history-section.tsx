import {Dot} from "lucide-react";

import {icon} from "@/constants/icon";
import {cn} from "@/lib/utils";
import {HistoryTransaction} from "@/types";
import {formatCurrency, formatDate, formatTime} from "@/utils/format";

interface Props {
  historyTransaction: HistoryTransaction[];
}

function TransactionHistorySection({historyTransaction}: Props) {
  return (
    <section>
      <div className="space-y-5 rounded-2xl bg-white shadow-lg shadow-black/5">
        <header className="flex items-center justify-between p-5 pb-0">
          <h6 className="text-lg font-semibold">History transaction</h6>
          <button
            className="text-black/70 transition-all hover:text-black active:text-black/80"
            type="button"
          >
            see more
          </button>
        </header>
        <div className="hidden-scroll max-h-[38dvh] snap-y snap-mandatory space-y-6 overflow-y-auto p-5 pt-0 md:space-y-3">
          {historyTransaction.map((data) => (
            <div key={data.id} className="flex snap-start flex-wrap items-center gap-x-5">
              <figure className="relative flex-none">
                <img alt={data.name} className="size-[69px] rounded-full" src={data.userImage} />
                <div
                  className={cn(
                    "absolute -bottom-0 -right-2 rounded-full border-2 border-white bg-white p-1",
                    icon[data.platform].backgroundColor,
                  )}
                >
                  <img
                    alt={data.platform}
                    className="size-5 object-contain"
                    src={icon[data.platform].src}
                  />
                </div>
              </figure>

              <div className="flex flex-1 flex-col gap-1">
                <span className="max-w-[200px] truncate font-medium">{data.name}</span>
                <p className="flex flex-wrap items-center gap-1 text-sm md:gap-0">
                  <span>{formatDate(data.dateOperation)}</span>
                  <Dot className="size-3" />
                  <span>{formatTime(data.dateOperation)}</span>
                </p>
              </div>

              <span
                className={cn(
                  "flex-1 text-end text-lg font-semibold",
                  data.value < 0 ? "text-red-700" : "text-lime-500",
                )}
              >
                {formatCurrency(data.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TransactionHistorySection;
