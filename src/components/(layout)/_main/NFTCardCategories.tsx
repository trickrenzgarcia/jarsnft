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
    <Card className="mx-auto w-full rounded-lg border-2 hover:border-violet-500 min-[492px]:w-80 sm:w-[25rem]">
      <CardContent className="relative overflow-hidden rounded-lg p-4">
        <Link href={categoryLink}>
          <Image
            unoptimized
            className="h-auto w-full rounded-[--radius] bg-cover object-cover md:max-h-[25rem] md:min-h-[25rem]"
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
