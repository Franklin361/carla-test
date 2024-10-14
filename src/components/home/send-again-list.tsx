import SendAgainItem from "@/components/home/send-again-item";
import {UserInfoDetails} from "@/types";

interface Props {
  userList: UserInfoDetails[];
}

function SendAgainList({userList}: Props) {
  return (
    <div className="hidden-scroll flex h-fit snap-x snap-mandatory gap-5 overflow-x-auto">
      {userList.map((user) => (
        <SendAgainItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default SendAgainList;
