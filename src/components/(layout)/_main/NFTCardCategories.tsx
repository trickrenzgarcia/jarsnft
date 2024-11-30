import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface NFTCardCategoriesProps {
  categoryLink: string;
  categoryName: string;
  image: string;
}

export default function NFTCardCategories({ categoryLink, categoryName, image }: NFTCardCategoriesProps) {
  return (
    <Card className="w-full rounded-lg border-2 hover:border-violet-500">
      <CardContent className="relative overflow-hidden rounded-lg p-4">
        <Link href={categoryLink}>
          <Image
            unoptimized
            className="max-h-[30rem] min-h-[30rem] w-full rounded-[--radius] bg-cover"
            src={image}
            width={350}
            height={350}
            alt="NFT"
          />
        </Link>
      </CardContent>

      <CardFooter className="flex justify-center">
        <p className="text-sm font-semibold lg:text-xl">{categoryName}</p>
      </CardFooter>
    </Card>
  );
}
