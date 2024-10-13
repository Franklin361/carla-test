import BalanceHeader from "@/components/home/balance-header";
import FixedBottomNav from "@/components/home/fixed-bottom-nav";
import OverlayPattern from "@/components/home/overlay-pattern";
import PromoBanner from "@/components/home/promo-banner";
import SendAgainSection from "@/components/home/send-again-section";
import TopBarActions from "@/components/home/top-bar-actions";
import TransactionHistorySection from "@/components/home/transaction-history-section";
import {UserInfo} from "@/types";

const userInfo: UserInfo = {
  name: "Lisa",
  amount: 521098.31,
  amount_on_hold: 2500,
  usersToSendAgain: [
    {
      id: crypto.randomUUID(),
      name: "John Doe",
      platform: "paypal",
      userImage: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Jane Smith",
      platform: "bca",
      userImage: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Robert Johnson",
      platform: "stripe",
      userImage: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Anna Williams",
      platform: "paypal",
      userImage: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Michael Brown",
      platform: "bca",
      userImage: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Emily Davis",
      platform: "stripe",
      userImage: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "David Wilson",
      platform: "paypal",
      userImage: "https://randomuser.me/api/portraits/men/27.jpg",
    },
  ],
  historyTransaction: [
    {
      id: crypto.randomUUID(),
      name: "John Doe",
      platform: "paypal",
      dateOperation: new Date("2024-09-15"),
      value: -150,

      userImage: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Jane Smith",
      platform: "bca",
      dateOperation: new Date("2024-08-30"),
      value: 2300,

      userImage: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Robert Johnson",
      platform: "stripe",
      dateOperation: new Date("2024-09-10"),
      value: -300,

      userImage: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Anna Williams",
      platform: "paypal",
      dateOperation: new Date("2024-07-22"),
      value: -1200,

      userImage: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Michael Brown",
      platform: "bca",
      dateOperation: new Date("2024-06-15"),
      value: 2700,

      userImage: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Emily Davis",
      platform: "stripe",
      dateOperation: new Date("2024-09-20"),
      value: 190,

      userImage: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "David Wilson",
      platform: "paypal",
      dateOperation: new Date("2024-05-30"),
      value: 200,

      userImage: "https://randomuser.me/api/portraits/men/27.jpg",
    },
  ],
};

export default function HomePage() {
  return (
    <div className="relative mx-auto max-w-[485px] border border-white bg-[#f0f1f3] p-5">
      <OverlayPattern />

      <TopBarActions />

      <BalanceHeader
        amount={userInfo.amount}
        amountOnHold={userInfo.amount_on_hold}
        name={userInfo.name}
      />

      <main className="mt-5 space-y-5">
        <PromoBanner />

        <SendAgainSection usersToSendAgain={userInfo.usersToSendAgain} />

        <TransactionHistorySection historyTransaction={userInfo.historyTransaction} />
      </main>

      <FixedBottomNav />
    </div>
  );
}
