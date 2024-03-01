"use client"
import { Button } from "@/components/ui/button";
import { useSDK } from "@thirdweb-dev/react";

export default function CreateNFTCollectionPage() {
    const sdk = useSDK();
    const handleDeployNFT = async () => {
        const deployedAddress = await sdk?.deployer.deployNFTCollection({
            name: "CS601",
            image: "http://localhost:3000/assets/cortel.jpg",
            primary_sale_recipient: "0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd",
            symbol: "CS601",
            platform_fee_recipient: "0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd",
            fee_recipient: "0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd",
            description: "This is a test NFT Collection for CS601.",
        });

        console.log(deployedAddress)
    }

  return (
    <div>
        <Button onClick={handleDeployNFT}>Deploy</Button>
    </div>
  )
}
