import {ButtonHTMLAttributes} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, React.PropsWithChildren {
  label?: string;
}

function KeyButton(props: Props) {
  return (
    <button
      {...props}
      className="grid select-none place-items-center rounded-full bg-gray-200 p-4 text-black transition-all hover:bg-[#b4de00] active:bg-[#b5de00d2] disabled:pointer-events-none disabled:opacity-50"
      type="button"
    >
      {props.children || props.label}
    </button>
  );
}

export default KeyButton;
