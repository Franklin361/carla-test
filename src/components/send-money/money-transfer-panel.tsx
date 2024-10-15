"use client";

import {useState} from "react";

import AccountCardInfo from "@/components/send-money/account-card-info";
import CurrencyDisplay from "@/components/send-money/currency-display";
import Keypad from "@/components/send-money/keypad";
import {UserInfo} from "@/types";

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
        className="w-full gap-2 rounded-full bg-black p-4 text-center text-white shadow-xl shadow-black/30 transition-all hover:bg-black active:bg-black/70"
        type="button"
      >
        Send money
      </button>
    </>
  );
}

export default MoneyTransferPanel;
