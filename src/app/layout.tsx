import type { Metadata } from "next";
import { Montserrat  } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ScrolltoTop } from "@/components/ScrolltoTop";


const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fisica",
  description: "Proyecto de Fisica UNS",
};

export default function RootLayout({children,}: Readonly<{  children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body className={monserrat.className}>
        {children}
        <ScrolltoTop/>
      </body>
    </html>
  );
}
