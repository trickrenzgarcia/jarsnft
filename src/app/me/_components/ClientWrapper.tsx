"use client"

import NoConnectedWallet from "./NoConnectedWallet"
import { useUser } from "@thirdweb-dev/react"
import LoadingBackground from "./LoadingBackground"
import ProfileProvider from "../_provider/ProfileProvider"

export default function ClientWrapper({ children }: { children: React.ReactNode}) {
    const { user, isLoading, isLoggedIn } = useUser()

    if(isLoading) {
        return <LoadingBackground />
    }

    if(!isLoggedIn) {
        return <NoConnectedWallet />
    }

    if(isLoggedIn) {
        return (
            <ProfileProvider value={user}>
                {children}
            </ProfileProvider>
        )
    }
    
}