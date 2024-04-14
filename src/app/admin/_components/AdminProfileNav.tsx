"use client"
import { useUserContext } from "@/components/(providers)"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"
import { useLogout } from "@thirdweb-dev/react"
import { useRouter } from "next/navigation"

export default function AdminProfileNav() {
    const { logout, isLoading: logoutLoading } = useLogout();
    const { user, isLoading: userLoading } = useUserContext();
    const router = useRouter();

    if(userLoading) {
        return <Skeleton className="h-8 w-8 rounded-full" />
    }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" alt={user.session.name} />
                  <AvatarFallback>{user.session.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-background" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.session.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.session.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={(e) => {
            router.push("/")
          }}>
            Back to Marketplace
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={async (e) => {
            logout()
            router.push("/")
        }} disabled={logoutLoading}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
