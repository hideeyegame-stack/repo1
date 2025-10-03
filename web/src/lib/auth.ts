import type { NextAuthOptions, Session, User as SessionUser } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { AdapterUser } from "next-auth/adapters";
import { prisma } from "@/server/db";
import { ADMIN_EMAILS } from "@/lib/env";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "database" },
  callbacks: {
    async session({ session, user }: { session: Session; user: AdapterUser }) {
      if (session.user) {
        const sUser = session.user as SessionUser & {
          id?: string;
          role?: string;
          points?: number;
        };
        sUser.id = (user as unknown as { id: string }).id;
        sUser.role = (user as unknown as { role?: string }).role;
        sUser.points = (user as unknown as { points?: number }).points;
      }
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      const { id, email } = user as unknown as { id: string; email?: string | null };
      if (email && ADMIN_EMAILS.includes(email)) {
        try {
          await prisma.user.update({ where: { id }, data: { role: "ADMIN" } });
        } catch {
          // ignore
        }
      }
    },
  },
};
