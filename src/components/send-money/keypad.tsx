import {Delete} from "lucide-react";

import KeyButton from "@/components/send-money/key-button";
import {generateArrayNumbers} from "@/utils/generate-array-numbers";

interface Props {
  currentValue: string;
  onUpdateValue: (n: string) => void;
  onDeleteLastValue: () => void;
  maxNumberLength: number;
}

function Keypad({currentValue, maxNumberLength, ...action}: Props) {
  return (
    <div className="grid grid-cols-3 gap-2 rounded-lg bg-secondary p-4 text-lg">
      {generateArrayNumbers(9).map((i) => (
        <KeyButton
          key={`btn-${i}`}
          disabled={currentValue.length >= maxNumberLength}
          label={`${i + 1}`}
          onClick={() => action.onUpdateValue(`${i + 1}`)}
        />
      ))}

      <KeyButton
        disabled={+currentValue <= 0 || currentValue.length >= maxNumberLength}
        label="000"
        onClick={() => action.onUpdateValue("000")}
      />

      <KeyButton
        disabled={+currentValue <= 0 || currentValue.length >= maxNumberLength}
        label="0"
        onClick={() => action.onUpdateValue("0")}
      />

      <KeyButton disabled={!currentValue} onClick={action.onDeleteLastValue}>
        <Delete className="size-5" />
      </KeyButton>
    </div>
  );
}

export default Keypad;
