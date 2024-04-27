import { AUTH_URL } from "@/config/endpoints";
import { createQueryString } from "@/lib/QueryString";
import { signIn } from "next-auth/react";
import Link from "next/link";

const SpotifyLoginButton = () => {
  return (
    <button
      onClick={() =>
        signIn("spotify", {
          callbackUrl: "http://localhost:3000/",
          redirect: true,
        })
      }
    >
      Login With Spotify
    </button>
  );
};

export default SpotifyLoginButton;
