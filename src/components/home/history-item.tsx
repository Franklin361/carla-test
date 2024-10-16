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
    <div className={cn("flex items-center gap-3")}>
      <Avatar name={history.name} platform={history.platform} userImage={history.userImage} />

      <div className="grid flex-1 grid-cols-[1fr,auto] items-center gap-3 overflow-x-auto">
        <div className="">
          <span className={cn("font-medium")}>{history.name}</span>

          <div className="flex w-fit flex-wrap">
            <span className="flex w-fit flex-nowrap items-center text-nowrap">
              {formatDate(history.dateOperation)} <Dot className="float-end size-5 w-fit" />
            </span>
            <span className="block w-fit">{formatTime(history.dateOperation)}</span>
          </div>
        </div>

        <span
          className={cn(
            history.value < 0 ? "text-destructive" : "text-accent-foreground",
            "text-center font-medium",
          )}
        >
          {formatCurrency(history.value)}
        </span>
      </div>
    </div>
  );
}

export default HistoryItem;
