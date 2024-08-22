import { jars } from "@/lib/core/api";
import ProfileWrapper from "./_components/ProfileWrapper";

export default async function AccountPage() {

  return (
    <div className="flex w-full flex-col">
      <ProfileWrapper />
    </div>
  );
}
