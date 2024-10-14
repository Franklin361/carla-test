"use client";
import {ArrowLeft, CircleHelp, Delete} from "lucide-react";
import {useRef, useState} from "react";

import TopBarLayout from "@/components/shared/top-bar-layout";
import {icon} from "@/constants/icon";
import {userInfo} from "@/constants/users";
import {cn} from "@/lib/utils";
import {formatCurrency} from "@/utils/format";

const user = userInfo.usersToSendAgain[0];

function SendMoneyPage() {
  const [value, setValue] = useState("19");

  const divRef = useRef<HTMLDivElement>(null);

  const goToEndOfTheScroll = () => {
    divRef.current?.scrollTo({
      left: divRef.current?.scrollWidth,
    });
  };

  const changeValue = (newValue: string | number) => {
    setValue((value) => `${value}${newValue}`.substring(0, 9));
    goToEndOfTheScroll();
  };

  const deleteLastValue = () => {
    setValue((value) => value.substring(0, value.length - 1));
    divRef.current?.scrollTo({
      left: divRef.current?.scrollWidth,
    });
    goToEndOfTheScroll();
  };

  return (
    <div>
      <TopBarLayout>
        <button
          className="grid place-items-center rounded-full border bg-white p-3 shadow-xl shadow-black/5 transition-all hover:bg-gray-100 active:bg-white/70"
          type="button"
        >
          <ArrowLeft className="size-5" />
        </button>
        <span className="text-lg font-medium">Send money</span>
        <button
          className="grid place-items-center rounded-full border bg-white p-3 shadow-xl shadow-black/5 transition-all hover:bg-gray-100 active:bg-white/70"
          type="button"
        >
          <CircleHelp className="size-5" />
        </button>
      </TopBarLayout>

      <main className="space-y-3">
        <header className="rounded-lg bg-white p-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">Send to</span>
            <div className="h-[2px] w-full flex-1 bg-gray-300" />
          </div>
          <div className="mt-3 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <figure className="relative size-[69px]">
                <img alt={user.name} className="size-[69px] rounded-full" src={user.userImage} />
                <div
                  className={cn(
                    "absolute -bottom-0 -right-2 rounded-full border-2 border-white bg-white p-1",
                    icon[user.platform].backgroundColor,
                  )}
                >
                  <img
                    alt={user.platform}
                    className="size-5 object-contain"
                    src={icon[user.platform].src}
                  />
                </div>
              </figure>
              <div className="flex flex-col gap-0">
                <span className="font-semibold">{user.name}</span>
                <span>{user.cardNumber}</span>
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
        {/* screen number */}
        <section
          ref={divRef}
          className="hidden-scroll grid min-h-[200px] place-items-center overflow-x-auto"
        >
          <span className="text-7xl font-medium">{formatCurrency(+value)}</span>
        </section>

        <aside className="flex flex-col items-start justify-between gap-2 rounded-lg bg-white p-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="h-8 w-12 rounded-sm bg-[#b4de00]" />
            <div className="flex flex-col text-sm">
              <span className="font-medium leading-normal"> {user.name}&lsquo;s card</span>
              <p>
                <span className="text-black/50">Balance</span>{" "}
                <span className="font-medium text-black">{formatCurrency(521098.31)}</span>{" "}
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

        <div className="grid grid-cols-3 gap-2 rounded-lg bg-white p-4 text-lg">
          {Array.from({length: 9}, (_, i) => i).map((_, i) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={`btn-${i}`}
              className="select-none rounded-full bg-gray-200 p-4 text-black transition-all hover:bg-[#b4de00] active:bg-[#b5de00d2] disabled:pointer-events-none disabled:opacity-50"
              disabled={value.length >= 9}
              type="button"
              onClick={() => changeValue(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="select-none rounded-full bg-gray-200 p-4 text-black transition-all hover:bg-[#b4de00] active:bg-[#b5de00d2] disabled:pointer-events-none disabled:opacity-50"
            disabled={value.length >= 9}
            type="button"
            onClick={() => changeValue("000")}
          >
            000
          </button>
          <button
            className="select-none rounded-full bg-gray-200 p-4 text-black transition-all hover:bg-[#b4de00] active:bg-[#b5de00d2] disabled:pointer-events-none disabled:opacity-50"
            disabled={value.length >= 9}
            type="button"
            onClick={() => changeValue("0")}
          >
            0
          </button>
          <button
            className="grid select-none place-items-center rounded-full bg-gray-200 p-4 text-black transition-all hover:bg-[#b4de00] active:bg-[#b5de00d2] disabled:pointer-events-none disabled:opacity-50"
            disabled={!value}
            type="button"
            onClick={deleteLastValue}
          >
            <Delete className="size-5" />
          </button>
        </div>

        <button
          className="w-full gap-2 rounded-full bg-black p-4 text-center text-white shadow-xl shadow-black/30 transition-all hover:bg-black active:bg-black/70"
          type="button"
        >
          Send money
        </button>
      </main>
    </div>
  );
}

export default SendMoneyPage;
