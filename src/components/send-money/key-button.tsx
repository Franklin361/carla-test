import {ButtonHTMLAttributes} from "react";

import {cn} from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, React.PropsWithChildren {
  label?: string;
}

function KeyButton(props: Props) {
  return (
    <button
      {...props}
      className={cn(
        "grid select-none place-items-center rounded-full bg-muted p-4 text-primary transition-all",
        "hover:bg-accent",
        "active:bg-accent-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        props.className,
      )}
      type="button"
    >
      {props.children || props.label}
    </button>
  );
}

export default KeyButton;
