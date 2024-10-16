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
    <div className="flex snap-start items-center gap-x-5">
      <Avatar name={history.name} platform={history.platform} userImage={history.userImage} />

      <div className="flex flex-1 flex-col gap-1">
        <span
          className={cn(
            "max-w-fit truncate text-sm font-medium",
            "md:max-w-[200px]",
            "sm:text-base",
          )}
        >
          {history.name}
        </span>
        <p className={cn("flex flex-wrap items-center gap-0 text-xs", "sm:text-sm")}>
          <span>{formatDate(history.dateOperation)}</span>
          <Dot className="size-3" />
          <span>{formatTime(history.dateOperation)}</span>
        </p>
        <div>
          <span
            className={cn(
              "block text-end font-semibold",
              history.value < 0 ? "text-destructive" : "text-accent-foreground",
              "md:hidden",
            )}
          >
            {formatCurrency(history.value)}
          </span>
        </div>
      </div>

      <span
        className={cn(
          "hidden-scroll hidden w-1/4 overflow-x-auto text-end text-lg font-semibold md:block",
          history.value < 0 ? "text-destructive" : "text-accent-foreground",
        )}
      >
        {formatCurrency(history.value)}
      </span>
    </div>
  );
}

export default HistoryItem;
