import { Button } from "@/components/ui/button";
import { jars } from "@/lib/core/api";

export default async function Page() {
  const data = await jars.getAllUsers();
  console.log(data);
  return <></>;
}
