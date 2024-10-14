import {Dot} from "lucide-react";

import Avatar from "@/components/shared/avatar";
import {formatCurrency, formatDate, formatTime} from "@/utils/format";
import {HistoryTransaction} from "@/types";
import {cn} from "@/lib/utils";

interface Props {
  history: HistoryTransaction;
}

function HistoryItem({history}: Props) {
  return (
    <div className="flex snap-start flex-wrap items-center gap-x-5">
      <Avatar name={history.name} platform={history.platform} userImage={history.userImage} />

      <div className="flex flex-1 flex-col gap-1">
        <span className="max-w-[200px] truncate font-medium">{history.name}</span>
        <p className="flex flex-wrap items-center gap-1 text-sm md:gap-0">
          <span>{formatDate(history.dateOperation)}</span>
          <Dot className="size-3" />
          <span>{formatTime(history.dateOperation)}</span>
        </p>
      </div>

      <span
        className={cn(
          "hidden-scroll inline-block w-1/4 overflow-x-auto text-end text-lg font-semibold",
          history.value < 0 ? "text-red-700" : "text-lime-500",
        )}
      >
        {formatCurrency(history.value)}
      </span>
    </div>
  );
}

export default HistoryItem;
