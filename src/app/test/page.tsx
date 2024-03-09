import { UsersApi } from "@/lib/api"

const jars = new UsersApi("http://localhost:5000", {
  contentType: "application/json",
  secretKey: process.env.JWT_AUTH_TOKEN as string
})

export default async function TestPage() {
  const { user, error } = await jars.getUser("0x1234");
  console.log(error);
  return (
    <main>
      
    </main>
  )
}