import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChakraProvider from "@/Chakra-UI/Chakra-Provider";
import HeaderNavigation from "./components/Header-Navigation";
import { AuthProvider } from "@/context/AuthProvider";
import ToastProvider from "@/utils/toast-container";
import { ColorModeScript } from "@chakra-ui/react";

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
          <AuthProvider>
            <HeaderNavigation />
            {children}
            <ToastProvider />
            <ColorModeScript />
          </AuthProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
