import type { Metadata } from "next";
import "./globals.scss";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Providers } from "./GlobalRedux/provider";
import NavBottom from "@/components/NavBottom";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <NavBottom />
        </Providers>
      </body>
    </html>
  );
}
