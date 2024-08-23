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
    // <Card className="mx-auto h-[300px] w-80">
    //   <CardHeader className="relative h-52 overflow-hidden">
    //     <Link href={categoryLink}>
    //       <Image className="rounded-[--radius]" src={image} fill alt="NFT Category" style={{ objectFit: "cover" }} />
    //     </Link>
    //   </CardHeader>

    //   <CardFooter className="flex h-[5.5rem] items-start p-0 pl-6">
    //     <p className="my-auto">{categoryName}</p>
    //   </CardFooter>
    // </Card>
    <Link href={categoryLink}>
      <Card className="cursor-pointer rounded-lg border-2 bg-background p-2 hover:-translate-y-1 hover:border-3 hover:border-zinc-200 dark:hover:border-zinc-800">
        <CardHeader className="flex aspect-square items-center justify-center p-0">
          <Image
            src={image}
            alt={"Image for " + categoryName}
            loading="eager"
            width={300}
            height={300}
            style={{
              height: "300px",
              width: "300px",
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="h-full w-full rounded-md"
          />
        </CardHeader>
        <CardContent className="mt-1 pl-1">
          <CardDescription className="flex items-center gap-1 text-xs">
            <span className="truncate">{categoryName}</span>
          </CardDescription>
          <CardTitle className="flex items-center text-sm">
            <span className="truncate">{categoryName}</span>
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
}
