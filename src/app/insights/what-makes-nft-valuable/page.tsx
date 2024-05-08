import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NFTValuablePage() {
  return (
    <>
      <h1 className="text-2xl font-bold">Benefits of NFT(s)</h1>
      <div className="w-full">
        <Image
          src="/assets/InsightsAsset/nftBenefits.jpg"
          alt="NFTValuable"
          width={1165}
          height={460}
          style={{ minWidth: 1165 }}
          quality={80}
        />
      </div>
      <div className="mt-5 flex gap-5">
        <div className="flex-initial">
          <Card className="h-[340px] w-[376px] p-5">
            <CardTitle>Authenticity</CardTitle>
            <CardContent>
              <p>
                One of the primary benefits of NFTs is their ability to
                establish authenticity. Because each NFT is unique and
                verifiable on the blockchain, it&apos;s easy to determine
                whether a particular digital asset is authentic or not. This is
                particularly important in the world of art, where forgeries and
                counterfeit works can be a major problem. NFTs allow artists to
                establish ownership of their digital creations and ensure that
                they are not duplicated or passed off as someone else&apos;s
                work.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex-initial">
          <Card className="h-[340px] w-[376px] p-5">
            <CardTitle>Traceability</CardTitle>
            <CardContent>
              <p>
                In addition to establishing authenticity, NFTs also provide a
                way to trace the ownership history of a particular digital
                asset. This can be especially valuable for high-value items like
                art or collectibles, where the provenance of an item can
                significantly impact its value. With NFTs, every transfer of
                ownership is recorded on the blockchain, making it easy to track
                the ownership history of a particular item.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex-initial">
          <Card className="h-[340px] w-[376px] p-5">
            <CardTitle>Accessibility</CardTitle>
            <CardContent>
              <p>
                Another benefit of NFTs is their accessibility. Because they are
                digital, NFTs can be easily traded and accessed from anywhere in
                the world. This means that artists and collectors no longer have
                to be in the same physical location to participate in the art
                market. In addition, NFTs can be sold in fractional shares,
                making it possible for more people to invest in high-value
                assets.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
