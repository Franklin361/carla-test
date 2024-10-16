import HistoryItem from "@/components/home/history-item";
import {cn} from "@/lib/utils";
import {HistoryTransaction} from "@/types";

interface Props {
  list: HistoryTransaction[];
}

function HistoryList({list}: Props) {
  return (
    <div
      className={cn(
        "hidden-scroll max-h-[38dvh] snap-y snap-mandatory space-y-6 overflow-y-auto p-5 pt-0",
        "md:space-y-3",
      )}
    >
      {list.map((data) => (
        <HistoryItem key={data.id} history={data} />
      ))}
    </div>
  );
}

export default HistoryList;
