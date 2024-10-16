"use client";

import {useState} from "react";

import AccountCardInfo from "@/components/send-money/account-card-info";
import CurrencyDisplay from "@/components/send-money/currency-display";
import Keypad from "@/components/send-money/keypad";
import {UserInfo} from "@/types";
import {cn} from "@/lib/utils";

interface Props {
  userAccountOwner: UserInfo;
}

const DEFAULT_VALUE = "19";
const MAXIMUM_NUMBER_LENGTH = 9;
const displayId = "displayId";

function MoneyTransferPanel({userAccountOwner}: Props) {
  const [value, setValue] = useState(DEFAULT_VALUE);

  const goToEndOfTheScroll = () => {
    const $display = document.getElementById(displayId);

    if ($display) {
      setTimeout(() => {
        $display.scrollTo({
          left: $display.scrollWidth,
          behavior: "smooth",
        });
      }, 1);
    }
  };

  const changeValue = (newValue: string | number) => {
    setValue((value) => `${value}${newValue}`.substring(0, MAXIMUM_NUMBER_LENGTH));
    goToEndOfTheScroll();
  };

  const deleteLastValue = () => {
    setValue((value) => value.substring(0, value.length - 1));
  };

  return (
    <>
      <CurrencyDisplay currentValue={value} id={displayId} />
      <AccountCardInfo userAccountOwner={userAccountOwner} />

      <Keypad
        currentValue={value}
        maxNumberLength={MAXIMUM_NUMBER_LENGTH}
        onDeleteLastValue={deleteLastValue}
        onUpdateValue={changeValue}
      />

      <button
        className={cn(
          "w-full gap-2 rounded-full bg-primary p-4 text-center text-secondary shadow-xl shadow-black/10 transition-all",
          "hover:shadow-lg hover:shadow-black/20",
          "active:bg-primary/80 active:shadow-lg active:shadow-black/10",
        )}
        type="button"
      >
        Send money
      </button>
    </>
  );
}

export default MoneyTransferPanel;
