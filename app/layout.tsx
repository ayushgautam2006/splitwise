import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SplitWise — Split Expenses, Not Friendships",
  description:
    "Track shared expenses, split bills effortlessly, and settle debts instantly with SplitWise. Perfect for trips, roommates, and groups.",
  keywords: ["expense splitting", "bill sharing", "group expenses", "settle debts", "splitwise"],
  openGraph: {
    title: "SplitWise — Split Expenses, Not Friendships",
    description: "The smartest way to split bills and settle up with friends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} style={{ scrollBehavior: "smooth" }}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
