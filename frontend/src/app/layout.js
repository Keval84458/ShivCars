import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChakraProvider from "@/Chakra-UI/Chakra-Provider";
import HeaderNavigation from "./components/Header-Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shiv Cars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraProvider>
          <HeaderNavigation />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
