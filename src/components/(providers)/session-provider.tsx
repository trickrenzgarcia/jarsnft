import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';
import { Session } from "next-auth"

import React from 'react'

type ProviderProps = {
  children: React.ReactNode,
  session: Session
}

export default function SessionProvider({ children, session }: ProviderProps) {
  return <NextAuthSessionProvider session={session}>{children}</NextAuthSessionProvider>
}
