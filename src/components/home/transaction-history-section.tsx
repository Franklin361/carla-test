import HistoryList from "@/components/home/history-list";
import {cn} from "@/lib/utils";
import {HistoryTransaction} from "@/types";

interface Props {
  historyTransaction: HistoryTransaction[];
}

function TransactionHistorySection({historyTransaction}: Props) {
  return (
    <section>
      <div className="space-y-5 rounded-2xl bg-secondary shadow-lg shadow-black/5">
        <header className="flex items-center justify-between p-5 pb-0">
          <h6 className="text-base font-medium sm:text-lg">History transaction</h6>
          <button
            className={cn(
              "text-sm text-primary/60 transition-all",
              "hover:text-primary",
              "active:text-primary/80",
            )}
            type="button"
          >
            see more
          </button>
        </header>

        <HistoryList list={historyTransaction} />
      </div>
    </section>
  );
}

export default TransactionHistorySection;
