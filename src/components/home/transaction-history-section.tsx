import HistoryList from "@/components/home/history-list";
import {HistoryTransaction} from "@/types";

interface Props {
  historyTransaction: HistoryTransaction[];
}

function TransactionHistorySection({historyTransaction}: Props) {
  return (
    <section>
      <div className="space-y-5 rounded-2xl bg-white shadow-lg shadow-black/5">
        <header className="flex items-center justify-between p-5 pb-0">
          <h6 className="text-lg font-medium">History transaction</h6>
          <button
            className="text-black/70 transition-all hover:text-black active:text-black/80"
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
