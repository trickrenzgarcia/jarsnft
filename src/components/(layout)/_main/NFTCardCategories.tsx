import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
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
    <Card className="rounded-[24px] w-full">
      <CardContent className="relative overflow-hidden p-4 rounded-lg">
      <Link href={categoryLink}>
        <Image
            className="bg-cover w-full max-h-[340px] rounded-[--radius]"
            src={image}
            width={350}
            height={350}
            alt="NFT"
          />
      </Link>
      </CardContent>

      <CardFooter className="flex justify-center">
        <p className="font-semibold">{categoryName}</p>
      </CardFooter>

      {/* //   <CardHeader className="relative h-52 overflow-hidden">
    //     <Link href={categoryLink}>
    //       <Image
    //         className="rounded-[--radius]"
    //         src={image}
    //         fill
    //         alt="NFT"
    //         style={{ objectFit: "cover" }}
    //       />
    //     </Link>
    //   </CardHeader>

    //   <CardFooter className="flex h-[5.5rem] items-start p-0 pl-6">
    //     <p className="my-auto">{categoryName}</p>
    //   </CardFooter> */}
    </Card>
  );
}
