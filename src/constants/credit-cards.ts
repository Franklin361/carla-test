import {CardInfo} from "@/types";

export const cards: CardInfo[] = [
  {
    id: crypto.randomUUID(),
    name: "Lidia Srikandi",
    primaryColor: "#b4de00",
    secondaryColor: "#000",
    logoShadowColorClass: "isometric-text-light",
    amount: 112411,
    isMainCard: true,
    lastFourNumbers: "2451",
  },
  {
    id: crypto.randomUUID(),
    name: "Lidia Srikandi",
    primaryColor: "#1b1b1b",
    secondaryColor: "#fff",
    logoShadowColorClass: "isometric-text-dark",
    amount: 112411,
    isMainCard: false,
    lastFourNumbers: "0095",
  },
  {
    id: crypto.randomUUID(),
    name: "Lidia Srikandi",
    primaryColor: "#f9f9f9",
    secondaryColor: "#000",
    logoShadowColorClass: "isometric-text-light",
    amount: 112411,
    isMainCard: false,
    lastFourNumbers: "1122",
  },
];
