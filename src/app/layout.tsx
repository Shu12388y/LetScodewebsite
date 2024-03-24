import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ExampleNavbarOne } from "@/components/component/Navbar";
import { FooterFour } from "@/components/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Let's Code",
  description: "Let's code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo2.png" />
      <body className={inter.className}>
        <ExampleNavbarOne />

        {children}
        <FooterFour />
      </body>
    </html>
  );
}
