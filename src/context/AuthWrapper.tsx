"use client";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

const AuthWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthWrapper;
