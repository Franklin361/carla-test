import {Plus} from "lucide-react";

import {icon} from "@/constants/icon";
import {cn} from "@/lib/utils";
import {UserInfoDetails} from "@/types";

interface Props {
  usersToSendAgain: UserInfoDetails[];
}

function SendAgainSection({usersToSendAgain}: Props) {
  return (
    <section>
      <div className="space-y-4 rounded-2xl bg-white py-5 shadow-lg shadow-black/5">
        <header className="flex items-center justify-between px-5">
          <h6 className="text-lg font-semibold leading-tight">Send again</h6>
          <button
            className="relative flex items-center justify-center gap-1 rounded-full bg-gray-200 p-1 px-2 transition-all hover:bg-gray-300 active:bg-gray-300/50"
            type="button"
          >
            <Plus className="size-4" />
            Add
          </button>
        </header>
        <div className="hidden-scroll flex h-fit snap-x snap-mandatory gap-5 overflow-x-auto">
          {usersToSendAgain.map(({id, name, platform, userImage}) => (
            <div key={id} className="flex-none snap-start space-y-1 text-center first:pl-5">
              <figure className="relative">
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

              <span className="mb-0 inline-block max-w-[69px] truncate p-0 text-sm leading-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SendAgainSection;
