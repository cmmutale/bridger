import type { Metadata } from "next";
import { fredokaOne, nunito, fredoka } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Little Horizons Daycare",
  description: "Daycare website template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${fredokaOne.variable} ${fredoka.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
