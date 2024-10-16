import Link from "next/link";
import {X} from "lucide-react";

import FixedBottomLayout from "@/components/shared/fixed-bottom-layout";
import {cn} from "@/lib/utils";

function FixedBottomNav() {
  return (
    <FixedBottomLayout>
      <Link href="/">
        <button
          className={cn(
            "flex w-full items-center justify-between gap-2 rounded-full bg-primary p-4 px-5 text-secondary shadow-xl shadow-black/10 transition-all",
            "hover:shadow-lg hover:shadow-black/20",
            "active:bg-primary/80 active:shadow-lg active:shadow-black/10",
          )}
          type="button"
        >
          <X className="size-5" /> Close
        </button>
      </Link>
    </FixedBottomLayout>
  );
}

export default FixedBottomNav;
