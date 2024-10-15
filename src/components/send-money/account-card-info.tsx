import {UserInfo} from "@/types";
import {formatCurrency} from "@/utils/format";

interface Props {
  userAccountOwner: UserInfo;
}

function AccountCardInfo({userAccountOwner}: Props) {
  return (
    <aside className="flex flex-col items-start justify-between gap-2 rounded-lg bg-white p-4 sm:flex-row sm:items-center">
      <div className="flex items-center gap-3">
        <div className="h-8 w-12 rounded-sm bg-[#b4de00]" />
        <div className="flex flex-col">
          <span className="font-medium leading-normal"> {userAccountOwner.name}&lsquo;s card</span>
          <p>
            <span className="text-black/50">Balance</span>{" "}
            <span className="font-medium text-black">
              {formatCurrency(userAccountOwner.amount)}
            </span>{" "}
          </p>
        </div>
      </div>

      <button
        className="w-full rounded-full bg-gray-200 p-2 px-3 text-sm transition-all hover:bg-gray-300 active:bg-gray-200 sm:w-fit"
        type="button"
      >
        Change
      </button>
    </aside>
  );
}

export default AccountCardInfo;
