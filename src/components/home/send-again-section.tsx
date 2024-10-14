import {Plus} from "lucide-react";

import SendAgainList from "@/components/home/send-again-list";
import {UserInfoDetails} from "@/types";

interface Props {
  usersToSendAgain: UserInfoDetails[];
}

function SendAgainSection({usersToSendAgain}: Props) {
  return (
    <section>
      <div className="space-y-4 rounded-2xl bg-white py-5 shadow-lg shadow-black/5">
        <header className="flex items-center justify-between px-5">
          <h6 className="text-lg font-medium leading-tight">Send again</h6>
          <button
            className="relative flex items-center justify-center gap-1 rounded-full bg-gray-200 p-1 px-2 transition-all hover:bg-gray-300 active:bg-gray-300/50"
            type="button"
          >
            <Plus className="size-4" />
            Add
          </button>
        </header>

        <SendAgainList userList={usersToSendAgain} />
      </div>
    </section>
  );
}

export default SendAgainSection;
