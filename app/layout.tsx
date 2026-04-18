import type { Metadata } from "next";
import "./globals.css";
import portfolio from "@/src/data/portfolio.json";

export const metadata: Metadata = {
  title: `${portfolio.basics.name} | Software Engineer`,
  description: portfolio.summary,
  icons: {
    icon: portfolio.basics.image,
    shortcut: portfolio.basics.image,
    apple: portfolio.basics.image,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
