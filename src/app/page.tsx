import {
  Activity,
  ArrowDownLeft,
  ArrowUpRight,
  ChevronDown,
  CircleDollarSign,
  CircleHelp,
  CircleUserRound,
  Dot,
  Gift,
  House,
  Plus,
  SquareSplitVertical,
} from "lucide-react";
import Link from "next/link";

import {cn} from "@/lib/utils";

type Platform = "paypal" | "bca" | "stripe";

interface UserInfo {
  name: string;
  amount: number;
  amount_on_hold: number;
  usersToSendAgain: {id: string; name: string; platform: Platform; userImage: string}[];
  historyTransaction: {
    id: string;
    name: string;
    userImage: string;
    platform: Platform;
    dateOperation: Date;
    value: number;
  }[];
}

const userInfo: UserInfo = {
  name: "Lisa",
  amount: 521098.31,
  amount_on_hold: 2500,
  usersToSendAgain: [
    {
      id: crypto.randomUUID(),
      name: "John Doe",
      platform: "paypal",
      userImage: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Jane Smith",
      platform: "bca",
      userImage: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Robert Johnson",
      platform: "stripe",
      userImage: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Anna Williams",
      platform: "paypal",
      userImage: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Michael Brown",
      platform: "bca",
      userImage: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Emily Davis",
      platform: "stripe",
      userImage: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "David Wilson",
      platform: "paypal",
      userImage: "https://randomuser.me/api/portraits/men/27.jpg",
    },
  ],
  historyTransaction: [
    {
      id: crypto.randomUUID(),
      name: "John Doe",
      platform: "paypal",
      dateOperation: new Date("2024-09-15"),
      value: -150,

      userImage: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Jane Smith",
      platform: "bca",
      dateOperation: new Date("2024-08-30"),
      value: 2300,

      userImage: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Robert Johnson",
      platform: "stripe",
      dateOperation: new Date("2024-09-10"),
      value: -300,

      userImage: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Anna Williams",
      platform: "paypal",
      dateOperation: new Date("2024-07-22"),
      value: -1200,

      userImage: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Michael Brown",
      platform: "bca",
      dateOperation: new Date("2024-06-15"),
      value: 2700,

      userImage: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Emily Davis",
      platform: "stripe",
      dateOperation: new Date("2024-09-20"),
      value: 190,

      userImage: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "David Wilson",
      platform: "paypal",
      dateOperation: new Date("2024-05-30"),
      value: 200,

      userImage: "https://randomuser.me/api/portraits/men/27.jpg",
    },
  ],
};

function format(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

function formatDate(date: Date) {
  const optionsDate: Intl.DateTimeFormatOptions = {month: "long", day: "numeric"};

  const formattedDate = new Intl.DateTimeFormat("en-US", optionsDate).format(date);

  return formattedDate;
}

function formatTime(date: Date) {
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedTime = new Intl.DateTimeFormat("en-US", optionsTime).format(date);

  return formattedTime;
}

const icon: Record<Platform, {src: string; backgroundColor: string}> = {
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

const bottomNavbar = [
  {
    to: "/",
    icon: <House className="size-6" />,
  },
  {
    to: "/",
    icon: <Activity className="size-6" />,
  },
  {
    to: "/",
    icon: <SquareSplitVertical className="size-6" />,
  },
  {
    to: "/",
    icon: <CircleDollarSign className="size-6" />,
  },
  {
    to: "/",
    icon: <CircleUserRound className="size-6" />,
  },
];

export default function HomePage() {
  return (
    <div className="relative mx-auto max-w-[485px] border border-white bg-[#f0f1f3] p-5">
      <div className="absolute left-0 top-0 z-10 h-[55dvh] w-full">
        <div className="absolute z-10 h-36 w-full bg-gradient-to-t from-transparent to-[#f0f1f3]" />
        <div className="absolute bottom-0 z-10 h-36 w-full bg-gradient-to-t from-[#f0f1f3] to-transparent" />
        <svg className="h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              height="20"
              id="a"
              patternTransform="scale(2) rotate(0)"
              patternUnits="userSpaceOnUse"
              width="20"
            >
              <rect fill="#2b2b3100" height="100%" width="100%" x="0" y="0" />
              <path
                d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z"
                fill="none"
                stroke="#bab6b6ff"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect fill="url(#a)" height="800%" transform="translate(0,0)" width="800%" />
        </svg>
      </div>

      <div className="relative z-20 flex items-center justify-between py-5">
        <span className="text-3xl font-semibold">Pesse</span>
        <div className="flex items-center gap-5">
          <button
            className="grid place-items-center rounded-full border bg-white p-3 shadow-xl shadow-black/5 transition-all hover:bg-gray-100 active:bg-white/70"
            type="button"
          >
            <CircleHelp className="size-5" />
          </button>
          <button
            className="relative flex items-center justify-center gap-1 rounded-full bg-black/90 px-3 py-3 text-white shadow-xl shadow-black/10 transition-all hover:bg-black active:bg-black/70"
            type="button"
          >
            <span className="absolute -right-0 -top-3 text-lg">✨</span>
            <Gift className="size-5" /> Rewards
          </button>
        </div>
      </div>

      <header className="relative z-20 my-5 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="leading-normal"> {userInfo.name}&lsquo;s card balance</span>
          <button
            className="flex items-center gap-2 rounded p-1 transition-all hover:bg-gray-200 active:bg-gray-200/50"
            type="button"
          >
            <div className="h-5 w-8 rounded bg-lime-500" />
            <ChevronDown className="size-5" />
          </button>
        </div>
        <span className="my-4 inline-block text-5xl font-semibold">{format(userInfo.amount)}</span>

        <div className="mx-auto w-fit rounded-full bg-gray-400/20 px-4 py-2 text-black/50">
          Money hold <span className="text-black">{format(userInfo.amount_on_hold)}</span>{" "}
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            className="flex flex-1 items-center justify-center gap-1 rounded-full border bg-white p-4 text-center text-lg shadow-xl shadow-black/5 transition-all hover:bg-gray-100 active:bg-white/70"
            type="button"
          >
            {" "}
            <ArrowUpRight className="size-6" /> Send{" "}
          </button>
          <button
            className="flex flex-1 items-center justify-center gap-1 rounded-full border bg-white p-4 text-center text-lg shadow-xl shadow-black/5 transition-all hover:bg-gray-100 active:bg-white/70"
            type="button"
          >
            {" "}
            <ArrowDownLeft className="size-6" /> Receive
          </button>
        </div>
      </header>

      <main className="mt-5 space-y-5">
        {/* banner */}
        <section>
          <div className="grid grid-cols-[1fr,auto] gap-5 rounded-2xl bg-black p-5 text-white/70">
            <div className="space-y-1">
              <h2 className="text-lg leading-tight text-white">Start sending money tax free</h2>
              <p className="text-pretty text-sm leading-relaxed">
                The best place for freelancers to receive and send money. Start saving now!
              </p>
            </div>
            <div className="relative h-full w-20">
              <img
                alt="coin"
                className="absolute right-0 h-full scale-125 object-contain"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qexcr8pq3nbvb2gbrywg.png"
              />
            </div>
          </div>
        </section>

        {/* send again */}
        <section>
          <div className="space-y-4 rounded-2xl bg-white py-5 shadow-lg shadow-black/5">
            <header className="flex items-center justify-between px-5">
              <h6 className="text-lg font-semibold leading-tight">Send again</h6>
              <button
                className="relative flex items-center justify-center gap-1 rounded-full bg-gray-200 p-1 px-2 transition-all hover:bg-gray-300 active:bg-gray-300/50"
                type="button"
              >
                <Plus className="size-4" />
                Add
              </button>
            </header>
            <div className="hidden-scroll flex h-fit snap-x snap-mandatory gap-5 overflow-x-auto">
              {userInfo.usersToSendAgain.map(({id, name, platform, userImage}) => (
                <div key={id} className="flex-none snap-start space-y-1 text-center first:pl-5">
                  <figure className="relative">
                    <img alt={name} className="size-[69px] rounded-full" src={userImage} />
                    <div
                      className={cn(
                        "absolute -bottom-0 -right-2 rounded-full border-2 border-white bg-white p-1",
                        icon[platform].backgroundColor,
                      )}
                    >
                      <img
                        alt={platform}
                        className="size-5 object-contain"
                        src={icon[platform].src}
                      />
                    </div>
                  </figure>

                  <span className="mb-0 inline-block max-w-[69px] truncate p-0 text-sm leading-none">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* history transaction */}
        <section>
          <div className="space-y-5 rounded-2xl bg-white shadow-lg shadow-black/5">
            <header className="flex items-center justify-between p-5 pb-0">
              <h6 className="text-lg font-semibold">History transaction</h6>
              <button
                className="text-black/70 transition-all hover:text-black active:text-black/80"
                type="button"
              >
                see more
              </button>
            </header>
            <div className="hidden-scroll max-h-[38dvh] snap-y snap-mandatory space-y-6 overflow-y-auto p-5 pt-0 md:space-y-3">
              {userInfo.historyTransaction.map((data) => (
                <div key={data.id} className="flex snap-start flex-wrap items-center gap-x-5">
                  <figure className="relative flex-none">
                    <img
                      alt={data.name}
                      className="size-[69px] rounded-full"
                      src={data.userImage}
                    />
                    <div
                      className={cn(
                        "absolute -bottom-0 -right-2 rounded-full border-2 border-white bg-white p-1",
                        icon[data.platform].backgroundColor,
                      )}
                    >
                      <img
                        alt={data.platform}
                        className="size-5 object-contain"
                        src={icon[data.platform].src}
                      />
                    </div>
                  </figure>

                  <div className="flex flex-1 flex-col gap-1">
                    <span className="max-w-[200px] truncate font-medium">{data.name}</span>
                    <p className="flex flex-wrap items-center gap-1 text-sm md:gap-0">
                      <span>{formatDate(data.dateOperation)}</span>
                      <Dot className="size-3" />
                      <span>{formatTime(data.dateOperation)}</span>
                    </p>
                  </div>

                  <span
                    className={cn(
                      "flex-1 text-end text-lg font-semibold",
                      data.value < 0 ? "text-red-700" : "text-lime-500",
                    )}
                  >
                    {format(data.value)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* bottom navbar */}
      <div className="fixed bottom-5 left-1/2 w-[300px] -translate-x-1/2">
        <nav className="flex w-full items-center justify-between gap-4 rounded-full bg-black p-5 px-6 text-white shadow-xl shadow-black/30">
          {bottomNavbar.map(({icon, to}, i) => (
            <Link
              key={`${to + i}`}
              className={cn(
                "h-auto",
                i === 0
                  ? "pointer-events-none"
                  : "opacity-50 transition-all hover:opacity-100 active:opacity-80",
              )}
              href={to}
            >
              <button className="h-fit align-top" type="button">
                {icon}
              </button>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
