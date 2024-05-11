"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return <div className="container mx-auto w-full"></div>;
}
