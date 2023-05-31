import "./globals.css";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Newsletter | Ebraj",
  description:
    "Basic Newsletter built using Next13, Typescript & Mailchimp by Ebraj.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
