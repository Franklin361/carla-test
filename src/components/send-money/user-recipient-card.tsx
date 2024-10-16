import Avatar from "../shared/avatar";

import {cn} from "@/lib/utils";
import {UserInfoDetails} from "@/types";

interface Props {
  userRecipient: UserInfoDetails;
}

function UserRecipientCard({userRecipient}: Props) {
  return (
    <header className="rounded-lg bg-secondary p-4">
      <div className="flex items-center gap-2">
        <span className="font-medium">Send to</span>
        <div className="h-[2px] w-full flex-1 bg-muted" />
      </div>
      <div
        className={cn(
          "mt-3 flex flex-col items-start justify-between gap-2",
          "sm:flex-row sm:items-center",
        )}
      >
        <div className="flex items-center gap-4">
          <Avatar
            name={userRecipient.name}
            platform={userRecipient.platform}
            userImage={userRecipient.userImage}
          />

          <div className="flex flex-col gap-0">
            <span className="font-semibold">{userRecipient.name}</span>
            <span>{userRecipient.cardNumber}</span>
          </div>
        </div>
        <button
          className={cn(
            "w-full rounded-full bg-background/30 p-2 px-3 text-sm transition-all",
            "hover:bg-background/50",
            "active:bg-background/70",
            "sm:w-fit",
          )}
          type="button"
        >
          Change
        </button>
      </div>
    </header>
  );
}

export default UserRecipientCard;
