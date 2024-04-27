import { cookies } from "next/headers";

export const isAuth = () => {
  const cookieStore = cookies();

  return (
    cookieStore.has("next-auth.session-token") ||
    cookieStore.has("__Secure-next-auth.session-token")
  );
};
