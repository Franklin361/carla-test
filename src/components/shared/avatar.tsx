import {icon} from "@/constants/icon";
import {cn} from "@/lib/utils";
import {UserInfoDetails} from "@/types";

type Props = Omit<UserInfoDetails, "id" | "cardNumber">;

function Avatar({userImage, name, platform}: Props) {
  return (
    <figure className="relative flex-none">
      <img alt={name} className="size-[55px] rounded-full sm:size-[69px]" src={userImage} />
      <div
        className={cn(
          "border-secondary bg-secondary absolute -bottom-0 -right-1 rounded-full border-2 p-1 sm:-right-2",
          icon[platform].backgroundColor,
        )}
      >
        <img alt={platform} className="size-4 object-contain sm:size-5" src={icon[platform].src} />
      </div>
    </figure>
  );
}

export default Avatar;
