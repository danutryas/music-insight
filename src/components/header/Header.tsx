"use client";

import Image from "next/image";
import SpotifyLoginButton from "../button/SpotifyLogin";
import getSession from "@/lib/Session";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { WhiteLogo } from "../icons/Logo";
import { signOut } from "next-auth/react";
import BlurryCard from "../cards/BlurryCard";

interface Header {
  isAuth: boolean;
}

const Header: React.FC<Header> = ({ isAuth }) => {
  return (
    <div className="pt-5">
      <BlurryCard>
        <div className="flex justify-between items-center p-3 text-textColor">
          <Navbar />
          <NavHome />
          <User isAuth={isAuth} />
        </div>
      </BlurryCard>
    </div>
  );
};

export default Header;

const Navbar = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4 basis-2/5">
      <li
        className={`border-b-2 py-1 min-w-14 flex justify-center ${
          pathname.startsWith("/track") ? "border-border" : "border-transparent"
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
  );
};
const NavHome = () => {
  return (
    <div className="basis-1/5 flex justify-center">
      <Link href="/">
        <WhiteLogo />
      </Link>
    </div>
  );
};
const User = ({ isAuth }: { isAuth: boolean }) => {
  const session = getSession();
  return (
    <div className="flex justify-end basis-2/5 w-10 h-10 items-center gap-4  ">
      {isAuth ? (
        <>
          <h2 onClick={() => signOut()}>{session?.user.name}</h2>
          <Image
            alt="user-profile"
            className="border-border border"
            src={session?.user.picture}
            width={40}
            height={40}
            style={{
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </>
      ) : (
        <SpotifyLoginButton />
      )}
    </div>
  );
};
