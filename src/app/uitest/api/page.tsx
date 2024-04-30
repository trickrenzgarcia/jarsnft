"use client"

import { Button } from "@/components/ui/button"
import { jars } from "@/lib/core/api"

export default function Page() {
  return (
    <>
      <Button onClick={async(e) => {
        console.log("Test User")
        const response = await jars.updateUser("0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd", {
          name: "Patrick",
          email: "trickrenzgarcia@gmail.com"
        });
        console.log(response);
      }}>Test User</Button>
    </>
  )
}