import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthWrapper from "@/context/AuthWrapper";
import Header from "@/components/header/Header";
import { Container } from "@/components/layouts/Container";
import { isAuth } from "@/lib/isAuth";
import RefreshTokenProvider from "@/context/RefreshTokenProvider";
import Playback from "@/components/playback/Playback";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthWrapper>
        <RefreshTokenProvider>
          <body className={inter.className}>
            <Container>
              <Header isAuth={isAuth()} />
              {children}
              <Playback />
            </Container>
          </body>
        </RefreshTokenProvider>
      </AuthWrapper>
    </html>
  );
}
