import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface NFTCardCategoriesProps {
  categoryLink: string;
  categoryName: string;
  image: string;
}

export default function NFTCardCategories({
  categoryLink,
  categoryName,
  image,
}: NFTCardCategoriesProps) {
  return (
    <Card className="mx-auto h-[300px] w-80">
      <CardHeader className="relative h-52 overflow-hidden">
        <Link href={categoryLink}>
          <Image
            className="rounded-[--radius]"
            src={image}
            fill
            alt="NFT"
            style={{ objectFit: "cover" }}
          />
        </Link>
      </CardHeader>

      <CardFooter className="flex h-[5.5rem] items-start p-0 pl-6">
        <p className="my-auto">{categoryName}</p>
      </CardFooter>
    </Card>
  );
}
