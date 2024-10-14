import {UserInfo} from "@/types";

export const userInfo: UserInfo = {
  name: "Lisa",
  amount: 521098.31,
  amount_on_hold: 2500,
  usersToSendAgain: [
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "John Doe",
      platform: "paypal",
      userImage: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "Jane Smith",
      platform: "bca",
      userImage: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "Robert Johnson",
      platform: "stripe",
      userImage: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "Anna Williams",
      platform: "paypal",
      userImage: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "Michael Brown",
      platform: "bca",
      userImage: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "Emily Davis",
      platform: "stripe",
      userImage: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "David Wilson",
      platform: "paypal",
      userImage: "https://randomuser.me/api/portraits/men/27.jpg",
    },
  ],
  historyTransaction: [
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "John Doe",
      platform: "paypal",
      dateOperation: new Date("2024-09-15"),
      value: -150,

      userImage: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "Jane Smith",
      platform: "bca",
      dateOperation: new Date("2024-08-30"),
      value: 2300,

      userImage: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "Robert Johnson",
      platform: "stripe",
      dateOperation: new Date("2024-09-10"),
      value: -300,

      userImage: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "Anna Williams",
      platform: "paypal",
      dateOperation: new Date("2024-07-22"),
      value: -1200,

      userImage: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "Michael Brown",
      platform: "bca",
      dateOperation: new Date("2024-06-15"),
      value: 2700,

      userImage: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "Emily Davis",
      platform: "stripe",
      dateOperation: new Date("2024-09-20"),
      value: 190,

      userImage: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      id: crypto.randomUUID(),
      cardNumber: "8921362190",
      name: "David Wilson",
      platform: "paypal",
      dateOperation: new Date("2024-05-30"),
      value: 200,

      userImage: "https://randomuser.me/api/portraits/men/27.jpg",
    },
  ],
};
