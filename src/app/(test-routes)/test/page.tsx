import { jars } from "@/lib/core/api";
import { User } from "@/lib/core/types";
import { revalidateTag } from "next/cache";
// import { updateUser } from "@/app/actions/updateUser";

// export const jars = new JarsAPI("http://localhost:5000", {
//   secretKey: process.env.JWT_AUTH_TOKEN as string,
// });

export default async function TestPage() {
  const getU: User = await jars.getUser("0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd");
  console.log(getU);
  return <main></main>;
}
