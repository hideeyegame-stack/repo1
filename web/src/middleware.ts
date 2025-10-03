import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/api/auth/signin" },
});

export const config = {
  matcher: [
    "/profile/:path*",
    "/games/:path*",
    "/store/:path*",
    "/notifications",
    "/admin/:path*",
  ],
};
