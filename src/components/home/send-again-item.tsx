import {UserInfoDetails} from "@/types";
import Avatar from "@/components/shared/avatar";
import {cn} from "@/lib/utils";

interface Props {
  user: UserInfoDetails;
}

function SendAgainItem({user}: Props) {
  return (
    <div className={cn("flex-none snap-start space-y-1 text-center", "first:pl-5")}>
      <Avatar name={user.name} platform={user.platform} userImage={user.userImage} />

      <span
        className={cn(
          "mb-0 inline-block max-w-[69px] truncate p-0 text-xs leading-none",
          "sm:text-sm",
        )}
      >
        {user.name}
      </span>
    </div>
  );
}

export default SendAgainItem;
