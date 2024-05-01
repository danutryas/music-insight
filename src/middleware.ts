import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest, res: NextApiResponse) {
  let cookie =
    req.cookies.has("next-auth.session-token") ||
    req.cookies.has("__Secure-next-auth.session-token");

  // if (!cookie) {
  //   return NextResponse.redirect(new URL("/auth/login", req.url));
  // } else {
  //   if (req.nextUrl.pathname.match("/auth/login")) {
  //     return NextResponse.redirect(new URL("/", req.url));
  //   }
  //   return NextResponse.next();
  // }
}
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
