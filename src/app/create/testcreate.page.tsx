"use client";
import { Button } from "@/components/ui/button";
import { useContract, useMetadata, useSDK } from "@thirdweb-dev/react";
import ClientCreateNFTCollection from "./_components/ClientCreateNFTCollection";

const handleDeployNFT = async () => {
  const sdk = useSDK();
  const { contract } = useContract(
    "0x6278a071A1F39E62428CD407190C73eCff9A978f",
  );
  const { data, isLoading, isError } = useMetadata(contract);
  console.log(data);
  const signer = sdk?.getSigner();
  const imageUrl = "http://localhost:3000/assets/cs601.jpg";
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  const imageFile = new File([blob], "cs601.jpg", { type: "image/jpeg" });
  console.log(signer);
  const deployedAddress = await sdk?.deployer.deployNFTCollection({
    name: "CS601",
    image: imageFile,
    primary_sale_recipient: "0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd",
    symbol: "CS601", // Symbol for the NFTs
    platform_fee_recipient: "0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd", // The address that will receive the proceeds from platform fees
    external_link: "https://www.google.com",
    app_uri: "",
    fee_recipient: "0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd", // The address that will receive the proceeds from secondary sales (royalties)
    description: "This is a test NFT Collection for CS601.", // Optional description of the contract
    platform_fee_basis_points: 250, // The percentage (in basis points) of platform fees
    seller_fee_basis_points: 250, //  depends on the contract deployer! The percentage (in basis points) of royalties for secondary sales
    trusted_forwarders: ["0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd"], //Custom gasless trusted forwarder addresses
  });

  console.log(deployedAddress);
};

export default function CreateNFTCollectionPage() {
  return (
    <div>
      <ClientCreateNFTCollection />
    </div>
  );
}
