import NextAuth from "next-auth";

type AuthSession = {
  email: string | null;
  is_listed: boolean;
  name: string | null;
};

declare module "next-auth" {
  interface Session {
    success: boolean;
    user: {
      address?: string;
      data: {
        address: string;
        session: AuthSession;
      };
      session: AuthSession;
      [key: string]: string;
    };
  }
}
