import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import FooterBar from "@/components/FooterBar";
import NavBar from "@/components/NavBar";

const font = Sora({ subsets: ["latin"], weight: ["300", "400", "500", "800"] });

export const metadata: Metadata = {
  title: "Lading Page - Ia Animation",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className} bg-blue-700 text-white`}>
        <div className="min-h-screen flex flex-col">
          <NavBar/>
          <main className="flex-grow">{children}</main>
          <FooterBar/>
        </div>
      </body>
    </html>
  );
}
