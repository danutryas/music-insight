"use client";
import { signIn, useSession } from "next-auth/react";
import { PropsWithChildren, useEffect } from "react";

const RefreshTokenProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      signIn("spotify"); // Force sign in to hopefully resolve error
    }
  }, [session]);
  return <>{children}</>;
};

export default RefreshTokenProvider;
