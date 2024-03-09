import { UsersApi } from "@/lib/api"

const jars = new UsersApi("http://localhost:5000", {
  contentType: "application/json",
  secretKey: process.env.JWT_AUTH_TOKEN as string
})
export default async function TestPage() {
  const { user } = await jars.getUser("0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd");
  console.log(user?.email)
  return (
    <main>
      
    </main>
  )
}