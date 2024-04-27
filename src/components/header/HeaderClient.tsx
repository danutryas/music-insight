"use client";
import Image from "next/image";
import SpotifyLoginButton from "../button/SpotifyLogin";
import getSession from "@/lib/Session";

const HeaderClient = ({ isAuth }: { isAuth: boolean }) => {
  const session = getSession();

  return (
    <>
      {isAuth ? (
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
      ) : (
        <SpotifyLoginButton />
      )}
    </>
  );
};

export default HeaderClient;
