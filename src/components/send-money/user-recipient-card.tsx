import Avatar from "../shared/avatar";

import {UserInfoDetails} from "@/types";

interface Props {
  userRecipient: UserInfoDetails;
}

function UserRecipientCard({userRecipient}: Props) {
  return (
    <header className="rounded-lg bg-white p-4">
      <div className="flex items-center gap-2">
        <span className="font-medium">Send to</span>
        <div className="h-[2px] w-full flex-1 bg-gray-300" />
      </div>
      <div className="mt-3 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
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
          className="w-full rounded-full bg-gray-200 p-2 px-3 text-sm transition-all hover:bg-gray-300 active:bg-gray-200 sm:w-fit"
          type="button"
        >
          Change
        </button>
      </div>
    </header>
  );
}

export default UserRecipientCard;
