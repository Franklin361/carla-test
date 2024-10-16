import {Plus} from "lucide-react";

import SendAgainList from "@/components/home/send-again-list";
import {UserInfoDetails} from "@/types";
import {cn} from "@/lib/utils";

interface Props {
  usersToSendAgain: UserInfoDetails[];
}

function SendAgainSection({usersToSendAgain}: Props) {
  return (
    <section>
      <div className="space-y-4 rounded-2xl bg-secondary py-5 shadow-lg shadow-black/5">
        <header className="flex items-center justify-between px-5">
          <h6 className={cn("text-base font-medium leading-tight", "sm:text-lg")}>Send again</h6>
          <button
            className={cn(
              "relative flex items-center justify-center gap-1 rounded-full border border-transparent bg-background/30 p-1 px-2 transition-all",
              "hover:bg-background/50",
              "active:bg-background/70",
            )}
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
