import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { profile } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.summary,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
