"use client";

import Image from "next/image";
import SpotifyLoginButton from "../button/SpotifyLogin";
import getSession from "@/lib/Session";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { WhiteLogo } from "../icons/Logo";
import { signOut } from "next-auth/react";

interface Header {
  isAuth: boolean;
}

const Header: React.FC<Header> = ({ isAuth }) => {
  const session = getSession();
  const pathname = usePathname();

  const logouts = () => {
    signOut();
  };

  return (
    <div className="w-full h-full rounded-full border-2 border-white mt-5">
      <div className="flex justify-between p-2 items-center px-2 text-white">
        <ul className="pl-5 flex gap-4 basis-2/5">
          <li
            className={`border-b-2 py-1 min-w-14 flex justify-center ${
              pathname.startsWith("/track")
                ? "border-white"
                : "border-transparent"
            }`}
          >
            <Link href="/track">TRACK</Link>
          </li>
          <li
            className={`border-b-2  py-1 min-w-14 flex justify-center ${
              pathname.startsWith("/profile")
                ? "border-white"
                : "border-transparent"
            }`}
          >
            <Link href="/profile">PROFILE</Link>
          </li>
        </ul>
        <div className="basis-1/5 flex justify-center">
          <Link href="/">
            <WhiteLogo />
          </Link>
        </div>
        <div className="flex justify-end basis-2/5 w-10 h-10 items-center gap-2">
          {isAuth ? (
            <>
              <h2 onClick={logouts}>{session?.user.name}</h2>
              <Image
                alt="user-profile"
                src={session?.user.picture}
                width={40}
                height={40}
                style={{
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </>
          ) : (
            <SpotifyLoginButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
