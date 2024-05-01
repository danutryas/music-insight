import type { OAuthConfig, OAuthUserConfig } from ".";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      name: string;
      email: string;
      picture: string;
      sub: string;
    } & DefaultSession["user"];
    error?: "RefreshAccessTokenError";
    access_token: string;
    refresh_token: string;
    expires: string;
    expires_at: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token: string;
    expires_at: number;
    refresh_token: string;
    error?: "RefreshAccessTokenError";
  }
}
export interface SpotifyImage {
  url: string;
}

export interface SpotifyProfile extends Record<string, any> {
  id: string;
  display_name: string;
  email: string;
  images: SpotifyImage[];
}
export default function Spotify<P extends SpotifyProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: "spotify",
    name: "Spotify",
    type: "oauth",
    authorization:
      "https://accounts.spotify.com/authorize?scope=user-read-email",
    token: "https://accounts.spotify.com/api/token",
    userinfo: "https://api.spotify.com/v1/me",
    profile(profile) {
      return {
        id: profile.id,
        name: profile.display_name,
        email: profile.email,
        image: profile.images?.[0]?.url,
      };
    },
    style: { logo: "/spotify.svg", text: "#fff", bg: "#000" },
    options,
  };
}
