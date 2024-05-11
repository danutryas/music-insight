"use client";

import Image from "next/image";
import SpotifyLoginButton from "../button/SpotifyLogin";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { WhiteLogo } from "../icons/Logo";
import { signOut, useSession } from "next-auth/react";
import BlurryCard from "../cards/BlurryCard";

interface Header {
  isAuth: boolean;
}

const Header: React.FC<Header> = ({ isAuth }) => {
  return (
    <div className="pt-5">
      <BlurryCard>
        <div className="flex justify-between items-center text-textColor">
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
  const pages = [
    {
      name: "TRACK",
      path: "/track",
    },
    {
      name: "ARTIST",
      path: "/artist",
    },
  ];
  return (
    <ul className="flex gap-4 basis-2/5">
      {pages.map((page, index) => (
        <li
          className={`border-b-2 py-1 min-w-14 flex justify-center ${
            pathname.startsWith(page.path)
              ? "border-border"
              : "border-transparent"
          }`}
          key={index}
        >
          <Link href={page.path}>{page.name}</Link>
        </li>
      ))}
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
  const { data: session } = useSession();
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
