import {HTMLAttributes} from "react";

import {cn} from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement>, React.PropsWithChildren {}

function FixedBottomLayout({className, children}: Props) {
  return (
    <div className={cn("fixed bottom-5 left-1/2 w-fit -translate-x-1/2", className)}>
      {children}
    </div>
  );
}

export default FixedBottomLayout;
