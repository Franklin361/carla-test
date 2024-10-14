import {HTMLAttributes} from "react";

import {cn} from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement>, React.PropsWithChildren {}

function TopBarLayout({children, className}: Props) {
  return (
    <div className={cn("relative z-20 flex items-center justify-between py-5", className)}>
      {children}
    </div>
  );
}

export default TopBarLayout;
