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
    <div className="flex snap-start items-center gap-x-4">
      <Avatar name={history.name} platform={history.platform} userImage={history.userImage} />

      <div className="flex flex-1 flex-col gap-0">
        <span className={cn("max-w-[160px] truncate font-medium", "md:max-w-[200px]")}>
          {history.name} Lorem ipsum dolor sit amet.
        </span>
        <p className="flex flex-wrap items-center gap-0">
          <span>{formatDate(history.dateOperation)}</span>
          <Dot className="size-3" />
          <span>{formatTime(history.dateOperation)}</span>
        </p>
      </div>

      <span
        className={cn(
          "hidden-scroll flex-1 overflow-x-auto text-end text-lg font-semibold",
          history.value < 0 ? "text-destructive" : "text-accent-foreground",
        )}
      >
        {formatCurrency(history.value)}
      </span>
    </div>
  );
}

export default HistoryItem;
