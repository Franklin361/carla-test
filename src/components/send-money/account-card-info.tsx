import {cn} from "@/lib/utils";
import {UserInfo} from "@/types";
import {formatCurrency} from "@/utils/format";

interface Props {
  userAccountOwner: UserInfo;
}

function AccountCardInfo({userAccountOwner}: Props) {
  return (
    <aside
      className={cn(
        "flex flex-col items-start justify-between gap-2 rounded-lg bg-secondary p-4",
        "sm:flex-row sm:items-center",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="h-8 w-12 rounded-sm bg-accent" />
        <div className="flex flex-col">
          <span className="font-medium leading-normal"> {userAccountOwner.name}&lsquo;s card</span>
          <p>
            <span className="text-black/50">Balance</span>{" "}
            <span className="font-medium text-primary">
              {formatCurrency(userAccountOwner.amount)}
            </span>{" "}
          </p>
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
    </aside>
  );
}

export default AccountCardInfo;
