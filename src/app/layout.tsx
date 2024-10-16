import type {Metadata} from "next";

import {Poppins} from "next/font/google";
import "./globals.css";

const font = Poppins({weight: ["400", "500", "600"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "carla",
  description: "Generated by appncy",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`antialiased ${font.className}`}>
        <div className="bg-muted relative mx-auto min-h-dvh max-w-[485px] p-5 pt-0">{children}</div>
      </body>
    </html>
  );
}
