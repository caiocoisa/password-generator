"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { FilterContextProvider } from "./context/filter-context";

const inter = Inter({ subsets: ["latin"] });

//export const metadata: Metadata = {
//  title: "Passwrod Generator App",
//  description: "A smart generator app",
//};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}
