"use client";

import TopBarActions from "@/components/send-money/top-bar-actions";
import UserRecipientCard from "@/components/send-money/user-recipient-card";
import MoneyTransferPanel from "@/components/send-money/money-transfer-panel";
import {userInfo} from "@/constants/users";

const userRecipient = userInfo.usersToSendAgain[0];

function SendMoneyPage() {
  return (
    <div>
      <TopBarActions />

      <main className="space-y-3">
        <UserRecipientCard userRecipient={userRecipient} />
        <MoneyTransferPanel userAccountOwner={userInfo} />
      </main>
    </div>
  );
}

export default SendMoneyPage;
