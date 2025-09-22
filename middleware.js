import { NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protect CMS routes except login page
  if (
    pathname.startsWith("/cms") &&
    pathname.includes("/cms/login") === false
  ) {
    // In middleware, read cookies from the request, not server-side helpers
    const token = request.cookies.get("cms_session")?.value;
    const session = await verifySessionToken(token);
    if (!session) {
      const url = request.nextUrl.clone();
      url.pathname = "/cms/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
