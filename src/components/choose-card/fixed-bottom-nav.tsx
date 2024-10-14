import Link from "next/link";
import {X} from "lucide-react";

import FixedBottomLayout from "@/components/shared/fixed-bottom-layout";

function FixedBottomNav() {
  return (
    <FixedBottomLayout>
      <Link href="/">
        <button
          className="flex w-full items-center justify-between gap-2 rounded-full bg-black p-5 px-6 text-white shadow-xl shadow-black/30 transition-all hover:bg-black active:bg-black/70"
          type="button"
        >
          <X className="size-5" /> Close
        </button>
      </Link>
    </FixedBottomLayout>
  );
}

export default FixedBottomNav;
