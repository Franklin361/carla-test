import {Platform} from "@/types";

export const icon: Record<Platform, {src: string; backgroundColor: string}> = {
  paypal: {
    src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/250_Paypal_logo-512.png",
    backgroundColor: "bg-[#dceefe]",
  },
  bca: {
    src: "https://seeklogo.com/images/B/Bank_Central_Asia-logo-B51923F0E3-seeklogo.com.png",
    backgroundColor: "bg-[#dceefe]",
  },
  stripe: {
    src: "https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg",
    backgroundColor: "bg-[#6359fc]",
  },
};
