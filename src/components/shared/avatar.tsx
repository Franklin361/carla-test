import {icon} from "@/constants/icon";
import {cn} from "@/lib/utils";
import {UserInfoDetails} from "@/types";

type Props = Omit<UserInfoDetails, "id" | "cardNumber">;

function Avatar({userImage, name, platform}: Props) {
  return (
    <figure className="relative w-fit flex-none">
      <img
        alt={name}
        className={cn("size-[55px] rounded-full", "sm:size-[69px]")}
        src={userImage}
      />
      <div
        className={cn(
          "absolute -bottom-0 -right-1 rounded-full border-2 border-secondary bg-secondary p-1",
          "sm:-right-2",
          icon[platform].backgroundColor,
        )}
      >
        <img
          alt={platform}
          className={cn("size-4 object-contain", "sm:size-5")}
          src={icon[platform].src}
        />
      </div>
    </figure>
  );
}

export default Avatar;
