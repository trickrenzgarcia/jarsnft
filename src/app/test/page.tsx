import { JarsAPI } from "@/lib/core/api";
import { revalidateTag } from "next/cache";
import { updateUser } from "../actions";

export const jars = new JarsAPI("http://localhost:5000", {
    secretKey: process.env.JWT_AUTH_TOKEN as string
})

export default async function TestPage() {
  const getU = await jars.getUser("0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd");
  console.log(getU)
  return (
    <main>
      
    </main>
  )
}