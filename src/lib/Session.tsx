"use client";

import { useSession } from "next-auth/react";

const getSession = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return session;
};
export default getSession;
