"use client"

import NoConnectedWallet from "./NoConnectedWallet"
import { useUser } from "@thirdweb-dev/react"
import LoadingBackground from "./LoadingBackground"

export default function ClientWrapper({ children }: { children: React.ReactNode}) {
    const { user, isLoading, isLoggedIn } = useUser()
    console.log(user)

    if(isLoading) {
        return <LoadingBackground />
    }

    if(!isLoggedIn) {
        return <NoConnectedWallet />
    }

    if(isLoggedIn) {
        return (
            <div>
                {children}
            </div>
        )
    }
    
}