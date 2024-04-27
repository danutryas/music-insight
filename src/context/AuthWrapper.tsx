"use client";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

const AuthWrapper: React.FC<PropsWithChildren> = (props) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default AuthWrapper;
