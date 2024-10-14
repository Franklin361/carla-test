import {icon} from "@/constants/icon";
import {cn} from "@/lib/utils";
import {UserInfoDetails} from "@/types";

type Props = Omit<UserInfoDetails, "id" | "cardNumber">;

function Avatar({userImage, name, platform}: Props) {
  return (
    <figure className="relative flex-none">
      <img alt={name} className="size-[69px] rounded-full" src={userImage} />
      <div
        className={cn(
          "absolute -bottom-0 -right-2 rounded-full border-2 border-white bg-white p-1",
          icon[platform].backgroundColor,
        )}
      >
        <img alt={platform} className="size-5 object-contain" src={icon[platform].src} />
      </div>
    </figure>
  );
}

export default Avatar;
