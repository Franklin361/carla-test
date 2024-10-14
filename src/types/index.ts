export interface UserInfo {
  name: string;
  amount: number;
  amount_on_hold: number;
  usersToSendAgain: UserInfoDetails[];
  historyTransaction: HistoryTransaction[];
}

export interface HistoryTransaction extends UserInfoDetails {
  dateOperation: Date;
  value: number;
}

export interface UserInfoDetails {
  id: string;
  name: string;
  platform: Platform;
  userImage: string;
}

export type Platform = "paypal" | "bca" | "stripe";

export interface CardInfo {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  logoShadowColorClass: string;
  amount: number;
  isMainCard: boolean;
  lastFourNumbers: string;
}
