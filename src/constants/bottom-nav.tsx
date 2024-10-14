import {
  Activity,
  CircleDollarSign,
  CircleUserRound,
  House,
  SquareSplitVertical,
} from "lucide-react";

export const bottomNavbar = [
  {
    to: "/",
    icon: House,
  },
  {
    to: "/",
    icon: Activity,
  },
  {
    to: "/choose-card",
    icon: SquareSplitVertical,
  },
  {
    to: "/send-money",
    icon: CircleDollarSign,
  },
  {
    to: "/",
    icon: CircleUserRound,
  },
];
