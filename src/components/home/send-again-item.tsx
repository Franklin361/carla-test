import {UserInfoDetails} from "@/types";
import Avatar from "@/components/shared/avatar";

interface Props {
  user: UserInfoDetails;
}

function SendAgainItem({user}: Props) {
  return (
    <div className="flex-none snap-start space-y-1 text-center first:pl-5">
      <Avatar name={user.name} platform={user.platform} userImage={user.userImage} />

      <span className="mb-0 inline-block max-w-[69px] truncate p-0 text-sm leading-none">
        {user.name}
      </span>
    </div>
  );
}

export default SendAgainItem;
