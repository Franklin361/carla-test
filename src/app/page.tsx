import BalanceHeader from "@/components/home/balance-header";
import FixedBottomNav from "@/components/home/fixed-bottom-nav";
import OverlayPattern from "@/components/home/overlay-pattern";
import PromoBanner from "@/components/home/promo-banner";
import SendAgainSection from "@/components/home/send-again-section";
import TopBarActions from "@/components/home/top-bar-actions";
import TransactionHistorySection from "@/components/home/transaction-history-section";
import {userInfo} from "@/constants/users";

export default function HomePage() {
  return (
    <>
      <OverlayPattern />

      <TopBarActions />

      <BalanceHeader
        amount={userInfo.amount}
        amountOnHold={userInfo.amount_on_hold}
        name={userInfo.name}
      />

      <main className="mb-20 mt-5 space-y-5">
        <PromoBanner />

        <SendAgainSection usersToSendAgain={userInfo.usersToSendAgain} />

        <TransactionHistorySection historyTransaction={userInfo.historyTransaction} />
      </main>

      <FixedBottomNav />
    </>
  );
}
