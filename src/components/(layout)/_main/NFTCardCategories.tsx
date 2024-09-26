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
    <Card className="p-2 border-2 bg-background rounded1lg hover:-translate-y-1 cursor-pointer hover:border-3 hover:border-zinc-200 dark:hover:border-zinc-800">
      <CardHeader className='flex items-center justify-center aspect-square p-0'>
        <Image
          src={image}
          alt={categoryName}
          width={300}
          height={300}
          loading='eager'
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          className="h-full w-full rounded-md"
        />
      </CardHeader>

      <CardFooter className={cn('hidden', 'w-full mt-2 sm:flex justify-between rounded-lg p-3 bg-muted dark:bg-muted/30')}>
        <p className="my-auto">{categoryName}</p>
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
